export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface QuickPillar {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  badge?: string;
  shortDesc: string;
  problem: string;
  solution: string;
  myContribution: string[];
  technicalHighlights: string[];
  architectureSteps: {
    from: string;
    to: string;
    label: string;
    detail: string;
  }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: 'production' | 'mvp';
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  status: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    focus?: boolean;
  }[];
}

export interface EngineeringStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface AiNativeArea {
  title: string;
  description: string;
  icon: string;
  applications: string[];
}
