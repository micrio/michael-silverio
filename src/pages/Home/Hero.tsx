import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import YearsCounter from '../../components/YearsCounter/YearsCounter';
import {
  totalFeaturesAndContributions,
  totalProductionApps,
} from '../../data/production';

const WEB_DEV_START_YEAR = 2020;

const stats = [
  { startYear: WEB_DEV_START_YEAR, label: 'years building for the web', suffix: '+' },
  {
    value: totalProductionApps,
    label: 'production apps contributed to',
    to: '/production-apps',
    suffix: '',
  },
  {
    value: totalFeaturesAndContributions,
    label: 'features & contributions shipped',
    to: '/shipped-features',
    suffix: '',
  },
];

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100svh-4.25rem)] items-center pb-10 pt-2 md:pt-4">
      <div className="grid w-full gap-10 lg:grid-cols-[60%_40%] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start">
          <h1 className="text-left text-5xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Michael Silverio
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300 md:text-xl">
            AI Engineer &middot; Full-Stack Developer
          </p>
          <p className="mt-4 max-w-2xl text-left text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I build AI-powered products through web development — with a
            product-first mentality. I ship what users actually need rather than
            features nobody asked for: validating early, iterating fast, and using
            agentic coding to get there quicker.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {stats.map(({ startYear, value, label, to, suffix }) => {
            const content = (
              <>
                <YearsCounter
                  startYear={startYear}
                  value={value}
                  suffix={suffix}
                  className="text-3xl font-semibold text-slate-900 dark:text-white"
                />
                <span className="flex-1 text-sm text-slate-600 dark:text-slate-400">
                  {label}
                </span>
                {to && (
                  <ArrowRight
                    size={16}
                    className="text-slate-500 transition-transform group-hover:translate-x-0.5 dark:text-slate-400"
                  />
                )}
              </>
            );

            const classes =
              'glass group flex items-center gap-4 rounded-2xl px-5 py-4';

            return to ? (
              <Link key={label} to={to} className={classes}>
                {content}
              </Link>
            ) : (
              <div key={label} className={classes}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
