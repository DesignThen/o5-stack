import { ApplicationBreadcrumbs } from "#/components/application-breadcrumbs";
import { SidebarLeft } from "#/components/sidebar/sidebar-left";
import { SidebarRight } from "#/components/sidebar/sidebar-right";
import { Separator } from "#/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "#/components/ui/sidebar";
import * as authState from "#/lib/server/auth-state";
import { createFileRoute, linkOptions, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_core")({
  staticData: {
    breadcrumb: {
      label: "Dashboard",
      linkOptions: linkOptions({ to: "/" }),
    },
  },
  component: RouteComponent,
  beforeLoad: async () => {
    await authState.isUser({ data: { redirectTo: "/" } });
  },
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <ApplicationBreadcrumbs />
          </div>
        </header>
        <Outlet />

        {/* <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50" />
        </div> */}
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
