"use client";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { cn } from "#/lib/utils";
import { BuildingIcon } from "lucide-react";

export type UserData = {
  name: string;
  subtitle?: string | undefined;
  avatar: string | undefined;
};

function formatInitials(str: string) {
  const initials = str
    .normalize()
    .trim()
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean);

  if (initials.length > 2) {
    initials.length = 2;
  }

  return initials.join("").toUpperCase();
}

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
      <span className="truncate font-medium text-card-foreground">
        {persona.name}
      </span>
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
  const initials = formatInitials(persona.name);

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
  subtitle?: string | undefined;
  logo: string;
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
        "aspect-square overflow-hidden size-6 grid place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground relative",
        className,
      )}
      {...props}
    >
      {persona.logo ? (
        <img
          src={persona.logo}
          alt={persona.name}
          className="object-cover object-center absolute inset-0"
          width={80}
          height={80}
        />
      ) : (
        <BuildingIcon />
      )}
    </div>
  );
}
