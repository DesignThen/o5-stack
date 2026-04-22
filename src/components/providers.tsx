import { Toaster } from "#/components/ui/sonner";
import { TooltipProvider } from "#/components/ui/tooltip";
import { ThemeProvider } from "#/context/theme";
import { env } from "#/env";
import { ClerkProvider, useAuth } from "@clerk/tanstack-react-start";
import { shadcn } from "@clerk/ui/themes";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import PostHogProvider from "../integrations/posthog";

interface Props {
  children: React.ReactNode;
  convexClient: React.ComponentProps<typeof ConvexProviderWithClerk>["client"];
}

export function ApplicationProviders({ children, convexClient }: Props) {
  return (
    <ThemeProvider>
      <ClerkProvider
        appearance={{ theme: shadcn }}
        publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY}
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        signInFallbackRedirectUrl="/"
        signUpFallbackRedirectUrl="/"
      >
        <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
          <PostHogProvider>
            <TooltipProvider>
              {children}
              <Toaster richColors />
            </TooltipProvider>
          </PostHogProvider>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ThemeProvider>
  );
}
