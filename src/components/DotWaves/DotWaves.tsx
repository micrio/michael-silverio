import { useEffect, useRef } from 'react';

/**
 * Flowing dot-wave field rendered on a canvas. Each dot has velocity and a
 * spring back to its wave position, so the pointer stirs them like grains of
 * sand or particles in liquid — smooth inertia, no snapping.
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
    let spacing = 15;
    const radius = 130;
    const repulse = 0.55;
    const spring = 0.006;
    const damping = 0.94;
    const maxSpeed = 1.5;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let offsetX = new Float32Array(0);
    let offsetY = new Float32Array(0);
    let velocityX = new Float32Array(0);
    let velocityY = new Float32Array(0);
    let raf = 0;
    let time = 0;
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let pointerTargetX: number | null = null;
    let pointerTargetY: number | null = null;

    const buildGrid = () => {
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
      const count = cols * rows;
      offsetX = new Float32Array(count);
      offsetY = new Float32Array(count);
      velocityX = new Float32Array(count);
      velocityY = new Float32Array(count);
    };

    const onPointerMove = (event: MouseEvent) => {
      pointerTargetX = event.clientX;
      pointerTargetY = event.clientY;
    };

    const onPointerLeave = () => {
      pointerTargetX = null;
      pointerTargetY = null;
    };

    const onMoreDots = () => {
      spacing = Math.max(8, spacing - 3);
      buildGrid();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    const draw = () => {
      time += 0.0025;
      ctx.clearRect(0, 0, width, height);

      // Ease the pointer toward its target so cursor motion feels like it
      // moves through water instead of jittering the dots.
      if (pointerTargetX !== null && pointerTargetY !== null) {
        if (pointerX === null || pointerY === null) {
          pointerX = pointerTargetX;
          pointerY = pointerTargetY;
        } else {
          pointerX += (pointerTargetX - pointerX) * 0.12;
          pointerY += (pointerTargetY - pointerY) * 0.12;
        }
      }

      const dark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = dark ? 'rgba(148, 163, 184, 0.26)' : 'rgba(51, 65, 85, 0.16)';

      for (let row = 0; row < rows; row += 1) {
        const y = row * spacing;

        for (let col = 0; col < cols; col += 1) {
          const x = col * spacing;
          const index = row * cols + col;

          const baseX =
            x + Math.sin(y * 0.008 + time) * 14 + Math.cos(x * 0.005 - time * 0.6) * 6;
          const baseY =
            y + Math.cos(x * 0.008 + time * 0.9) * 14 + Math.sin(y * 0.005 + time * 0.7) * 6;

          if (pointerX !== null && pointerY !== null) {
            const dx = baseX + offsetX[index] - pointerX;
            const dy = baseY + offsetY[index] - pointerY;
            const dist = Math.hypot(dx, dy) || 1;

            if (dist < radius) {
              const strength = (1 - dist / radius) * repulse;
              velocityX[index] += (dx / dist) * strength;
              velocityY[index] += (dy / dist) * strength;
            }
          }

          // Spring back toward the wave position, with heavy damping so the
          // field reads as viscous water rather than jiggling.
          velocityX[index] += -offsetX[index] * spring;
          velocityY[index] += -offsetY[index] * spring;
          velocityX[index] = Math.max(-maxSpeed, Math.min(maxSpeed, velocityX[index] * damping));
          velocityY[index] = Math.max(-maxSpeed, Math.min(maxSpeed, velocityY[index] * damping));
          offsetX[index] += velocityX[index];
          offsetY[index] += velocityY[index];

          const px = baseX + offsetX[index];
          const py = baseY + offsetY[index];

          ctx.beginPath();
          ctx.arc(px, py, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('more-dots', onMoreDots);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('more-dots', onMoreDots);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
};

export default DotWaves;
