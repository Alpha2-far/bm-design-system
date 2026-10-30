import * as React from "react";

export interface NavGroup {
  label: string;
  items: { id: string; label: string }[];
}

const NAV: NavGroup[] = [
  {
    label: "Branding",
    items: [
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    label: "Base styles",
    items: [
      { id: "heading-scale", label: "Heading scale" },
      { id: "h1", label: "H1" },
      { id: "h2", label: "H2" },
      { id: "h3", label: "H3" },
      { id: "h4", label: "H4" },
      { id: "h5", label: "H5" },
      { id: "h6", label: "H6" },
      { id: "anchor", label: "Anchor (a)" },
      { id: "paragraph", label: "Paragraph (p)" },
      { id: "strong", label: "Strong" },
      { id: "lists", label: "Lists (ul / ol)" },
      { id: "list-item", label: "List item (li)" },
      { id: "blockquote", label: "Blockquote" },
      { id: "label", label: "Label / legend" },
      { id: "hr", label: "Horizontal rule" },
    ],
  },
  {
    label: "Forms & Controls",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "button-dropdown", label: "Button dropdown" },
      { id: "forms", label: "Forms & Inputs" },
      { id: "toggle-buttons", label: "Toggle buttons" },
    ],
  },
  {
    label: "Overlays & Dialogs",
    items: [
      { id: "modal", label: "Modal (Dialog)" },
      { id: "sheet", label: "Sheet (Drawer)" },
      { id: "dropdown-menu", label: "Dropdown menu" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { id: "tabs", label: "Tabs" },
      { id: "main-navigation", label: "Main navigation" },
      { id: "sub-navigation", label: "Sub navigation" },
    ],
  },
  {
    label: "Feedback & Status",
    items: [
      { id: "badges", label: "Badges" },
      { id: "feedback", label: "Alerts, Progress & Toasts" },
      { id: "callout", label: "Callouts" },
    ],
  },
  {
    label: "Structure & Data",
    items: [
      { id: "cards", label: "Cards & Separators" },
      { id: "accordion", label: "Accordion & Avatars" },
      { id: "data-table", label: "Data table" },
      { id: "listings", label: "Listings" },
      { id: "shells", label: "Shells" },
      { id: "page-headers", label: "Page headers" },
      { id: "body-content", label: "Body content" },
      { id: "footers", label: "Footers" },
      { id: "iconography", label: "Iconography" },
    ],
  },
];

export function SidebarNav() {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll("section[id]"));
      const scrollPos = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement;
        if (heading.offsetTop <= scrollPos) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="space-y-6 text-sm" aria-label="Design System Navigation">
      {NAV.map((group) => (
        <div key={group.label} className="space-y-2">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {group.label}
          </p>
          <ul className="space-y-1">
            {group.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-md px-2.5 py-1.5 transition-colors ${
                      isActive
                        ? "bg-accent-faded font-medium text-accent-display"
                        : "text-ink-body hover:bg-surface hover:text-ink-display"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
