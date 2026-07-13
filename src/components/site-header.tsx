import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const workItems = [
  { hash: "projects", label: "Projects" },
  { hash: "experience", label: "Experience" },
  { hash: "skills", label: "Skills" },
] as const;

const livingLifeItems = [
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

type DropdownItem =
  | { kind: "route"; to: string; label: string }
  | { kind: "anchor"; hash: string; label: string };

function NavDropdown({ label, items }: { label: string; items: readonly DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

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
      itemRefs.current[(idx + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      itemRefs.current[(idx - 1 + items.length) % items.length]?.focus();
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
        className="group relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="relative">
          {label}
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full min-w-[180px] rounded-md border border-border bg-paper py-1 shadow-lg"
        >
          {items.map((item, idx) => {
            const cls =
              "block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-cream hover:text-foreground focus:bg-cream focus:text-foreground focus:outline-none";
            const setRef = (el: HTMLAnchorElement | null) => {
              itemRefs.current[idx] = el;
            };
            if (item.kind === "route") {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  role="menuitem"
                  ref={setRef}
                  onClick={() => setOpen(false)}
                  onKeyDown={(e) => onItemKey(e, idx)}
                  className={cls}
                >
                  {item.label}
                </Link>
              );
            }
            if (isHome) {
              return (
                <a
                  key={item.hash}
                  href={`#${item.hash}`}
                  role="menuitem"
                  ref={setRef}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.hash);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${item.hash}`);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => onItemKey(e, idx)}
                  className={cls}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                role="menuitem"
                ref={setRef}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => onItemKey(e, idx)}
                className={cls}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: readonly DropdownItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 self-start text-left text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-2 pl-3">
          {items.map((item) =>
            item.kind === "route" ? (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  setOpen(false);
                  onNavigate();
                }}
                className="text-left text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <MobileAnchorLink
                key={item.hash}
                hash={item.hash}
                label={item.label}
                onNavigate={() => {
                  setOpen(false);
                  onNavigate();
                }}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}

function TopRouteLink({ to, label, onNavigate }: { to: string; label: string; onNavigate?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="group relative rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

function MobileTopLink({ to, label, onNavigate }: { to: string; label: string; onNavigate?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="w-fit text-left text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

function MobileAnchorLink({ hash, label, onNavigate }: { hash: string; label: string; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const baseCls = "w-fit text-left text-muted-foreground transition-colors hover:text-foreground";

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
        {label}
      </a>
    );
  }

  return (
    <Link to="/" hash={hash} onClick={onNavigate} className={baseCls}>
      {label}
    </Link>
  );
}

const workDropdownItems: readonly DropdownItem[] = workItems.map((i) => ({
  kind: "anchor" as const,
  hash: i.hash,
  label: i.label,
}));
const livingLifeDropdownItems: readonly DropdownItem[] = livingLifeItems.map((i) => ({
  kind: "route" as const,
  to: i.to,
  label: i.label,
}));

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
          <NavDropdown label="Work" items={workDropdownItems} />
          <TopRouteLink to="/thoughts" label="Thoughts" />
          <NavDropdown label="Living Life" items={livingLifeDropdownItems} />
          <AnchorLink hash="contact" label="Contact" />
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
          <MobileAccordion
            label="Work"
            items={workDropdownItems}
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileTopLink
            to="/thoughts"
            label="Thoughts"
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileAccordion
            label="Living Life"
            items={livingLifeDropdownItems}
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileAnchorLink
            hash="contact"
            label="Contact"
            onNavigate={() => setMobileOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}