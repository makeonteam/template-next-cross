import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@components/shadcn/ui/button";
import { useSidebar } from "@components/shadcn/ui/sidebar";
import SidebarToggler from "@components/common/SidebarToggler";

function AppTopbar({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex h-12 w-full items-center select-none" {...props}>
      <div className="flex items-center gap-2 p-2">
        <SidebarToggler variant="smart" />
        <BackwardAndForward variant="smart" />
      </div>
      {children}
    </div>
  );
}

interface BackwardAndForwardProps {
  variant?: "normal" | "smart";
}

function BackwardAndForward({ variant = "normal" }: BackwardAndForwardProps) {
  const { open } = useSidebar();
  const router = useRouter();

  // normal to show (put it in sidebar), smart to hide when sidebar is open (put it in main page)
  if (variant === "normal" || (variant === "smart" && !open)) {
    return (
      <div className="flex gap-[1px]">
        <Button variant="ghost" size="icon-sm" onClick={() => router.back()}>
          <ArrowLeftIcon className="size-4.5" />
        </Button>
        <Button variant="ghost" size="icon-sm" onClick={() => router.forward()}>
          <ArrowRightIcon className="size-4.5" />
        </Button>
      </div>
    );
  }

  return null;
}

export { AppTopbar, BackwardAndForward };
