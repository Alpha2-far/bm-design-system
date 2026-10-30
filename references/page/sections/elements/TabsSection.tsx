import { SectionShell } from "@/components/design-system/SectionShell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const code = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p className="text-sm text-ink-muted">Manage your account settings here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p className="text-sm text-ink-muted">Change your password here.</p>
  </TabsContent>
</Tabs>`;

export function TabsSection() {
  return (
    <SectionShell
      id="tabs"
      title="Tabs"
      description={
        <>
          The <code>&lt;Tabs&gt;</code> primitive provides accessible tabbed navigation
          based on Radix UI, supporting keyboard arrows and animated indicators.
        </>
      }
      whenToUse={
        <ul>
          <li>Switching between related views within the same screen context.</li>
          <li>Organizing complex forms or settings into distinct sub-panels.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For top-level application navigation — use page routes or main navigation.</li>
        </ul>
      }
      preview={
        <div className="w-full max-w-md">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Overview</CardTitle>
                  <CardDescription>
                    Update your personal profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-ink-body">Account tier: <span className="font-semibold text-accent">Pro Plan</span></p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Update your authentication credentials.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-ink-body">Two-factor authentication is active.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>defaultValue</code>: initial active tab key.</li>
          <li><code>value</code> &amp; <code>onValueChange</code>: controlled state support.</li>
        </ul>
      }
    />
  );
}

