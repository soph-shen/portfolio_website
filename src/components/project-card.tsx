type Project = {
  title: string;
  role: string;
  org?: string;
  dates: string;
  description: string;
  metric?: { value: string; label: string };
  tags: string[];
  href?: string;
  placeholder?: boolean;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  if (project.placeholder) {
    return (
      <article className="group relative grid gap-6 border-t border-[var(--rule)] py-12 md:grid-cols-[160px_1fr] md:gap-12">
        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
          Forthcoming
        </div>
        <div className="rounded-sm border border-dashed border-[var(--rule)] bg-[color:var(--paper-warm)] p-8">
          <p className="font-display text-2xl italic text-foreground/70">A study in progress.</p>
          <p className="mt-2 text-sm text-[color:var(--muted-ink)]">
            This entry is reserved for a future case study.
          </p>
        </div>
      </article>
    );
  }
  return (
    <article className="group relative grid gap-6 border-t border-[var(--rule)] py-12 md:grid-cols-[160px_1fr] md:gap-12">
      <div className="space-y-2">
        <p className="text-[11px] italic text-[color:var(--muted-ink)]">{project.dates}</p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
          {project.role}{project.org ? ` — ${project.org}` : ""}
        </p>
        <h2 className="mt-3 font-display text-3xl leading-[1.15] tracking-tight md:text-[2.5rem]">
          {project.title}
        </h2>
        <p className="mt-5 max-w-2xl font-display text-lg leading-relaxed text-[color:var(--foreground)]/80">
          {project.description}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.metric && (
            <span className="inline-flex items-baseline gap-2 border border-[color:var(--teal-deep)]/30 bg-[color:var(--paper-warm)] px-3 py-1.5">
              <span className="font-display text-lg italic text-[color:var(--teal-deep)]">
                {project.metric.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-ink)]">
                {project.metric.label}
              </span>
            </span>
          )}
          {project.tags.map((t) => (
            <span
              key={t}
              className="border border-[var(--rule)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-ink)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export type { Project };