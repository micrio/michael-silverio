export interface IFeature {
  label: string;
  text: string;
}

export interface ITechStackItem {
  name: string;
  category: string;
}

export interface IProject {
  slug: string;
  title: string;
  category: 'web' | 'non-web';
  repoUrl: string;
  shortDescription: string;
  images: string[];
  badges: string[];
  repoPrivate?: boolean;
  overview?: string;
  features?: IFeature[];
  techStack?: ITechStackItem[];
}

const localImages = (folder: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, index) =>
      `${process.env.PUBLIC_URL}/projects/${folder}/${String(index + 1).padStart(2, '0')}.webp`
  );

export const projects: IProject[] = [
  {
    slug: 'market-sentinel',
    title: 'Market Sentinel',
    category: 'web',
    repoUrl: 'https://github.com/micrio/market-sentinel',
    shortDescription:
      'A stock watchlist with live quotes, news-driven sentiment analysis, and multi-horizon projections. Add US tickers, watch the tape, and run a sentiment report backed by recent financial headlines.',
    images: localImages('market_sentinel', 6),
    badges: ['Rails', 'React', 'Inertia.js', 'TypeScript', 'Tailwindcss', 'RubyLLM'],
    overview:
      'Market Sentinel is a stock watchlist that pairs live quotes with news-driven sentiment analysis. It uses no paid data APIs: quotes are cached server-side and sentiment is scored from public RSS headlines, with multi-horizon projections and rationale. Runs are persisted per user and symbol, and execute in the background so you can keep navigating. Educational tool only \u2014 not financial advice.',
    features: [
      {
        label: 'Watchlist',
        text: 'add US tickers with autocomplete from a bundled 11k+ symbol directory (no API calls), grid or list layout, and sorting by A\u2013Z, Bullish, Gainers or Losers.',
      },
      {
        label: 'Live Quotes',
        text: 'price and % change with a 30-minute server-side cache and a relative \u201cupdated 3m ago\u201d indicator.',
      },
      {
        label: 'Sentiment Badge',
        text: 'at-a-glance bullish/bearish/neutral score (e.g. Bullish 72%) plus week/month/year horizon chips.',
      },
      {
        label: 'Ticker Detail',
        text: 'latest report and a history of previous runs, click a row to view any past report; Yahoo Finance links out for charts, financials, holders and more.',
      },
      {
        label: 'Sentiment Analysis',
        text: 'crawls recent headlines, scores sentiment (DeepSeek via RubyLLM, or a keyword fallback) and projects This Week / Next Month / Next Year with probabilities, biases and rationale.',
      },
    ],
    techStack: [
      { name: 'Rails 7.2', category: 'Framework' },
      { name: 'Inertia.js', category: 'Adapter' },
      { name: 'React 19', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS v4', category: 'Styling' },
      { name: 'SQLite', category: 'Database' },
      { name: 'Solid Queue', category: 'Background jobs' },
      { name: 'Devise', category: 'Authentication' },
      { name: 'RubyLLM (DeepSeek)', category: 'Sentiment analysis' },
      { name: 'Nokogiri', category: 'RSS parsing' },
      { name: 'Recharts', category: 'Charts' },
      { name: 'Lucide', category: 'Icons' },
    ],
  },
  {
    slug: 'speedfolio',
    title: 'Speedfolio',
    category: 'web',
    repoUrl: 'https://github.com/micrio/speedfolio',
    repoPrivate: true,
    shortDescription:
      'A portfolio-chat app built with Rails 7.2 + Inertia + React. Visitors land on a personal portfolio by email or slug and chat with an AI assistant about the owner, while signed-in owners manage everything from a settings dashboard.',
    images: localImages('speedfolio', 17),
    badges: ['Rails', 'React', 'Inertia.js', 'TypeScript', 'Tailwindcss', 'DeepSeek'],
    overview:
      'Speedfolio is a Rails 7.2 + Inertia.js + React rewrite of a portfolio-chat app. A visitor lands with an email or slug and is routed to that person\u2019s portfolio, then chats with an AI assistant about the owner (Me, Projects, Skills, Hobbies). Signed-in owners manage everything from a full-page settings dashboard, with portfolios, chats and messages persisted in SQLite.',
    features: [
      {
        label: 'Slug Routing',
        text: 'slug derived from the email local-part (john.doe+test@x.com \u2192 john.doe-test); unknown slugs fall back to a seeded sample portfolio with an is_sample banner.',
      },
      {
        label: 'AI Portfolio Chat',
        text: 'ruby_llm + DeepSeek; conversations persist as Chat / Message records scoped to each visitor\u2019s session.',
      },
      {
        label: 'Owner Dashboard',
        text: 'full-page settings dashboard with debounced PATCH persistence and transactional replacement of child collections.',
      },
      {
        label: 'Visitor Counting',
        text: 'per-portfolio visitor totals and per-day visitor_logs JSONB, incremented on real views (sample excluded).',
      },
      {
        label: 'Theming',
        text: 'palette + mode + custom colors resolved into a single ThemeColors object; layout uses Tailwind, themed surfaces use inline styles.',
      },
    ],
    techStack: [
      { name: 'Rails 7.2', category: 'Framework' },
      { name: 'Inertia.js', category: 'Adapter' },
      { name: 'React 19', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS 4', category: 'Styling' },
      { name: 'SQLite 3', category: 'Database' },
      { name: 'Devise', category: 'Authentication' },
      { name: 'Pundit', category: 'Authorization' },
      { name: 'ruby_llm + DeepSeek', category: 'AI chat' },
      { name: 'vite_rails + Vite 7', category: 'Assets' },
      { name: 'RSpec / FactoryBot', category: 'Testing' },
    ],
  },
  {
    slug: 'file-manager',
    title: 'File Manager',
    category: 'web',
    repoUrl: 'https://github.com/micrio/file_manager_fe#preview',
    shortDescription:
      'A Google Drive clone - a file manager with a React frontend and Rails backend, backed by Minio object storage with real-time ActionCable updates.',
    images: localImages('file_manager', 9),
    badges: ['React', 'Rails', 'ActionCable', 'Zustand', 'Tailwindcss'],
    overview:
      'A Google Drive clone with a React frontend and Rails backend. Allows users to manage their files and folders seamlessly. The app uses Minio for object storage, ensuring that the structure in the File Manager UI mirrors the structure in Minio, providing a reliable and intuitive user experience. Additionally, the app features real-time updates with ActionCable, allowing users to see changes immediately as they happen.',
    features: [
      {
        label: 'Authentication',
        text: 'sign up & sign in with JWT session handling (auto refresh on expiry).',
      },
      {
        label: 'Folder Management',
        text: 'create, create nested, rename, move (drag-and-drop or menu), trash, permanently delete, listing.',
      },
      {
        label: 'File Management',
        text: 'upload (dialog & drag-and-drop, multiple files), rename, move, preview, trash, permanently delete.',
      },
      {
        label: 'Drag & Drop',
        text: 'drop files anywhere on Storage to upload, and drag rows onto a folder to move them.',
      },
      {
        label: 'Upload Progress',
        text: 'Google-Drive-style progress bar toast while uploading.',
      },
      {
        label: 'Thumbnails',
        text: 'image and video thumbnails (small/medium) shown in list and grid views.',
      },
      {
        label: 'Media Support',
        text: 'images, common video formats (mp4, mov, webm, ...) and PDF, with an in-app preview modal.',
      },
      {
        label: 'Layouts',
        text: 'list and grid views (persisted).',
      },
      {
        label: 'Sorting & Filtering',
        text: 'sort by name, size or created date (asc/desc) and filter all / folders / files.',
      },
      {
        label: 'File & Folder Size',
        text: 'columns that show per-file size and recursive folder totals.',
      },
      {
        label: 'Storage Usage',
        text: 'total storage used, shown in the sidebar and updated in real time.',
      },
      {
        label: 'Real-time Updates',
        text: 'ActionCable keeps the UI in sync (create / rename / move / remove / share).',
      },
      {
        label: 'Sharing',
        text: 'share a file or folder with a specific existing user (autocomplete by email) or with anyone via a secure link; a Shared with me page (list/grid) with browse & download.',
      },
      {
        label: 'Trash',
        text: 'soft-deleted items with permanent delete.',
      },
      {
        label: 'Dark / Light theme',
        text: 'switch between light and dark themes.',
      },
    ],
    techStack: [
      { name: 'React 18', category: 'Framework' },
      { name: 'Zustand', category: 'State management library' },
      { name: 'Shadcn', category: 'Component library' },
      { name: 'ActionCable', category: 'Real-time updates' },
      { name: 'Zod', category: 'Schema validation' },
    ],
  },
  {
    slug: 'hr-zen',
    title: 'HR Zen',
    category: 'web',
    repoUrl: 'https://github.com/micrio/hr_zen',
    shortDescription:
      'Multi-tenant HR platform covering leave, payroll, performance reviews, records, and people/org management.',
    images: localImages('hr_zen', 29),
    badges: ['Rails', 'React', 'Inertia.js', 'PostgreSQL', 'Tailwindcss'],
    overview:
      'HR Zen is a multi-tenant human resources platform. Resources are tenant-scoped and protected by Pundit policies, covering leave management, payroll, performance reviews, records/documents, and people/org management.',
    features: [
      {
        label: 'Authorization',
        text: 'Pundit policies per resource, executed on top of tenant scoping.',
      },
      {
        label: 'Leave Management',
        text: 'leave types, balances (entitlement vs. used, bulk populate), and applications with status lifecycle.',
      },
      {
        label: 'Holidays',
        text: 'calendar with recurring support.',
      },
      {
        label: 'Compensation',
        text: 'records (daily/monthly rates), payroll settings, pay frequency.',
      },
      {
        label: 'Payroll Entry Generation',
        text: 'with adjustments, gross/net computation.',
      },
      {
        label: 'Performance Reviews',
        text: 'reviewer, period, rating, status, strengths/areas.',
      },
      {
        label: 'Records & Documents',
        text: 'SetupWorkspaceJob seeds default roles/record types after sign-up.',
      },
      {
        label: 'People & Org',
        text: 'user directory with custom fields, addresses, and soft delete (paranoia).',
      },
      {
        label: 'Organizations & Teams',
        text: 'organizations (index/update), teams with leads/members, projects.',
      },
      {
        label: 'Tasks',
        text: 'with status, priority, assignee, and due dates.',
      },
      {
        label: 'Audit Trail',
        text: 'full audit trail via paper_trail (GET /activities).',
      },
      {
        label: 'Attendance',
        text: 'face-recognition clock in/out — embeddings stored per user, matched server-side (FaceMatcher) with cooldown enforcement.',
      },
      {
        label: 'Public Kiosk',
        text: 'mode addressed by an organization clock token.',
      },
      {
        label: 'Attendance Settings',
        text: 'enable/disable, cooldown, event history/listing.',
      },
    ],
    techStack: [
      { name: 'Rails 8', category: 'Framework' },
      { name: 'React', category: 'Frontend' },
      { name: 'Inertia.js', category: 'Adapter' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Devise', category: 'Authentication' },
      { name: 'Solid Queue', category: 'Background jobs' },
      { name: 'acts_as_tenant', category: 'Multi-tenancy' },
      { name: 'Pundit', category: 'Authorization' },
      { name: 'paranoia', category: 'Soft deletes' },
      { name: 'Tailwind CSS', category: 'Styling' },
    ],
  },
  {
    slug: 'e-learning',
    title: 'E - learning',
    category: 'web',
    repoUrl: 'https://github.com/micrio/e-learning#app-images',
    shortDescription:
      'An e-learning platform with category-based word quizzes, user profiles, and social following, built with React and Laravel.',
    images: localImages('e_learning', 20),
    badges: ['React', 'Laravel', 'Redux', 'Tailwindcss', 'MUI'],
    overview:
      'Developed an e-learning platform where admins create word-based quizzes within categories. Users select categories, answer word-choice quizzes, and view results upon completion. Built features for login/signup, user profiles with photo updates, following other users to track activity, and viewing completed categories. Designed with Material UI and Tailwind CSS for a clean, modern interface.',
  },
];
