// src/types/portfolio.ts

//  👇👇👇 Links & it's sub-types
export interface HeaderLink {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Contact {
  type: "Email" | "Phone" | string;
  value: string;
}

export interface Links {
  header: HeaderLink[];
  social: SocialLink[];
  contacts: Contact[];
}

// 👇👇👇 Details & it's sub-types
export interface Education {
  level: string;
  field?: string;
  institution: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  link: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  workspaceTools: string[];
  others?: string[];
}

export interface Details {
  services: string[];
  skills: Skills;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}
