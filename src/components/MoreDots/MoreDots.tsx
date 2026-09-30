/**
 * Small easter-egg control: clicking it increases the dot-wave density until
 * the page reloads, at which point it resets to the default spacing.
 */
const MoreDots = () => {
  const onClick = () => {
    window.dispatchEvent(new Event('more-dots'));
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      More Dots!
    </button>
  );
};

export default MoreDots;
