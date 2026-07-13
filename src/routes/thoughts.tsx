import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: [
      { title: "Thoughts — Sophia Shen" },
      {
        name: "description",
        content:
          "Short notes and reflections from Sophia Shen on data, health, and building.",
      },
      { property: "og:title", content: "Thoughts — Sophia Shen" },
      {
        property: "og:description",
        content:
          "Short notes and reflections from Sophia Shen on data, health, and building.",
      },
    ],
  }),
  component: ThoughtsPage,
});

function ThoughtsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
        01 — Thoughts
      </p>
      <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
        Notes in the margins
      </h1>
      <p className="mt-6 text-base text-muted-foreground md:text-lg">
        A slower space for half-formed ideas — on data, health, and the small
        details of building things. New entries land here when I have something
        worth writing down.
      </p>

      <div className="mt-12 space-y-8">
        <article className="rounded-lg border border-charcoal/15 bg-paper p-6 md:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Coming soon
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground">
            First entry
          </h2>
          <p className="mt-3 text-muted-foreground">
            I'm collecting a few ideas before I put them here. Check back
            shortly.
          </p>
        </article>
      </div>
    </section>
  );
}