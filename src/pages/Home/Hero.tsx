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
    <section className="flex min-h-[calc(100svh-4.25rem)] flex-col justify-center pb-10 pt-2 md:pt-4">
      <div className="w-full">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-7xl">
          Michael Silverio
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300 md:text-xl">
          AI Engineer &middot; Full-Stack Developer
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          I build AI-powered products through web development — with a
          product-first mentality. I ship what users actually need rather than
          features nobody asked for: validating early, iterating fast, and using
          agentic coding to get there quicker.
        </p>

        <div className="mt-8 flex flex-wrap justify-end gap-4">
          {stats.map(({ startYear, value, label, to, suffix }) => {
            const content = (
              <>
                <YearsCounter
                  startYear={startYear}
                  value={value}
                  suffix={suffix}
                  className="text-3xl font-semibold text-slate-900 dark:text-white"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {label}
                </span>
              </>
            );

            const classes =
              'glass group inline-flex items-center gap-3 rounded-2xl px-5 py-3';

            return to ? (
              <Link key={label} to={to} className={classes}>
                {content}
                <ArrowRight
                  size={16}
                  className="text-slate-500 transition-transform group-hover:translate-x-0.5 dark:text-slate-400"
                />
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
