import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/music-playlists")({
  beforeLoad: () => {
    throw redirect({ to: "/on-repeat", replace: true });
  },
});
