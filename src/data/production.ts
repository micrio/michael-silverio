export interface IProductionApp {
  name: string;
  company: string;
  period: string;
  description: string;
  features: string[];
}

export const productionApps: IProductionApp[] = [
  {
    name: 'Registration System',
    company: 'Freelance - Upwork',
    period: 'Dec 2024 - Present',
    description:
      'Volunteer registration platform handling accreditation and background checks.',
    features: [
      'Upgraded the application from Rails 4.2 to 5 and integrated Honeybadger for production error tracking.',
      'Fixed UI rendering issues by updating page loading logic to use Turbo:load.',
      'Resolved a critical security issue in a forked Stripe gem that allowed test payments to hit production keys.',
      'Integrated Accredit Solutions for volunteer accreditation with a custom wrapper API.',
      'Integrated Verified First as an alternative background check system.',
      'Updated a custom company-forked gem for Rails compatibility.',
      'Replaced an outdated text editor with a modern editor supporting inline image uploads.',
      'Built a React dashboard for chairpersons to manage schedules, campaigns, and reports.',
      'Added reporting features to track participation and volunteer counts.',
    ],
  },
  {
    name: 'Procurement App',
    company: 'Freelance - Upwork',
    period: 'Dec 2024 - Present',
    description:
      'AI procurement agent that collects requirements conversationally and generates ERPNext quotations.',
    features: [
      'Built a document processing pipeline that extracts PDF quotations and generates OpenAI embeddings.',
      'Developed document search matching user queries against processed chunks.',
      'Implemented an AI agent workflow guiding users through a multi-step conversational process.',
      'Created a backend function that auto-generates ERPNext quotations.',
      'Shipped an AI procurement agent that collects requirements conversationally.',
    ],
  },
  {
    name: 'Chat with Data / Data Warehouse System',
    company: 'Freelance - Upwork',
    period: 'Dec 2024 - Present',
    description:
      'Chat agent over Shopify and Linear data with ETL, OAuth2, and visual answers.',
    features: [
      'Built an ETL process to extract Shopify and Linear data into local SQLite for fast querying.',
      'Leveraged RubyLLM to build an interactive chat agent with search tools and data visualization.',
      'Implemented OAuth2 for Shopify and Linear with persisted integration IDs.',
      'Integrated frontend OAuth and built a chat interface connected to backend APIs.',
      'Developed a React canvas with visual node-to-node connection cards.',
    ],
  },
  {
    name: 'E-commerce System Connector',
    company: 'Freelance - Upwork',
    period: 'Dec 2024 - Present',
    description: 'Shopify to ERPNext sync pipeline via webhooks and background jobs.',
    features: [
      'Developed an ETL pipeline to import Shopify data into ERPNext.',
      'Implemented webhook endpoints for Shopify events queuing background jobs for real-time sync.',
      'Analyzed ERPNext API payloads to update the data mapping layer.',
      'Created API wrappers for ERPNext Items, Brands, and Suppliers.',
    ],
  },
  {
    name: 'Funeral Registration System',
    company: 'Freelance - Upwork',
    period: 'Dec 2024 - Present',
    description:
      'Funeral document registration with signature drawing and camera capture.',
    features: [
      'Developed a signature drawing tool embedding signatures into PDF fields.',
      'Implemented a web-based camera feature to capture and upload documents.',
      'Redesigned legacy views to match Figma v2 with a migration toggle.',
    ],
  },
  {
    name: 'Cargo Shipment App',
    company: 'Cognith',
    period: 'Jul 2023 - Dec 2024',
    description:
      'Shipment management with dashboard analytics and ERPNext sync.',
    features: [
      'Developed dashboard analytics endpoints and dynamic filters for bar charts.',
      'Implemented bulk CSV upload for multi-user registration.',
      'Added an admin console tracking activities, logins, and transactions.',
      'Designed shortened signup link generation.',
      'Built two-way Shopify/Linear to ERPNext sync with webhook jobs.',
    ],
  },
  {
    name: 'Job Portal',
    company: 'Cognith',
    period: 'Jul 2023 - Dec 2024',
    description: 'Candidate and job management with Zoho CRM sync.',
    features: [
      'Built two-way sync with Zoho CRM using API integrations and Deluge scripting.',
      'Developed a pipeline to decompress zips and parse documents into applicant profiles via Zoho API.',
      'Built React UI for job/candidate lists with multi-parameter filtering.',
    ],
  },
  {
    name: 'Event Discovery Platform',
    company: 'Cognith',
    period: 'Jul 2023 - Dec 2024',
    description:
      'Event discovery with proximity search, push notifications, and real-time chat.',
    features: [
      'Replaced Google Geocoding with OpenStreetMap to cut cost and implemented location caching.',
      'Integrated Firebase Cloud Messaging for global push notifications.',
      'Optimized real-time chat by consolidating webhooks into a single WebSocket stream.',
      'Followed TDD to maintain 95%+ coverage.',
    ],
  },
  {
    name: 'Video Conferencing App',
    company: 'Sun Asterisk',
    period: 'Jan 2022 - Jun 2023',
    description:
      'Video calls with scheduling, virtual backgrounds, and screen sharing.',
    features: [
      'Implemented reception time scheduling for calls.',
      'Added Google Selfie Segmentation for virtual backgrounds and screen sharing.',
      'Developed backend endpoints for call scheduling and Action Cable real-time sharing.',
      'Created AWS scaling architecture for 10,000 concurrent users.',
      'Deployed end-to-end CI/CD pipelines from scratch.',
    ],
  },
  {
    name: 'HR Platform',
    company: 'HP Ventures Inc.',
    period: 'Feb 2020 - Dec 2021',
    description: 'Human resource management with payroll and subscriptions.',
    features: [
      'Refactored payroll calculations for dynamic inputs.',
      'Developed modernized core HR platform with subscription feature.',
    ],
  },
];

export const shippedFeatures = productionApps.flatMap((app) =>
  app.features.map((feature) => ({
    app: app.name,
    company: app.company,
    period: app.period,
    feature,
  }))
);
