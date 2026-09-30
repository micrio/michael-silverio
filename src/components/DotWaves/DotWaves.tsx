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
    let pointerX: number | null = null;
    let pointerY: number | null = null;

    const onPointerMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const onPointerLeave = () => {
      pointerX = null;
      pointerY = null;
    };

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
          let px =
            x + Math.sin(y * 0.008 + time) * 14 + Math.cos(x * 0.005 - time * 0.6) * 6;
          let py =
            y + Math.cos(x * 0.008 + time * 0.9) * 14 + Math.sin(y * 0.005 + time * 0.7) * 6;

          if (pointerX !== null && pointerY !== null) {
            const dx = px - pointerX;
            const dy = py - pointerY;
            const dist = Math.hypot(dx, dy) || 1;
            const radius = 180;
            const force = Math.max(0, 1 - dist / radius);
            px += (dx / dist) * force * 34;
            py += (dy / dist) * force * 34;
          }

          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseleave', onPointerLeave);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
};

export default DotWaves;
