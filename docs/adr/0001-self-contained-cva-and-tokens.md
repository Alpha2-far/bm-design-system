# Architecture CVA autonome et préservation des tokens sémantiques

## Context
Les composants de `bm-design-system` divisaient initialement leur style entre des fichiers TSX (`cva`) et des règles CSS externes (`@apply .btn` dans `design-system.css`). Cette indirection compliquait la portabilité des composants pour les développeurs et forçait les agents d'IA à naviguer entre deux fichiers pour comprendre ou faire évoluer les variantes visuelles.

## Decision
Nous adoptons l'architecture standard de **shadcn/ui** où chaque composant est 100% autonome (*self-contained*), portant directement ses classes utilitaires Tailwind au sein de sa définition `cva()`, tout en conservant les **Design Tokens sémantiques** de `bm-design-system` (`page`, `surface`, `hairline`, `ink-display`, `ink-body`, `accent`, `signal`) définis dans le bloc `@theme` de Tailwind v4.

## Consequences
- Chaque composant TSX peut être copié ou déplacé sans dépendre de classes CSS personnalisées tierces.
- Les agents d'IA disposent d'une vue complète et directe de la stylisation au sein du composant.
- `design-system.css` est allégé et réservé exclusivement à la typographie HTML native (`h1`-`h6`, `p`, `label`) et aux variables `@theme`.

