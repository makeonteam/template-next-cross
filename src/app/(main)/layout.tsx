import { SidebarProvider } from "@components/shadcn/ui/sidebar";
import AppSidebar from "@components/common/AppSidebar";

// the layout for pages in (main)
// children is the content of each page
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-full w-full">{children}</main>
    </SidebarProvider>
  );
}
