# SPEC-001 : Refonte des Primitives UI vers le Standard shadcn/ui et Catalogue Exhaustif

## Problem Statement
Les développeurs et les agents d'intelligence artificielle construisant des applications web avec `bm-design-system` rencontrent deux freins majeurs :
1. **Un catalogue restreint (12 composants)** : Les besoins courants d'interfaces modernes (onglets `Tabs`, tiroirs `Sheet`, palettes de commandes `Command`, infobulles `Tooltip`, notifications `Toast`) manquent, poussant les agents à improviser des composants ad-hoc disparates qui cassent la cohérence visuelle.
2. **Une indirection de style fragile (`@apply` CSS)** : Les composants TSX délèguent leur rendu à des classes globales intermédiaires (`.btn-primary`, `.modal`), empêchant les agents et développeurs de déplacer ou réutiliser un composant de façon autonome sans dépendre de règles de style externes.

## Solution
Transformer les composants de `bm-design-system` en un **catalogue complet de ~35 Primitives UI auto-porteuses (*Self-contained Components*)** basées sur Radix UI et le moteur CVA de shadcn/ui, stylisées directement via les **Design Tokens sémantiques** de Tailwind v4 (`page`, `surface`, `hairline`, `ink-display`, `ink-body`, `accent`, `signal`, `danger`).
Restructurer la **Live Reference Page** (`/admin/design-system`) autour de **7 Familles de composants** pour offrir une vitrine interactive avec prévisualisation en direct et code JSX copiable.

## User Stories

### Famille 1 : Formulaires & Saisie
1. As a developer, I want a `<Button>` primitive with semantic variants (primary, secondary, ghost, soft, danger, link) and sizes (sm, md, lg, icon), so that I can trigger actions with consistent styling across the application.
2. As a user, I want buttons to display native loading and disabled states with accessible aria attributes, so that I clearly know when an action is being processed.
3. As a developer, I want an `<Input>` primitive supporting all text, email, number and password types with focus ring states mapped to `accent`, so that user inputs are standardized.
4. As a developer, I want a `<Textarea>` primitive with auto-scaling and consistent typography, so that multi-line text input looks cohesive with single-line inputs.
5. As a user, I want an accessible `<Checkbox>` primitive supporting checked, unchecked, and indeterminate states, so that I can make binary selections easily with keyboard or touch.
6. As a user, I want a `<RadioGroup>` primitive managing keyboard arrow navigation between options, so that I can pick mutually exclusive options accessibly.
7. As a developer, I want a `<Select>` primitive with animated dropdown overlays and keyboard search, so that users can select from lists cleanly.
8. As a user, I want a `<Switch>` toggle with smooth sliding animation, so that I can toggle binary settings instantly.
9. As a user, I want a `<Slider>` primitive for selecting numerical ranges, so that I can adjust volumes, prices, or percentages smoothly.
10. As a developer, I want a semantic `<Label>` primitive that automatically links to form controls and handles required indicators, so that all forms meet WCAG accessibility standards.

### Famille 2 : Overlays & Dialogues
11. As a user, I want accessible `<Dialog>` modals with backdrop blur, focus trap, and Escape key dismissal, so that I can focus on critical interactions without losing context.
12. As a user, I want an `<AlertDialog>` primitive with distinct destructive action styling, so that I am protected against accidental data deletion.
13. As a user, I want a slide-over `<Sheet>` primitive from all four edges (left, right, top, bottom), so that I can inspect side details or navigation drawers on mobile without leaving the current view.
14. As a user, I want a floating `<Popover>` positioned intelligently next to an anchor element, so that I can view contextual controls on demand.
15. As a user, I want accessible `<Tooltip>` primitives displaying concise hints on hover and focus, so that I can understand icon buttons without visual clutter.
16. As a user, I want a `<HoverCard>` previewing rich content on cursor hover, so that I can inspect metadata without navigating away.
17. As a user, I want a keyboard-navigable `<DropdownMenu>` with sub-menus, dividers, and checkboxes, so that I can access contextual actions efficiently.
18. As a user, I want a `<ContextMenu>` opening on right-click, so that I can perform power-user actions directly from UI items.

### Famille 3 : Navigation
19. As a user, I want accessible `<Tabs>` with pill and underline indicators, so that I can switch views within a page smoothly.
20. As a user, I want a semantic `<Breadcrumb>` trail showing current page depth, so that I can navigate upwards in the hierarchy easily.
21. As a user, I want an accessible `<Pagination>` bar with previous/next controls and page jumps, so that I can traverse large collections of records.
22. As a user, I want a `<NavigationMenu>` with mega-menu capabilities, so that I can navigate complex top-level hierarchies cleanly.

### Famille 4 : Feedback & Statut
23. As a user, I want `<Badge>` primitives with semantic color variants (neutral, accent, signal, danger), so that I can spot item tags and statuses at a glance.
24. As a user, I want an `<Alert>` callout primitive with icons for info, warning, and error states, so that critical banners immediately capture my attention.
25. As a user, I want a smooth `<Progress>` bar, so that I can monitor long-running background tasks.
26. As a user, I want animated `<Skeleton>` placeholders, so that I experience perceived performance and zero layout shift while asynchronous data loads.
27. As a user, I want `<Sonner>` toast notifications appearing unobtrusively in the corner with action buttons, so that I receive immediate feedback after completing tasks.

### Famille 5 : Structure & Layout
28. As a developer, I want a `<Card>` component suite (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) styled with `surface` and `hairline` tokens, so that I can group information cohesively.
29. As a developer, I want a `<Separator>` primitive supporting horizontal and vertical orientations, so that I can delineate UI sections cleanly.
30. As a developer, I want an `<AspectRatio>` wrapper, so that media and maps maintain consistent proportions across responsive breakpoints.
31. As a user, I want a customized `<ScrollArea>` with sleek scrollbars that match the design tokens, so that overflowing content blends into the UI seamlessly.

### Famille 6 : Données & Richesse
32. As a user, I want a `<DataTable>` with sorting, filtering, selection, and pagination hooks, so that I can explore tabular data effortlessly.
33. As a user, I want an expandable `<Accordion>` with chevron rotations, so that I can read FAQs and collapsible lists progressively.
34. As a user, I want an `<Avatar>` primitive with image fallback to initials, so that user profiles render reliably even when profile pictures fail to load.
35. As a user, I want a `⌘K` `<Command>` palette with fuzzy searching, so that I can execute shortcuts and global searches in milliseconds.

### Famille 7 : Utilitaires & Expérience Agent
36. As a user, I want a `<ThemeToggle>` switching between light and dark modes with zero flash of unstyled content, so that my display preference is respected instantly.
37. As an AI agent, I want every primitive to be self-contained in its TSX file with CVA variants, so that I can consume or adapt components without cross-referencing external CSS files.
38. As an AI agent, I want clear instructions in `AGENTS.md`, so that I never invent ad-hoc styling or bypass the design tokens.
39. As a developer, I want a comprehensive Live Reference Page at `/admin/design-system` displaying all 35 primitives, live previews, and copyable JSX, so that I have a local, always-accessible single source of truth.

## Implementation Decisions

### 1. Self-contained CVA Architecture
- Chaque composant d'interface réside dans un fichier unique sous `references/components-ui/`.
- Les variantes de style sont définies directement via la fonction `cva()` en utilisant les classes utilitaires Tailwind v4 basées sur les tokens (`bg-page`, `bg-surface`, `border-hairline`, `text-ink-display`, `text-ink-body`, `bg-accent`, `bg-signal`, etc.).
- Les sélecteurs CSS intermédiaires avec `@apply` (`.btn`, `.modal`, `.input`) sont éliminés de `references/styles/design-system.css`.

### 2. Préservation des Design Tokens et du CSS de Base
- `design-system.css` conserve les variables `@theme` pour les modes clair et sombre, ainsi que l'algorithme de dérivation chromatique défini dans `references/derive-palette.md`.
- `design-system.css` conserve la stylisation globale et sans classe des balises HTML natives (`<h1>` à `<h6>`, `<p>`, `<a>`, `<blockquote>`, `<hr>`, `<label>`).

### 3. Taxonomie de la Live Reference Page
- La page `/admin/design-system` est découpée en 7 modules de navigation correspondant aux 7 familles de composants.
- Chaque primitive est encadrée par le composant `<SectionShell>` garantissant un aperçu en direct, une description courte, les cas d'usage, et le bloc de code JSX copiable.

### 4. Déclarations de Dépendances Automatisées
- La phase 4f du skill `bm-design-system` est mise à jour pour déclarer automatiquement l'ensemble des dépendances headless nécessaires :
  - `@radix-ui/react-slot`, `@radix-ui/react-dialog`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-context-menu`, `@radix-ui/react-popover`, `@radix-ui/react-tooltip`, `@radix-ui/react-hover-card`, `@radix-ui/react-tabs`, `@radix-ui/react-select`, `@radix-ui/react-checkbox`, `@radix-ui/react-radio-group`, `@radix-ui/react-switch`, `@radix-ui/react-slider`, `@radix-ui/react-accordion`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-scroll-area`, `@radix-ui/react-separator`, `@radix-ui/react-progress`, `@radix-ui/react-avatar`
  - `cmdk` (pour `<Command>`)
  - `vaul` (pour `<Sheet>` / tiroir mobile)
  - `sonner` (pour `<Sonner>` / notifications toast)
  - `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`

## Testing Decisions

### Seams de Test
1. **Seam Primaire (Intégration Page Référence `<DesignSystem />`)** :
   - Tester le montage sans erreur de la page complète `/admin/design-system` incluant les 35 primitives réparties dans les 7 sections.
   - Vérifier le basculement dynamique du thème (Light/Dark) et la persistance dans `localStorage`.
2. **Seam Unitaire & Comportemental (Contrats d'accessibilité et d'événements)** :
   - Tester les primitives au niveau de leur interface publique (focus trap des modales, sélection d'onglets, déclenchement de `onClick`, mise à jour de valeur des inputs et switches).
   - Aucun test ne doit vérifier les détails internes d'implémentation (ex: noms de classes exactes), uniquement les attributs d'accessibilité ARIA (`aria-expanded`, `aria-checked`, `role`) et les comportements utilisateur.

## Out of Scope
- Intégration de bibliothèques tierces de graphiques lourdes (Chart.js, Recharts) : un composant de visualisation spécifique pourra faire l'objet d'une extension future.
- Support des versions obsolètes de Tailwind CSS (v3 et antérieures) : le kit requiert strictement Tailwind CSS v4.
- Modifications des backends serveur ou des API de données (les composants sont purement orientés présentation et interaction client).

## Further Notes
- La structure permet l'exécution idempotente du skill : toute mise à jour ultérieure via `bm-design-system` détecte les fichiers existants sans écraser les modifications manuelles de l'utilisateur sans confirmation explicite.

