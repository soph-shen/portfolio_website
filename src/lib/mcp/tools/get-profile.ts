import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return basic info about Sophia (Xiyuan) Shen — name, tagline, focus, affiliation, and contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Sophia (Xiyuan) Shen",
      tagline: "A data builder at the intersection of health & ML.",
      affiliation: "Data Science & Health Policy @ UNC–Chapel Hill",
      links: {
        github: "https://github.com/soph-shen",
        linkedin: "https://www.linkedin.com/in/xiyuan-shen-13a41b2b1",
        email: "xiyuan.shen@outlook.com",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});