import { useState } from 'react';

import Badge from '../../components/Badge/Badge';

interface IApp {
  name: string;
  highlights: string[];
}

interface IRole {
  company: string;
  location?: string;
  title: string;
  period: string;
  highlights?: string[];
  tech: string[];
  apps?: IApp[];
}

interface IRoleHighlightsProps {
  apps?: IApp[];
  highlights?: string[];
}

const RoleHighlights = ({ apps = [], highlights = [] }: IRoleHighlightsProps) => {
  const [expanded, setExpanded] = useState(false);

  const sections = [
    ...apps.map((app) => ({ title: app.name, bullets: app.highlights })),
    ...(highlights.length > 0
      ? [{ title: apps.length > 0 ? 'Other' : undefined, bullets: highlights }]
      : []),
  ];

  let cursor = 0;
  const indexedSections = sections.map((section) => ({
    title: section.title,
    bullets: section.bullets.map((text) => ({ text, index: cursor++ })),
  }));

  const totalBullets = cursor;
  const visibleCount = expanded ? totalBullets : Math.min(4, totalBullets);
  const canExpand = totalBullets > 4;

  return (
    <div>
      {indexedSections.map((section) => {
        const visibleBullets = section.bullets.filter(
          (bullet) => bullet.index < visibleCount
        );

        if (visibleBullets.length === 0) {
          return null;
        }

        return (
          <div key={section.title ?? 'other'} className="mt-6">
            {section.title && (
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {section.title}
              </h4>
            )}
            <ul className="mt-3 flex flex-col gap-3">
              {visibleBullets.map((bullet) => (
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

const roles: IRole[] = [
  {
    company: 'Freelance - Upwork',
    title: 'Software Engineer',
    period: 'Dec 2024 - Present',
    apps: [
      {
        name: 'Registration System (Rails, MySQL, CoffeeScript, HAML, React)',
        highlights: [
          'Upgraded the application from Rails 4.2 to 5, updating outdated gems to resolve dependency conflicts, and integrated Honeybadger to track and fix production errors.',
          'Fixed UI rendering issues by updating page loading logic to use the latest Turbo:load event calls.',
          'Resolved a critical security issue in a forked Stripe gem that allowed local test payments to hit production keys; updated the gem to match upstream GitHub methods.',
          'Integrated Accredit Solutions for volunteer accreditation by building a custom wrapper API and implementing the end-to-end processing logic.',
          'Integrated Verified First as an alternative background check system for volunteers, developing the wrapper API and core process.',
          'Updated a custom, company-forked gem to ensure full compatibility with the upgraded Rails version.',
          'Replaced an outdated text editor with a modern, open-source UI editor supporting direct inline image uploads.',
          'Built a React dashboard for chairpersons to manage volunteer schedules, send email campaigns, and view activity reports.',
          'Added reporting features to track participation and volunteer counts for each activity using React.',
        ],
      },
      {
        name: 'Procurement App (Rails)',
        highlights: [
          'Built a document processing pipeline that extracts PDF quotations, splits them into text chunks, and generates OpenAI embeddings for search.',
          'Developed a document search feature that matches user text queries against the processed document chunks.',
          'Implemented an AI agent workflow that guides users through a multi-step conversational process (collecting required items, dates, names, and quantities) and asks for confirmation before proceeding.',
          'Created a backend function that automatically generates an ERPNext quotation record once procurement is finalized.',
          'Shipped an AI procurement agent that collects requirements conversationally and auto-generates ERPNext quotations.',
        ],
      },
      {
        name: 'Chat with Data / Data Warehouse System (Rails, Postgres, React, GraphQL)',
        highlights: [
          'Built an ETL process to extract data from Shopify and Linear, passed it through a data mapping layer, and loaded it into local SQLite3 files to enable fast, localized querying for the "Chat with Data" feature.',
          'Leveraged the RubyLLM gem to build an interactive chat agent that executes search tools based on user queries and visualizes raw data into clean tables or charts.',
          'Implemented an OAuth2 authentication flow to securely integrate Shopify and Linear, persisting integration IDs for user sessions.',
          'Integrated frontend OAuth and authentication endpoints into the React app, and built a chat interface that connects to backend APIs.',
          'Developed a React canvas for chatting with data, featuring a visual node-to-node connection card layout.',
        ],
      },
      {
        name: 'E-commerce System Connector (Rails, Postgres)',
        highlights: [
          'Developed an ETL (Extract, Transform, Load) pipeline to seamlessly import Shopify data directly into the ERPNext ERP system.',
          'Implemented webhook endpoints to capture Shopify events (product creation, updates, and order placements), queuing background jobs to sync ERPNext items in real time.',
          'Analyzed ERPNext API response payloads to map data structures accurately, updating the data mapping layer based on those fields.',
          'Created robust API wrappers for ERPNext core modules, including Items, Brands, and Suppliers, to facilitate smooth ETL imports.',
        ],
      },
      {
        name: 'Funeral Registration System (Rails, Postgres, Hotwire)',
        highlights: [
          'Developed a direct-to-web signature drawing tool that dynamically updates and embeds user signatures into specific input fields of PDF documents.',
          'Implemented a native web-based camera feature to capture and upload user documents directly within the app.',
          'Redesigned legacy web views to match modern Figma v2 specifications, implementing a toggle system to gradually migrate users from the legacy interface to the new version.',
        ],
      },
    ],
    tech: ['Rails', 'PostgreSQL', 'React', 'GraphQL', 'RubyLLM', 'OAuth2'],
  },
  {
    company: 'Cognith',
    location: 'Singapore',
    title: 'Software Engineer',
    period: 'Jul 2023 - Dec 2024',
    apps: [
      {
        name: 'Cargo Shipment App (Rails, Postgres)',
        highlights: [
          'Developed dashboard analytics endpoints and dynamic filters to power frontend bar charts for ad-hoc reporting.',
          'Implemented a bulk CSV upload feature to allow administrators to register multiple users simultaneously.',
          'Added an admin console feature to track user activities, login history, and transaction records.',
          'Designed a shortened signup link generation system for streamlined user onboarding.',
          'Built a two-way Shopify/Linear to ERPNext sync with webhook-driven background jobs.',
        ],
      },
      {
        name: 'Job Portal (Rails, Postgres, React)',
        highlights: [
          'Built a two-way data synchronization pipeline between the application and Zoho CRM using API integrations and Zoho Deluge scripting to reflect data updates in real time.',
          'Developed a pipeline to decompress uploaded zip files and automatically parse documents to create new applicant profiles via the Zoho API.',
          'Built the React UI for the job and candidate lists, including complex multi-parameter filtering.',
        ],
      },
      {
        name: 'Event Discovery Platform (Rails, Postgres)',
        highlights: [
          'Took the initiative to replace Google Geocoding with OpenStreetMap to eliminate an expensive API dependency; unblocked the MVP\'s proximity search feature and implemented location-based caching to respect OpenStreetMap\'s strict rate limits.',
          'Integrated Firebase Cloud Messaging (FCM) to handle global push notifications for mobile apps, covering events, schedule changes, and user engagements.',
          'Optimized real-time chat by replacing multiple webhook connections with a single WebSocket stream to reduce server load and streamline UI updates.',
          'Followed strict Test-Driven Development (TDD) guidelines to maintain over 95% test coverage across all newly developed features, minimizing production bugs.',
        ],
      },
    ],
    tech: ['Rails', 'PostgreSQL', 'React', 'Zoho', 'Firebase', 'ETL'],
  },
  {
    company: 'Sun Asterisk',
    location: 'Philippines',
    title: 'Junior Web Developer',
    period: 'Jan 2022 - Jun 2023',
    apps: [
      {
        name: 'Video Conferencing App (Rails, Postgres, React)',
        highlights: [
          'Implemented reception time scheduling for customer and operator calls within a video conferencing application user tips with React.',
          'Added Google Selfie Segmentation for virtual background features and implemented web-based screen sharing functionality for video calls with React.',
          'Developed backend endpoints for call scheduling, and implemented Action Cable for real-time document and screen sharing.',
        ],
      },
    ],
    highlights: [
      'Created an AWS scaling architecture for 10,000 concurrent users and presented the load-balancing and auto-scaling blueprint to the team.',
      'Deployed end-to-end CI/CD pipelines from scratch with automated testing and deployment workflows.',
      'Deprovisioned unused AWS resources; documented removed assets and retained backups for team leads.',
    ],
    tech: ['Rails', 'PostgreSQL', 'React', 'AWS', 'ActionCable', 'CI/CD'],
  },
  {
    company: 'HP Ventures Inc.',
    title: 'Application Developer',
    period: 'Feb 2020 - Dec 2021',
    highlights: [
      'Refactored payroll calculation processes for a Human Resource Management system, enabling dynamic input calculations for greater flexibility.',
      'Developed a modernized version of the core HR platform with a separate subscription feature, streamlining user management and improving scalability.',
    ],
    tech: ['Vanilla PHP', 'JavaScript', 'jQuery', 'System Admin'],
  },
];

const education = {
  school: 'Cebu Institute of Technology',
  degree: "Bachelor's degree, Information Technology",
  period: '2015 - 2019',
};

const Experience = () => {
  const [showAllRoles, setShowAllRoles] = useState(false);
  const visibleRoles = showAllRoles ? roles : roles.slice(0, 3);
  const canExpandRoles = roles.length > 3;

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

            <RoleHighlights apps={role.apps} highlights={role.highlights} />

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
