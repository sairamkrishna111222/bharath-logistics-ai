import { Factory, Anchor, Ship, Route, Activity, LayoutDashboard } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/bharath-sail-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, end: true },
  { title: "Steel Plants", url: "/steel-plants", icon: Factory },
  { title: "Port Info", url: "/ports", icon: Anchor },
  { title: "Vessel Info", url: "/vessels", icon: Ship },
  { title: "Route Data", url: "/routes", icon: Route },
  { title: "Status Info", url: "/status", icon: Activity },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Bharath Sail Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-bold bg-gradient-to-r from-steel-primary to-steel-accent bg-clip-text text-transparent">
            Bharath Sail
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.end}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                      activeClassName="bg-primary text-primary-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
