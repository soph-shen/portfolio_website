import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type Location = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const locations: Location[] = [
  {
    slug: "chapel-hill-rtp",
    title: "Chapel Hill / RTP",
    description: "A local guide to my home base — study spots, coffee, and weekend trails.",
    tags: ["Eats", "Hang", "Nature"],
    image: "https://placehold.co/800x450/FAF7F1/2B2622?text=Chapel+Hill+%2F+RTP",
  },
  {
    slug: "coming-soon",
    title: "Coming soon",
    description: "More cities and neighborhoods are on the way. Check back for updates.",
    tags: ["Eats", "Shop", "Hang", "Nature"],
    image: "https://placehold.co/800x450/FAF7F1/2B2622?text=Coming+soon",
  },
];

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
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <BackLink />

      <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        01 — Around the World
      </p>
      <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-cream md:text-5xl">
        Where I&apos;ve been, eaten, and explored
      </h1>
      <p className="mt-6 max-w-2xl text-base text-cream/70 md:text-lg">
        Restaurant recs, local guides, and favorite spots. Most are in the US, but I am adding more
        to my collection.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>
    </div>
  );
}

function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      to="/around-the-world/$slug"
      params={{ slug: location.slug }}
      className="card-lift group block overflow-hidden rounded-xl border border-cream/15 bg-paper hover:border-gold"
    >
      <div className="aspect-video overflow-hidden bg-cream-deep">
        <img
          src={location.image}
          alt={location.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
          {location.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">{location.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {location.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-charcoal/15 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

function BackLink() {
  return (
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
  );
}
