
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  User, 
  Settings, 
  Menu,
  ChevronLeft
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Courses", path: "/courses", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Scheduling", path: "/scheduling", icon: <Calendar className="w-5 h-5" /> },
    { name: "Teachers", path: "/teachers", icon: <User className="w-5 h-5" /> },
    { name: "Students", path: "/students", icon: <Users className="w-5 h-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-border bg-sidebar",
        "bg-sidebar transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">SchoolSpark</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className={cn(
            "rounded-md p-2 hover:bg-sidebar-accent transition-colors",
            collapsed ? "mx-auto" : "ml-auto"
          )}
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? (
            <Menu className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    "menu-item", 
                    isActive && "menu-item-active",
                    collapsed && "justify-center px-2"
                  )
                }
                title={collapsed ? item.name : undefined}
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className={cn(
          "flex items-center gap-2",
          collapsed && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-muted-foreground">admin@school.com</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
