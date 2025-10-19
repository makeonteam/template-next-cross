import { useTranslations } from "next-intl";
import { PanelLeftIcon } from "lucide-react";

import { Button } from "@components/shadcn/ui/button";
import { useSidebar } from "@components/shadcn/ui/sidebar";

interface ToggleSidebarProps {
  variant?: "normal" | "smart";
}

function SidebarToggler({ variant = "normal" }: ToggleSidebarProps) {
  const tMain = useTranslations();
  const { open, isMobile, toggleSidebar } = useSidebar();

  // normal to show (put it in sidebar), smart to hide when sidebar is open (put it in main page)
  // show when mobile view
  if (variant === "normal" || (variant === "smart" && !open) || isMobile) {
    return (
      <Button variant="ghost" size="icon-sm" onClick={() => toggleSidebar()}>
        <PanelLeftIcon className="size-4.5" /> <span className="sr-only">{tMain("common.action.toggle-sidebar")}</span>
      </Button>
    );
  }

  return null;
}

export default SidebarToggler;
