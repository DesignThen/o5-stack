import { Waitlist } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/waitlist/$")({
  component: WaitlistPage,
});

function WaitlistPage() {
  return <Waitlist afterJoinWaitlistUrl="/" signInUrl="/sign-in" />;
}
