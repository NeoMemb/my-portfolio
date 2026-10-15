// Replace every value in this file with your own information.
// This is the only file you should need to touch to make the site yours.

export const profile = {
  name: "Ariori Abdulrafiu",
  title: "Software Engineer",
  tagline: "I build effective, accessible and optimized web apps.",
  email: "abdulrafiuariori@gmail.com",
  location: "Lagos, Nigeria",
  // Generated on the fly by the /resume route (see src/app/resume/route.ts)
  resumeUrl: "/resume",
};

export type SocialKey = "github" | "linkedin" | "twitter" | "codepen" | "instagram";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/neomemb" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/ariori-abdulrafiu-91a0a1230" },
  { key: "twitter", label: "Twitter", href: "https://twitter.com/yourusername" },
  { key: "codepen", label: "CodePen", href: "https://codepen.io/yourusername" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/engrariori" },
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
    "Outside of work I'm usually an engineering student that enjoys collaborative projects with my colleagues, reverse engineering electronic devices, or watching  sci-fi movies and Japanese anime.",
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
    company: "RazNof Solutions",
    role: "Senior Software Engineer",
    range: "2026",
    companyUrl: "https://raznofsolutions.com",
    highlights: [
      "Led the rebuild of the company's website that had poor UI/UX design, cutting median load time from 4.1s to 1.2s.",
      "Created a messaging system for the site visitors and company customer's inquiries.",
      "Managed AI code review with 100% pass and code coverage.",
    ],
    stack: ["React", "TypeScript", "NextJs", "Tailwind"],
  },
  {
    company: "SkyScanner",
    role: "Frontend Developer",
    range: "2026",
    companyUrl: "https://example.com",
    highlights: [
      "Built the frontend UI reconciliation service handling upward of 50k transactions a day.",
      "Introduced end-to-end test coverage for checkout flows, cutting production incidents by half.",
    ],
    stack: ["React", "PostgreSQL", "AWS"],
  },
  {
    company: "SHOP.CO",
    role: "Full stack Developer",
    range: "2025 — 2026",
    companyUrl: "https://example.com",
    highlights: [
      "Shipped marketing and product sites for a range of small-business clients, from concept to launch.",
      "Set up the admin dashboard and product adding pipeline, powerful analytics for better visual insights, standardizing product categories, testing, and deploys.",
      "Set up the customer's visiting site and product carting pipeline, optimized product search.",
      "Built a fully functional admin dashboard with a data-driven analytics experience, featuring interactive bar, pie, and trend charts, KPI statistics, data tables, and administrative management tools. Designed the dashboard to transform application data into clear, actionable insights while maintaining a responsive and intuitive interface."
    ],
    stack: ["NextJs", "TypeScript", "ExpressJs", "Prisma ORM", "Supabase", "PostgreSQL"],
  },
];

/** A stat slot in the "Results & Impact" section. */
export type ProjectStat = {
  value: string;
  label: string;
  /** Optional caveat, e.g. "unverified". */
  note?: string;
};

/** One Problem / Solution pairing inside the "Challenges" section. */
export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
};

/**
 * One section of a project case study. `id` is both the anchor target for
 * /projects/[slug]#id and the label used by the "On this page" nav.
 */
export type ProjectSection = {
  id: string;
  title: string;
  /** Paragraphs, rendered in order. */
  body?: string[];
  /** Bullet list, for goals and similar. */
  bullets?: string[];
  /** Problem/Solution pairings, for the Challenges section. */
  challenges?: ProjectChallenge[];
  /** Stat slots, for the Results section. */
  stats?: ProjectStat[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  // Path under /public, e.g. "/projects/project-1.svg". Optional — the card
  // looks fine without an image.
  image?: string;
  href?: string;
  repoHref?: string;

  // --- Case-study routing -------------------------------------------------
  /** URL segment for /projects/[slug]. Stable — changing it breaks the link. */
  slug: string;
  /** Short label above the title, e.g. "Product Engineering". */
  category?: string;
  year?: string;
  /** Shown as a chip on the card, e.g. "Live" or "In Progress". */
  status?: string;
  /** Featured projects render larger at the top of /projects. Keep to two. */
  featured?: boolean;
  /**
   * Longer hero line for the case-study page. Falls back to `description`,
   * so you only need this when the card blurb is too short for a hero.
   */
  summary?: string;
  /** Attribution under the hero, e.g. "Solo — product, frontend, backend · 2025". */
  attribution?: string;
  /**
   * Extra stack entries shown only on the case-study page, when the card's
   * tag row would get too long. Card tags stay in `stack`.
   */
  detailStack?: string[];
  caseStudy?: {
    /** Note for the hero image slot. Swap for a real screenshot when you have one. */
    heroNote?: string;
    sections: ProjectSection[];
  };
};

/** Looks up a project by its URL slug. Returns undefined for unknown slugs. */
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Projects that have a published case study, in display order. */
export function getCaseStudyProjects(): Project[] {
  return projects.filter((project) => project.caseStudy);
}

// The 10 section ids below are the shape every case study follows. Keep the
// ids stable — they're the anchors that /projects/[slug]#id and the
// "On this page" nav both point at. Bodies are TODO prompts on purpose:
// replace each one with your own writing. Nothing here is invented fact.
export const projects: Project[] = [
  {
    name: "Ledger",
    description:
      "A lightweight budgeting app with shared household accounts, recurring transaction rules, and CSV import.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/projects/project-1.svg",
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/ledger",
    slug: "ledger",
    category: "Product Engineering",
    year: "2025",
    status: "Live",
    featured: true,
    attribution: "TODO — e.g. Solo · product, frontend, backend · 2025",
    detailStack: ["Next.js", "Prisma", "PostgreSQL", "Auth", "CSV"],
    caseStudy: {
      heroNote: "TODO — replace with a real screenshot of Ledger.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "TODO — what Ledger is, who it's for, and what you personally built. Two or three sentences.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "TODO — the situation that made this worth building. What was broken, awkward, or missing before?",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "TODO — a concrete, measurable goal (e.g. \"add a shared transaction in under three taps\").",
            "TODO — a second goal, ideally something you could verify.",
            "TODO — a third goal, or a constraint you refused to compromise on.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "TODO — what you looked at before building: competing tools, conversations with users, spikes, benchmarks.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "TODO — the approaches you considered and the ones you rejected, with the reason you rejected them.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "TODO — how it's put together: data model, key modules, the parts you'd redraw if you started again.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "TODO — name the hardest problem",
              problem:
                "TODO — what made it hard, and what went wrong when you first tried the obvious fix.",
              solution:
                "TODO — what you actually did, and how you knew it worked.",
            },
            {
              title: "TODO — a second problem",
              problem: "TODO — the failure mode you hit.",
              solution: "TODO — the fix and its trade-off.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "TODO — how you checked it worked, what broke in real use, and what you changed as a result.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "TODO", label: "TODO — the metric", note: "unverified" },
            { value: "TODO", label: "TODO — the metric", note: "unverified" },
            { value: "Live", label: "TODO — what shipped" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: [
            "TODO — what you'd do differently, and what you'd do the same way again.",
          ],
        },
      ],
    },
  },
  {
    name: "Palette CLI",
    description:
      "A command-line tool that generates an accessible color palette from a single brand hex, with contrast checks built in.",
    stack: ["Node.js", "TypeScript"],
    image: "/projects/project-2.svg",
    repoHref: "https://github.com/yourusername/palette-cli",
    slug: "palette-cli",
    category: "Developer Tooling",
    year: "2024",
    status: "Live",
    featured: true,
    attribution: "TODO — e.g. Solo · design, engineering · 2024",
    detailStack: ["Node.js", "TypeScript", "WCAG", "CLI"],
    caseStudy: {
      heroNote: "TODO — replace with a real screenshot of Palette CLI.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "TODO — what Palette CLI does, who runs it, and what you built. Two or three sentences.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "TODO — why generating an accessible palette by hand is painful, and who it hurts.",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "TODO — a measurable goal (e.g. \"a passing palette from one hex, in one command\").",
            "TODO — a second goal.",
            "TODO — a constraint you held to.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "TODO — which contrast rules you followed, what existing tools got wrong, what you tested against.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "TODO — the interfaces you tried (flags, prompts, config file) and why you landed on this one.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "TODO — the colour maths, the module split, and how output is generated.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "TODO — name the hardest problem",
              problem: "TODO — what made it hard.",
              solution: "TODO — how you solved it.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "TODO — how you verified the contrast maths, and what real palettes exposed.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "TODO", label: "TODO — the metric", note: "unverified" },
            { value: "Live", label: "TODO — what shipped" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: ["TODO — what you'd change next time."],
        },
      ],
    },
  },
  {
    name: "Trailmap",
    description:
      "An interactive map of local hiking trails with elevation profiles and offline support for spotty signal.",
    stack: ["React", "Mapbox GL", "Service Workers"],
    image: "/projects/project-3.svg",
    href: "https://example.com",
    repoHref: "https://github.com/yourusername/trailmap",
    slug: "trailmap",
    category: "Product Engineering",
    year: "2024",
    status: "In Progress",
    attribution: "TODO — e.g. Solo · frontend, mapping · 2024",
    detailStack: ["React", "Mapbox GL", "Service Workers", "IndexedDB"],
    caseStudy: {
      heroNote: "TODO — replace with a real screenshot of Trailmap.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "TODO — what Trailmap is, where it works, and what you built. Two or three sentences.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "TODO — why trail maps fail exactly where hikers need them, and what that costs.",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "TODO — a measurable goal (e.g. \"a full trail usable with the radio off\").",
            "TODO — a second goal.",
            "TODO — a constraint you held to.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "TODO — how you sourced trail data, what the tile budget looked like, what throttled-network tests showed.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "TODO — the offline strategies you weighed (cache-first, prefetch region, download-on-wifi) and your choice.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "TODO — map layer, cache strategy, storage limits, and how elevation profiles are computed.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "TODO — name the hardest problem",
              problem: "TODO — what made it hard.",
              solution: "TODO — how you solved it.",
            },
            {
              title: "TODO — a second problem",
              problem: "TODO — the failure mode you hit.",
              solution: "TODO — the fix and its trade-off.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "TODO — how you tested offline behaviour and on which devices.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "TODO", label: "TODO — the metric", note: "unverified" },
            { value: "In Progress", label: "TODO — what works today" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: ["TODO — what you'd change next time."],
        },
      ],
    },
  },
  {
    name: "Dotfiles",
    description:
      "An opinionated, well-documented set of dotfiles for a reproducible terminal setup on any machine.",
    stack: ["Zsh", "Neovim", "tmux"],
    image: "/projects/project-4.svg",
    repoHref: "https://github.com/yourusername/dotfiles",
    slug: "dotfiles",
    category: "Developer Tooling",
    year: "2023",
    status: "Live",
    attribution: "TODO — e.g. Solo · tooling · 2023",
    detailStack: ["Zsh", "Neovim", "tmux", "GNU Stow"],
    caseStudy: {
      heroNote: "TODO — replace with a real screenshot of the terminal setup.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "TODO — what the setup includes and what a fresh machine looks like after installing it.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "TODO — what breaks when your config only lives on one laptop.",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "TODO — a measurable goal (e.g. \"a new machine is useful in under ten minutes\").",
            "TODO — a second goal.",
            "TODO — a constraint you held to.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "TODO — which setups you studied and what you took from each.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "TODO — bootstrap script vs. symlink manager vs. bare repo, and why you chose this.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "TODO — the layout, how it's linked into place, and how it stays portable across machines.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "TODO — name the hardest problem",
              problem:
                "TODO — what made it hard (secrets, machine-specific paths, plugin drift).",
              solution: "TODO — how you solved it.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "TODO — how you verified a clean install, and what broke the first time.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "TODO", label: "TODO — setup time", note: "unverified" },
            { value: "Live", label: "TODO — what shipped" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: ["TODO — what you'd change next time."],
        },
      ],
    },
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
