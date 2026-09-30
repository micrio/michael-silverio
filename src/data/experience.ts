export interface IApp {
  name: string;
  stack?: string;
  description: string;
  features: string[];
  contributions?: string[];
}

export interface IRole {
  company: string;
  location?: string;
  title: string;
  period: string;
  /** Role-level work not tied to a single app (infra, process, etc.). */
  contributions?: string[];
  apps: IApp[];
  tech: string[];
}

export const experienceRoles: IRole[] = [
  {
    company: 'Freelance - Upwork',
    title: 'Software Engineer',
    period: 'Dec 2024 - Present',
    apps: [
      {
        name: 'Registration System',
        stack: 'Rails, MySQL, CoffeeScript, HAML, React',
        description:
          'Volunteer registration platform handling accreditation and background checks.',
        features: [
          'Integrated Accredit Solutions (volunteer accreditation) and Verified First (background checks) via custom wrapper APIs.',
          'Built a React chairperson portal for schedules, email campaigns, and availability reports with scheduling-overlap detection.',
          'Box number assignment system with reporting for volunteers.',
          'Combined packages that group multiple activities into one discounted package.',
          'Multiple terms & conditions options so each Registrant Type can use its own terms.',
          'Background ZIP export to download all S3 images for volunteers registered to a site.',
          'L3 discounts for Stripe payments to follow new protocols.',
          'Replaced the text editor with the open-source HugeRTE editor, enabling direct image paste.',
          'Created a simple knowledge base portal.',
        ],
        contributions: [
          'Upgraded the application from Rails 4.2 to 5, resolved gem dependency conflicts, fixed Turbo:load UI rendering, and added Honeybadger for production error tracking.',
          'Patched a critical security flaw in a company-forked Stripe gem that allowed test payments to reach production keys.',
          'Updated a custom company-forked gem for full Rails compatibility.',
        ],
      },
      {
        name: 'Procurement App',
        stack: 'Rails',
        description:
          'AI procurement agent that collects requirements conversationally and generates ERPNext quotations.',
        features: [
          'Built a document pipeline that crawls and extracts PDF quotations, splits them into chunks, and generates OpenAI embeddings (RAG).',
          'Shipped an AI procurement agent that collects requirements conversationally and asks for confirmation.',
          'Auto-generates an ERPNext quotation record once procurement is finalized.',
          'Automated record creation that creates Brand, Supplier, and Item Group records before creating Items.',
          'Developed document search matching user queries against processed chunks.',
        ],
      },
      {
        name: 'Chat with Data / Data Warehouse System',
        stack: 'Rails, Postgres, React, GraphQL',
        description:
          'Chat agent over Shopify and Linear data with ETL, OAuth2, and visual answers.',
        features: [
          'Implemented OAuth2 for Shopify and Linear with persisted integration IDs.',
          'Built an ETL process that loads Shopify and Linear data into a local warehouse (SQLite3) for fast querying.',
          'Used RubyLLM to build a chat agent with search tools and chart/table visualization (chat-to-chart).',
          'Automated insight gallery that generates charts after third-party OAuth integrations.',
          'Developed a React canvas chat UI with visual node-to-node cards.',
          'Integrated frontend OAuth and a chat interface connected to backend APIs.',
        ],
      },
      {
        name: 'E-commerce System Connector',
        stack: 'Rails, Postgres',
        description: 'Shopify to ERPNext sync pipeline via webhooks and background jobs.',
        features: [
          'Developed an ETL pipeline to import Shopify data into ERPNext.',
          'Cursor-based pagination so a failed import can still resume from the last cursor instead of restarting.',
          'Implemented webhook endpoints for Shopify events queuing background jobs for real-time sync.',
          'Created API wrappers for ERPNext Items, Brands, and Suppliers.',
        ],
        contributions: [
          'Analyzed ERPNext API payloads to update the data mapping layer.',
        ],
      },
      {
        name: 'Funeral Registration System',
        stack: 'Rails, Postgres, Hotwire',
        description:
          'Funeral document registration with signature drawing and camera capture.',
        features: [
          'Modernized the platform with a toggle between the legacy and redesigned (Figma v2) UI.',
          'Developed a signature drawing tool embedding signatures into PDF fields.',
          'Implemented a web-based camera feature to capture and upload documents, optimized for tablets.',
          'Unified search across Funding Request Records, Funeral Homes, and Insurance Companies.',
        ],
      },
    ],
    tech: [
      'Rails',
      'PostgreSQL',
      'MySQL',
      'React',
      'GraphQL',
      'RubyLLM',
      'OAuth2',
      'OpenAI',
      'Shopify',
      'ERPNext',
    ],
  },
  {
    company: 'Cognith',
    location: 'Singapore',
    title: 'Software Engineer',
    period: 'Jul 2023 - Dec 2024',
    apps: [
      {
        name: 'Cargo Shipment App',
        stack: 'Rails, Postgres',
        description: 'Shipment management with dashboard analytics and ERPNext sync.',
        features: [
          'Created a complex dashboard with multiple filters and five dynamic content sections.',
          'Bulk CSV template import so administrators can register multiple users at once.',
          'Admin console tracking activities, logins, and transactions.',
          'Designed shortened signup links for user invitations.',
          'Built two-way Shopify/Linear to ERPNext sync with webhook jobs.',
        ],
      },
      {
        name: 'Job Portal',
        stack: 'Rails, Postgres, React',
        description: 'Candidate and job management with Zoho CRM sync.',
        features: [
          'Built two-way sync with Zoho CRM using API integrations and Deluge scripting, reducing API calls and cost.',
          "Resume upload using Zoho's resume parser to auto-create candidate records.",
          'Built React UI for job/candidate lists with multi-parameter filtering.',
        ],
      },
      {
        name: 'Event Discovery Platform',
        stack: 'Rails, Postgres',
        description:
          'Event discovery with proximity search, push notifications, and real-time chat.',
        features: [
          'Built an event suggestion engine that uses preferred genres and location to recommend events.',
          'Integrated Firebase Cloud Messaging for push notifications on recommendations and messages.',
        ],
        contributions: [
          'Replaced Google Geocoding with OpenStreetMap to cut cost and implemented location caching.',
          'Optimized real-time chat by consolidating webhooks into a single WebSocket stream.',
          'Followed TDD to maintain 95%+ test coverage.',
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
        name: 'Video Conferencing App',
        stack: 'Rails, Postgres, React',
        description: 'Video calls with scheduling, virtual backgrounds, and screen sharing.',
        features: [
          'Implemented reception time scheduling for calls.',
          'Operator availability indicators so customers know when an operator is ready.',
          'Google Selfie Segmentation for virtual backgrounds during calls.',
          'Screen sharing and real-time document/PDF sharing.',
          'Call forwarding from one operator to another.',
        ],
        contributions: [
          'Developed backend endpoints for call scheduling and Action Cable real-time sharing.',
        ],
      },
    ],
    contributions: [
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
    apps: [
      {
        name: 'HR Platform',
        stack: 'Vanilla PHP, JavaScript, jQuery',
        description: 'Human resource management with payroll and subscriptions.',
        features: [
          'Face-based attendance capturing.',
          'Modernized the AI architecture in Phase 2 for a subscription model with feature flags per tier.',
          'Built a report generation system combining Attendance, Leave, Loan, and Salary calculations.',
        ],
        contributions: ['Refactored payroll calculations for dynamic inputs.'],
      },
    ],
    tech: ['Vanilla PHP', 'JavaScript', 'jQuery', 'System Admin'],
  },
];
