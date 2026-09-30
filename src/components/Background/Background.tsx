import DotWaves from '../DotWaves/DotWaves';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-cyan-50 transition-colors duration-300 dark:from-slate-900 dark:via-slate-950 dark:to-black" />
      <DotWaves />
    </div>
  );
};

export default Background;
