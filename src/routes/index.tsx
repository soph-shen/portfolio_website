import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import portrait from "@/assets/sophia-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sophia (Xiyuan) Shen — Data Science & Health Policy" },
      {
        name: "description",
        content:
          "Portfolio of Sophia (Xiyuan) Shen — Data Science & Health Policy at UNC–Chapel Hill. Machine learning, healthcare analytics, and software projects.",
      },
      { property: "og:title", content: "Sophia (Xiyuan) Shen — Portfolio" },
      {
        property: "og:description",
        content:
          "Data Science & Health Policy at UNC–Chapel Hill. ML, healthcare analytics, and software projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

type Project = {
  title: string;
  description: string;
  tags: string[];
  code: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Chinese Digit Classifier",
    description:
      "A neural network built from scratch (no ML libraries) with a draw-to-predict web app.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "NumPy"],
    code: "https://github.com/soph-shen/neuralnetwork",
  },
  {
    title: "FrozenLake RL",
    description:
      "Reinforcement learning agents (DQN, DRQN, QR-DRQN, RND-DRQN) for a partially observable, windy grid world, with a full research paper.",
    tags: ["Python", "PyTorch", "Gymnasium"],
    code: "https://github.com/soph-shen/FrozenLake-RL",
  },
  {
    title: "Predicting Diabetes Risk",
    description: "Modeling the top drivers of diabetes from CDC survey data.",
    tags: ["Python", "scikit-learn", "pandas"],
    code: "https://github.com/soph-shen/predictingdiabetes",
  },
  {
    title: "Federal Budget Analysis",
    description:
      "Predicting federal grant cuts across the UNC system with ML.",
    tags: ["Python", "scikit-learn", "pandas"],
    code: "https://github.com/soph-shen/DataAnalysis_FederalBudget",
  },
];

const skills = [
  { label: "Languages", items: ["Python", "SQL", "R"] },
  {
    label: "Libraries & ML",
    items: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
  },
  { label: "Web & App", items: ["React", "FastAPI"] },
  {
    label: "Tools & Platforms",
    items: ["Tableau", "Stata", "Excel", "GitHub", "Claude Code"],
  },
];

const GITHUB = "https://github.com/soph-shen";
const LINKEDIN = "https://www.linkedin.com/in/xiyuan-shen-13a41b2b1";
const EMAIL = "xiyuan.shen@outlook.com";

function Index() {
  return (
    <>
      {/* HERO — solid warm cream */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden bg-cream">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-6 pt-24 text-center md:px-10 md:pb-8 md:pt-32">
          <div className="h-40 w-40 overflow-hidden rounded-full border border-border bg-paper shadow-sm md:h-48 md:w-48">
            <img
              src={portrait.url}
              alt="Sophia (Xiyuan) Shen"
              className="h-full w-full object-cover"
              style={{ objectPosition: "68% 30%" }}
            />
          </div>
          <div className="max-w-3xl space-y-5">
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Sophia <span className="italic text-charcoal">(Xiyuan)</span> Shen
            </h1>
            <p className="font-display text-xl leading-snug text-foreground/85 md:text-2xl">
              {/* tagline — highlight one keyword when set. Example structure kept below. */}
              A data <span className="highlight-swipe">builder</span> at the intersection of health &amp; ML.
            </p>
            <p className="text-sm text-muted-foreground md:text-base">
              Data Science &amp; Health Policy @ UNC–Chapel Hill
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
            >
              <Github className="h-4 w-4 text-gold" /> GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
            >
              <Linkedin className="h-4 w-4 text-gold" /> LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-charcoal px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-charcoal-soft"
            >
              <Mail className="h-4 w-4 text-gold" /> Email
            </a>
          </div>
        </div>
        {/* PULL QUOTE — continues the hero */}
        <div className="mx-auto max-w-[680px] px-6 pb-24 pt-6 text-center md:px-8 md:pb-28 md:pt-8">
          <blockquote
            style={{ fontFamily: "var(--font-quote)" }}
            className="text-[28px] italic leading-[1.25] tracking-tight text-charcoal md:text-[32px] md:leading-[1.3]"
          >
            <span className="mr-1 text-gold">“</span>
            Data is everywhere, but the glamorous part is the smallest part. You
            spend something like 95% of your time cleaning data and maybe 5%
            actually modeling it. I've also stopped believing good data science
            means hitting 90%+ accuracy. It means serving the people the data
            came from, and that starts with picking the right metric to measure
            in the first place.
            <span className="ml-1 text-gold">”</span>
          </blockquote>
        </div>
      </section>

      {/* PROJECTS → OFF THE CLOCK — mixed yellow gradient */}
      <div className="yellow-mix">
      <section id="projects" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader
            number="01"
            eyebrow="Projects"
            title="Selected work"
            description="Machine learning, healthcare analytics, and full-stack builds."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20 border-t border-charcoal/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader number="02" eyebrow="Skills" title="Tools I build with" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-charcoal/20 bg-paper px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFF THE CLOCK */}
      <section id="off-the-clock" className="scroll-mt-20 border-t border-charcoal/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1fr_2fr] md:px-10">
          <SectionHeader
            number="03"
            eyebrow="Beyond Code"
            title="Off the clock"
            compact
          />
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              Gym, get outside, and rate meals on Beli. Currently hunting for
              good hiking trails around RTP (recs welcome).
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* CONTACT — white */}
      <section id="contact" className="scroll-mt-20 border-t border-charcoal/30 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <SectionHeader
            number="04"
            eyebrow="Contact"
            title="Let's talk"
            description="Open to internships and collaborations in data, health analytics, and software engineering."
            center
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
            >
              <Github className="h-4 w-4 text-gold" /> GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
            >
              <Linkedin className="h-4 w-4 text-gold" /> LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-charcoal px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-charcoal-soft"
            >
              <Mail className="h-4 w-4 text-gold" /> Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  center,
  compact,
  invert,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  compact?: boolean;
  invert?: boolean;
}) {
  const titleColor = invert ? "text-cream" : "text-foreground";
  const descColor = invert ? "text-cream/70" : "text-muted-foreground";
  return (
    <div className={center ? "mx-auto max-w-2xl" : compact ? "" : "max-w-2xl"}>
      <p className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${invert ? "text-gold" : "text-charcoal"} ${center ? "justify-center" : ""}`}>
        {number ? `${number} — ` : ""}{eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-lift group flex flex-col justify-between rounded-xl border border-charcoal/20 bg-paper p-6 hover:border-gold">
      <div>
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-charcoal/15 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-paper px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
        >
          <Github className="h-3.5 w-3.5 text-gold" /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-charcoal px-3 py-1.5 text-sm font-medium text-cream transition-colors hover:bg-charcoal-soft"
          >
            <ExternalLink className="h-3.5 w-3.5 text-gold" /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
