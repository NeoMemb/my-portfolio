// Replace every value in this file with your own information.
// This is the only file you should need to touch to make the site yours.

export const profile = {
  name: "Jordan Avery",
  title: "Software Engineer",
  tagline: "I build fast, accessible interfaces for the web.",
  email: "hello@jordanavery.dev",
  location: "Austin, TX",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer who enjoys turning ambiguous problems into interfaces people barely notice using — because they just work. Most of my time is spent in the space between design and engineering, where a good decision in one saves ten headaches in the other.",
    "Currently I build tooling for internal design systems, focusing on component APIs that hold up under real product pressure rather than just looking good in a demo.",
    "Outside of work I'm usually rock climbing, tinkering with a mechanical keyboard, or rereading the same three sci-fi novels.",
  ],
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
};

export type Job = {
  company: string;
  role: string;
  range: string;
  companyUrl: string;
  highlights: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    company: "Northwind Labs",
    role: "Senior Software Engineer",
    range: "2023 — Present",
    companyUrl: "https://example.com",
    highlights: [
      "Led the rebuild of the customer-facing dashboard, cutting median load time from 4.1s to 1.2s.",
      "Designed a shared component library adopted by four product teams, reducing duplicate UI code by roughly 30%.",
      "Mentor two junior engineers through pairing sessions and structured code review.",
    ],
    stack: ["React", "TypeScript", "GraphQL"],
  },
  {
    company: "Fieldstone",
    role: "Software Engineer",
    range: "2021 — 2023",
    companyUrl: "https://example.com",
    highlights: [
      "Built the payments reconciliation service handling upward of 50k transactions a day.",
      "Introduced end-to-end test coverage for checkout flows, cutting production incidents by half.",
    ],
    stack: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Bright Path Studio",
    role: "Frontend Developer",
    range: "2019 — 2021",
    companyUrl: "https://example.com",
    highlights: [
      "Shipped marketing and product sites for a range of small-business clients, from concept to launch.",
      "Set up the studio's first shared build pipeline, standardizing linting, testing, and deploys.",
    ],
    stack: ["JavaScript", "Sass", "WordPress"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repoHref?: string;
};

export const projects: Project[] = [
  {
    name: "Ledger",
    description:
      "A lightweight budgeting app with shared household accounts, recurring transaction rules, and CSV import.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/ledger",
  },
  {
    name: "Palette CLI",
    description:
      "A command-line tool that generates an accessible color palette from a single brand hex, with contrast checks built in.",
    stack: ["Node.js", "TypeScript"],
    repoHref: "https://github.com/yourusername/palette-cli",
  },
  {
    name: "Trailmap",
    description:
      "An interactive map of local hiking trails with elevation profiles and offline support for spotty signal.",
    stack: ["React", "Mapbox GL", "Service Workers"],
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/trailmap",
  },
];
