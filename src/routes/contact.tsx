import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sophia Shen" },
      {
        name: "description",
        content: "Get in touch with Sophia Shen — Data Science & Health Policy at UNC–Chapel Hill.",
      },
      { property: "og:title", content: "Contact — Sophia Shen" },
      {
        property: "og:description",
        content: "Get in touch with Sophia Shen — Data Science & Health Policy at UNC–Chapel Hill.",
      },
    ],
  }),
  component: ContactPage,
});

const GITHUB = "https://github.com/soph-shen";
const LINKEDIN = "https://www.linkedin.com/in/xiyuan-shen-13a41b2b1";
const EMAIL = "xiyuan.shen@outlook.com";

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <BackLink />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mt-12 font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
          Let&apos;s talk
        </h1>
        <p className="mt-6 text-base text-foreground/70 md:text-lg">
          I love hearing about what people are building in data, health, and ML. Always happy to
          connect!
        </p>

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
    </div>
  );
}

function BackLink() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      <span className="relative">
        Back to home
        <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}
