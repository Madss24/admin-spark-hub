
import { Bell, Search, Menu, User } from "lucide-react";
import { useSidebar } from "./SidebarProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b border-border bg-primary text-primary-foreground px-4 sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="w-full flex items-center gap-2 md:ml-auto md:gap-4">
        <form className="ml-auto flex-1 md:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary-foreground/70" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground pl-8 pr-4 py-2 text-sm ring-offset-background placeholder:text-primary-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/20 focus-visible:ring-offset-2"
            />
          </div>
        </form>

        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-primary-foreground/10 text-primary-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center gap-2 p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@school.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
