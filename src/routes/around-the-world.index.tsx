import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/around-the-world/")({
  head: () => ({
    meta: [
      { title: "Around the World — Sophia Shen" },
      {
        name: "description",
        content:
          "Local guides and favorite spots from places Sophia Shen has been, eaten, and explored.",
      },
      { property: "og:title", content: "Around the World — Sophia Shen" },
      {
        property: "og:description",
        content:
          "Local guides and favorite spots from places Sophia Shen has been, eaten, and explored.",
      },
    ],
  }),
  component: AroundTheWorldIndex,
});

function AroundTheWorldIndex() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 md:px-10 md:pt-14 md:pb-28">
      <BackLink />

      <div className="grid grid-cols-[minmax(0,max-content)]">
        <div className="mt-10 flex items-center gap-3">
          <span className="text-2xl md:text-3xl" aria-hidden="true">
            🌍🌎🌏
          </span>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Where I&apos;ve been, eaten, and explored
          </h1>
        </div>
        <p className="mt-6 min-w-0 text-base text-foreground/70 md:text-lg">
          I love to travel. Not to tourist sites, but to explore local culture, scenery, and food. I&apos;m a big fan of road trips (thank you NC for making me like nature). Recently, most of my trips have been within the US, but I&apos;m adding more to the collection.
        </p>
      </div>

      <div className="mt-10">
        <ComingSoonCard />
      </div>
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="card-lift group max-w-md overflow-hidden rounded-xl border border-charcoal/20 bg-paper p-6">
      <div className="flex items-center justify-center rounded-lg bg-cream-deep py-10" aria-hidden="true" />
      <div className="mt-5">
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Coming Soon
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          More cities and neighborhoods are on the way. Check back for updates.
        </p>
      </div>
    </div>
  );
}

function BackLink() {
  return (
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
  );
}
