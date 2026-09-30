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
      className="glass fixed right-6 top-20 z-40 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors dark:text-slate-200"
    >
      More Dots!
    </button>
  );
};

export default MoreDots;
