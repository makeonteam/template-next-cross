import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@components/shadcn/ui/button";
import SidebarToggler from "@components/common/SidebarToggler";

function AppTopbar({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex h-12 w-full items-center select-none" {...props}>
      <div className="flex items-center gap-2 p-2">
        <SidebarToggler variant="smart" />
        <BackwardAndForward />
      </div>
      {children}
    </div>
  );
}

function BackwardAndForward() {
  const router = useRouter();

  return (
    <div className="flex gap-[1px]">
      <Button variant="ghost" size="icon" onClick={() => router.back()}>
        <ArrowLeftIcon className="size-4.5" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => router.forward()}>
        <ArrowRightIcon className="size-4.5" />
      </Button>
    </div>
  );
}

export { AppTopbar, BackwardAndForward };
