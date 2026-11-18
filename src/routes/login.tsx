import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LovableMark } from "@lovable.dev/cloud-auth-js/react";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";
import { oauthReturnPath } from "@/lib/oauth-return-path";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>) => ({ next: oauthReturnPath(s.next) }),
  head: () => ({
    meta: [
      { title: "Assistant Sign In — Sophia Shen" },
      { name: "description", content: "Sign in to authorize portfolio assistant tools." },
      { property: "og:title", content: "Assistant Sign In — Sophia Shen" },
      {
        property: "og:description",
        content: "Secure sign-in for portfolio assistant connections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});
function Login() {
  const { next } = Route.useSearch();
  const [signup, setSignup] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) window.location.replace(next);
    });
    return () => {
      active = false;
    };
  }, [next]);
  async function password(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    try {
      const result = signup
        ? await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: new URL(
                `/login?next=${encodeURIComponent(next)}`,
                window.location.origin,
              ).href,
            },
          })
        : await supabase.auth.signInWithPassword({ email, password });
      if (result.error) {
        setMessage("Unable to sign in. Check your details and try again.");
        return;
      }
      if (result.data.session) window.location.assign(next);
      else setMessage("Check your email to confirm your account, then return here to sign in.");
    } catch {
      setMessage("Sign-in is unavailable right now. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  async function social(provider: "google" | "lovable") {
    setBusy(true);
    setMessage("");
    try {
      // A public callback retains next until the session is hydrated.
      const callback = new URL(`/login?next=${encodeURIComponent(next)}`, window.location.origin)
        .href;
      const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: callback });
      if (result.error) {
        setMessage("Unable to sign in. Please try again.");
        return;
      }
      if (result.redirected) return;
      const { data } = await supabase.auth.getSession();
      if (data.session) window.location.assign(next);
      else setMessage("Sign-in did not complete. Please try again.");
    } catch {
      setMessage("Sign-in is unavailable right now. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="font-display text-3xl">{signup ? "Create an account" : "Sign in"}</h1>
      <p className="mt-4 text-muted-foreground">
        Sign in to connect an assistant. The portfolio itself remains public.
      </p>
      <div className="mt-8 grid gap-3">
        <Button variant="outline" disabled={busy} onClick={() => social("google")}>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]">
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
            />
          </svg>
          Continue with Google
        </Button>
        <Button variant="outline" disabled={busy} onClick={() => social("lovable")}>
          <LovableMark />
          Continue with Lovable
        </Button>
      </div>
      <form onSubmit={password} className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm">
          Email
          <input
            className="rounded-md border border-border bg-background px-3 py-2"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm">
          Password
          <input
            className="rounded-md border border-border bg-background px-3 py-2"
            name="password"
            type="password"
            autoComplete={signup ? "new-password" : "current-password"}
            minLength={8}
            required
          />
        </label>
        <Button disabled={busy} type="submit">
          {busy ? "Please wait…" : signup ? "Create account" : "Sign in"}
        </Button>
      </form>
      {message && (
        <p role="status" className="mt-4 text-sm">
          {message}
        </p>
      )}
      <button
        className="mt-6 text-sm underline"
        disabled={busy}
        onClick={() => {
          setSignup(!signup);
          setMessage("");
        }}
      >
        {signup ? "Already have an account? Sign in" : "Create an account"}
      </button>
    </main>
  );
}
