"use client";

import { sidebarDemoData } from "#/components/sidebar-demo-data";
import * as SidebarMenuItemType from "#/components/sidebar/nav-item";
import { NavItemTeam } from "#/components/sidebar/nav-item-team";
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
  SidebarSeparator,
} from "#/components/ui/sidebar";
import * as React from "react";

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <NavItemTeam teams={sidebarDemoData.teams} />
        </SidebarMenu>
        <SidebarMenu>
          {sidebarDemoData.primary.map((item) => (
            <SidebarMenuItemType.Page
              key={item.title}
              item={item}
              isActive={false}
            />
          ))}
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSeparator className="mx-0" />
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
