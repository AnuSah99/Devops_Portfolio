export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string; // Editable date placeholder
  isCurrent: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: 'Proficient' | 'Hands-on' | 'Core';
    description?: string;
    verified: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Cloud Automation' | 'CI/CD & DevSecOps' | 'Security & Observability';
  isDemo: boolean;
  description: string;
  architectureSummary: string;
  keyFeatures: string[];
  securityHighlights: string[];
  techStack: string[];
  metricsPlaceholder: string;
  githubUrl: string;
  liveOrDocsUrl?: string;
  architectureDiagram?: string[];
}

export interface PipelineStage {
  id: string;
  stepNumber: number;
  name: string;
  shortDesc: string;
  tools: string[];
  securityGate: string;
  status: 'passed' | 'running' | 'automated';
  details: string[];
}

export interface TerminalOutputLine {
  text: string;
  type?: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info' | 'system' | 'header';
}
