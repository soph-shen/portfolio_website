import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    title: "Automated rs-fMRI Component Classification",
    role: "ML Research Engineer",
    org: "Boerwinkle Lab",
    dates: "Feb 2026 – Present",
    description:
      "Engineered a Python pipeline (Nilearn, NiBabel) to automate categorization of independent component rs-fMRI signals as resting-state network, seizure onset zone, or noise. Validated model outputs against ground-truth annotations using spatial metrics, delivering a reliable triage tool for clinical research teams.",
    metric: { value: "77%", label: "recall on validation" },
    tags: ["Python", "Nilearn", "NiBabel", "rs-fMRI", "Healthcare ML"],
  },
  {
    title: "",
    role: "",
    dates: "",
    description: "",
    tags: [],
    placeholder: true,
  },
  {
    title: "",
    role: "",
    dates: "",
    description: "",
    tags: [],
    placeholder: true,
  },
];