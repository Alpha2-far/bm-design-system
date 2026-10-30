import { SectionShell } from "@/components/design-system/SectionShell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const code = `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can configure webhook endpoints in Settings.</AlertDescription>
</Alert>

<Progress value={60} />

<Skeleton className="h-4 w-[250px]" />

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`;

export function FeedbackSection() {
  return (
    <SectionShell
      id="feedback"
      title="Feedback & Status"
      description={
        <>
          Primitives for communicating application state, background progress,
          and asynchronous feedback: <code>&lt;Alert&gt;</code>, <code>&lt;Progress&gt;</code>,
          <code>&lt;Skeleton&gt;</code>, and <code>Sonner</code> toasts.
        </>
      }
      whenToUse={
        <ul>
          <li>Alerting users to system notices, warnings, or errors.</li>
          <li>Displaying perceived performance and zero layout shift during loading with Skeletons.</li>
          <li>Transient feedback after successful actions using Toasts.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For permanent navigation notices — use page headers or banners.</li>
        </ul>
      }
      preview={
        <div className="space-y-6 max-w-lg">
          <Alert>
            <Info className="h-4 w-4 text-accent" />
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              A new version of the design system components is ready to deploy.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Storage Limit Warning</AlertTitle>
            <AlertDescription>
              Your database usage has reached 92% of quota.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-ink-muted">
              <span>Task Progress</span>
              <span>68%</span>
            </div>
            <Progress value={68} />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-ink-muted">Skeleton Loading State:</p>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>

          <div>
            <Button
              variant="outline"
              onClick={() => {
                if (typeof window !== "undefined") {
                  toast("Action confirmed", {
                    description: "Your settings have been saved successfully.",
                  });
                }
              }}
            >
              Trigger Toast Notification
            </Button>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>Alert variant</code>: <code>"default"</code> | <code>"destructive"</code>.</li>
          <li><code>Progress value</code>: 0 to 100 number.</li>
          <li><code>toast()</code>: function from <code>sonner</code> with options for description, action, and duration.</li>
        </ul>
      }
    />
  );
}

