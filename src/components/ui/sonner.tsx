/**
 * @file sonner.tsx
 * @description Toast notification component using Sonner library
 * 
 * WHY: Provides user feedback for form submissions and actions.
 *      Sonner offers smooth animations and a clean API.
 * 
 * WHAT: Configured Toaster component with dark theme styling.
 * WHERE: Rendered in App.tsx, used via toast() in ContactSection.
 */

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
