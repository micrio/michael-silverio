import { Moon, Sun } from 'lucide-react';

import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="glass glass-hover fixed right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-colors duration-200 dark:text-slate-200"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
