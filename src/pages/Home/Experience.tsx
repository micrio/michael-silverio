import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import clsx from 'clsx';
import Badge from '../../components/Badge/Badge';
import { experienceRoles, type IRole } from '../../data/experience';

const sectionLabel =
  'text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400';

const BulletList = ({ items }: { items: string[] }) => (
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

interface IAccordionRowProps {
  title: ReactNode;
  children: ReactNode;
}

const AccordionRow = ({ title, children }: IAccordionRowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-slate-900/5 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={clsx(
            'flex-none text-slate-400 transition-transform dark:text-slate-500',
            open && 'rotate-180'
          )}
        />
      </button>

      {open && <div className="pb-4">{children}</div>}
    </div>
  );
};

const AppTitle = ({ app }: { app: IRole['apps'][number] }) => (
  <>
    {app.name}
    {app.stack && (
      <span className="font-normal text-slate-500 dark:text-slate-400">
        {' '}
        · {app.stack}
      </span>
    )}
  </>
);

const DetailedCard = ({ role }: { role: IRole }) => (
  <article className="glass rounded-2xl p-6 md:p-8">
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {role.title}
        <span className="text-slate-500 dark:text-slate-400">
          {' '}
          &middot; {role.company}
          {role.location ? `, ${role.location}` : ''}
        </span>
      </h3>
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {role.period}
      </span>
    </div>

    {role.overview && (
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {role.overview}
      </p>
    )}

    <div className={role.overview ? 'mt-6' : 'mt-5'}>
      <h4 className={sectionLabel}>Apps</h4>
      <div className="mt-1">
        {role.apps.map((app) => (
          <AccordionRow key={app.name} title={<AppTitle app={app} />}>
            {app.features.length > 0 && (
              <div className="mt-1">
                <h5 className={sectionLabel}>Features Shipped</h5>
                <BulletList items={app.features} />
              </div>
            )}
            {app.contributions && app.contributions.length > 0 && (
              <div className="mt-3">
                <h5 className={sectionLabel}>Contributions</h5>
                <BulletList items={app.contributions} />
              </div>
            )}
          </AccordionRow>
        ))}

        {role.contributions && role.contributions.length > 0 && (
          <AccordionRow title="Other Contributions">
            <div className="mt-1">
              <BulletList items={role.contributions} />
            </div>
          </AccordionRow>
        )}
      </div>
    </div>

    {role.tech.length > 0 && (
      <div className="mt-6 flex flex-wrap gap-2">
        {role.tech.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    )}
  </article>
);

const FeaturesCard = ({ role }: { role: IRole }) => (
  <article className="glass rounded-2xl p-6 md:p-8">
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {role.company}
      </h3>
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {role.period}
      </span>
    </div>

    <div className="mt-5">
      {role.apps.map((app) => (
        <AccordionRow key={app.name} title={<AppTitle app={app} />}>
          {app.features.length > 0 && <BulletList items={app.features} />}
        </AccordionRow>
      ))}
    </div>
  </article>
);

const education = {
  school: 'Cebu Institute of Technology',
  degree: "Bachelor's degree, Information Technology",
  period: '2015 - 2019',
};

interface IExperienceProps {
  tab: 'detailed' | 'features';
  onTabChange: (tab: 'detailed' | 'features') => void;
}

const Experience = ({ tab, onTabChange }: IExperienceProps) => {
  const [showAllRoles, setShowAllRoles] = useState(false);
  const visibleRoles = showAllRoles
    ? experienceRoles
    : experienceRoles.slice(0, 3);
  const canExpandRoles = experienceRoles.length > 3;

  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <h2 className="section-heading">Experience</h2>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onTabChange('detailed')}
          className={clsx(
            'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
            tab === 'detailed'
              ? 'glass-subtle text-slate-900 dark:text-white'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
        >
          Detailed
        </button>
        <button
          type="button"
          onClick={() => onTabChange('features')}
          className={clsx(
            'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
            tab === 'features'
              ? 'glass-subtle text-slate-900 dark:text-white'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
        >
          Features Shipped
        </button>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {visibleRoles.map((role) =>
          tab === 'detailed' ? (
            <DetailedCard key={role.company} role={role} />
          ) : (
            <FeaturesCard key={role.company} role={role} />
          )
        )}
      </div>

      {canExpandRoles && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllRoles((prev) => !prev)}
            className="text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
          >
            {showAllRoles ? 'View less projects' : 'View more projects'}
          </button>
        </div>
      )}

      <div className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Education
        </h3>
        <article className="glass mt-3 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
              {education.degree}
              <span className="text-slate-500 dark:text-slate-400">
                {' '}
                &middot; {education.school}
              </span>
            </h4>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {education.period}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
