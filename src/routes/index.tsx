import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sophia Shen — Data Science × Health Policy" },
      { name: "description", content: "Portfolio of Sophia Shen, a Data Science and Health Policy student at UNC-CH working on ML for healthcare and neuroimaging." },
      { property: "og:title", content: "Sophia Shen — Data Science × Health Policy" },
      { property: "og:description", content: "Portfolio of Sophia Shen — ML, neuroimaging, and healthcare data." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featured = projects[0];
  return (
    <>
      {/* Editorial masthead */}
      <section className="border-b border-[var(--rule)]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <div className="relative">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="relative grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
              {/* Methodology / sidebar */}
              <aside className="order-2 space-y-7 md:order-1 md:border-r md:border-[var(--rule)] md:pr-10">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
                    Researcher
                  </p>
                  <p className="border-b border-[var(--rule)] pb-2 text-base font-medium">
                    Sophia Shen
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
                      Institution
                    </p>
                    <p className="text-sm leading-relaxed">UNC&nbsp;–&nbsp;Chapel Hill</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
                      Class
                    </p>
                    <p className="text-sm">2027</p>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
                    Laboratory
                  </p>
                  <p className="text-sm leading-relaxed">
                    Boerwinkle Lab
                    <br />
                    Department of Genetics
                  </p>
                </div>
                <div className="border border-[var(--rule)] bg-[color:var(--paper-warm)] p-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--teal-deep)]">
                    Current Study
                  </p>
                  <p className="text-xs italic leading-relaxed text-[color:var(--foreground)]/75">
                    Automated rs-fMRI Component Classification — achieved 77% recall on
                    clinical validation sets.
                  </p>
                </div>
              </aside>

              {/* Abstract / lead */}
              <motion.div
                initial={{ opacity: 0.001, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="order-1 md:order-2"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
                  Perspective &amp; Profile
                </p>
                <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
                  Bridging clinical intuition and{" "}
                  <span className="italic font-normal text-[color:var(--blue-ink)]">
                    algorithmic precision
                  </span>
                  .
                </h1>
                <p className="mt-8 max-w-xl font-display text-lg font-light leading-relaxed text-[color:var(--foreground)]/80 md:text-xl">
                  A dual-major in{" "}
                  <span className="border-b border-[color:var(--blue-ink)]/30 px-0.5 text-[color:var(--blue-ink)]">
                    Data Science
                  </span>{" "}
                  and{" "}
                  <span className="border-b border-[color:var(--teal-deep)]/30 px-0.5 text-[color:var(--teal-deep)]">
                    Health Policy &amp; Management
                  </span>{" "}
                  at UNC-CH, exploring the messy intersection of biomedical signals,
                  public health equity, and the models we trust to interpret them.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    to="/projects"
                    className="border-b-2 border-[color:var(--teal-deep)] pb-1 text-sm font-semibold tracking-wide transition-colors hover:text-[color:var(--teal-deep)]"
                  >
                    Read research
                  </Link>
                  <span className="h-px w-12 bg-[color:var(--rule)]" />
                  <Link
                    to="/contact"
                    className="text-sm text-[color:var(--muted-ink)] transition-colors hover:text-foreground"
                  >
                    Correspondence
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="mt-14 flex items-center justify-end gap-2 border-t border-[var(--rule)] pt-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
                Vol. 01 / No. 01
              </span>
              <div className="h-px w-4 bg-[color:var(--rule)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial note */}
      <section className="border-b border-[var(--rule)] bg-[color:var(--paper-warm)]/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[160px_1fr] md:gap-12 md:px-10">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
              From the Editor
            </p>
            <p className="text-[11px] italic text-[color:var(--muted-ink)]">Note 01</p>
          </div>
          <div>
            <p className="font-display text-2xl leading-snug text-foreground/85 md:text-3xl">
              I&apos;m curious about how clinicians, patients, and policymakers learn to
              trust a model — and what it costs them when that trust is misplaced. My
              work lives in that small, careful margin.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground hover:text-[color:var(--teal-deep)]"
            >
              <span className="border-b border-[color:var(--teal-deep)] pb-0.5">More on the work</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <div className="flex items-end justify-between border-b border-[var(--rule)] pb-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
                Featured Article
              </p>
              <h2 className="mt-2 font-display text-3xl italic tracking-tight">
                Selected research
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-ink)] hover:text-foreground"
            >
              Index of work →
            </Link>
          </div>
          <div className="mt-2">
            {featured && <FeaturedArticle project={featured} />}
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedArticle({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="grid gap-10 py-12 md:grid-cols-[160px_1fr] md:gap-12">
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
          Article No. 01
        </p>
        <p className="text-[11px] italic text-[color:var(--muted-ink)]">{project.dates}</p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
          {project.role}{project.org ? ` — ${project.org}` : ""}
        </p>
        <h3 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-6 max-w-2xl font-display text-lg leading-relaxed text-foreground/80">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
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
