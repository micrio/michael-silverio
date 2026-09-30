import { useEffect, useRef, useState } from 'react';

interface IYearsCounter {
  startYear: number;
  className?: string;
  suffix?: string;
}

const YearsCounter = ({ startYear, className, suffix = '+' }: IYearsCounter) => {
  const years = Math.max(0, new Date().getFullYear() - startYear);
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || years === 0) {
      setCount(years);
      return;
    }

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * years));

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
  }, [years]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default YearsCounter;
