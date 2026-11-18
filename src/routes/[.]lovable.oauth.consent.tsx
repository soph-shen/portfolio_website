import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  head: () => ({
    meta: [
      { title: "Connect an Assistant — Sophia Shen" },
      { name: "description", content: "Review and approve portfolio assistant access." },
      { property: "og:title", content: "Connect an Assistant — Sophia Shen" },
      { property: "og:description", content: "Approve or cancel a secure assistant connection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Invalid request");
    const { data } = await supabase.auth.getSession();
    if (!data.session)
      throw redirect({
        to: "/login",
        search: { next: location.pathname + location.searchStr + location.hash },
      });
  },
  loader: async ({ location }) => {
    const id = new URLSearchParams(location.searchStr).get("authorization_id")!;
    const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(id);
    if (error || !data) throw new Error("Authorization unavailable");
    if ("redirect_url" in data) throw redirect({ href: data.redirect_url });
    return data;
  },
  errorComponent: () => (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="font-display text-3xl">Connection unavailable</h1>
      <p className="mt-4">
        This request is missing, expired, or unavailable. Start a new connection from your
        assistant.
      </p>
    </main>
  ),
  component: Consent,
});
function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function decide(approve: boolean) {
    setBusy(true);
    setError("");
    try {
      const result = approve
        ? await supabase.auth.oauth.approveAuthorization(authorization_id)
        : await supabase.auth.oauth.denyAuthorization(authorization_id);
      if (result.error || !result.data?.redirect_url) {
        setError("Unable to complete this connection. Please try again.");
        return;
      }
      window.location.assign(result.data.redirect_url);
    } catch {
      setError("Unable to complete this connection. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="mx-auto max-w-lg px-6 py-16">
      <h1 className="font-display text-3xl">
        Connect {details.client.name} to Sophia Shen's portfolio
      </h1>
      <p className="mt-4">This lets {details.client.name} use the portfolio tools as you.</p>
      <p className="mt-4 text-sm text-muted-foreground">Signed in as {details.user.email}</p>
      <p className="mt-2 break-all text-sm text-muted-foreground">
        Client return address: {details.redirect_uri}
      </p>
      <ul className="mt-4 text-sm">
        {details.scope
          .split(" ")
          .filter(Boolean)
          .map((scope) => (
            <li key={scope}>
              {(
                {
                  openid: "Share your basic identity",
                  email: "Share your email address",
                  profile: "Share your basic profile",
                } as Record<string, string>
              )[scope] ?? `Additional permission requested: ${scope}`}
            </li>
          ))}
      </ul>
      <p className="mt-4">
        Access: read the public profile, projects, and experience. This does not bypass app
        permissions.
      </p>
      {error && (
        <p role="alert" className="mt-4">
          {error}
        </p>
      )}
      <div className="mt-8 flex gap-3">
        <Button disabled={busy} onClick={() => decide(true)}>
          Approve connection
        </Button>
        <Button variant="outline" disabled={busy} onClick={() => decide(false)}>
          Cancel connection
        </Button>
      </div>
      <button
        className="mt-6 text-sm underline"
        disabled={busy}
        onClick={async () => {
          await supabase.auth.signOut();
          window.location.reload();
        }}
      >
        Sign in with another account
      </button>
    </main>
  );
}
