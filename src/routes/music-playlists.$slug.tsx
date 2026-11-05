import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/music-playlists/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/on-repeat/$slug", params: { slug: params.slug }, replace: true });
  },
});
