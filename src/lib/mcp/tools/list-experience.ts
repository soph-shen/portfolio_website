import { defineTool } from "@lovable.dev/mcp-js";

const experience = [
  {
    role: "Computational Neuroimaging Research Engineer",
    org: "Boerwinkle Lab",
    dates: "Feb 2026 – Present",
    description: "Built a Python pipeline to classify resting-state fMRI components into brain networks, seizure-onset zones, and noise for pediatric epilepsy research.",
  },
  {
    role: "Predictive Analytics Researcher",
    org: "UNC School of Data Science & Society",
    dates: "May 2025 – May 2026",
    description: "Developed a LASSO-based risk screener from 650+ survey records; contributed to a CDC-funded study and was selected to present at NACCHO360 2026.",
  },
  {
    role: "Data Visualization Intern",
    org: "UNC Water Institute",
    dates: "Jan – Sept 2025",
    description: "Built an interactive Tableau dashboard synthesizing 4,000+ studies on environmental health services for policymakers.",
  },
];

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description: "List Sophia's professional and research experience entries in reverse chronological order.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});