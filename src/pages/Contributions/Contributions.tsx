import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import {
  appSlug,
  productionApps,
  roleContributions,
  totalContributions,
} from '../../data/production';

interface IContributionGroup {
  id: string;
  title: string;
  meta: string;
  items: string[];
}

const Contributions = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash.replace('#', ''));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  const appGroups: IContributionGroup[] = productionApps
    .filter((app) => app.contributions.length > 0)
    .map((app) => ({
      id: appSlug(app.name),
      title: app.name,
      meta: `${app.company} · ${app.period}`,
      items: app.contributions,
    }));

  const roleGroups: IContributionGroup[] = roleContributions.map((role) => ({
    id: role.slug,
    title: role.company,
    meta: role.period,
    items: role.items,
  }));

  const groups = [...roleGroups, ...appGroups];

  return (
    <section className="py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <h1 className="section-heading mt-6">Contributions</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        {totalContributions} maintenance, refactor, infrastructure, and process
        contributions across production work.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            id={group.id}
            className="glass scroll-mt-24 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h2>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {group.items.length} contribution
                {group.items.length === 1 ? '' : 's'}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {group.meta}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributions;
