import { useEffect, useRef, useState } from 'react';

interface IYearsCounter {
  startYear?: number;
  value?: number;
  className?: string;
  suffix?: string;
}

const YearsCounter = ({ startYear, value, className, suffix = '+' }: IYearsCounter) => {
  const target =
    typeof value === 'number'
      ? value
      : Math.max(0, new Date().getFullYear() - (startYear ?? 0));
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || target === 0) {
      setCount(target);
      return;
    }

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * target));

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [target]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default YearsCounter;
