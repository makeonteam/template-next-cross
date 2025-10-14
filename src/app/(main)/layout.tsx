import { SidebarProvider } from "@components/shadcn/ui/sidebar";
import AppSidebar from "@components/common/AppSidebar";

// the layout for pages in (main) group
// children is the content
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="mt-safe mt-safe min-h-full w-full">{children}</main>
    </SidebarProvider>
  );
}
