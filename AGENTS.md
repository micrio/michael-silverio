# AGENTS.md

Guide for agents working on Michael Silverio's portfolio.

## Project

- React 18 + TypeScript + Create React App (`react-scripts`).
- Tailwind CSS for styling (`tailwind.config.js`).
- `lucide-react` for icons, `clsx` for conditional class names.
- Deploy target: GitHub Pages (`homepage` -> `https://voidzenn.github.io/michael-silverio`).
- Path alias note: all app code lives under `src/`. Pages under `src/pages`, shared
  components under `src/components/<Name>/<Name>.tsx`.

## Commands

- `npm start` - dev server.
- `npm run build` - production build.
- `npm test` - test runner.

## Theme: Glass

The whole portfolio uses a **glassmorphism** aesthetic. Follow these rules.

- **Glass surface**: translucent panels with blur, e.g.
  `bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg rounded-2xl`.
  (Adjust opacity/blur as needed, but always combine: translucent bg + `backdrop-blur` + subtle border + shadow.)
- **Background**: soft gradient behind the glass so the blur is visible. Keep
  gradient blobs/accents (blue/pink) from the existing design, but muted.
- **Layering**: content sits on glass cards; avoid opaque backgrounds on
  containers that should read as glass.
- **Borders/dividers**: low-opacity white/black, never hard gray lines.
- **Text**: ensure WCAG AA contrast in BOTH themes. Glass over bright gradient can
  tank contrast - verify.

## Dark / Light Toggle

- Two themes: `light` and `dark`. Toggle control in the header/nav.
- Implement with Tailwind `darkMode: 'class'` (update `tailwind.config.js` from the
  default `media` strategy) and toggle `document.documentElement.classList`.
- Persist choice in `localStorage`; default to system preference
  (`prefers-color-scheme`) when no stored value.
- Apply theme class before first paint (small inline script in `public/index.html`)
  to avoid flash of wrong theme (FOUC).
- Every color must have a `dark:` variant. No hardcoded light-only colors.
- Toggle icon: sun/moon from `lucide-react`.

## Page structure (order matters)

Landing page renders sections in this exact order:

1. **Title** - short: just the name. e.g. `Michael Silverio`.
2. **Specialization** - one short line on what he specializes in.
3. **Projects** - project list (existing `src/pages/Home/Projects.tsx`), web + non-web.
4. **Experience** - work history (`src/pages/Home/Experience.tsx`).
5. **Skills** - technologies/tools grouped by category.
6. **Hobbies** - personal interests.
7. **Contact** - links.

Keep each section compact. Title and specialization come first so the hero is name
+ one-liner, nothing more.

## Content source (existing)

- Projects: `src/pages/Home/Projects.tsx` (Card + Badge components).
- Work history (reference, currently commented out): `src/pages/Home/Work.tsx`.
- Contacts/links: `src/pages/Home/Contacts.tsx`.
- Home composition: `src/pages/Home/Home.tsx`.

## Conventions

- Function components, `const Name = () => {}` then `export default Name`.
- Tailwind utility classes inline; use `clsx` for conditional variants.
- Reuse `src/components/Card`, `Button`, `Badge` before creating new primitives.
- Keep components small; one section = one file under `src/pages/Home/`.
- No `any` unless unavoidable. Type props.
- Prefer `lucide-react` icons over inline SVG unless custom (see `Icons/Zoho`).

## Do not

- Do not hardcode light-only colors after adding dark mode.
- Do not reorder sections (Title -> Specialization -> Projects -> Experience -> Skills -> Hobbies -> Contact).
- Do not commit `build/` (see `.gitignore`).
