# ADR 0004: Real-Time Surfacing and Immediate UI Integration

## Context
When a design system is scaffolded into a codebase, developers and designers need to immediately observe, test, and interact with its primitives, design tokens, and dark/light mode switches in real time.
Previously, the skill registered a route (`/admin/design-system`) but did not wire any visible access point into the application's user interface. As a result:
1. Developers running `npm run dev` had no visual indicator that the design system existed or where to access it.
2. The dark mode switcher (`<ThemeToggle />`) was isolated within the design system documentation page, leaving the actual application without theme switching capabilities.
3. Users experienced friction having to manually request cross-navigation links and theme toggle integration.

## Decision
We establish **Real-Time Surfacing** as a mandatory, non-negotiable step of `bm-design-system`:

1. **Automatic Navigation Entry Point**:
   - The skill automatically wires a clear entry point into the app's primary layout or header (e.g. `<a href="/admin">Design System (/admin)</a>`).
   - Both `/admin` and `/admin/design-system` routes are registered so navigation is natural and intuitive.
2. **Immediate Theme Toggle Mounting**:
   - The `<ThemeToggle />` primitive is automatically mounted in the application's header or navigation bar, allowing real-time switching between Light, Dark, and System themes on the actual app pages.
3. **Cross-Navigation**:
   - The design system page at `/admin` includes a clear "← Retour à l'application" link to seamlessly return to the main product.

## Consequences
- **Positive**:
  - Immediate real-time validation: developers see the design system value on first launch (`npm run dev`).
  - Dark mode works across the entire app out of the box.
  - Zero guesswork on route naming or navigation.
- **Negative / Trade-offs**:
  - Adds a small navigation bar to the app layout (which can be hidden in production or restricted to development if desired).
