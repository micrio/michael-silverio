import { useState } from 'react';

import Badge from '../../components/Badge/Badge';
import { experienceRoles, type IApp } from '../../data/experience';

interface IRoleHighlightsProps {
  apps?: IApp[];
  contributions?: string[];
}

const GROUP_LABELS = {
  features: 'Features Shipped',
  contributions: 'Contributions',
} as const;

const RoleHighlights = ({
  apps = [],
  contributions = [],
}: IRoleHighlightsProps) => {
  const [expanded, setExpanded] = useState(false);

  const sections = [
    ...apps.map((app) => ({
      title: app.name,
      stack: app.stack,
      groups: [
        { label: GROUP_LABELS.features, bullets: app.features },
        { label: GROUP_LABELS.contributions, bullets: app.contributions ?? [] },
      ].filter((group) => group.bullets.length > 0),
    })),
    ...(contributions.length > 0
      ? [
          {
            title: undefined,
            stack: undefined,
            groups: [
              { label: GROUP_LABELS.contributions, bullets: contributions },
            ],
          },
        ]
      : []),
  ];

  let cursor = 0;
  const indexedSections = sections.map((section) => ({
    ...section,
    groups: section.groups.map((group) => ({
      label: group.label,
      bullets: group.bullets.map((text) => ({ text, index: cursor++ })),
    })),
  }));

  const totalBullets = cursor;
  const visibleCount = expanded ? totalBullets : Math.min(4, totalBullets);
  const canExpand = totalBullets > 4;

  return (
    <div>
      {indexedSections.map((section, sectionIndex) => {
        const visibleGroups = section.groups
          .map((group) => ({
            label: group.label,
            bullets: group.bullets.filter((bullet) => bullet.index < visibleCount),
          }))
          .filter((group) => group.bullets.length > 0);

        if (visibleGroups.length === 0) {
          return null;
        }

        return (
          <div
            key={section.title ?? `section-${sectionIndex}`}
            className="mt-6 first:mt-0"
          >
            {section.title && (
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {section.title}
                {section.stack && (
                  <span className="font-normal text-slate-500 dark:text-slate-400">
                    {' '}
                    &middot; {section.stack}
                  </span>
                )}
              </h4>
            )}
            {visibleGroups.map((group) => (
              <div key={group.label} className="mt-3">
                <h5 className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {group.label}
                </h5>
                <ul className="mt-2 flex flex-col gap-2">
                  {group.bullets.map((bullet) => (
                    <li
                      key={bullet.text}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-500"
                      />
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      })}

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-6 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
        >
          {expanded ? 'View less' : 'View more'}
        </button>
      )}
    </div>
  );
};

const education = {
  school: 'Cebu Institute of Technology',
  degree: "Bachelor's degree, Information Technology",
  period: '2015 - 2019',
};

const Experience = () => {
  const [showAllRoles, setShowAllRoles] = useState(false);
  const visibleRoles = showAllRoles
    ? experienceRoles
    : experienceRoles.slice(0, 3);
  const canExpandRoles = experienceRoles.length > 3;

  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <h2 className="section-heading">Experience</h2>
      <div className="mt-10 flex flex-col gap-6">
        {visibleRoles.map((role) => (
          <article key={role.company} className="glass rounded-2xl p-6 md:p-8">
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

            <RoleHighlights apps={role.apps} contributions={role.contributions} />

            {role.tech.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {role.tech.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            )}
          </article>
        ))}
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
