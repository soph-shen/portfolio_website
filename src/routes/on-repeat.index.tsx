import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Music } from "lucide-react";
import { playlists, playlistSubtitle } from "@/lib/playlist";

export const Route = createFileRoute("/on-repeat/")({
  component: OnRepeatPage,
});

function OnRepeatPage() {
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
          Playlists
        </h1>
        <Music className="h-6 w-6 text-gold md:h-8 md:w-8" strokeWidth={1.5} />
      </div>
      <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">
        I get bored of English pop pretty easily, so I&apos;m always digging for
        something new. Here you&apos;ll find playlists spanning different
        languages, genres, moods, and eras.
      </p>

      <div className="playlist-scrap-grid mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {playlists.map((playlist) => (
          <Link
            key={playlist.id}
            to="/on-repeat/$slug"
            params={{ slug: playlist.slug }}
            className="playlist-scrap-card group relative block bg-paper px-6 py-8 text-foreground sm:px-8"
            aria-label={`Open the ${playlist.title} playlist`}
          >
            <span className="collage-tape" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">PLAYLIST</p>
            <h2 className="mt-3 font-display text-2xl leading-tight">{playlist.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{playlistSubtitle(playlist)}</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground/80">
              {playlist.tracks.slice(0, 3).map((track) => (
                <li key={`${track.title}-${track.artist}`} className="truncate">
                  {track.title} — {track.artist}
                </li>
              ))}
            </ul>
          </Link>
        ))}

        <div
          className="playlist-scrap-card relative border border-dashed border-charcoal/30 bg-paper px-6 py-8 text-foreground sm:px-8"
          aria-labelledby="more-playlists-title"
        >
          <span className="collage-tape" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">PLAYLIST</p>
          <h2 id="more-playlists-title" className="mt-3 font-display text-2xl leading-tight">More playlists coming soon</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Two more on the way. Check back soon.</p>
        </div>
      </div>
    </div>
  );
}
