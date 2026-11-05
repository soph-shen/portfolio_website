import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/eating")({
  head: () => ({
    meta: [
      { title: "Eating — Sophia Shen" },
      {
        name: "description",
        content: "Sophia Shen's restaurant recommendations, ranked honestly.",
      },
      { property: "og:title", content: "Eating — Sophia Shen" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content: "Sophia Shen's restaurant recommendations, ranked honestly.",
      },
    ],
  }),
  component: EatingPage,
});

function EatingPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 md:px-10 md:pt-14 md:pb-28">
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span className="relative">
          Back to home
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>

      <div className="mt-10 flex items-center gap-3">
        <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
          Eating
        </h1>
        <UtensilsCrossed className="h-6 w-6 text-gold md:h-8 md:w-8" strokeWidth={1.5} />
      </div>
      <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">
        My Beli recs, ranked honestly.
      </p>

      <div className="mt-10">
        <div className="card-lift group max-w-md overflow-hidden rounded-xl border border-charcoal/20 bg-paper p-6">
          <div className="flex items-center justify-center rounded-lg bg-cream-deep py-10" aria-hidden="true" />
          <div className="mt-5">
            <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Coming Soon
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              I&apos;m still ranking my favorites. Check back for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
