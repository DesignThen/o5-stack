"use client";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { cn } from "#/lib/utils";

export type UserData = {
  name: string;
  subtitle?: string;
  avatar: string | undefined;
};

export function UserDetails({
  className,
  children,
  persona,
  ...props
}: React.ComponentProps<"div"> & {
  persona: Pick<UserData, "name" | "subtitle">;
}) {
  return (
    <div
      className={cn("grid flex-1 text-left text-sm leading-tight", className)}
      {...props}
    >
      <span className="truncate font-medium">{persona.name}</span>
      {persona.subtitle && (
        <span className="truncate text-xs">{persona.subtitle}</span>
      )}
      {children}
    </div>
  );
}

export function UserAvatar({
  children,
  persona,
  ...props
}: React.ComponentProps<typeof Avatar> & {
  persona: Pick<UserData, "name" | "avatar">;
}) {
  const initials = persona.name[0];

  return (
    <Avatar {...props}>
      <AvatarImage src={persona.avatar} alt={persona.name} />
      <AvatarFallback>{initials}</AvatarFallback>
      {children}
    </Avatar>
  );
}

export type TeamData = {
  name: string;
  subtitle?: string;
  logo: React.ReactNode;
};

export function TeamDetails({
  className,
  children,
  persona,
  ...props
}: React.ComponentProps<"div"> & {
  persona: Pick<TeamData, "name" | "subtitle">;
}) {
  return (
    <div
      className={cn("grid flex-1 text-left text-sm leading-tight", className)}
      {...props}
    >
      <span className="truncate font-medium">{persona.name}</span>
      {persona.subtitle && (
        <span className="truncate text-xs">{persona.subtitle}</span>
      )}
      {children}
    </div>
  );
}

export function TeamAvatar({
  children,
  persona,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  persona: Pick<TeamData, "logo" | "name">;
}) {
  return (
    <div
      aria-label={persona.name}
      className={cn(
        "flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground",
        className,
      )}
      {...props}
    >
      {persona.logo}
    </div>
  );
}
