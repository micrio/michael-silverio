import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { appSlug, productionApps, totalShippedFeatures } from '../../data/production';

const ShippedFeatures = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash.replace('#', ''));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <section className="py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <h1 className="section-heading mt-6">Features Shipped to Production</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        {totalShippedFeatures}+ features delivered to production, grouped by
        application.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {productionApps.map((app) => (
          <div
            key={app.name}
            id={appSlug(app.name)}
            className="glass scroll-mt-24 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {app.name}
              </h2>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {app.features.length} feature{app.features.length === 1 ? '' : 's'}
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {app.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-500"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShippedFeatures;
