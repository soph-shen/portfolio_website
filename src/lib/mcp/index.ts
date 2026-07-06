import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listExperience from "./tools/list-experience";

export default defineMcp({
  name: "sophia-shen-portfolio",
  title: "Sophia Shen Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only tools that expose Sophia (Xiyuan) Shen's portfolio content: profile info, project list, and experience timeline.",
  tools: [getProfile, listProjects, listExperience],
});