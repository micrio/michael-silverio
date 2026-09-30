# Features Shipped

Master list of user-facing and shipped capabilities, grouped by company to application.

This file complements [`CONTRIBUTIONS.md`](./CONTRIBUTIONS.md), which holds maintenance, refactors, infrastructure, and process work.

When adding a new item:

- Put it under the correct company and app.
- Add it here if it is a user-facing or shipped capability.
- Add it to `CONTRIBUTIONS.md` if it is maintenance, a refactor, infrastructure, or process work.
- Keep bullets short, action-first, and recruiter-friendly (what changed + why it matters).
- Order bullets by significance (highest impact first).

Only entries in this file count toward the "features shipped to production" stat.

---

## Freelance - Upwork (Dec 2024 - Present)

### Registration System

`Rails, MySQL, CoffeeScript, HAML, React` — Volunteer registration platform handling accreditation and background checks.

- Integrated Accredit Solutions (volunteer accreditation) and Verified First (background checks) via custom wrapper APIs.
- Built a React chairperson portal for schedules, email campaigns, and availability reports with scheduling-overlap detection.
- Box number assignment system with reporting for volunteers.
- Combined packages that group multiple activities into one discounted package.
- Multiple terms & conditions options so each Registrant Type can use its own terms.
- Background ZIP export to download all S3 images for volunteers registered to a site.
- L3 discounts for Stripe payments to follow new protocols.
- Replaced the text editor with the open-source HugeRTE editor, enabling direct image paste.
- Created a simple knowledge base portal.

### Procurement App

`Rails` — AI procurement agent that collects requirements conversationally and generates ERPNext quotations.

- Built a document pipeline that crawls and extracts PDF quotations, splits them into chunks, and generates OpenAI embeddings (RAG).
- Shipped an AI procurement agent that collects requirements conversationally and asks for confirmation.
- Auto-generates an ERPNext quotation record once procurement is finalized.
- Automated record creation that creates Brand, Supplier, and Item Group records before creating Items.
- Developed document search matching user queries against processed chunks.

### Chat with Data / Data Warehouse System

`Rails, Postgres, React, GraphQL` — Chat agent over Shopify and Linear data with ETL, OAuth2, and visual answers.

- Implemented OAuth2 for Shopify and Linear with persisted integration IDs.
- Built an ETL process that loads Shopify and Linear data into a local warehouse (SQLite3) for fast querying.
- Used RubyLLM to build a chat agent with search tools and chart/table visualization (chat-to-chart).
- Automated insight gallery that generates charts after third-party OAuth integrations.
- Developed a React canvas chat UI with visual node-to-node cards.
- Integrated frontend OAuth and a chat interface connected to backend APIs.

### E-commerce System Connector

`Rails, Postgres` — Shopify to ERPNext sync pipeline via webhooks and background jobs.

- Developed an ETL pipeline to import Shopify data into ERPNext.
- Cursor-based pagination so a failed import can still resume from the last cursor instead of restarting.
- Implemented webhook endpoints for Shopify events queuing background jobs for real-time sync.
- Created API wrappers for ERPNext Items, Brands, and Suppliers.

### Funeral Registration System

`Rails, Postgres, Hotwire` — Funeral document registration with signature drawing and camera capture.

- Modernized the platform with a toggle between the legacy and redesigned (Figma v2) UI.
- Developed a signature drawing tool embedding signatures into PDF fields.
- Implemented a web-based camera feature to capture and upload documents, optimized for tablets.
- Unified search across Funding Request Records, Funeral Homes, and Insurance Companies.

---

## Cognith (Jul 2023 - Dec 2024, Singapore)

### Cargo Shipment App

`Rails, Postgres` — Shipment management with dashboard analytics and ERPNext sync.

- Created a complex dashboard with multiple filters and five dynamic content sections.
- Bulk CSV template import so administrators can register multiple users at once.
- Admin console tracking activities, logins, and transactions.
- Designed shortened signup links for user invitations.
- Built two-way Shopify/Linear to ERPNext sync with webhook jobs.

### Job Portal

`Rails, Postgres, React` — Candidate and job management with Zoho CRM sync.

- Built two-way sync with Zoho CRM using API integrations and Deluge scripting, reducing API calls and cost.
- Resume upload using Zoho's resume parser to auto-create candidate records.
- Built React UI for job/candidate lists with multi-parameter filtering.

### Event Discovery Platform

`Rails, Postgres` — Event discovery with proximity search, push notifications, and real-time chat.

- Built an event suggestion engine that uses preferred genres and location to recommend events.
- Integrated Firebase Cloud Messaging for push notifications on recommendations and messages.

---

## Sun Asterisk (Jan 2022 - Jun 2023, Philippines)

### Video Conferencing App

`Rails, Postgres, React` — Video calls with scheduling, virtual backgrounds, and screen sharing.

- Implemented reception time scheduling for calls.
- Operator availability indicators so customers know when an operator is ready.
- Google Selfie Segmentation for virtual backgrounds during calls.
- Screen sharing and real-time document/PDF sharing.
- Call forwarding from one operator to another.

---

## HP Ventures Inc. (Feb 2020 - Dec 2021)

### HR Platform

`Vanilla PHP, JavaScript, jQuery` — Human resource management with payroll and subscriptions.

- Face-based attendance capturing.
- Modernized the AI architecture in Phase 2 for a subscription model with feature flags per tier.
- Built a report generation system combining Attendance, Leave, Loan, and Salary calculations.
