import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const anchorNav = [
  { hash: "home", label: "Home" },
  { hash: "projects", label: "Projects" },
  { hash: "experience", label: "Experience" },
  { hash: "skills", label: "Skills" },
  { hash: "contact", label: "Contact" },
];

const livingLifeItems = [
  { to: "/thoughts", label: "Thoughts" },
  { to: "/around-the-world", label: "Around the World" },
  { to: "/music-playlists", label: "Music Playlists" },
] as const;

function AnchorLink({ hash, label, onNavigate }: { hash: string; label: string; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const baseCls =
    "group relative rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground";
  const inner = (
    <span className="relative">
      {label}
      <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
    </span>
  );

  if (isHome) {
    return (
      <a
        href={`#${hash}`}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${hash}`);
          onNavigate?.();
        }}
        className={baseCls}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link to="/" hash={hash} onClick={onNavigate} className={baseCls}>
      {inner}
    </Link>
  );
}

function LivingLifeDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onTriggerKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => itemRefs.current[0]?.focus());
    }
  };

  const onItemKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      itemRefs.current[(idx + 1) % livingLifeItems.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      itemRefs.current[(idx - 1 + livingLifeItems.length) % livingLifeItems.length]?.focus();
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKey}
        className="group relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="relative">
          Living Life
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full min-w-[180px] rounded-md border border-border bg-paper py-1 shadow-lg"
        >
          {livingLifeItems.map((item, idx) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              onClick={() => setOpen(false)}
              onKeyDown={(e) => onItemKey(e, idx)}
              className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-cream hover:text-foreground focus:bg-cream focus:text-foreground focus:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileLivingLife({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-left text-muted-foreground transition-colors hover:text-foreground"
      >
        Living Life
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-2 pl-3">
          {livingLifeItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function BrandMark() {
  return (
    <>
      <span className="relative grid h-9 w-9 place-items-center rounded-md border border-border bg-paper font-display text-base font-semibold text-foreground">
        SS
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" aria-hidden />
      </span>
      <span className="hidden font-display text-base font-medium tracking-tight text-foreground sm:inline">
        Sophia Shen
      </span>
    </>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        {isHome ? (
          <a href="#home" className="group flex items-center gap-3">
            <BrandMark />
          </a>
        ) : (
          <Link to="/" className="group flex items-center gap-3">
            <BrandMark />
          </Link>
        )}
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {anchorNav.map((item) => (
            <AnchorLink key={item.hash} hash={item.hash} label={item.label} />
          ))}
          <LivingLifeDropdown />
        </nav>
        <button
          type="button"
          className="text-sm text-muted-foreground md:hidden"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {mobileOpen && (
        <nav className="flex flex-col gap-3 border-t border-border bg-cream/95 px-6 py-4 text-sm md:hidden">
          {anchorNav.slice(1).map((item) => (
            <AnchorLink
              key={item.hash}
              hash={item.hash}
              label={item.label}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
          <MobileLivingLife onNavigate={() => setMobileOpen(false)} />
        </nav>
      )}
    </header>
  );
}