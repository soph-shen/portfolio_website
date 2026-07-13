import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/around-the-world")({
  component: AroundTheWorldLayout,
});

function AroundTheWorldLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Subtle globe grid motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]"
      >
        <svg
          viewBox="0 0 800 800"
          fill="none"
          className="h-[110vw] w-[110vw] min-w-[900px] text-charcoal"
        >
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1.5" />
          <ellipse
            cx="400"
            cy="400"
            rx="380"
            ry="140"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="380"
            ry="260"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="95"
            ry="380"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="285"
            ry="380"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <Outlet />
    </div>
  );
}
