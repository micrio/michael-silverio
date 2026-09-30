import { useRef, useState } from 'react';

interface ICoin {
  id: number;
  x: number;
  y: number;
}

/**
 * Small easter-egg control: clicking it increases the dot-wave density until
 * the page reloads, at which point it resets to the default spacing. Every
 * click also pops a "+1" coin above the button.
 */
const MoreDots = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const nextId = useRef(0);
  const [coins, setCoins] = useState<ICoin[]>([]);

  const onClick = () => {
    window.dispatchEvent(new Event('more-dots'));

    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const id = (nextId.current += 1);
    const x = rect.left + rect.width / 2 + (Math.random() * 16 - 8);
    const y = rect.top;

    setCoins((current) => [...current, { id, x, y }]);
    window.setTimeout(() => {
      setCoins((current) => current.filter((coin) => coin.id !== id));
    }, 900);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        className="fixed right-6 top-4 z-40 rounded-full border border-slate-900/15 px-3 py-2 text-sm font-medium text-slate-600 backdrop-blur transition-colors hover:bg-white/60 hover:text-slate-900 dark:border-white/15 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
      >
        More Dots!
      </button>

      {coins.map((coin) => (
        <span
          key={coin.id}
          aria-hidden
          className="coin-pop fixed z-50 text-sm font-bold text-amber-500"
          style={{ left: coin.x, top: coin.y }}
        >
          +1
        </span>
      ))}
    </>
  );
};

export default MoreDots;
