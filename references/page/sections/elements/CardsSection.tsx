import { SectionShell } from "@/components/design-system/SectionShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const code = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Project Settings</CardTitle>
    <CardDescription>Deploy and configure your workspace.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-3">
    <p className="text-sm text-ink-body">Active environment: Production</p>
    <Separator />
    <p className="text-xs text-ink-muted">Region: eu-west-3</p>
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="ghost">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`;

export function CardsSection() {
  return (
    <SectionShell
      id="cards"
      title="Cards & Structure"
      description={
        <>
          The <code>&lt;Card&gt;</code> suite and <code>&lt;Separator&gt;</code> primitive
          group and delimit information cohesively using the <code>surface</code> and{" "}
          <code>hairline</code> tokens.
        </>
      }
      whenToUse={
        <ul>
          <li>Grouping related content, form segments, or entity summaries.</li>
          <li>Dashboard metrics, pricing tables, and grid collections.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For bare lists without content grouping — use plain list items or tables.</li>
        </ul>
      }
      preview={
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Workspace Overview</CardTitle>
              <CardDescription>
                Manage your team members and environment permissions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Status</span>
                <span className="font-medium text-accent">Active</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Plan</span>
                <span className="text-ink-body font-medium">Enterprise</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">Dismiss</Button>
              <Button size="sm">Manage</Button>
            </CardFooter>
          </Card>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>CardHeader</code>, <code>CardTitle</code>, <code>CardDescription</code>, <code>CardContent</code>, <code>CardFooter</code>.</li>
          <li><code>Separator orientation</code>: <code>"horizontal"</code> (default) | <code>"vertical"</code>.</li>
        </ul>
      }
    />
  );
}

