import clsx from 'clsx';
import React from 'react';

interface IBadge extends React.HTMLProps<HTMLSpanElement> {
  className?: string;
}

const Badge: React.FC<IBadge> = ({ children, className }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-x-1.5 rounded-full border border-slate-900/20 bg-white/70 px-3 py-1.5 text-xs font-normal text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
