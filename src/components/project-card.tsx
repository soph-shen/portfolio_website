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
      <article className="group relative grid gap-6 border-t border-[var(--hairline)] py-10 md:grid-cols-[120px_1fr] md:gap-10">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {num} / soon
        </div>
        <div className="rounded-lg border border-dashed border-[var(--hairline)] p-8 text-muted-foreground">
          <p className="font-display text-xl text-foreground/60">Add your next project</p>
          <p className="mt-2 text-sm">A placeholder card — swap this with a future case study.</p>
        </div>
      </article>
    );
  }
  return (
    <article className="group relative grid gap-6 border-t border-[var(--hairline)] py-10 md:grid-cols-[120px_1fr] md:gap-10">
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {num} / {project.dates}
      </div>
      <div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
          {project.title}
        </h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--indigo)]">
          {project.role}{project.org ? ` · ${project.org}` : ""}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.metric && (
            <span className="inline-flex items-baseline gap-2 rounded-md bg-[color-mix(in_oklab,var(--teal)_20%,transparent)] px-3 py-1.5">
              <span className="font-display text-lg font-semibold text-foreground">
                {project.metric.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {project.metric.label}
              </span>
            </span>
          )}
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--hairline)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
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