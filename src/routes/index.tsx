import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

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
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "FastAPI", "PyTorch", "scikit-learn", "pandas", "NumPy"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vite"],
  },
];

const GITHUB = "https://github.com/soph-shen";
const LINKEDIN = "https://www.linkedin.com/in/xiyuan-shen-13a41b2b1";
const EMAIL = "xiyuan.shen@outlook.com";

function Index() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-20 border-b border-border"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-24 text-center md:px-10 md:py-32">
          <div className="h-32 w-32 overflow-hidden rounded-full border border-border bg-muted md:h-40 md:w-40">
            <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
              Photo
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Sophia (Xiyuan) Shen
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {/* tagline placeholder — update later */}
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
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader
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
      <section id="skills" className="scroll-mt-20 border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <SectionHeader eyebrow="Skills" title="Tools I build with" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
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

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10">
          <SectionHeader eyebrow="About" title="Why I build with data" compact />
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p className="text-muted-foreground italic">
              [Replace with a short, personal paragraph on what draws you to data
              and building software.]
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND CODE */}
      <section className="scroll-mt-20 border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10">
          <SectionHeader eyebrow="Beyond Code" title="Off the clock" compact />
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p className="text-muted-foreground italic">
              [Replace with a couple of sentences about what you like to do
              outside of tech — hobbies, interests.]
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk"
            description="Open to internships and collaborations in data, health analytics, and software engineering."
            center
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  center,
  compact,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl" : compact ? "" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-sm">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground/80"
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
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Github className="h-3.5 w-3.5" /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
