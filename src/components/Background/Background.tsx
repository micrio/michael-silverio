const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-cyan-50 transition-colors duration-300 dark:from-slate-900 dark:via-slate-950 dark:to-black" />
      <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-400/40 blur-3xl dark:bg-blue-600/20" />
      <div className="absolute -right-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-300/45 blur-3xl dark:bg-fuchsia-600/20" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-300/40 blur-3xl dark:bg-purple-700/20" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-400/40 blur-3xl dark:bg-blue-600/10" />
    </div>
  );
};

export default Background;
