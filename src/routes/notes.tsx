import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Pencil } from "lucide-react";

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
    <div className="min-h-screen bg-charcoal">
      <div className="mx-auto max-w-3xl px-6 pt-10 pb-20 md:px-10 md:pt-14 md:pb-28">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="relative">
            Back to home
            <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </Link>

        <h1 className="mt-10 font-display text-4xl leading-[1.1] tracking-tight text-cream md:text-5xl">
          Notes on data, health, and building things
        </h1>
        <p className="mt-6 text-base text-cream/70 md:text-lg">
          Where I write randomly about things I learn.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <div className="w-full max-w-md rounded-lg border border-cream/15 bg-cream/5 p-10 text-center">
            <Pencil className="mx-auto h-8 w-8 text-gold" strokeWidth={1.5} />
            <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Coming soon....
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              A few notes are still taking shape. They’ll land here once
              they’re ready to share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
