const nav = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#off-the-clock", label: "Off the clock" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-md border border-border bg-paper font-display text-base font-semibold text-foreground">
            SS
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" aria-hidden />
          </span>
          <span className="hidden font-display text-base font-medium tracking-tight text-foreground sm:inline">
            Sophia Shen
          </span>
        </a>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>
        <nav className="flex items-center gap-4 text-sm md:hidden">
          {nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}