import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface IReveal {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Fades + slides its children in the first time they scroll into view.
 * Honours prefers-reduced-motion (content is simply shown).
 */
const Reveal = ({ children, className, delay = 0 }: IReveal) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
