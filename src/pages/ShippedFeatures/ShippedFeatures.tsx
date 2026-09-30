import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import {
  appSlug,
  productionApps,
  roleContributions,
  totalContributions,
  totalFeaturesAndContributions,
  totalShippedFeatures,
} from '../../data/production';

interface ISection {
  label: string;
  items: string[];
}

interface IGroup {
  id: string;
  title: string;
  meta: string;
  sections: ISection[];
}

const ItemList = ({ items }: { items: string[] }) => (
  <ul className="mt-2 flex flex-col gap-2">
    {items.map((item) => (
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
);

const ShippedFeatures = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash.replace('#', ''));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  const appGroups: IGroup[] = productionApps
    .filter((app) => app.features.length > 0 || app.contributions.length > 0)
    .map((app) => ({
      id: appSlug(app.name),
      title: app.name,
      meta: `${app.company} · ${app.period}`,
      sections: [
        { label: 'Features Shipped', items: app.features },
        { label: 'Contributions', items: app.contributions },
      ].filter((section) => section.items.length > 0),
    }));

  const roleGroups: IGroup[] = roleContributions.map((role) => ({
    id: role.slug,
    title: role.company,
    meta: role.period,
    sections: [{ label: 'Contributions', items: role.items }],
  }));

  const groups = [...appGroups, ...roleGroups];

  return (
    <section className="py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <h1 className="section-heading mt-6">Features &amp; Contributions</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        {totalFeaturesAndContributions} items delivered to production —{' '}
        {totalShippedFeatures} features and {totalContributions} contributions,
        grouped by application.
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
                {group.meta}
              </span>
            </div>
            {group.sections.map((section) => (
              <div key={section.label} className="mt-5">
                <h3 className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {section.label}
                </h3>
                <ItemList items={section.items} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShippedFeatures;
