import { Bot, Cpu, Gamepad2, Mountain, Music } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface IHobby {
  label: string;
  description: string;
  icon: LucideIcon;
}

// Edit this list to match your real hobbies.
const hobbies: IHobby[] = [
  {
    label: 'Tech News',
    description: 'Keeping up to date with tech news.',
    icon: Cpu,
  },
  {
    label: 'Lo-fi Music',
    description: 'Lo-fi on while I code.',
    icon: Music,
  },
  {
    label: 'Hiking',
    description: 'Love the feeling of being on top and breathing in the fresh air.',
    icon: Mountain,
  },
  {
    label: 'Gaming',
    description: 'Competitive games and the thrill of a close match.',
    icon: Gamepad2,
  },
  {
    label: 'Local AI Models',
    description:
      'Exploring local models for agentic coding and tuning them for faster code generation — still searching for the right one.',
    icon: Bot,
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16">
      <h2 className="section-heading">Hobbies</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map(({ label, description, icon: Icon }) => (
          <div
            key={label}
            className="glass glass-hover flex items-start gap-4 rounded-2xl p-6"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/70 text-slate-700 dark:bg-white/10 dark:text-slate-200">
              <Icon size={20} />
            </span>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                {label}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
