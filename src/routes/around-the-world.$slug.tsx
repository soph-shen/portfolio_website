import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";

const locationTitles: Record<string, string> = {
  "chapel-hill-rtp": "Chapel Hill / RTP",
  "coming-soon": "Coming soon",
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
            I&apos;m still gathering notes, photos, and favorite spots for this
            guide. It will land here once it&apos;s ready to share.
          </p>
        </div>
      </div>
    </div>
  );
}

