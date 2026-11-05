import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PlaylistBlock } from "@/components/playlist-block";
import { getPlaylistBySlug } from "@/lib/playlist";

export const Route = createFileRoute("/on-repeat/$slug")({
  beforeLoad: ({ params }) => {
    if (!getPlaylistBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const playlist = getPlaylistBySlug(params.slug);
    const title = `${playlist?.title ?? "Playlist"} — Sophia Shen`;
    return {
      meta: [
        { title },
        { property: "og:title", content: title },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: PlaylistDetailPage,
});

function PlaylistDetailPage() {
  const { slug } = Route.useParams();
  const playlist = getPlaylistBySlug(slug);
  if (!playlist) return null;

  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 md:px-10 md:pt-14 md:pb-28">
      <Link
        to="/on-repeat"
        className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span className="relative">
          All playlists
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>

      <PlaylistBlock playlist={playlist} />
    </div>
  );
}
