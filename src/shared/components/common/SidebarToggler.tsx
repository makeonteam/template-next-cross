import { PanelLeftIcon } from "lucide-react";
import { Button } from "@components/shadcn/ui/button";
import { useSidebar } from "@components/shadcn/ui/sidebar";

interface ToggleSidebarProps {
  variant: "normal" | "smart";
}

function SidebarToggler({ variant }: ToggleSidebarProps) {
  const { open, toggleSidebar } = useSidebar();

  if (variant === "normal") {
    return (
      <Button variant="ghost" size="icon" onClick={() => toggleSidebar()}>
        <PanelLeftIcon className="size-4.5" />
      </Button>
    );
  }

  if (variant === "smart" && !open) {
    return (
      <Button variant="ghost" size="icon" onClick={() => toggleSidebar()}>
        <PanelLeftIcon className="size-4.5" />
      </Button>
    );
  }

  return null;
}

export default SidebarToggler;
