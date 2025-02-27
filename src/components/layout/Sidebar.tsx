
import { 
  LayoutDashboard, 
  Music, 
  Calendar, 
  Users, 
  UserCog, 
  Settings, 
  Menu,
  ChevronLeft,
  Mic2,
  Piano,
  Guitar
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Music Programs", path: "/courses", icon: <Music className="w-5 h-5" /> },
    { name: "Lesson Schedule", path: "/scheduling", icon: <Calendar className="w-5 h-5" /> },
    { name: "Instructors", path: "/teachers", icon: <Mic2 className="w-5 h-5" /> },
    { name: "Students", path: "/students", icon: <Users className="w-5 h-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg text-sidebar-foreground">Harmony Academy</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className={cn(
            "rounded-md p-2 hover:bg-sidebar-accent text-sidebar-foreground transition-colors",
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
                    "menu-item text-sidebar-foreground", 
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

      <div className="mt-auto p-2">
        <div className="rounded-md bg-primary/10 p-2 mb-2">
          <div className="flex items-center gap-2">
            <Piano className="h-4 w-4 text-primary flex-shrink-0" />
            {!collapsed && (
              <div className="text-xs overflow-hidden">
                <p className="font-medium truncate">Now Playing:</p>
                <p className="opacity-70 truncate">Student Recital - Piano Sonata</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-2",
          collapsed && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <UserCog className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Music Teacher</span>
              <span className="text-xs opacity-80">teacher@harmony.edu</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
