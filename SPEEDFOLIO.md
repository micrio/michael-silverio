
# Speedfolio

Rails 7.2 + Inertia.js + React rewrite of the Speedfolio portfolio-chat app.
A visitor lands with an email or slug, gets routed to that person's portfolio,
and chats with an AI assistant about the owner (Me, Projects, Skills, Hobbies).
Signed-in owners manage everything from a full-page settings dashboard.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Rails 7.2 |
| Database | SQLite 3 (JSON for `contact`, `theme`, `settings`) |
| Inertia | `inertia_rails` |
| Assets | `vite_rails` + Vite 7 + `@vitejs/plugin-react` |
| UI | React 19, TypeScript (strict), Tailwind 4, `lucide-react` |
| Auth | Devise (database auth, server-rendered sessions) |
| Authorization | Pundit (`PortfolioPolicy`) |
| AI | `ruby_llm` + DeepSeek, persisted as `Chat` / `Message` models |
| Tests | RSpec, FactoryBot, shoulda-matchers |

## Screenshots
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 16 53 PM" src="https://github.com/user-attachments/assets/7de18e1b-3a0a-4110-9cfe-76e6bbdf2ac1" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 16 59 PM" src="https://github.com/user-attachments/assets/87d4cd48-75ac-49df-ba32-812e6a5f1a81" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 17 11 PM" src="https://github.com/user-attachments/assets/ac3407b3-b4bf-4684-84c2-7c394f023106" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 17 24 PM" src="https://github.com/user-attachments/assets/003a10cc-f9fb-40ba-8215-32785c8e6463" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 17 29 PM" src="https://github.com/user-attachments/assets/4b46d6fb-380e-485c-a7b9-9dda74a3a3c4" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 17 41 PM" src="https://github.com/user-attachments/assets/3c858743-c791-4199-9823-9f85d62ee512" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 17 55 PM" src="https://github.com/user-attachments/assets/bd7e3355-e10a-4ba0-84fc-581b70c3f82e" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 07 PM" src="https://github.com/user-attachments/assets/2d473b7f-14e9-4d11-a24e-32a072faf464" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 10 PM" src="https://github.com/user-attachments/assets/d8e4aa6e-9ef5-4c1f-9d7b-e42910334125" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 38 PM" src="https://github.com/user-attachments/assets/56171691-19b9-45e5-b96e-184bc90b9f10" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 43 PM" src="https://github.com/user-attachments/assets/664f85b5-52ab-44d6-b1bb-233df584bf15" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 47 PM" src="https://github.com/user-attachments/assets/f68aad60-4c9a-4bee-8ac2-de65dfcc622d" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 51 PM" src="https://github.com/user-attachments/assets/042c5298-e6fd-42cf-9a63-364d41c9e17c" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 18 54 PM" src="https://github.com/user-attachments/assets/07529d70-3595-4c51-9f5c-c85b0b76bae2" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 19 02 PM" src="https://github.com/user-attachments/assets/a60e2e0d-1d03-40b5-adf9-4d870cee21fd" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 19 07 PM" src="https://github.com/user-attachments/assets/b3ce2d80-c838-4d6f-a36c-c0b59d940ac6" />
<img width="1504" height="859" alt="Screenshot 2026-09-30 at 12 19 10 PM" src="https://github.com/user-attachments/assets/f57bf82f-288b-47c1-b999-b2e6a1151b51" />


## Setup

```bash
bundle install
npm install
cp .env.example .env          # then set DEEPSEEK_API_KEY
bin/rails db:prepare
bin/rails ruby_llm:load_models # fills the model registry (fresh DB only)
bin/rails db:seed             # seeds the john-doe sample + demo user
```

SQLite databases live under `storage/` and need no external service or
credentials.

### AI chat

The portfolio chat uses [RubyLLM](https://rubyllm.com) with DeepSeek. Set
`DEEPSEEK_API_KEY` in `.env`; `DEEPSEEK_MODEL` defaults to `deepseek-v4-flash`
(alternatives: `deepseek-v4-pro`, `deepseek-flash`). Conversations persist in
the `chats` and `messages` tables, scoped to each visitor's session.

## Run

```bash
bin/dev                       # rails server + vite dev server together
# or
bin/rails server -p 3000
bin/vite dev
```

Open http://localhost:3000.

Demo login: `demo@speedfolio.test` / `password123`.

## Routes

| Verb | Path | Page / action | Auth |
| --- | --- | --- | --- |
| GET | `/` | `Home/Index` — enter email or slug | public |
| GET | `/:slug` | `Portfolio/Show` — hero + chat (unknown slug falls back to sample) | public |
| PATCH | `/:slug` | Persist a portfolio (full payload) | owner |
| GET | `/settings(/:section)` | `Settings/Index` — owner dashboard | signed-in |
| GET | `/users/sign_in` | `Auth/SignIn` | public |
| POST | `/users/sign_in` | Devise session create → redirects to `/settings` | public |
| GET | `/users/sign_up` | `Auth/SignUp` | public |
| POST | `/users` | Devise registration create → provision portfolio, redirect `/settings` | public |
| DELETE | `/users/sign_out` | Devise session destroy | signed-in |

## How it works

- **Slug = email local-part.** `Portfolio.derive_slug` mirrors the Next.js
  `deriveLocalPart` (`john.doe+test@x.com` → `john.doe-test`). New users get a
  portfolio provisioned at sign-up (`PortfolioProvisioner`), with `-2`, `-3`, …
  suffixes on collision. Renaming the slug is a future feature.
- **Sample fallback.** Unknown slugs render the seeded `john-doe` sample with an
  `is_sample` banner; the sample does not increment visitor counts.
- **Visitor counting.** `Portfolio#record_visit!` bumps `visitors` and the
  per-day `visitor_logs` JSONB on every real portfolio view.
- **Settings persistence.** The dashboard keeps local React state and sends the
  whole portfolio to `PATCH /:slug` (debounced). `PortfolioUpdater` replaces
  child collections in one transaction so the client never tracks record ids.
- **Serialization.** `PortfolioSerializer` is a plain PORO whose keys match the
  TypeScript `Portfolio` interface in `app/frontend/lib/portfolio.ts`.
- **Theming.** `app/frontend/lib/themes.ts` resolves palette + mode + custom
  colors into one `ThemeColors` object; layout uses Tailwind, themed surfaces use
  inline styles.

## Data model

`portfolios` (scalars + JSONB `contact` / `theme` / `settings`, unique `slug`,
optional `user`) has many `projects`, `skills`, `skill_badges`, `faqs` — all
`dependent: :destroy`, ordered by `position`. See `db/schema.rb`.

## Tests

```bash
bundle exec rspec
bundle exec rubocop
npx tsc -p tsconfig.app.json --noEmit
bin/rails zeitwerk:check
```

Request specs assert the rendered Inertia component + props for `/`, `/:slug`,
`/settings`, and the auth flows.
