export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  year: string;
  client: string;
  link: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: { name: string; proficiency: number }[];
}
