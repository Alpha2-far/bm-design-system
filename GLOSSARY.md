# BM Design System

Système de conception unifié pour applications React et Tailwind CSS v4, articulant des primitives UI accessibles, des tokens sémantiques et un cadre de règles strict pour les agents d'IA.

## Language

**Primitive UI**:
Composant d'interface unitaire réutilisable et accessible (ex: `<Button>`, `<Dialog>`, `<Input>`), encapsulant son comportement et son style via Radix UI et CVA.
_Avoid_: Widget, brique visuelle, helper de vue.

**Design Token**:
Jeton sémantique de design exposé sous forme de variable CSS dans Tailwind v4 (`@theme`), dissociant l'intention fonctionnelle (`page`, `surface`, `hairline`, `ink-display`, `accent`) de sa valeur chromatique brute.
_Avoid_: Variable de couleur, classe utilitaire brute, code hex hardcodé.

**Self-contained Component**:
Composant autonome embarquant 100% de ses variantes et classes utilitaires dans son fichier TSX via `cva`, sans dépendance à des sélecteurs CSS globaux intermédiaires.
_Avoid_: Composant split, classe @apply externe.

**Live Reference Page**:
Page de documentation et de prévisualisation interactive locale (`/admin/design-system`), servant de vitrine vivante du design system et de source de vérité pour les développeurs et les agents.
_Avoid_: Storybook externe, maquette statique, styleguide statique.

**Component Family**:
Regroupement fonctionnel de primitives UI (Formulaires, Overlays, Navigation, Feedback, Structure, Données, Utilitaires) structurant le catalogue et la navigation de la page de référence.
_Avoid_: Catégorie arbitraire, dossier en vrac.

**Agent Guardrail**:
Bloc de directives normatif injecté dans `AGENTS.md` interdisant formellement aux agents de générer du CSS ad-hoc ou d'inventer des styles en dehors des primitives et tokens établis.
_Avoid_: Consigne informelle, prompt temporaire.

