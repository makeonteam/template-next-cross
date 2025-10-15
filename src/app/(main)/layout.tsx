import { SidebarProvider } from "@components/shadcn/ui/sidebar";
import AppSidebar from "@components/common/AppSidebar";

// the layout for pages in (main) group
// children is the content
export default function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="mt-safe mb-safe min-h-full w-full">{children}</main>
    </SidebarProvider>
  );
}
