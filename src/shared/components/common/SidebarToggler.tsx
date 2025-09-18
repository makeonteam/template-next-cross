import { PanelLeftIcon } from "lucide-react";
import { Button } from "@components/shadcn/ui/button";
import { useSidebar } from "@components/shadcn/ui/sidebar";

interface ToggleSidebarProps {
  variant?: "normal" | "smart";
}

function SidebarToggler({ variant = "normal" }: ToggleSidebarProps) {
  const { open, isMobile, toggleSidebar } = useSidebar();

  if (variant === "normal" || (variant === "smart" && !open) || isMobile) {
    return (
      <Button variant="ghost" size="icon" onClick={() => toggleSidebar()}>
        <PanelLeftIcon className="size-4.5" />
      </Button>
    );
  }

  return null;
}

export default SidebarToggler;
