import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const code = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Side Drawer</SheetTitle>
      <SheetDescription>
        Inspect details or perform actions without losing the main view context.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p className="text-sm text-ink-body">Drawer content goes here.</p>
    </div>
  </SheetContent>
</Sheet>`;

export function SheetSection() {
  return (
    <SectionShell
      id="sheet"
      title="Sheet (Drawer)"
      description={
        <>
          The <code>&lt;Sheet&gt;</code> primitive provides a slide-out panel that extends
          the Dialog primitive, supporting <code>top</code>, <code>bottom</code>,{" "}
          <code>left</code>, and <code>right</code> sides.
        </>
      }
      whenToUse={
        <ul>
          <li>Mobile navigation drawers.</li>
          <li>Detailed record inspection and side filters without leaving the active table.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Simple confirmation dialogs — use <code>&lt;Dialog&gt;</code> or <code>&lt;AlertDialog&gt;</code>.</li>
        </ul>
      }
      preview={
        <div className="flex flex-wrap gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Right Sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Side Inspection</SheetTitle>
                <SheetDescription>
                  This panel slides in smoothly from the right edge with a backdrop overlay.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-4">
                <p className="text-sm text-ink-body">
                  Ideal for filters, secondary forms, and inspector panels.
                </p>
                <Button className="w-full">Save Changes</Button>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">Open Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Mobile navigation sidebar drawer.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>side</code>: <code>"top"</code> | <code>"bottom"</code> | <code>"left"</code> | <code>"right"</code> (default).</li>
        </ul>
      }
    />
  );
}

