import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/music-playlists_/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/on-repeat/$slug", params: { slug: params.slug }, replace: true });
  },
});
