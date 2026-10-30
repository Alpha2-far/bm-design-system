import { SectionShell } from "@/components/design-system/SectionShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

<Accordion type="single" collapsible className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
  <AvatarFallback>BM</AvatarFallback>
</Avatar>`;

export function AccordionSection() {
  return (
    <SectionShell
      id="accordion"
      title="Accordion & Avatars"
      description={
        <>
          The <code>&lt;Accordion&gt;</code> primitive provides collapsible content panels
          with keyboard navigation, paired with <code>&lt;Avatar&gt;</code> for reliable
          profile representations with automatic fallback to initials.
        </>
      }
      whenToUse={
        <ul>
          <li>Collapsible FAQs, progressive disclosure in settings.</li>
          <li>User profiles and avatar stacks.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Short lists of essential information — keep them visible.</li>
        </ul>
      }
      preview={
        <div className="space-y-6 max-w-md">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
              <AvatarFallback>BM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm text-ink-body font-medium">Profile Avatars with Fallback</span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What makes the components self-contained?</AccordionTrigger>
              <AccordionContent>
                Each component embeds 100% of its utility classes and variants within its CVA definition, with zero reliance on external @apply classes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is dark mode supported?</AccordionTrigger>
              <AccordionContent>
                Through Tailwind v4 @theme tokens mapped synchronously at boot time with an anti-flicker script.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>Accordion type</code>: <code>"single"</code> | <code>"multiple"</code>.</li>
          <li><code>collapsible</code>: boolean allowing all items to be closed.</li>
          <li><code>AvatarFallback</code>: renders when image fails or is loading.</li>
        </ul>
      }
    />
  );
}

