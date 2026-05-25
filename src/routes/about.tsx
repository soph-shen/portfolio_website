import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Sophia Shen" },
      { name: "description", content: "Sophia Shen is a Data Science and Health Policy student at UNC-CH focused on machine learning in healthcare." },
      { property: "og:title", content: "About — Sophia Shen" },
      { property: "og:description", content: "Data Science & Health Policy student at UNC-CH." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const skills = {
  Languages: ["Python", "R", "SQL"],
  "ML & Stats": ["scikit-learn", "PyTorch", "Nilearn", "NiBabel", "statsmodels"],
  "Data & Viz": ["pandas", "NumPy", "Tableau", "ggplot2", "Matplotlib"],
  Workflow: ["Git", "Jupyter", "VS Code", "Linux", "LaTeX"],
};

const timeline = [
  {
    when: "Feb 2026 – Present",
    what: "ML Research Engineer · Boerwinkle Lab",
    where: "UNC School of Medicine",
  },
  {
    when: "2024 – 2027",
    what: "B.S. Data Science & B.A. Health Policy and Management",
    where: "University of North Carolina at Chapel Hill",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel index="01">About</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl"
          >
            I work at the seam between{" "}
            <span className="text-[color:var(--indigo)]">data</span>,{" "}
            <span className="text-[color:var(--indigo)]">medicine</span>, and the{" "}
            <span className="text-[color:var(--indigo)]">policies</span> that move them.
          </motion.h1>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a rising junior at the University of North Carolina at Chapel Hill,
              dual-majoring in Data Science and Health Policy &amp; Management. My focus
              is machine learning applied to healthcare — building tools that turn
              high-dimensional biomedical signals into something a clinician can actually use.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Right now I&apos;m engineering a neuroimaging classification pipeline at the
              Boerwinkle Lab. Outside of research, I care about the policy side of how
              these models get deployed — who benefits, who gets left out, and where the
              ground truth actually comes from.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="02">Timeline</SectionLabel>
          <ul className="space-y-8">
            {timeline.map((t) => (
              <li key={t.what} className="grid gap-1 border-l border-[var(--hairline)] pl-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--indigo)]">
                  {t.when}
                </span>
                <p className="font-display text-xl font-medium">{t.what}</p>
                <p className="text-sm text-muted-foreground">{t.where}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="03">Skills &amp; tools</SectionLabel>
          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {group}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-[var(--hairline)] px-3 py-1.5 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}