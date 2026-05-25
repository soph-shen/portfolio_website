import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Sophia Shen" },
      { name: "description", content: "Selected machine learning, neuroimaging, and healthcare data projects by Sophia Shen." },
      { property: "og:title", content: "Projects — Sophia Shen" },
      { property: "og:description", content: "ML, neuroimaging, and healthcare data case studies." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <SectionLabel index="—">Index of Work</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight md:text-6xl"
        >
          Selected <span className="italic text-[color:var(--teal-deep)]">research</span>.
        </motion.h1>
        <p className="mt-6 max-w-2xl font-display text-lg leading-relaxed text-foreground/75 md:text-xl">
          A small set of research and ML projects I&apos;m proud of. More on the way.
        </p>
        <div className="mt-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.title || `placeholder-${i}`} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}