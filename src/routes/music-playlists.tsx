import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Headphones, Music } from "lucide-react";
import { MusicCollage } from "@/components/music-collage";

export const Route = createFileRoute("/music-playlists")({
  head: () => ({
    meta: [
      { title: "Music Playlists — Sophia Shen" },
      {
        name: "description",
        content:
          "Playlists across languages, genres, moods, and eras — curated by Sophia Shen.",
      },
      { property: "og:title", content: "Music Playlists — Sophia Shen" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content:
          "Playlists across languages, genres, moods, and eras — curated by Sophia Shen.",
      },
    ],
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap" }],
  }),
  component: MusicPlaylistsPage,
});

function MusicPlaylistsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <MusicCollage />

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
            Playlists
          </h1>
          <Music className="h-6 w-6 text-gold md:h-8 md:w-8" strokeWidth={1.5} />
        </div>
        <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">
          I get bored of English pop pretty easily, so I&apos;m always digging for
          something new. Here you&apos;ll find playlists spanning different
          languages, genres, moods, and eras.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <div className="w-full max-w-md rounded-xl border border-gold/30 bg-paper/80 p-10 text-center shadow-sm">
            <Headphones className="mx-auto h-8 w-8 text-gold" strokeWidth={1.5} />
            <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Coming soon
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              First playlist drops soon.
            </p>
          </div>
        </div>

        {/*
          Future playlist grid — swap this in when real playlists are ready.

          <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playlists.map((p) => (
              <article
                key={p.id}
                className="card-lift rounded-xl border border-cream/15 bg-paper p-5"
              >
                <div className="aspect-square overflow-hidden rounded-md bg-cream-deep">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-foreground">
                  {p.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-charcoal/15 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <details className="mt-4 rounded-md border border-charcoal/10 bg-cream/40">
                  <summary className="cursor-pointer px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
                    Tracklist
                  </summary>
                  <div className="border-t border-charcoal/10 px-3 py-2">
                    <div className="grid grid-cols-[24px_1fr_auto] gap-3 pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                      <span>#</span>
                      <span>Title / Artist</span>
                      <span>Time</span>
                    </div>
                    <ol className="divide-y divide-charcoal/10">
                      {p.tracks.map((t, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[24px_1fr_auto] items-center gap-3 py-2 text-sm text-foreground/80"
                        >
                          <span className="font-mono text-xs text-foreground/50">
                            {i + 1}
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate">{t.title}</span>
                            <span className="block truncate text-xs text-foreground/60">
                              {t.artist}
                            </span>
                          </span>
                          <span className="font-mono text-xs text-foreground/60">
                            {t.duration}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              </article>
            ))}
          </div>
        */}
      </div>
    </div>
  );
}