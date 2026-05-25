export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-[color:var(--indigo)]">{index}</span>
      <span className="h-px w-8 bg-[var(--hairline)]" />
      <span>{children}</span>
    </div>
  );
}