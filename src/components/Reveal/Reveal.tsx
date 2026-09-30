import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface IReveal {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Fades + slides its children in the first time they scroll into view, with a
 * slow ease-out so the glass settles gently instead of snapping in.
 */
const Reveal = ({ children, className, delay = 0 }: IReveal) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    // Threshold 0 so tall sections (taller than the viewport, common on
    // mobile) still reveal — a ratio threshold can never be met by them.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'will-change-[opacity] transition-opacity duration-1000 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
