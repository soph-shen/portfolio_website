import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/around-the-world")({
  head: () => ({
    meta: [
      { title: "Around the World — Sophia Shen" },
      {
        name: "description",
        content:
          "Places Sophia Shen has wandered — photos, notes, and small memories from travels.",
      },
      { property: "og:title", content: "Around the World — Sophia Shen" },
      {
        property: "og:description",
        content:
          "Places Sophia Shen has wandered — photos, notes, and small memories from travels.",
      },
    ],
  }),
  component: AroundTheWorldPage,
});

function AroundTheWorldPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
        01 — Around the World
      </p>
      <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
        Places I've wandered
      </h1>
      <p className="mt-6 text-base text-muted-foreground md:text-lg">
        A running log of trips, favorite corners, and small memories from the
        road. Photos and notes will land here as I add them.
      </p>

      <div className="mt-12 space-y-8">
        <article className="rounded-lg border border-charcoal/15 bg-paper p-6 md:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Coming soon
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground">
            First stop
          </h2>
          <p className="mt-3 text-muted-foreground">
            Still gathering photos and notes. This page will fill in soon.
          </p>
        </article>
      </div>
    </section>
  );
}