import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MusicCollage } from "@/components/music-collage";

export const Route = createFileRoute("/on-repeat")({
  head: () => ({
    meta: [
      { title: "On Repeat — Sophia Shen" },
      {
        name: "description",
        content:
          "Playlists across languages, genres, moods, and eras — curated by Sophia Shen.",
      },
      { property: "og:title", content: "On Repeat — Sophia Shen" },
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
  component: OnRepeatLayout,
});

function OnRepeatLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <MusicCollage />
      <Outlet />
    </div>
  );
}
