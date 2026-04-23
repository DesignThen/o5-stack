import type {
  LinkOptions,
  RegisteredRouter,
  ValidateLinkOptions,
} from "@tanstack/react-router";
import { useMatches } from "@tanstack/react-router";

// Route metadata is the single source of truth for application breadcrumbs.
export type RouteBreadcrumb = {
  label: string;
  visible: boolean;
  linkOptions: LinkOptions;
};

export type ApplicationBreadcrumb = {
  id: string;
  title: string;
  linkOptions: LinkOptions;
};

export function defineBreadcrumb<TOptions>(breadcrumb: {
  label: string;
  visible: boolean;
  linkOptions: ValidateLinkOptions<RegisteredRouter, TOptions>;
}): RouteBreadcrumb {
  return breadcrumb as RouteBreadcrumb;
}

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    breadcrumb: RouteBreadcrumb;
  }
}

export function useApplicationBreadcrumbs() {
  return useMatches({
    select: (matches) =>
      matches.flatMap((match) => {
        const breadcrumb = match.staticData.breadcrumb;

        if (!breadcrumb.visible) {
          return [];
        }

        return [
          {
            id: match.id,
            title: breadcrumb.label,
            linkOptions: breadcrumb.linkOptions,
          } satisfies ApplicationBreadcrumb,
        ];
      }),
  });
}
