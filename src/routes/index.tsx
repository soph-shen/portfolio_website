import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sophia Shen Portfolio" },
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
  category: string;
  description: string;
  tags: string[];
  code: string;
  demo?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Frozen Lake Simulation",
    category: "Reinforcement Learning",
    description:
      "Reinforcement learning agents (DQN, DRQN, QR-DRQN, RND-DRQN) for a partially observable, windy grid world, with a full research paper.",
    tags: ["Python", "PyTorch", "Gymnasium"],
    code: "https://github.com/soph-shen/FrozenLake-RL",
    images: [
      "https://raw.githubusercontent.com/soph-shen/FrozenLake-RL/main/assets/map8_v5_RND-DRQN_20260419_194828.gif",
    ],
  },
  {
    title: "Chinese Digit Classifier",
    category: "Deep Learning",
    description:
      "A neural network built from scratch (no ML libraries) with a draw-to-predict web app.",
    tags: ["Python", "NumPy", "FastAPI", "React", "TypeScript"],
    code: "https://github.com/soph-shen/neuralnetwork",
    images: [
      "https://raw.githubusercontent.com/soph-shen/neuralnetwork/main/demo_five.jpg",
    ],
  },
  {
    title: "Federal Budget Analysis",
    category: "Policy Analytics",
    description:
      "Predicting federal grant cuts across the UNC system with ML.",
    tags: ["Python", "Scikit-learn", "Seaborn", "Pandas"],
    code: "https://github.com/soph-shen/DataAnalysis_FederalBudget",
  },
  {
    title: "Predicting Diabetes Risk",
    category: "Health Analytics",
    description: "Modeling the top drivers of diabetes from CDC survey data.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    code: "https://github.com/soph-shen/predictingdiabetes",
  },
];

const CORE_SKILLS = new Set([
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "GitHub",
]);

const skills = [
  { label: "Languages", items: ["Python", "SQL", "R", "HTML", "CSS", "Java"] },
  {
    label: "Libraries & ML",
    items: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "PyTorch", "Matplotlib", "Seaborn"],
  },
  {
    label: "ML & AI",
    items: ["Regression", "Classification", "Clustering", "Gradient Boosting", "Neural Networks", "Reinforcement Learning"],
  },
  {
    label: "Frameworks & Tools",
    items: ["React", "FastAPI", "Tableau", "Stata", "Excel", "GitHub", "VSCode", "Jupyter Notebook", "Git", "Docker", "Claude Code", "Notion"],
  },
];

type Experience = {
  role: string;
  org: string;
  dates: string;
  description: string;
  link?: { href: string; label: string };
};

const experience: Experience[] = [
  {
    role: "Computational Neuroimaging Research Engineer",
    org: "UNC Department of Neurology: Boerwinkle Lab",
    dates: "Feb 2026 – Present",
    description:
      "Built a Python pipeline to classify resting-state fMRI components into brain networks, seizure-onset zones, and noise for pediatric epilepsy research.",
  },
  {
    role: "Predictive Analytics Researcher",
    org: "UNC School of Data Science & Society",
    dates: "May 2025 – May 2026",
    description:
      "Developed a LASSO-based risk screener from 650+ survey records; contributed to a CDC-funded study and was selected to present at NACCHO360 2026.",
  },
  {
    role: "Data Visualization & Analytics Intern",
    org: "UNC Water Institute",
    dates: "Jan – Sept 2025",
    description:
      "Built an interactive Tableau dashboard synthesizing 4,000+ studies on environmental health services for policymakers.",
    link: {
      href: "https://public.tableau.com/app/profile/water.institute/viz/UNCWaterInstituteEnviornmentalHealthServicesinHealthcareFacilitiesEvidenceMap_17702392540970/Datadashboard",
      label: "View Dashboard",
    },
  },
];

const GITHUB = "https://github.com/soph-shen";
const LINKEDIN = "https://www.linkedin.com/in/xiyuan-shen-13a41b2b1";
const EMAIL = "xiyuan.shen@outlook.com";

function Index() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-6 pt-10 text-center md:px-10 md:pb-8 md:pt-14">
          <div className="h-40 w-40 overflow-hidden rounded-full border border-border bg-paper shadow-sm md:h-48 md:w-48">
            <img
              src="/profile.jpg"
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
              A <span className="highlight-swipe">data</span> scientist at the intersection of health and ML.
            </p>
            <p className="text-sm text-muted-foreground md:text-base">
              Data Science &amp; Health Policy @ UNC–Chapel Hill
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-charcoal/70 transition-colors hover:text-gold"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-charcoal/70 transition-colors hover:text-gold"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="text-charcoal/70 transition-colors hover:text-gold"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        {/* PULL QUOTE — continues the hero */}
        <div className="mx-auto max-w-[680px] px-6 pb-24 pt-6 text-center md:px-8 md:pb-28 md:pt-8">
          <blockquote
            style={{ fontFamily: "var(--font-quote)" }}
            className="text-[23px] italic leading-[1.25] tracking-tight text-charcoal md:text-[27px] md:leading-[1.3]"
          >
            <span className="mr-1 text-gold">“</span>
            Data is everywhere, but the glamorous part is the smallest part. You
            spend something like 95% of your time cleaning data and maybe 5%
            actually modeling it. I've also stopped believing good data science
            means hitting 90%+ accuracy. It means serving the people the data
            came from, and that starts with picking the right metric to measure.
            <span className="ml-1 text-gold">”</span>
          </blockquote>
        </div>
      </section>

      {/* PROJECTS → OFF THE CLOCK — warm gradient band */}
      <div className="warm-gradient">
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

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader number="02" eyebrow="Experience" title="Where I've worked" />
          <ol className="relative mt-10 space-y-5 pl-10 md:pl-14">
            {/* vertical timeline line */}
            <span
              aria-hidden
              className="absolute left-3 top-2 bottom-2 w-px bg-charcoal/25 md:left-5"
            />
            {experience.map((item) => (
              <li key={item.role} className="relative">
                {/* gold dot marker */}
                <span
                  aria-hidden
                  className="absolute -left-[30px] top-5 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-cream md:-left-[38px]"
                />
                <article className="rounded-xl border border-charcoal/20 bg-paper px-5 py-4 shadow-sm">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {item.dates}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-medium leading-snug tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.org}</p>
                  <p className="mt-2 text-sm leading-snug text-foreground/85">
                    {item.description}
                  </p>
                  {item.link && (
                    <div className="mt-3">
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-charcoal/20 bg-paper px-2 py-1 font-mono text-[11px] font-medium text-foreground transition-colors hover:border-gold hover:text-charcoal"
                      >
                        <ExternalLink className="h-3 w-3 text-gold" /> {item.link.label}
                      </a>
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader number="03" eyebrow="Skills" title="Tools I build with" />
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
                      className={
                        CORE_SKILLS.has(item)
                          ? "rounded-md border border-gold bg-gold px-3 py-1.5 text-sm font-medium text-charcoal"
                          : "rounded-md border border-charcoal/20 bg-paper px-3 py-1.5 text-sm text-foreground"
                      }
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
      <section id="off-the-clock" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1fr_2fr] md:px-10">
          <SectionHeader
            number="04"
            eyebrow="Beyond Code"
            title="Off the clock"
            compact
          />
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              Things I do in my free time: Gym, get outside, and rate meals on Beli. Currently hunting for
              good hiking trails around RTP (recs welcome).
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <SectionHeader
            number="05"
            eyebrow="Contact"
            title="Let's talk"
            description="I love hearing about what people are building in data, health, and ML. Always happy to connect!"
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
    <article className="card-lift group flex flex-col justify-between overflow-hidden rounded-xl border border-charcoal/20 bg-paper p-6 hover:border-gold">
      <div>
        {project.images && project.images.length > 0 && (
          <div
            className="-mx-6 -mt-6 mb-5 grid gap-1.5 bg-paper"
            style={{ gridTemplateColumns: `repeat(${project.images.length}, minmax(0, 1fr))` }}
          >
            {project.images.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className={
                  project.images!.length === 1
                    ? "h-48 w-full bg-paper object-contain"
                    : "h-48 w-full object-cover object-top"
                }
              />
            ))}
          </div>
        )}
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
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
