<!-- bm-design-system:start -->
## Design system

This codebase uses an opinionated design system built on Tailwind CSS v4 and self-contained shadcn/ui primitives under `components/ui/`, styled with semantic tokens (`bg-page`, `bg-surface`, `border-hairline`, `text-ink-body`, `text-ink-display`, `text-ink-muted`, `accent`, `signal`, `danger`).

When implementing UI:

1. **Always check existing primitives first.** Inspect `components/ui/` before writing frontend markup. Primitives are self-contained via `cva` and leverage semantic tokens.

2. **On-demand component retrieval.** The project keeps its dependencies and code lean by only installing primitives as needed:
   - If a needed primitive is not yet present in `components/ui/` (e.g. `dialog`, `tabs`, `checkbox`, `sheet`, `dropdown-menu`, `switch`, `popover`, `select`, etc.), **do not create ad-hoc markup or custom CSS**.
   - Pull the official self-contained primitive from the `bm-design-system` skill registry (`references/components-ui/<name>.tsx`) into `components/ui/<name>.tsx`.
   - Install the component's required peer dependency (e.g. `npm install @radix-ui/react-dialog` for `dialog`, `@radix-ui/react-checkbox` for `checkbox`, etc.) if not already installed.

3. **Do not invent ad-hoc styles.** Don't reach for raw hex values, raw font sizes, or one-off Tailwind utilities (`bg-blue-600`, `text-gray-900`, `p-[13px]`) when a semantic token or primitive exists.

4. **Use bare semantic HTML for text elements.** Headings (`<h1>`–`<h6>`), paragraphs (`<p>`), anchors (`<a>`), `<strong>`, `<blockquote>`, `<ul>` / `<ol>` / `<li>`, `<hr>`, and form-field labels (`<label htmlFor>` / `<legend>`) already have their size, color, weight, font, letter-spacing, and line-height defined in the base layer of `design-system.css`. **Do not apply Tailwind utilities like `text-xl`, `text-2xl`, `text-sm`, `font-semibold`, `font-medium`, `text-ink-display`, `text-ink-muted`, `tracking-tight`, `leading-tight` to these elements** — write `<h1>Projects</h1>`, not `<h1 className="text-2xl font-semibold text-ink-display">Projects</h1>`, and write `<label htmlFor="email">Email</label>`, not `<label htmlFor="email" className="text-sm font-medium text-ink-display">Email</label>`. Layout utilities (`mt-1`, `mb-4`, `max-w-md`, `flex`, etc.) are fine.

5. **Re-running the `bm-design-system` skill** is the supported way to update tokens, add sections, or scaffold the optional `/admin/design-system` showcase page.
<!-- bm-design-system:end -->
