# What I've Done - Recruiter Summary

**Michael Silverio** - AI Engineer & full-stack software engineer (Ruby on Rails + React)
**Experience:** 4+ years (Jan 2022 - Present) across freelance and product teams
**Focus:** AI/LLM features, agentic coding, Rails/React apps, ETL + ERP/data integrations, cloud & CI/CD

> Highlights include **Chat with Data** experiences that turn raw data into report
> dashboards, **ETL** pipelines, and **ERPNext** integrations.

---

## Impact at a glance

- Migrated a production Rails 4.2 app to Rails 5, resolving gem/dependency conflicts and integrating error tracking.
- Brought a new feature set to **95%+ test coverage** with strict TDD, cutting production bugs.
- Designed an AWS scaling architecture for **10,000 concurrent users** and presented the load-balancing / auto-scaling blueprint to the team.
- Replaced paid Google Geocoding with OpenStreetMap, **eliminating an expensive API dependency** and unblocking an MVP feature.
- Cut real-time chat server load by collapsing **multiple webhook connections into a single WebSocket stream**.
- Built an ETL pipeline from scratch (Shopify + Linear -> mapped data -> local SQLite) to power fast "Chat with Data" querying.
- Shipped **two AI agent workflows**: a conversational procurement agent and a tool-using chat agent over a data warehouse.
- Closed a **critical security hole** in a forked Stripe gem that let local test payments hit production keys.

---

## What I actually did, grouped by theme

### Full-stack feature delivery
- Built a React dashboard for chairpersons to manage volunteer schedules, run email campaigns, and view activity reports.
- Delivered bulk CSV upload for registering many users at once, plus an admin console tracking user activity, login history, and transactions.
- Built React UIs for job and candidate lists with complex multi-parameter filtering.
- Redesigned legacy web views to modern Figma specs with a toggle for gradual legacy -> new migration.
- Developed reception-time scheduling and screen sharing for a video conferencing app.

### AI & LLM
- Built a PDF quotation pipeline: extract, split into text chunks, generate OpenAI embeddings, and enable semantic search.
- Implemented an AI agent workflow that walks users through a multi-step conversation (items, dates, names, quantities) and confirms before acting.
- Used the RubyLLM gem to build a chat agent that calls search tools and renders raw data into tables and charts.
- Added a backend function that auto-generates an ERPNext quotation once procurement is finalized.
- Integrated OpenAI embeddings + a retrieval layer (RAG) for document search.

### Data, APIs & integrations
- Built a two-way Shopify/Linear <-> ERPNext sync, including webhook endpoints for product creation, updates, and orders with background job queuing.
- Created a two-way Zoho CRM sync using API integrations and Zoho Deluge scripting.
- Implemented OAuth2 flows for Shopify and Linear, persisting integration IDs per user session.
- Built robust API wrappers for ERPNext core modules (Items, Brands, Suppliers).
- Integrated Accredit Solutions (volunteer accreditation) and Verified First (background checks) via custom wrapper APIs and end-to-end processing logic.
- Built an ETL pipeline importing Shopify data into ERPNext with a field-mapping layer driven by real API payloads.

### Security & reliability
- Fixed a forked Stripe gem vulnerability that exposed production keys to local test payments; aligned the gem with upstream.
- Integrated Honeybadger to track and resolve production errors.
- Followed TDD to hold 95%+ coverage on new features.

### Performance, cost & infra
- Swapped Google Geocoding for OpenStreetMap and added location-based caching to respect strict rate limits.
- Reduced chat server load by consolidating many webhook connections into one WebSocket stream.
- Deployed end-to-end CI/CD pipelines from scratch with automated test + deploy workflows.
- Deprovisioned unused AWS resources with documented backups for team leads.
- Built the 10,000-concurrent-user AWS scaling blueprint (load balancing + auto-scaling).

### Frontend / UX
- Added Google Selfie Segmentation for video virtual backgrounds.
- Built a direct-to-web signature drawing tool that embeds signatures into PDF input fields.
- Added native web camera capture for uploading user documents.
- Replaced an outdated text editor with a modern inline-image-upload editor.
- Implemented Firebase Cloud Messaging for global mobile push notifications (events, schedule changes, engagement).

### Collaboration & initiative
- Took initiative to remove a costly third-party dependency and unblock the MVP.
- Presented cloud architecture and cost/scale tradeoffs to the team.
- Documented and handed off deprovisioned infrastructure.

---

## Tech I've shipped with

- **Languages:** Ruby, JavaScript, TypeScript
- **Backend:** Ruby on Rails, RSpec, TDD, Sidekiq, RubyLLM, GraphQL
- **Frontend:** React, Redux, Tailwind CSS, HTML/CSS/SCSS, jQuery, CoffeeScript, Hotwire Stimulus
- **Data:** PostgreSQL, MySQL, SQLite, REST APIs, Webhooks, OAuth2, ETL, RAG
- **Cloud/DevOps:** AWS (EC2, EBS, RDS, Load Balancing, AutoScaling, IAM, CI/CD), Docker, Kubernetes, Grafana, Honeybadger
- **AI:** AI integration, RAG, agentic coding, OpenAI embeddings

---

## Where I worked

- **Freelance - Upwork** (_Dec 2024 - Present_) - Software Engineer
- **Cognith**, Singapore (_Jul 2023 - Dec 2024_) - Software Engineer
- **Sun Asterisk**, Philippines (_Jan 2022 - Jun 2023_) - Junior Web Developer

Education: Cebu Institute of Technology (_2015 - 2019_), BS Information Technology
