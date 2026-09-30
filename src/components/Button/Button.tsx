import React from 'react';
import clsx from 'clsx';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'link';
  title?: string;
  variant?: 'ghost';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  type = 'button',
  title,
  variant,
  className,
  onClick,
}) => {
  const ghostButtonStyle = () => {
    return 'glass glass-hover';
  };

  const buttonVariant = () => {
    let style = '';

    switch (variant) {
      case 'ghost':
        style = ghostButtonStyle();
        break;
      default:
        break;
    }

    return style;
  };

  return (
    <button
      className={clsx(
        'rounded-lg px-3 py-2 font-medium text-slate-700 transition-colors duration-200 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/10',
        buttonVariant,
        className,
        type === 'link' ? 'underline decoration-slate-400/50 underline-offset-4' : null
      )}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
