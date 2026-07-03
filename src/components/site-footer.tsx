export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Sophia Shen</p>
        <p>Built with React &amp; TanStack Start · Chapel Hill, NC</p>
      </div>
    </footer>
  );
}