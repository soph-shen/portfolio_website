import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Sophia Shen · Built with care in Chapel Hill, NC
        </p>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.18em]">
          <a href="mailto:sophia@example.com" className="text-muted-foreground hover:text-foreground">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}