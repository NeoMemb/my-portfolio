// Replace every value in this file with your own information.
// This is the only file you should need to touch to make the site yours.

export const profile = {
  name: "Jordan Avery",
  title: "Software Engineer",
  tagline: "I build fast, accessible interfaces for the web.",
  email: "hello@jordanavery.dev",
  location: "Austin, TX",
  // Generated on the fly by the /resume route (see src/app/resume/route.ts)
  resumeUrl: "/resume",
};

export type SocialKey = "github" | "linkedin" | "twitter" | "codepen" | "instagram";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/yourusername" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { key: "twitter", label: "Twitter", href: "https://twitter.com/yourusername" },
  { key: "codepen", label: "CodePen", href: "https://codepen.io/yourusername" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/yourusername" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
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
  // Path under /public, e.g. "/projects/project-1.svg". Optional — the card
  // looks fine without an image.
  image?: string;
  href?: string;
  repoHref?: string;
};

export const projects: Project[] = [
  {
    name: "Ledger",
    description:
      "A lightweight budgeting app with shared household accounts, recurring transaction rules, and CSV import.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/projects/project-1.svg",
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/ledger",
  },
  {
    name: "Palette CLI",
    description:
      "A command-line tool that generates an accessible color palette from a single brand hex, with contrast checks built in.",
    stack: ["Node.js", "TypeScript"],
    image: "/projects/project-2.svg",
    repoHref: "https://github.com/yourusername/palette-cli",
  },
  {
    name: "Trailmap",
    description:
      "An interactive map of local hiking trails with elevation profiles and offline support for spotty signal.",
    stack: ["React", "Mapbox GL", "Service Workers"],
    image: "/projects/project-3.svg",
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/trailmap",
  },
  {
    name: "Dotfiles",
    description:
      "An opinionated, well-documented set of dotfiles for a reproducible terminal setup on any machine.",
    stack: ["Zsh", "Neovim", "tmux"],
    image: "/projects/project-4.svg",
    repoHref: "https://github.com/yourusername/dotfiles",
  },
];

export type ArchiveProject = {
  year: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repoHref?: string;
};

export const archiveProjects: ArchiveProject[] = [
  {
    year: "2025",
    name: "Ledger",
    description: "Budgeting app with shared household accounts and CSV import.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/ledger",
  },
  {
    year: "2024",
    name: "Palette CLI",
    description: "Accessible color palette generator for the command line.",
    stack: ["Node.js", "TypeScript"],
    repoHref: "https://github.com/yourusername/palette-cli",
  },
  {
    year: "2024",
    name: "Trailmap",
    description: "Offline-first hiking trail map with elevation profiles.",
    stack: ["React", "Mapbox GL", "Service Workers"],
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/trailmap",
  },
  {
    year: "2023",
    name: "Dotfiles",
    description: "Reproducible terminal setup for any machine.",
    stack: ["Zsh", "Neovim", "tmux"],
    repoHref: "https://github.com/yourusername/dotfiles",
  },
  {
    year: "2023",
    name: "Synthwave Radio",
    description: "24/7 lo-fi synth stream with a waveform visualizer.",
    stack: ["SvelteKit", "Web Audio API"],
    href: "https://example.com",
  },
  {
    year: "2022",
    name: "Changelog Digest",
    description: "Weekly email digest of releases from repos you star.",
    stack: ["Node.js", "Resend", "GitHub API"],
    repoHref: "https://github.com/yourusername/changelog-digest",
  },
  {
    year: "2022",
    name: "Kanban Noir",
    description: "A keyboard-first kanban board that lives in your terminal.",
    stack: ["Go", "Bubble Tea"],
    repoHref: "https://github.com/yourusername/kanban-noir",
  },
  {
    year: "2021",
    name: "This Website",
    description: "The site you're looking at — v4, rebuilt with Next.js.",
    stack: ["Next.js", "Tailwind CSS"],
    repoHref: "https://github.com/yourusername/my-portfolio",
  },
];

export type Post = {
  title: string;
  year: string;
  href: string;
  // Path under /public, e.g. "/writing/post-1.svg"
  image: string;
};

export const writing: Post[] = [
  {
    title: "Designing Component APIs That Survive Contact with Users",
    year: "2026",
    href: "https://example.com/blog/component-apis",
    image: "/writing/post-1.svg",
  },
  {
    title: "Five Accessibility Pitfalls I Keep Seeing (Including in My Own Code)",
    year: "2024",
    href: "https://example.com/blog/a11y-pitfalls",
    image: "/writing/post-2.svg",
  },
  {
    title: "What Rewriting the Same App Three Times Taught Me About State",
    year: "2022",
    href: "https://example.com/blog/state-lessons",
    image: "/writing/post-3.svg",
  },
];

export const footer = {
  credit: "Designed & built by Jordan Avery",
  // Easter egg label — swap the label and asset to make it yours.
  easterEggLabel: "Click for a spin",
};

// --- Résumé data (used by the PDF generator at /resume) ------------------
// Everything else it needs — profile, jobs, projects, about.skills — is
// shared with the site above, so the PDF always matches the page.

export const resume = {
  summary:
    "Software engineer with six years of experience building accessible, performant web applications. Focused on the space between design and engineering: component APIs, design-system tooling, and interfaces that hold up under real product pressure.",
  education: {
    school: "University of Texas at Austin",
    degree: "B.S. Computer Science",
    range: "2015 — 2019",
  },
};
