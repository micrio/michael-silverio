import { useEffect, useRef } from 'react';

/**
 * Subtle flowing dot-wave field rendered on a canvas. Dots drift through
 * layered sine waves for a soft "vortex wave" motion behind the glass.
 */
const DotWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const spacing = 36;
    let width = 0;
    let height = 0;
    let raf = 0;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      const dark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = dark ? 'rgba(148, 163, 184, 0.26)' : 'rgba(51, 65, 85, 0.16)';

      for (let y = 0; y <= height + spacing; y += spacing) {
        for (let x = 0; x <= width + spacing; x += spacing) {
          const px =
            x + Math.sin(y * 0.008 + time) * 14 + Math.cos(x * 0.005 - time * 0.6) * 6;
          const py =
            y + Math.cos(x * 0.008 + time * 0.9) * 14 + Math.sin(y * 0.005 + time * 0.7) * 6;

          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
};

export default DotWaves;
