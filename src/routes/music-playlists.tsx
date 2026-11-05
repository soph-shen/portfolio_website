import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Music } from "lucide-react";
import { MusicCollage } from "@/components/music-collage";
import { PlaylistBlock } from "@/components/playlist-block";

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

        <PlaylistBlock />
      </div>
    </div>
  );
}