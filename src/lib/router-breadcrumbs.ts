import { useMatches } from "@tanstack/react-router";

// Route metadata is the single source of truth for application breadcrumbs.
export type RouteBreadcrumb = {
  label: string;
  to: string;
} | null;

export type ApplicationBreadcrumb = {
  id: string;
  title: string;
  to: string;
};

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

        if (!breadcrumb) {
          return [];
        }

        return [
          {
            id: match.id,
            title: breadcrumb.label,
            to: breadcrumb.to,
          } satisfies ApplicationBreadcrumb,
        ];
      }),
  });
}
