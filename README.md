# O5 Stack App

## Setup

### Convex

Convex setup can happen via the CLI by running `bun x convex dev`.

This should add it's required env variables into `/.env.local`

```env
CONVEX_DEPLOYMENT="
VITE_CONVEX_SITE_URL="
VITE_CONVEX_URL="
```

You can also remove these values, and run the CLI again to setup or connect to a new instance.

### Auth

Auth requires your convex CLI to be authenticated, and access to the [clerk dashboard](https://dashboard.clerk.com/apps).

#### Setup

- [ ] Setup or select a [Clerk Application](https://dashboard.clerk.com/apps)
- [ ] Add VITE_CLERK_PUBLISHABLE_KEY value to `/.env.local`

#### Convex JWT

Log in to your [clerk dashboard](https://dashboard.clerk.com/apps), select an application, and navigate to `Configure > Developers > Integrations`

Enable the Convex integration, and follow the setup steps. This should enable a custom JWT template, which you can save without any other changes.

Take the provided `CLERK_FRONTEND_API_URL` value and set it as `CLERK_JWT_ISSUER_DOMAIN` in Convex.

```sh
bun x convex env set CLERK_JWT_ISSUER_DOMAIN "value"
```

#### Convex Webhooks

To continue you will need the HTTPendpoint URL for your Convex deployment. For cloud deployments, this is usually the one ending with the `.site` tld. For example `https://your-domain-123.convex.site`.

Your webhook endpoint will use this and append `/clerk-event`. For example `https://your-domain-123.convex.site/clerk-event`.

Log in to your [clerk dashboard](https://dashboard.clerk.com/apps), select an application, and navigate to `Configure > Developers > Webhooks`

Create a new Webhook endpoint with the following:

```
Endpoint URL: https://your-domain-123.convex.site/clerk-event
Subscribe to events:
- [x] organization:
   - [x] organization.created
   - [x] organization.deleted
   - [x] organization.updated
- [x] organizationMembership:
   - [x] organizationMembership.created
   - [x] organizationMembership.deleted
   - [x] organizationMembership.updated
- [x] user:
   - [x] user.created
   - [x] user.deleted
   - [x] user.updated
```

This will give you a `Signing Secret` which should be set in convex.

```sh
bun x convex env set CLERK_WEBHOOK_SECRET "value"
```

### Sentry

- [ ] Add VITE_SENTRY_DSN value to `/.env.local`
- [ ] Add VITE_SENTRY_ORG value to `/.env.local`
- [ ] Add VITE_SENTRY_PROJECT value to `/.env.local`
- [ ] Add SENTRY_AUTH_TOKEN value to `/.env.local`

### Posthog

- [ ] Add VITE_POSTHOG_KEY value to `/.env.local`
- [ ] Add VITE_POSTHOG_HOST value to `/.env.local`
