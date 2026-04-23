"use client";

import * as SidebarMenuItemType from "#/components/sidebar/nav-item";
import { NavItemTeam } from "#/components/sidebar/nav-item-team";
import { sidebarDemoData } from "#/components/sidebar/sidebar-demo-data";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "#/components/ui/sidebar";
import * as React from "react";

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <NavItemTeam />
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarMenu>
            {sidebarDemoData.primary.map((item) => (
              <SidebarMenuItemType.Page key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Favorites</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarDemoData.detailPages.map((item) => (
                <SidebarMenuItemType.Detail key={item.title} item={item} />
              ))}

              <SidebarMenuItemType.Action
                className="text-sidebar-foreground/70"
                item={{
                  title: "Load More",
                  onClick: () => alert("todo..."),
                }}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {sidebarDemoData.secondary.map((item) => (
            <SidebarMenuItemType.Page key={item.title} item={item} size="sm" />
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
