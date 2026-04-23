import { defineBreadcrumb } from "#/lib/router-breadcrumbs";
import { COMPANY } from "#/lib/constants";
import * as authState from "#/lib/server/auth-state";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const authRoute = createFileRoute("/_auth")({
  staticData: {
    breadcrumb: {
      label: "Auth",
      visible: true,
      linkOptions: { to: "/sign-in/$", params: { _splat: "" } },
    },
  },
  component: AuthLayout,
  beforeLoad: async () => await authState.isGuest(),
});

export const Route = authRoute.update({
  staticData: {
    breadcrumb: defineBreadcrumb({
      label: "Auth",
      visible: true,
      linkOptions: { to: "/sign-in/$", params: { _splat: "" } },
    }),
  },
});

function AuthLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <COMPANY.icon className="size-4" />
          </div>
          <span>{COMPANY.siteName}</span>
        </a>
        <Outlet />
      </div>
    </div>
  );
}
