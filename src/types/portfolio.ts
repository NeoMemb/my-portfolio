// src/types/portfolio.ts

//  👇👇👇 Links & it's sub-types
interface HeaderLink {
  name: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

interface Contact {
  type: "Email" | "Phone" | string;
  value: string;
}

interface Links {
  header: HeaderLink[];
  social: SocialLink[];
  contacts: Contact[];
}

// 👇👇👇 Details & it's sub-types
interface Education {
  level: string;
  field?: string;
  institution: string;
  year: string;
}

interface Experience {
  role: string;
  company: string;
  responsibilities: string[];
}

interface Project {
  name: string;
  description: string;
  link: string;
}

interface Skills {
  languages: string[];
  frameworks: string[];
  workspaceTools: string[];
  others?: string[];
}

interface Details {
  services: string[];
  skills: Skills;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

interface photoItems {
  dp: string;
  alt: string;
}

interface Photos {
  dark: photoItems;
  light: photoItems;
}

interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
}

interface ButtonProp {
  id: string;
  onClick: () => void;
  ariaLabel?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  children: React.ReactNode;
}

export type { Links, Details, Photos, PersonalInfo, ButtonProp };