import { SidebarProvider } from "@components/shadcn/ui/sidebar";
import AppSidebar from "@components/common/AppSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-full">{children}</main>
    </SidebarProvider>
  );
}
