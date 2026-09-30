# Contributions

Master list of maintenance, refactors, infrastructure, and process work, grouped by company to application.

This file complements [`FEATURES-SHIPPED.md`](./FEATURES-SHIPPED.md), which holds user-facing and shipped capabilities.

When adding a new item:

- Put it under the correct company and app.
- Add it here if it is maintenance, a refactor, infrastructure, or process work.
- Add it to `FEATURES-SHIPPED.md` if it is a user-facing or shipped capability.
- Keep bullets short, action-first, and recruiter-friendly (what changed + why it matters).
- Order bullets by significance (highest impact first).

These entries are **not** counted toward the "features shipped to production" stat.

---

## Freelance - Upwork (Dec 2024 - Present)

Act as the senior developer on the product, working directly with the client CTO. I own end-to-end product contributions, clarify requirements, and challenge proposed specifications when a better approach exists.

### Registration System

`Rails, MySQL, CoffeeScript, HAML, React` — Volunteer registration platform handling accreditation and background checks.

- Upgraded the application from Rails 4.2 to 5, resolved gem dependency conflicts, fixed Turbo:load UI rendering, and added Honeybadger for production error tracking.
- Patched a critical security flaw in a company-forked Stripe gem that allowed test payments to reach production keys.
- Updated a custom company-forked gem for full Rails compatibility.

### E-commerce System Connector

`Rails, Postgres` — Shopify to ERPNext sync pipeline via webhooks and background jobs.

- Created API wrappers for ERPNext Items, Brands, and Suppliers.
- Analyzed ERPNext API payloads to update the data mapping layer.

---

## Cognith (Jul 2023 - Dec 2024, Singapore)

Promoted to technical lead within my first year after consistent delivery across client projects.

### Event Discovery Platform

`Rails, Postgres` — Event discovery with proximity search, push notifications, and real-time chat.

- Replaced Google Geocoding with OpenStreetMap to cut cost and implemented location caching.
- Optimized real-time chat by consolidating webhooks into a single WebSocket stream.
- Followed TDD to maintain 95%+ test coverage.

### Technical Leadership

- Mentor colleagues on our development tools and virtual desktop protocols.
- Lead team sync meetings to track progress across assigned projects and find ways to improve development efficiency.
- Troubleshoot coding issues and help unblock developers.
- Act with intuition on project obstacles, finding ways to overcome them so other developers can continue and friction stays low.

---

## Sun Asterisk (Jan 2022 - Jun 2023, Philippines)

### Video Conferencing App

`Rails, Postgres, React` — Video calls with scheduling, virtual backgrounds, and screen sharing.

- Developed backend endpoints for call scheduling and Action Cable real-time sharing.
- Created an AWS scaling architecture for 10,000 concurrent users and presented the load-balancing and auto-scaling blueprint to the team.
- Deployed end-to-end CI/CD pipelines from scratch with automated testing and deployment workflows.
- Deprovisioned unused AWS resources; documented removed assets and retained backups for team leads.

---

## HP Ventures Inc. (Feb 2020 - Dec 2021)

### HR Platform

`Vanilla PHP, JavaScript, jQuery` — Human resource management with payroll and subscriptions.

- Refactored payroll calculations for dynamic inputs.
