"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "#/components/ui/sidebar";
import {
  ArrowUpRightIcon,
  LinkIcon,
  MoreHorizontalIcon,
  StarOffIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";

type ButtonProps = Omit<
  React.ComponentProps<typeof SidebarMenuButton>,
  "children" | "render"
>;

export interface RouteProps extends ButtonProps {
  item: {
    title: string;
    url: string;
    icon: React.ReactNode;
    badge?: React.ReactNode;
  };
}

export function Page({ item, ...props }: RouteProps) {
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        render={<a href={item.url} title={item.title} />}
        {...props}
      >
        {item.icon}
        <span>{item.title}</span>
      </SidebarMenuButton>

      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
    </SidebarMenuItem>
  );
}

export function Detail({ item, ...props }: RouteProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        render={<a href={item.url} title={item.title} />}
        {...props}
      >
        {item.icon}
        <span>{item.title}</span>
      </SidebarMenuButton>

      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <SidebarMenuAction showOnHover className="aria-expanded:bg-muted" />
          }
        >
          <MoreHorizontalIcon />
          <span className="sr-only">More</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align={isMobile ? "end" : "start"}
        >
          <DropdownMenuItem>
            <StarOffIcon className="text-muted-foreground" />
            <span>Remove from Favorites</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LinkIcon className="text-muted-foreground" />
            <span>Copy Link</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowUpRightIcon className="text-muted-foreground" />
            <span>Open in New Tab</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2Icon className="text-muted-foreground" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

export interface ActionProps extends ButtonProps {
  item: {
    title: string;
    onClick: () => void;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
  };
}

export function Action({ item, ...props }: ActionProps) {
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton {...props}>
        {item.icon ? item.icon : <MoreHorizontalIcon />}
        <span>{item.title}</span>
      </SidebarMenuButton>
      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
    </SidebarMenuItem>
  );
}
