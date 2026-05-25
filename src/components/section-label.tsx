export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
      <span className="text-[color:var(--teal-deep)]">{index}</span>
      <span className="h-px w-10 bg-[color:var(--rule)]" />
      <span>{children}</span>
    </div>
  );
}