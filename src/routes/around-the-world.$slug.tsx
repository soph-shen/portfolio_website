import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Utensils, ShoppingBag, Coffee, Trees, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Eat = {
  name: string;
  tag: string;
  note: string;
  rating?: number;
};

type Spot = {
  name: string;
  tag?: string;
  note: string;
};

type TravelNote = {
  label: string;
  note: string;
};

type LocationGuide = {
  title: string;
  intro: string;
  eats: Eat[];
  shop: Spot[];
  hang: Spot[];
  nature: Spot[];
  travel: TravelNote[];
};

const guides: Record<string, LocationGuide> = {
  "chapel-hill-rtp": {
    title: "Chapel Hill / RTP",
    intro: "My go-to spots after a few years living and studying in the Triangle.",
    eats: [
      { name: "Coming soon", tag: "Cuisine", note: "A favorite spot for late-night study fuel.", rating: 9 },
      { name: "Coming soon", tag: "Cuisine", note: "Best weekend brunch on Franklin Street.", rating: 8 },
      { name: "Coming soon", tag: "Cuisine", note: "Cozy dinner pick for visiting family." },
    ],
    shop: [
      { name: "Coming soon", tag: "Bookstore", note: "Independent shop I can lose an hour in." },
      { name: "Coming soon", tag: "Market", note: "Saturday morning farmers market pick-ups." },
    ],
    hang: [
      { name: "Coming soon", tag: "Cafe", note: "My default remote-work spot with good light." },
      { name: "Coming soon", tag: "Bar", note: "Low-key patio for post-class hangs." },
    ],
    nature: [
      { name: "Coming soon", tag: "Trail", note: "Easy loop when I need to reset between deadlines." },
      { name: "Coming soon", tag: "Park", note: "Where I go for sunset walks in the fall." },
    ],
    travel: [
      { label: "Best time to visit", note: "Coming soon — fall for foliage, spring for basketball season." },
      { label: "Getting around", note: "Coming soon — a car helps, but the Chapel Hill Transit is free." },
      { label: "Where to stay", note: "Coming soon — notes on Franklin Street vs. Southern Village." },
    ],
  },
};

const emptyGuide: LocationGuide = {
  title: "Coming soon",
  intro: "I'm still gathering notes, photos, and favorite spots for this guide.",
  eats: [],
  shop: [],
  hang: [],
  nature: [],
  travel: [],
};

export const Route = createFileRoute("/around-the-world/$slug")({
  head: ({ params }) => {
    const title = locationTitles[params.slug] ?? params.slug;
    return {
      meta: [
        { title: `${title} — Around the World — Sophia Shen` },
        {
          name: "description",
          content: `A local guide to ${title}: eats, shops, hangouts, and nature spots.`,
        },
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { slug } = Route.useParams();
  const title = locationTitles[slug] ?? slug;

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link
        to="/around-the-world"
        className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span className="relative">
          Back to Around the World
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>

      <h1 className="mt-12 font-display text-4xl leading-[1.1] tracking-tight text-cream md:text-5xl">
        {title}
      </h1>

      <div className="mt-16 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg border border-cream/15 bg-cream/5 p-10 text-center">
          <MapPin className="mx-auto h-8 w-8 text-gold" strokeWidth={1.5} />
          <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Coming soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">
            I&apos;m still gathering notes, photos, and favorite spots for this guide. It will land
            here once it&apos;s ready to share.
          </p>
        </div>
      </div>
    </div>
  );
}
