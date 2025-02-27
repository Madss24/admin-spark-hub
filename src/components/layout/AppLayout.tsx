
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./SidebarProvider";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSidebar } from "./SidebarProvider";

function AppLayoutContent() {
  const { collapsed } = useSidebar();
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          !isMobile && collapsed ? "pl-16" : "pl-0 md:pl-64"
        )}
      >
        <Navbar />
        <main className="p-4 md:p-6 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppLayoutContent />
    </SidebarProvider>
  );
}
