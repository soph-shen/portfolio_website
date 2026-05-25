import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--rule)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 md:px-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
          © {new Date().getFullYear()} Sophia Shen · Chapel Hill, North Carolina
        </p>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em]">
          <a href="mailto:sophia@example.com" className="text-[color:var(--muted-ink)] transition-colors hover:text-foreground">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted-ink)] transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted-ink)] transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <Link to="/contact" className="text-[color:var(--muted-ink)] transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}