export interface Project {
  id: string;
  title: string;
  category: "Enterprise Project" | "Personal Open-Source" | "Clone App";
  description: string;
  role: string;
  teamSize?: number | string;
  techStack: string[];
  bulletPoints: string[];
  image: string;
  color: string;
  shadow: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  location: string;
  color: string;
  projects: {
    title: string;
    role: string;
    teamSize: string;
    techStack: string;
    bullets: string[];
  }[];
}

export interface SkillCategory {
  categoryName: string;
  skills: {
    name: string;
    color: string;
    tip: string;
  }[];
}
