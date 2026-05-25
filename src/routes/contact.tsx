import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Sophia Shen" },
      { name: "description", content: "Get in touch with Sophia Shen — email, LinkedIn, GitHub, and resume." },
      { property: "og:title", content: "Contact — Sophia Shen" },
      { property: "og:description", content: "Email, LinkedIn, GitHub, resume." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const links = [
  { label: "Email", value: "sophia@example.com", href: "mailto:sophia@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sophiashen", href: "https://linkedin.com" },
  { label: "GitHub", value: "github.com/sophiashen", href: "https://github.com" },
];

function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <SectionLabel index="—">Correspondence</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight md:text-6xl"
        >
          Let&apos;s build something{" "}
          <span className="italic text-[color:var(--teal-deep)]">useful</span>.
        </motion.h1>
        <p className="mt-6 max-w-2xl font-display text-lg leading-relaxed text-foreground/75 md:text-xl">
          Open to research collaborations, internships, and conversations about ML in
          healthcare. The fastest way to reach me is email.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-[2fr_1fr]">
          <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-[120px_1fr_auto] items-center gap-6 py-6"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-ink)]">
                    {l.label}
                  </span>
                  <span className="font-display text-xl italic transition-colors group-hover:text-[color:var(--teal-deep)]">
                    {l.value}
                  </span>
                  <span aria-hidden className="text-[color:var(--muted-ink)] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="border border-[var(--rule)] bg-[color:var(--paper-warm)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
              Resume
            </p>
            <p className="mt-3 font-display text-xl italic">Curriculum vitae, 2026</p>
            <p className="mt-2 text-sm text-[color:var(--muted-ink)]">
              A one-page PDF with education, research, and project highlights.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 border-b-2 border-[color:var(--teal-deep)] pb-1 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:text-[color:var(--teal-deep)]"
            >
              Download PDF <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}