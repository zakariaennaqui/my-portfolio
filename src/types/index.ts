export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  live?: string;
}
