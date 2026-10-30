# ADR 0003: On-Demand Component Retrieval & Lean Scaffolding (Just-In-Time)

## Context
In ADR 0002, `bm-design-system` was expanded to provide an exhaustive catalog of 46+ self-contained primitives, a full interactive reference documentation site at `/admin/design-system`, and over 30 external Radix/headless packages.
However, when applied to a real project (such as `DailyTasks`), the "Monolith Dump" model showed severe friction:
1. **Repository & Codebase Pollution**: Injecting 46 primitives, 20+ documentation sections, and showcase components buried the application's actual domain code under 70+ boilerplate files.
2. **Dependency Bloat**: Forcing 30+ npm dependencies (Radix UI, Milkdown, Cmdk, Vaul, etc.) caused massive `node_modules` overhead and install friction when only a few components (e.g. `button`, `input`, `card`) were actually needed.
3. **Agent Confusion**: AI coding assistants inspecting the codebase encountered an overwhelming volume of design-system demonstration code rather than the application's domain logic.

## Decision
We transition `bm-design-system` from a **Monolith Dump** model to a **Lean Core + On-Demand (JIT) Component Retrieval** architecture:

1. **Vault / Registry in the Skill**:
   - The skill repository (`bm-design-system`) maintains the complete, curated 46+ component library in `references/components-ui/`.
   - The skill serves as the single source of truth and registry.
2. **Lean Core Scaffolding (Default)**:
   - On initial scaffold, only the essentials are written into the target project:
     - `@theme` design tokens and base typography in `styles/design-system.css`.
     - `lib/utils.ts` (`cn`) and `lib/theme.ts` (`useTheme`).
     - Zero-FOUC theme boot script and font link tags in the HTML layout `<head>`.
     - Core starter primitives: `button.tsx`, `input.tsx`, `card.tsx`.
     - Minimal dependencies: `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `lucide-react`, `tailwind-merge`.
3. **Optional Showcase Mode**:
   - The user is prompted during Phase 1 whether they want the full interactive showcase page at `/admin/design-system`.
   - Default is **Lean / On-Demand (Recommended)**. If requested, the full showcase and documentation sections can still be scaffolded.
4. **On-Demand (JIT) Primitive Retrieval**:
   - When an AI agent or developer needs a component that is not yet in `components/ui/` (e.g. `dialog`, `checkbox`, `tabs`, `sheet`, `dropdown-menu`):
     - The agent fetches the component directly from the `bm-design-system` skill registry (`references/components-ui/<name>.tsx`).
     - The agent installs only the specific peer dependency required for that component (e.g., `@radix-ui/react-dialog` for `dialog`).
5. **Updated Agent Guardrails**:
   - `AGENTS.md` / `CLAUDE.md` explicitly instruct future agents to pull components on-demand from the skill registry instead of either inventing ad-hoc CSS or dumping unused components.

## Consequences
- **Positive**:
  - Target projects remain lightweight, clean, and 100% focused on their product domain.
  - Zero unused dependencies in `package.json`.
  - Faster install and build times.
  - Full power of the 46+ shadcn/ui component catalog remains available whenever needed.
- **Negative / Trade-offs**:
  - Components are added incrementally rather than all existing upfront. (Mitigated by automated on-demand retrieval by the AI agent).
