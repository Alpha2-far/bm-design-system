# BM Design System Builder 🎨

> **An opinionated, production-ready Agent Skill to scaffold a lean React + Tailwind CSS v4 Design System with on-demand (JIT) shadcn/ui primitives, zero-FOUC dark mode, and AI agent guardrails.**

[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8.svg)](https://tailwindcss.com)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Headless-161618.svg)](https://www.radix-ui.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-CVA_Primitives-000000.svg)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Highlights

- **⚡ Lean Core + On-Demand (JIT) Primitives** : Keeps target repositories lightweight and clutter-free. Scaffolds only tokens, base typography, and essential starter components (`Button`, `Input`, `Card`). Additional primitives from the 46+ component vault are pulled on-demand only when a user story requires them.
- **🎨 Tailwind CSS v4 Semantic Tokens** : Clean `@theme` definition with a mathematical contrast-derived palette (`page`, `surface`, `hairline`, `ink-display`, `ink-body`, `accent`, `signal`, `danger`) + automatic aliases for standard shadcn variables.
- **🌓 Zero-FOUC Dark Mode** : Synchronous inline boot script preventing flash of unstyled content, with local storage persistence.
- **🛡️ AI Agent Guardrails** : Injects a managed contract block into `AGENTS.md` / `CLAUDE.md` to prevent AI coding assistants from drifting, inventing ad-hoc CSS classes, or bloating the codebase.
- **📖 Optional Live Reference Page** : Choose between a lean setup or a full interactive showcase page scaffolded at `/admin/design-system` with live previews and copyable JSX snippets.
- **⚡ Multi-Framework Support** : Seamlessly adapts routes and layouts for **Next.js (App & Pages router)**, **Vite (React Router)**, **Rails + Inertia**, and **React on Rails**.

---

## 📦 Component Vault (46+ Primitives Available On-Demand)

The design system maintains an exhaustive catalog of self-contained CVA primitives organized into **7 functional families**:

1. **Forms & Controls** : `Button`, `ButtonDropdown`, `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Select`, `Switch`, `Slider`, `Label`, `Toggle`, `ToggleGroup`, `InputOTP`
2. **Overlays & Dialogs** : `Dialog`, `AlertDialog`, `Sheet` (Drawer), `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`
3. **Navigation** : `Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`, `Menubar`
4. **Feedback & Status** : `Badge`, `Alert`, `Progress`, `Skeleton`, `Sonner` (Toasts), `Callout`
5. **Structure & Layout** : `Card`, `Separator`, `AspectRatio`, `ScrollArea`, `Resizable`, `Collapsible`
6. **Data & Rich Content** : `DataTable`, `Table`, `Accordion`, `Avatar`, `Command` (⌘K palette), `RichTextField` (Milkdown)
7. **Utilities** : `ThemeToggle`

---

## 🚀 Installation & Usage as an Agent Skill

### 1. Install globally for your AI Agent

#### For Google Antigravity / Gemini CLI:
```bash
git clone https://github.com/Alpha2-far/bm-design-system.git ~/.gemini/config/skills/bm-design-system
```

#### For Claude Code / Agents CLI:
```bash
git clone https://github.com/Alpha2-far/bm-design-system.git ~/.agents/skills/bm-design-system
```

### 2. Run the Skill in any target project

Open any React + Tailwind CSS v4 repository in your AI coding assistant and run:

```text
/bm-design-system
```
*(Or simply prompt: "Scaffold a design system for this application using bm-design-system.")*

The skill will:
1. Detect your framework (Vite, Next.js, Rails/Inertia).
2. Ask for your installation preference:
   - **Lean / On-Demand (Recommended)**: Installs `@theme` tokens, base styles, utils, and starter primitives (`Button`, `Input`, `Card`). Primitives are pulled on demand as needed.
   - **Full Showcase**: Installs all 46+ primitives and an interactive reference documentation page at `/admin/design-system`.
3. Configure `@theme` tokens in your CSS.
4. Install font link tags and the zero-FOUC theme boot script in your HTML layout head.
5. Append strict guardrails to `AGENTS.md` / `CLAUDE.md`.
6. Report only the minimal peer dependencies required.

---

## 🏛️ Architecture & Decisions

- [GLOSSARY.md](GLOSSARY.md) : Domain language and canonical terminology (*Primitive UI*, *Design Token*, *Self-contained Component*, *Live Reference Page*, *Agent Guardrail*).
- [ADR 0001 : Self-contained CVA and Token Aliases](docs/adr/0001-self-contained-cva-and-tokens.md) : Elimination of `@apply` CSS indirection in favor of self-contained CVA components with universal shadcn v4 aliases.
- [ADR 0002 : Exhaustive Component Catalog and 7-Family Taxonomy](docs/adr/0002-full-component-catalog-and-taxonomy.md) : Expansion to 40+ primitives and taxonomy restructuring.
- [ADR 0003 : On-Demand Component Retrieval & Lean Scaffolding](docs/adr/0003-on-demand-component-retrieval.md) : Transition from monolith dump to lean core + on-demand (JIT) retrieval.
- [SPEC.md](docs/SPEC.md) : Complete engineering specification and testing seams.

---

## 📄 License

MIT License © 2026 Alpha2-far
