import DotWaves from '../DotWaves/DotWaves';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-cyan-50 transition-colors duration-300 dark:from-slate-900 dark:via-slate-950 dark:to-black" />
      <div className="glow-blob absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-400/40 blur-3xl dark:bg-blue-600/20" style={{ animationDuration: '8s' }} />
      <div className="glow-blob absolute -right-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-300/45 blur-3xl dark:bg-fuchsia-600/20" style={{ animationDuration: '11s', animationDelay: '-4s' }} />
      <div className="glow-blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-300/40 blur-3xl dark:bg-purple-700/20" style={{ animationDuration: '13s', animationDelay: '-7s' }} />
      <div className="glow-blob absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-400/40 blur-3xl dark:bg-blue-600/10" style={{ animationDuration: '10s', animationDelay: '-2s' }} />
      <DotWaves />
    </div>
  );
};

export default Background;
