import { useTranslations } from "next-intl";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@components/shadcn/ui/button";
import { useSidebar } from "@components/shadcn/ui/sidebar";
import SidebarToggler from "@components/common/SidebarToggler";

function AppTopbar({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex h-12 w-full shrink-0 items-center gap-2 px-2 select-none" {...props}>
      <SidebarToggler variant="smart" />
      <BackwardAndForward variant="smart" />
      {children}
    </div>
  );
}

interface BackwardAndForwardProps {
  variant?: "normal" | "smart";
}

function BackwardAndForward({ variant = "normal", ...props }: React.ComponentProps<"div"> & BackwardAndForwardProps) {
  const tMain = useTranslations("main");
  const { open } = useSidebar();
  const router = useRouter();

  // normal to show (put it in sidebar), smart to hide when sidebar is open (put it in main page)
  if (variant === "normal" || (variant === "smart" && !open)) {
    return (
      <div className="flex gap-[1px]" {...props}>
        <Button variant="ghost" size="icon-sm" onClick={() => router.back()}>
          <ArrowLeftIcon className="size-4.5" /> <span className="sr-only">{tMain("common.action.backward")}</span>
        </Button>
        <Button variant="ghost" size="icon-sm" onClick={() => router.forward()}>
          <ArrowRightIcon className="size-4.5" /> <span className="sr-only">{tMain("common.action.forward")}</span>
        </Button>
      </div>
    );
  }

  return null;
}

export { AppTopbar, BackwardAndForward };
