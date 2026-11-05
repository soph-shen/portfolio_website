import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/around-the-world/")({
  beforeLoad: () => {
    throw redirect({ to: "/wandering", replace: true });
  },
});
