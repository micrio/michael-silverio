import { Code2, Gauge, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Code Quality',
    text: 'Reading great code quality adds developer happiness and makes code checks easier.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    text: 'Security should be a top priority — it builds client confidence.',
  },
  {
    icon: Gauge,
    title: 'Reliability',
    text: 'Solutions should be reliable, not failing at the most important moments or under high traffic.',
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="scroll-mt-24 py-16">
      <h2 className="section-heading">Principles</h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        Three things I optimize for when I build.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass rounded-2xl p-6">
            <Icon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
