import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/around-the-world/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/wandering/$slug", params: { slug: params.slug }, replace: true });
  },
});
