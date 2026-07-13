import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/around-the-world")({
  component: AroundTheWorldLayout,
});

function AroundTheWorldLayout() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Outlet />
    </div>
  );
}
