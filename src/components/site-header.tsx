import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[color:var(--paper)]/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl italic leading-none text-foreground">
            Sophia Shen
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-[11px] uppercase tracking-[0.22em]">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 font-medium text-[color:var(--muted-ink)] transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground underline decoration-[color:var(--teal-deep)] decoration-2 underline-offset-[6px]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}