# BM Design System Builder 🎨

> **An opinionated, production-ready Agent Skill to scaffold a complete React + Tailwind CSS v4 Design System with 40+ shadcn/ui primitives, live documentation, and AI agent guardrails.**

[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8.svg)](https://tailwindcss.com)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Headless-161618.svg)](https://www.radix-ui.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-CVA_Primitives-000000.svg)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Highlights

- **✨ 40+ Self-Contained Primitives** : 100% CVA-driven (*Class Variance Authority*) components built on Radix UI headless primitives. No external `@apply` classes—every component carries its own utility styles.
- **🎨 Tailwind CSS v4 Semantic Tokens** : Clean `@theme` definition with a mathematical contrast-derived palette (`page`, `surface`, `hairline`, `ink-display`, `ink-body`, `accent`, `signal`, `danger`) + automatic aliases for standard shadcn variables.
- **🌓 Zero-FOUC Dark Mode** : Synchronous inline boot script preventing flash of unstyled content, with local storage persistence.
- **📖 Live Local Reference Page** : Complete interactive documentation page scaffolded at `/admin/design-system` with live interactive previews, use case rules, and copyable JSX snippets.
- **🛡️ AI Agent Guardrails** : Injects a managed contract block into `AGENTS.md` / `CLAUDE.md` to prevent AI coding assistants from drifting or inventing ad-hoc CSS classes.
- **⚡ Multi-Framework Support** : Seamlessly adapts routes and layouts for **Next.js (App & Pages router)**, **Vite (React Router)**, **Rails + Inertia**, and **React on Rails**.

---

## 📦 Component Families

The design system organizes its 40+ primitives into **7 functional families**:

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

#### For Claude Code:
```bash
git clone https://github.com/Alpha2-far/bm-design-system.git ~/.claude/skills/bm-design-system
```

### 2. Run the Skill in any target project

Open any React + Tailwind CSS v4 repository in your AI coding assistant and run:

```text
/bm-design-system
```
*(Or simply prompt: "Scaffold a complete design system for this application using bm-design-system.")*

The skill will:
1. Detect your framework (Vite, Next.js, Rails/Inertia).
2. Confirm the destination route (`/admin/design-system`).
3. Scaffold all 40+ primitives into `src/components/ui/`.
4. Configure `@theme` tokens in your CSS.
5. Register the live documentation route.
6. Install font link tags and the zero-FOUC theme boot script in your HTML layout head.
7. Append strict guardrails to `AGENTS.md` / `CLAUDE.md`.
8. Report any missing npm dependencies to install.

---

## 🏛️ Architecture & Decisions

- [GLOSSARY.md](GLOSSARY.md) : Domain language and canonical terminology (*Primitive UI*, *Design Token*, *Self-contained Component*, *Live Reference Page*, *Agent Guardrail*).
- [ADR 0001 : Self-contained CVA and Token Aliases](docs/adr/0001-self-contained-cva-and-tokens.md) : Elimination of `@apply` CSS indirection in favor of self-contained CVA components with universal shadcn v4 aliases.
- [ADR 0002 : Exhaustive Component Catalog and 7-Family Taxonomy](docs/adr/0002-full-component-catalog-and-taxonomy.md) : Expansion to 40+ primitives and taxonomy restructuring.
- [SPEC.md](docs/SPEC.md) : Complete engineering specification and testing seams.

---

## 📄 License

MIT License © 2026 Alpha2-far
