import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface IReveal {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Slides its children in the first time they scroll into view.
 * No opacity fade: fading translucent glass lets the animated background
 * bleed through and looks trippy.
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
      { threshold: 0.2, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'opacity-100 transition-all duration-700 ease-out',
        visible ? 'translate-y-0' : 'translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
