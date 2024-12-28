"use client";

import { useTheme } from "next-themes";
import { toast, Toaster } from "sonner";
import { CircleCheckBig, TriangleAlert, OctagonX } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Toaster>;

const ToastProvider = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Toaster
      richColors
      gap={12}
      theme={theme as ToasterProps["theme"]}
      className="toaster"
      toastOptions={{
        classNames: {
          toast:
            "bg-elevated !border border-default !text !text-sm !font-medium !gap-2 !rounded-xl !shadow-lg",
          description:
            "!font-regular !text-sm [data-type=error]:!text-danger-strong [data-type=warning]:!text-warning-strong",
          actionButton: "!bg-neutral !text-inverse !text-xs !font-medium !flex !h-8 !items-center !px-2",
          closeButton:
            "!bg-elevated !text-description !border-default hover:!text hover:!border-item hover:!bg-item-active",
          error: "!bg-danger-subtlest !border-danger-subtlest !text-danger-strong",
          warning: "!bg-warning-subtlest !border-warning-subtlest !text-warning-strong",
        },
      }}
      icons={{
        success: <CircleCheckBig size={20} />,
        warning: <TriangleAlert size={20} />,
        error: <OctagonX size={20} />,
      }}
      {...props}
    />
  );
};

export { toast, ToastProvider };
