import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in/$")({
  validateSearch: (search: Record<string, unknown>) => {
    const raw =
      typeof search.redirect === "string" ? search.redirect : undefined;
    // Only allow relative redirects to prevent open-redirect attacks.
    const redirect =
      raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : undefined;
    return { redirect };
  },
  component: SignInPage,
});

function SignInPage() {
  const { redirect } = Route.useSearch();

  return <SignIn fallbackRedirectUrl={redirect ?? "/"} />;
}
