import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--hairline)]">
        <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[color-mix(in_oklab,var(--indigo)_18%,transparent)] blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[color-mix(in_oklab,var(--teal)_22%,transparent)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-[color:var(--indigo)]">●</span>&nbsp; Available for Summer 2026 internships
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Sophia&nbsp;Shen.
              <br />
              <span className="text-muted-foreground">
                Data Science <span className="text-[color:var(--indigo)]">×</span> Health Policy.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build machine-learning tools that help clinicians make sense of messy biomedical data —
              currently engineering an automated rs-fMRI classification pipeline at the Boerwinkle Lab.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-0.5"
              >
                View projects
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--hairline)] px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick stats strip */}
        <div className="relative border-t border-[var(--hairline)] bg-background/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[var(--hairline)] px-6 md:grid-cols-4">
            {[
              { k: "University", v: "UNC – Chapel Hill" },
              { k: "Class of", v: "2027" },
              { k: "Majors", v: "DS · HPM" },
              { k: "Currently", v: "Boerwinkle Lab" },
            ].map((s, i) => (
              <div key={s.k} className={`py-6 ${i === 0 ? "pr-6" : "px-6"}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.k}
                </p>
                <p className="mt-2 font-display text-base font-medium">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="01">About</SectionLabel>
          <div>
            <p className="font-display text-2xl leading-snug md:text-3xl">
              Rising junior at UNC-CH, dual-majoring in{" "}
              <span className="text-[color:var(--indigo)]">Data Science</span> and{" "}
              <span className="text-[color:var(--indigo)]">Health Policy &amp; Management</span>.
              I&apos;m most curious about the messy intersection of biomedical signals,
              policy, and the models we trust to read them.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-[color:var(--indigo)]"
            >
              More about me <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between">
            <SectionLabel index="02">Featured work</SectionLabel>
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-6">
            <ProjectCard project={featured} index={0} />
          </div>
        </div>
      </section>
    </>
  );
}
