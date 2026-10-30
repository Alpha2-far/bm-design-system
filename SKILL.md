---
name: bm-design-system
description: Guides you through creating and implementing an opinionated, lean React + Tailwind CSS v4 design system with on-demand (JIT) shadcn/ui primitives.
---

# Design System Builder

You are guiding a builder through scaffolding an opinionated, production-grade design system into a React + Tailwind CSS v4 codebase.

The architecture follows a **Lean Core + On-Demand (JIT) Component Retrieval** model:
- The target project stays clean, lean, and focused on its product domain.
- Core design tokens (`@theme`), typography, and essential starter primitives (`button`, `input`, `card`) are scaffolded.
- The skill maintains a full vault of 46+ self-contained shadcn/ui primitives in `references/components-ui/`.
- Agents and developers pull additional primitives on demand as user stories / tickets require them.
- An interactive reference showcase page at `/admin/design-system` is optionally available if desired.
- Instructions are injected into `AGENTS.md` (or `CLAUDE.md`) so all future agents adhere to tokens and pull components just-in-time without inventing ad-hoc CSS.

## Audience assumption

The user wants a clean, beautiful design system scaffolded into their app with minimal noise and zero codebase pollution. Colors and fonts ship with locked defaults — don't ask the user to pick them. Keep prose tight.

## Core interaction principles

1. **Use the AskUserQuestion tool for decisions with discrete options.** The user is making quick decisions. For free-form input use a normal chat message.
2. **Lean by default.** Do not dump 70+ files and 30+ npm packages into a project. Install only the lean core and pull components on demand.
3. **Opinionated, not exhausting.** Ship with rock-solid defaults (Cyan accent, Amber signal, Slate neutrals, Inter/DM Sans typography).
4. **Strict token adherence.** Primitives use semantic tokens (`bg-page`, `bg-surface`, `border-hairline`, `text-ink-body`, `text-ink-display`, `text-ink-muted`, `accent`, `signal`, `danger`).
5. **Real-time surfacing & immediate visibility.** A design system must never be an invisible backend file or a forgotten route. It MUST be immediately visible and testable in the running app: mount `<ThemeToggle />` into the app's top bar and provide a direct link to `/admin` and `/admin/design-system`.

## Hard assumptions

- The target codebase uses **React**.
- The target codebase uses **Tailwind CSS v4 or later** (uses `@theme` directive in CSS instead of `tailwind.config.js`).
- If either assumption is violated, stop and tell the user what's missing.

## Phase 0 — Detect target codebase state

Before talking to the user, inspect the codebase silently.

**Framework detection** (in order — first match wins):
1. **Vite** — `vite.config.ts` / `vite.config.js` / `vite.config.mts` exists at repo root.
2. **Next.js (app router)** — `next.config.*` exists AND `app/` directory exists.
3. **Next.js (pages router)** — `next.config.*` exists AND `pages/` directory exists, no `app/`.
4. **Rails + Inertia** — `Gemfile` contains `inertia-rails` (or `inertia_rails`) AND `app/frontend/` or `app/javascript/pages/` exists.
5. **Rails + react-on-rails** — `Gemfile` contains `react_on_rails`.
6. **Unknown** — none of the above.

**Tailwind v4 check:**
- Look for `@import "tailwindcss"` in any CSS file under common entry paths (`src/`, `app/`, `app/javascript/`, `app/frontend/`).
- Or `@tailwindcss/vite`, `@tailwindcss/postcss`, or `tailwindcss@^4` in `package.json`.
- If Tailwind v3 is found (`tailwind.config.js`, `@tailwind base;`), stop and advise upgrading to Tailwind v4.

**Existing-system detection:**
- Does `src/components/ui/` (or framework equivalent) already exist?
- Does the project's CSS have a `@theme` block or `bm-design-system:start` marker?
- Does `AGENTS.md` or `CLAUDE.md` have a `bm-design-system:start` marker?

State a brief summary before moving on:
> Detected: Vite + React + Tailwind v4. No existing design system. `AGENTS.md` present. Ready to scaffold.

## Phase 1 — Installation Mode & Route

Ask the user how they want to install the design system using AskUserQuestion:

- Question: "How would you like to install the design system?"
- Options:
  - `(Recommended) Lean / On-Demand — Scaffolds tokens, base CSS, utils, and starter primitives (Button, Input, Card). Primitives are pulled on demand as needed, keeping your repo uncluttered.`
  - `Full Showcase — Scaffolds all 46+ primitives, component sections, and an interactive preview page at /admin/design-system.`

If **Full Showcase** is selected:
Ask for the route:
- Question: "Where should the design system reference page live?"
- Options: `(Recommended) Use /admin/design-system`, `Use /design-system (no admin prefix)`, `Use /styleguide`
Save chosen route as `routePath` (default `/admin/design-system`). Also alias `/admin` to this route automatically.

If **Lean / On-Demand** is selected (Default):
`routePath` is set to `null` (no showcase route file generated).

## Phase 2 — Branding defaults

Colors and fonts ship locked. Do **not** ask the user to pick them. Announce what's coming in one short summary:

> Applying default palette and typography (fully customizable later in `design-system.css`):
> - **Display font:** Inter
> - **Body font:** DM Sans
> - **Accent:** Cyan (`#0891b2`)
> - **Signal:** Amber (`#fcd34d`)
> - **Neutral:** Slate

### Fonts

| Role     | Family    | Google Fonts import URL | CSS stack |
|----------|-----------|-------------------------|-----------|
| display  | Inter     | `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap` | `'Inter', ui-sans-serif, system-ui, sans-serif` |
| body     | DM Sans   | `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` |

### Resolved palette

| Token | Light | Dark |
|---|---|---|
| `page` | `#ffffff` | `#020617` |
| `surface` | `#f8fafc` | `#0f172a` |
| `hairline` | `#e2e8f0` | `#1e293b` |
| `ink-body` | `#334155` | `#e2e8f0` |
| `ink-display` | `#0f172a` | `#f8fafc` |
| `ink-muted` | `#64748b` | `#94a3b8` |
| `accent` | `#0891b2` | `#0891b2` |
| `accent-faded` | `#e1f2f6` | `#031f33` |
| `accent-darker` | `#0e7490` | `#0e7490` |
| `signal` | `#fcd34d` | `#fcd34d` |
| `signal-faded` | `#fffaea` | `#2f2b21` |
| `signal-darker` | `#b45309` | `#b45309` |

## Phase 3 — (re-run only) Scope

Skip on first run. If re-run mode:
Ask user:
- Question: "What do you want to update?"
- Options: `(Recommended) Pull an on-demand component`, `Refresh tokens to current defaults`, `Full re-scaffold`

## Phase 4 — Write files

### 4a. Resolve target paths

Canonical Vite map:
- Design-system stylesheet: `src/styles/design-system.css`
- Entry CSS: the file containing `@import "tailwindcss"`
- Primitives directory: `src/components/ui/`
- Utils: `src/lib/utils.ts`
- Theme hook: `src/lib/theme.ts`
- Route page (Full Showcase only): `src/admin/design-system/page.tsx`

### 4b. Copy templates

1. **Stylesheet**: `references/styles/design-system.css` → target stylesheet (substitute font & color tokens).
2. **Utils**: `references/lib/utils.ts` → `src/lib/utils.ts` (if missing).
3. **Theme hook**: `references/lib/theme.ts` → `src/lib/theme.ts`.

4. **In Lean / On-Demand Mode (Default)**:
   - Scaffold only the essential starter primitives:
     - `references/components-ui/button.tsx` → `src/components/ui/button.tsx`
     - `references/components-ui/input.tsx` → `src/components/ui/input.tsx`
     - `references/components-ui/card.tsx` → `src/components/ui/card.tsx`
   - *Do NOT create `src/admin/design-system/` or `src/components/design-system/`*.

5. **In Full Showcase Mode**:
   - Copy all 46+ primitives from `references/components-ui/*.tsx` to `src/components/ui/`.
   - Copy `references/page/DesignSystem.tsx`, `SidebarNav`, `SectionShell`, `CodeBlock`, `ColorSwatch`, `palette.ts`, and `sections/**/*.tsx` into `src/components/design-system/`.
   - Register route at `routePath` AND alias `/admin` to `routePath`.

### 4c. Wire the stylesheet

Append `@import "./design-system.css";` to the entry CSS file, immediately after `@import "tailwindcss";`, wrapped in markers:

```css
/* bm-design-system:start */
@import "./design-system.css";
/* bm-design-system:end */
```

### 4d. Install layout `<head>` snippets

Install font `<link>` tags and the synchronous zero-FOUC theme boot script into the app's HTML layout `<head>`:
- Font link tags from `references/styles/font-link-tags.html`.
- Theme boot script from `references/styles/theme-boot-script.html`.

### 4e. Real-Time Surfacing in Application UI (Mandatory)

A design system must never remain an invisible or hidden file. The agent MUST automatically surface the design system into the app:
1. **Mount `<ThemeToggle />`** in the application's top navigation bar or header so that Light, Dark, and System modes can be immediately tested and used in real time.
2. **Add a direct navigation link to `/admin`** (e.g. `<a href="/admin">Design System (/admin)</a>`) in the header or top bar so developers can access the reference page in one click.
3. **Register dual routes**: both `/admin` and `/admin/design-system` must resolve to the design system page without 404 errors.
4. **Provide a return link**: the design system page must include a "← Retour à l'application" link to return to `/`.

### 4f. Report missing dependencies

**In Lean / On-Demand Mode**:
Check `package.json` and report only what is needed for the lean core:
- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`

**In Full Showcase Mode**:
Report the full suite of dependencies.

### 4g. On-Demand Component Registry (Lookup Table)

When an agent or developer implements a feature requiring additional primitives, copy the file directly from the skill's `references/components-ui/<name>.tsx` into `src/components/ui/<name>.tsx` and install its peer dependency if missing:

| Component | Source in Skill | Required Peer Dependency |
|---|---|---|
| `accordion` | `references/components-ui/accordion.tsx` | `@radix-ui/react-accordion` |
| `alert` | `references/components-ui/alert.tsx` | `class-variance-authority`, `lucide-react` |
| `alert-dialog` | `references/components-ui/alert-dialog.tsx` | `@radix-ui/react-alert-dialog` |
| `aspect-ratio` | `references/components-ui/aspect-ratio.tsx` | `@radix-ui/react-aspect-ratio` |
| `avatar` | `references/components-ui/avatar.tsx` | `@radix-ui/react-avatar` |
| `badge` | `references/components-ui/badge.tsx` | `class-variance-authority` |
| `breadcrumb` | `references/components-ui/breadcrumb.tsx` | `@radix-ui/react-slot`, `lucide-react` |
| `button` | `references/components-ui/button.tsx` | `@radix-ui/react-slot`, `class-variance-authority` |
| `button-dropdown` | `references/components-ui/button-dropdown.tsx` | `@radix-ui/react-dropdown-menu`, `lucide-react` |
| `card` | `references/components-ui/card.tsx` | `clsx`, `tailwind-merge` |
| `checkbox` | `references/components-ui/checkbox.tsx` | `@radix-ui/react-checkbox`, `lucide-react` |
| `collapsible` | `references/components-ui/collapsible.tsx` | `@radix-ui/react-collapsible` |
| `command` | `references/components-ui/command.tsx` | `cmdk`, `lucide-react` |
| `context-menu` | `references/components-ui/context-menu.tsx` | `@radix-ui/react-context-menu`, `lucide-react` |
| `data-table` | `references/components-ui/data-table.tsx` | `table.tsx` |
| `dialog` | `references/components-ui/dialog.tsx` | `@radix-ui/react-dialog`, `lucide-react` |
| `drawer` | `references/components-ui/drawer.tsx` | `vaul` |
| `dropdown-menu` | `references/components-ui/dropdown-menu.tsx` | `@radix-ui/react-dropdown-menu`, `lucide-react` |
| `hover-card` | `references/components-ui/hover-card.tsx` | `@radix-ui/react-hover-card` |
| `input` | `references/components-ui/input.tsx` | `clsx`, `tailwind-merge` |
| `input-otp` | `references/components-ui/input-otp.tsx` | `input-otp` |
| `label` | `references/components-ui/label.tsx` | `@radix-ui/react-label` |
| `menubar` | `references/components-ui/menubar.tsx` | `@radix-ui/react-menubar`, `lucide-react` |
| `navigation-menu` | `references/components-ui/navigation-menu.tsx` | `@radix-ui/react-navigation-menu`, `lucide-react` |
| `pagination` | `references/components-ui/pagination.tsx` | `lucide-react` |
| `popover` | `references/components-ui/popover.tsx` | `@radix-ui/react-popover` |
| `progress` | `references/components-ui/progress.tsx` | `@radix-ui/react-progress` |
| `radio-group` | `references/components-ui/radio-group.tsx` | `@radix-ui/react-radio-group` |
| `resizable` | `references/components-ui/resizable.tsx` | `react-resizable-panels`, `lucide-react` |
| `rich-text-field` | `references/components-ui/rich-text-field.tsx` | `@milkdown/core`, `@milkdown/crepe`, `@milkdown/react` |
| `scroll-area` | `references/components-ui/scroll-area.tsx` | `@radix-ui/react-scroll-area` |
| `select` | `references/components-ui/select.tsx` | `@radix-ui/react-select`, `lucide-react` |
| `separator` | `references/components-ui/separator.tsx` | `@radix-ui/react-separator` |
| `sheet` | `references/components-ui/sheet.tsx` | `@radix-ui/react-dialog`, `lucide-react` |
| `skeleton` | `references/components-ui/skeleton.tsx` | (none) |
| `slider` | `references/components-ui/slider.tsx` | `@radix-ui/react-slider` |
| `sonner` | `references/components-ui/sonner.tsx` | `sonner`, `next-themes` |
| `switch` | `references/components-ui/switch.tsx` | `@radix-ui/react-switch` |
| `table` | `references/components-ui/table.tsx` | (none) |
| `tabs` | `references/components-ui/tabs.tsx` | `@radix-ui/react-tabs` |
| `textarea` | `references/components-ui/textarea.tsx` | (none) |
| `theme-toggle` | `references/components-ui/theme-toggle.tsx` | `lucide-react` |
| `toggle` | `references/components-ui/toggle.tsx` | `@radix-ui/react-toggle` |
| `toggle-group` | `references/components-ui/toggle-group.tsx` | `@radix-ui/react-toggle-group` |
| `tooltip` | `references/components-ui/tooltip.tsx` | `@radix-ui/react-tooltip` |

## Phase 5 — Update agent instructions

Append (or replace) the managed block in `AGENTS.md` (or `CLAUDE.md`) from `references/agent-instructions.md`.
Ensure the instructions inform future agents:
1. Always use semantic tokens and bare semantic HTML.
2. Check `components/ui/` for existing primitives.
3. Pull missing primitives on demand from the `bm-design-system` registry rather than inventing custom CSS.

## Phase 6 — Scan for existing UI to migrate

Scan the codebase for raw `<button>`, `<input>`, or ad-hoc Tailwind colors (`bg-blue-600`, `text-gray-900`) and offer migration to semantic tokens and primitives.

## Phase 7 — Wrap up

Print a summary:
- Selected mode (Lean / On-Demand vs Full Showcase).
- Real-time surfacing confirmation (ThemeToggle and `/admin` links).
- Installed starter primitives in `src/components/ui/`.
- Confirmation of agent instructions in `AGENTS.md`.
- Quick reminder on how to pull additional primitives on-demand.
