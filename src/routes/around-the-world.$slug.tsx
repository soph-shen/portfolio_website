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
    const title = guides[params.slug]?.title ?? "Location";
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
  const guide = guides[slug] ?? emptyGuide;

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <Link
        to="/around-the-world"
        className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span className="relative">
          Around the World
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>

      <h1 className="mt-10 font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
        {guide.title}
      </h1>
      <p className="mt-5 max-w-2xl text-base text-foreground/70 md:text-lg">{guide.intro}</p>

      <CategorySection number="01" label="Eats" icon={Utensils}>
        {guide.eats.length === 0 ? (
          <EmptyState message="Restaurant recs coming soon." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {guide.eats.map((eat, i) => (
              <div
                key={i}
                className="card-lift rounded-xl border border-charcoal/20 bg-paper p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {eat.name}
                  </h3>
                  {typeof eat.rating === "number" && (
                    <span className="shrink-0 rounded-md bg-gold/20 px-2 py-1 font-mono text-[11px] font-semibold text-foreground">
                      {eat.rating}/10
                    </span>
                  )}
                </div>
                <span className="mt-2 inline-block rounded-md border border-charcoal/15 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground">
                  {eat.tag}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{eat.note}</p>
              </div>
            ))}
          </div>
        )}
      </CategorySection>

      <CategorySection number="02" label="Shop" icon={ShoppingBag}>
        <SpotList spots={guide.shop} emptyMessage="Shop recs coming soon." />
      </CategorySection>

      <CategorySection number="03" label="Hang" icon={Coffee}>
        <SpotList spots={guide.hang} emptyMessage="Hangout spots coming soon." />
      </CategorySection>

      <CategorySection number="04" label="Nature" icon={Trees}>
        <SpotList spots={guide.nature} emptyMessage="Nature spots coming soon." />
      </CategorySection>

      <CategorySection number="05" label="Travel Guide Notes" icon={Compass}>
        {guide.travel.length === 0 ? (
          <EmptyState message="Travel notes coming soon." />
        ) : (
          <ul className="divide-y divide-cream/10 rounded-xl border border-cream/15 bg-paper">
            {guide.travel.map((note, i) => (
              <li key={i} className="p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {note.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{note.note}</p>
              </li>
            ))}
          </ul>
        )}
      </CategorySection>
    </div>
  );
}

function CategorySection({
  number,
  label,
  icon: Icon,
  children,
}: {
  number: string;
  label: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-gold" strokeWidth={1.75} />
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {number} — {label}
        </p>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SpotList({ spots, emptyMessage }: { spots: Spot[]; emptyMessage: string }) {
  if (spots.length === 0) return <EmptyState message={emptyMessage} />;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {spots.map((spot, i) => (
        <div
          key={i}
          className="card-lift rounded-xl border border-charcoal/20 bg-paper p-5"
        >
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
            {spot.name}
          </h3>
          {spot.tag && (
            <span className="mt-2 inline-block rounded-md border border-charcoal/15 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground">
              {spot.tag}
            </span>
          )}
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{spot.note}</p>
        </div>
      ))}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-charcoal/20 bg-paper p-8 text-center">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
