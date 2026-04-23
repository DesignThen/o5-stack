"use client";

import * as Persona from "#/components/persona";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "#/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "#/components/ui/sidebar";
import { useClerk } from "@clerk/tanstack-react-start";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOutIcon,
  ShieldQuestionMarkIcon,
  SparklesIcon,
} from "lucide-react";

export function NavItemUser({
  children,
  ...props
}: React.ComponentProps<typeof SidebarMenuItem>) {
  const { openUserProfile, user, signOut } = useClerk();
  const { isMobile } = useSidebar();

  const persona: Persona.UserData = {
    name: user?.fullName ?? user?.firstName ?? user?.username ?? "You",
    avatar: user?.imageUrl,
    subtitle: user?.username ?? undefined,
  };

  console.log({ user });

  return (
    <SidebarMenuItem {...props}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="aria-expanded:bg-muted aria-expanded:text-foreground"
              />
            }
          >
            <Persona.UserAvatar persona={persona} />
            <Persona.UserDetails persona={persona} />

            <ChevronsUpDownIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Persona.UserAvatar persona={persona} />
                  <Persona.UserDetails persona={persona} />
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SparklesIcon />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => openUserProfile()}>
                <BadgeCheckIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <AlertDialogTrigger render={<DropdownMenuItem />}>
                <LogOutIcon />
                Sign out
              </AlertDialogTrigger>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialogContent
          size="sm"
          className="gap-0 overflow-hidden p-0 sm:max-w-sm"
        >
          <div className="flex flex-col items-center justify-center gap-2 p-8">
            <AlertDialogMedia className="rounded-full size-12 bg-violet-50 text-violet-500 dark:bg-violet-950 dark:text-violet-400">
              <ShieldQuestionMarkIcon className="size-6" />
            </AlertDialogMedia>
            <AlertDialogTitle className="text-center text-base font-semibold">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="p-0 text-center text-sm font-medium">
              You can always sign in later to your account.
            </AlertDialogDescription>
          </div>
          <AlertDialogFooter className="grid flex-none grid-cols-2 gap-0 divide-x border-t pt-0">
            <AlertDialogCancel
              variant="ghost"
              className="border-border h-12 flex-1 rounded-none border-0 border-r p-0"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              className="h-12 flex-1 rounded-none border-0 p-0"
              onClick={() => signOut({ redirectUrl: "/" })}
            >
              Sign Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {children}
    </SidebarMenuItem>
  );
}
