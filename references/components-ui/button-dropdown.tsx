// bm-design-system: button-dropdown primitive (split button + menu)
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Variant = NonNullable<ButtonProps["variant"]>;
type Size = NonNullable<ButtonProps["size"]>;

export interface ButtonDropdownProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Visible label / content of the main (left) action button. */
  action: React.ReactNode;
  /** Dropdown menu items — pass DropdownMenuItem / DropdownMenuSeparator children. */
  children: React.ReactNode;
  variant?: Variant;
  size?: Exclude<Size, "icon">;
  /** Optional override for the toggle's aria-label. */
  toggleAriaLabel?: string;
  /** Forwarded to DropdownMenuContent. */
  menuAlign?: "start" | "center" | "end";
  /** Extra classes for the action half. */
  className?: string;
  /** Extra classes for the toggle half. Defaults to mirror `className`. */
  toggleClassName?: string;
  /** Extra classes for the outer wrapper. */
  wrapperClassName?: string;
}

const ButtonDropdown = React.forwardRef<HTMLButtonElement, ButtonDropdownProps>(
  (
    {
      action,
      children,
      variant = "default",
      size = "default",
      toggleAriaLabel = "More actions",
      menuAlign = "end",
      className,
      toggleClassName,
      wrapperClassName,
      disabled,
      ...actionProps
    },
    ref,
  ) => {
    const toggleClasses = toggleClassName ?? className;
    return (
      <div className={cn("inline-flex items-center", wrapperClassName)}>
        <Button
          ref={ref}
          variant={variant}
          size={size}
          disabled={disabled}
          className={cn("rounded-r-none focus-visible:z-10", className)}
          {...actionProps}
        >
          {action}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label={toggleAriaLabel}
              disabled={disabled}
              className={cn(
                buttonVariants({ variant, size }),
                "rounded-l-none border-l border-l-current/25 px-2 focus-visible:z-10",
                toggleClasses,
              )}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={menuAlign}>{children}</DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
);
ButtonDropdown.displayName = "ButtonDropdown";

export { ButtonDropdown };
