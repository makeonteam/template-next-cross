import { SidebarProvider, SidebarTrigger } from "@components/shadcn/ui/sidebar";
import { AppSidebar } from "@components/AppSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
