import { COMPANY } from "#/lib/constants";
import * as authState from "#/lib/server/auth-state";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  staticData: {
    breadcrumb: null,
  },
  component: AuthLayout,
  beforeLoad: async () => await authState.isGuest(),
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
