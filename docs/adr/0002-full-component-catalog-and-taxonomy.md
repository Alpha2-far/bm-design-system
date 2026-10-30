# Catalogue exhaustif de composants (~35 primitives) et taxonomie à 7 familles

## Context
Initialement, `bm-design-system` n'embarquait qu'une douzaine de composants basiques, forçant les agents et développeurs à inventer ou bricoler des solutions ad-hoc dès qu'une fonctionnalité nécessitait des onglets (`Tabs`), un tiroir latéral (`Sheet`), des palettes de commandes (`Command`) ou des notifications (`Toast/Sonner`).

## Decision
Nous étendons le catalogue de primitives à une suite exhaustive de ~35 composants shadcn/ui auto-porteurs, catégorisés en 7 familles fonctionnelles :
1. **Formulaires & Saisie** (`Button`, `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Select`, `Switch`, `Slider`, `Label`)
2. **Overlays & Dialogues** (`Dialog`, `AlertDialog`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`)
3. **Navigation** (`Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`)
4. **Feedback & Statut** (`Badge`, `Alert`, `Progress`, `Skeleton`, `Sonner`)
5. **Structure & Layout** (`Card`, `Separator`, `AspectRatio`, `ScrollArea`)
6. **Données & Richesse** (`DataTable`, `Accordion`, `Avatar`, `Command`)
7. **Utilitaires** (`ThemeToggle`)

La page de référence locale (`/admin/design-system`) et le menu de navigation sont restructurés autour de ces 7 familles avec des prévisualisations interactives et des extraits de code JSX.

## Consequences
- Élimination des dérives d'implémentation : tout cas d'usage courant d'UI dispose d'un composant officiel.
- Dépendances déclarées dans `Phase 4f` du skill : installation automatisée des primitives Radix (`@radix-ui/*`), `cmdk`, `vaul` et `sonner`.
- Couverture visuelle complète et standardisée sous les tokens du design system.

