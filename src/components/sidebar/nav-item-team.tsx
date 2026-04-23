"use client";

import * as Persona from "#/components/persona";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem } from "#/components/ui/sidebar";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import * as React from "react";

interface Props extends React.ComponentProps<typeof SidebarMenuItem> {
  teams: Persona.TeamData[];
}

export function NavItemTeam({ teams, children, ...props }: Props) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenuItem {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <SidebarMenuButton className="w-fit px-1.5 aria-expanded:bg-muted aria-expanded:text-foreground" />
          }
        >
          <Persona.TeamAvatar persona={activeTeam} className="size-5" />
          <Persona.TeamDetails persona={activeTeam} />

          <ChevronDownIcon className="opacity-50" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-64 rounded-lg"
          align="start"
          side="bottom"
          sideOffset={4}
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-xs border">
                  {team.logo}
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <PlusIcon className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {children}
    </SidebarMenuItem>
  );
}
