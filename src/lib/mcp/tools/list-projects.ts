import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "Chinese Digit Classifier",
    description: "A neural network built from scratch (no ML libraries) with a draw-to-predict web app.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "NumPy"],
    code: "https://github.com/soph-shen/neuralnetwork",
  },
  {
    title: "FrozenLake RL",
    description: "Reinforcement learning agents (DQN, DRQN, QR-DRQN, RND-DRQN) for a partially observable, windy grid world, with a full research paper.",
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
    description: "Predicting federal grant cuts across the UNC system with ML.",
    tags: ["Python", "scikit-learn", "pandas"],
    code: "https://github.com/soph-shen/DataAnalysis_FederalBudget",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List Sophia's featured data science and ML projects with descriptions, tags, and repository links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});