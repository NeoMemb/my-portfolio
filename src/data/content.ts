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

/**
 * Drives the "open to work" messaging across the site. Update this first when
 * your situation changes — Contact reads from it, so you edit one place.
 */
export const availability = {
  open: true,
  // Be specific: recruiters scan for an exact role title, so name the job you
  // want, not a category. The first entry is used as your headline.
  roles: ["Frontend Engineer", "Full Stack Engineer", "Software Engineer"],
  // How and where you'll work.
  arrangement: "Remote, hybrid, or on-site in Lagos",
  // When you can start.
  start: "Available immediately",
  // Anything a hiring manager needs to know up front — relocation, visa
  // sponsorship, notice period. Leave empty to omit the line entirely.
  note: "Open to remote roles worldwide and relocation with sponsorship.",
  // Shown as a live status in the left column, beside a glowing dot. This is
  // the tagline from the reference site the design follows, used verbatim —
  // swap it for your own line if you'd rather not echo theirs. Set to "" to
  // hide the status entirely.
  currently: "Currently: Building products that serve communities.",
};

export type SocialKey = "github" | "linkedin" | "twitter" | "codepen" | "instagram";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/neomemb" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/ariori-abdulrafiu-91a0a1230" },
  { key: "twitter", label: "Twitter", href: "https://twitter.com/ArioriDev" },
  { key: "codepen", label: "CodePen", href: "https://codepen.io/NeoMemb" },
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
    // Rewritten to lead with the stack you're hiring-able for. Check this reads
    // true for you — it's grounded in `skills` below, nothing more.
    "I work mostly in TypeScript, React and Next.js, with Node.js and PostgreSQL on the other side of the API. I like owning a feature end to end — schema, API, interface — and I'd rather ship something small and correct than something broad and fragile.",
    "Outside of work I'm usually an engineering student that enjoys collaborative projects with my colleagues, reverse engineering electronic devices, or watching sci-fi movies and Japanese anime.",
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
    company: "The MSSN DOS - University of Ilorin branch",
    role: "Senior Backend Engineer",
    range: "2026",
    companyUrl: "https://burhan.com.ng",
    // These were previously word-for-word identical to the RazNof entry, and
    // the stack did not match the real project. Rewritten from the repo's
    // ARIORI.md solution log. Keep them specific — duplicate bullets across
    // two roles are the first thing a reviewer notices.
    highlights: [
      "Built the Teacher Results screens, enforcing the held-score rule inside the query so an unreleased mark is never read out of the database, let alone shown to a non-admin client.",
      "Added Google Drive video resources for teachers, backed by a URL parser that rewrites /view to /preview — Google refuses to frame the former, which would have rendered a blank box that looks like it loaded.",
      "Diagnosed a CSP misconfiguration that blocked every cross-origin iframe, then scoped frame-src to exactly the two embed providers the parser can produce.",
      "Rebuilt teacher account provisioning: generated staff IDs, one-time passwords shown once, and authoring scope enforced in the write routes rather than in the UI.",
    ],
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Supabase", "Tailwind CSS", "Vitest"],
  },
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
  /** Featured projects render larger at the top of /projects. */
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
    name: "polinguard",
    description:
      "A cross-platform Rust defense stack against the PolinRider supply-chain campaign — one binary, one subcommand per layer.",
    stack: ["Rust", "Tokio", "clap", "Serde", "reqwest"],
    repoHref: "https://github.com/NeoMemb/polinguard",
    slug: "polinguard",
    category: "Security Tooling",
    year: "2026",
    status: "v0.1.0",
    featured: true,
    attribution: "Rust · Windows, Linux and macOS · 2026",
    summary:
      "A single Rust binary that defends a machine and its repositories against PolinRider — a supply-chain campaign that delivers its payload through repositories rather than machines, so it executes the moment someone clones a project and opens the folder.",
    detailStack: [
      "Rust",
      "Tokio",
      "clap",
      "Serde",
      "reqwest",
      "notify",
      "sha2",
      "MIT",
    ],
    // Written from the repository's own README, INSTALL and Cargo.toml. Every
    // claim below is sourced there — including the untested paths.
    caseStudy: {
      heroNote:
        "TODO — a terminal screenshot of `polinguard scan` would go here.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "polinguard is one Rust binary that defends a machine and its repositories against PolinRider, a supply-chain campaign attributed to DPRK's \"Contagious Interview\" operation, and the stealers it drops.",
            "It ships as seven layers behind a single CLI, one subcommand each: an always-on watcher, a pre-clone vetter, git hooks, package-manager shims, a repository scanner, a CI workflow installer, and a GitHub repo-health sweep. It runs on Windows, Linux and macOS.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "PolinRider spreads through repositories, not through machines, and that shape is what makes conventional defenses miss it. The fake webfont — an fa-solid-*.woff2 whose bytes are JavaScript — and the .vscode/tasks.json stager only run if you open the project. A poisoned postcss.config.* only runs if you install or build.",
            "Per-machine tooling therefore arrives too late. The person who clones the repository is the one who gets hit, and they had no way to know before opening it.",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "Put protection inside the repository itself, so it covers everyone who clones it with no per-machine setup.",
            "Catch a payload at the moment it lands, rather than at the next audit.",
            "Never cry wolf — a security tool that fires on legitimate code gets switched off, so ambiguous signals stay low severity.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "The detection rules are derived from the campaign's own behaviour rather than from a generic indicator list. The fake webfont was renamed fa-solid-400 → 500 → 600 across waves specifically to defeat filename-based checks, and the delivery path is consistently public/fonts/.",
            "Unicode was the other half. U+202A–U+202E and U+2066–U+2069 in source code are Trojan-Source attacks, but U+200E, U+200F and U+061C are routine in legitimate Arabic and Hebrew text. A rule unable to tell those apart would fire on every localised README.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "The rejected design was a scanner, because a scanner only protects the machine it runs on — and by the time it runs, the payload may already have executed. The chosen design is a stack: the layers that live inside the repository protect everyone who clones it, and the layers on the machine cover what the repository cannot.",
            "public/fonts/ is banned outright rather than scored heuristically, since it is the campaign's default delivery path. A project that genuinely needs it opts out explicitly instead of being assumed clean.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "The seven layers are watch (always-on filesystem watcher), vet (inspect a remote before cloning), hooks (git hooks that block a .vscode commit), shims (package-manager interceptors that block postinstall), scan (the repository guard, and the default command), ci (installs the server-side workflow) and health (sweeps your GitHub repositories for unprotected, dirty or red-CI ones).",
            "Three further commands sit outside the layer model: forensics, which reads metadata only and never opens credential files; quarantine, which is dry-run by default; and persistence, which reports whether anything is still resident. Exit codes are 0 for clean, 1 for findings or refused, and 2 for a usage error.",
            "The crate is split by concern: iocs/ holds the rule sets for fonts, packages, unicode and general rules, while persistence/ carries platform-specific implementations for Windows registry Run keys and services, and the launchd, systemd, cron and autostart files on Unix.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "Never trust a font's filename",
              problem:
                "The payload was renamed fa-solid-400 → 500 → 600 across campaign waves precisely to defeat filename-based detection, so any check keyed on the name is obsolete by the next wave.",
              solution:
                "Every font-named file has its first four bytes read. A real font starts with a real font header; the payload starts with four spaces (20 20 20 20). Detection keys on the bytes, never the name.",
            },
            {
              title: "Trojan-Source bidi without crying wolf",
              problem:
                "Bidirectional override characters in source code are an attack, but U+200E, U+200F and U+061C appear constantly in legitimate Arabic and Hebrew text. Escalating all of them would fire on every localised README — and a security tool that cries wolf gets turned off.",
              solution:
                "The bidi rule is split into strong signals (U+202A–U+202E and U+2066–U+2069) and weak ones, with the weak set escalated only inside code-like files.",
            },
            {
              title: "A security tool that needs no C toolchain",
              problem:
                "rustls pulls in ring, which is C and assembly and therefore requires a C compiler at build time — a real barrier for a tool people must build on a machine they may not fully control.",
              solution:
                "reqwest is configured with native-tls, using each platform's own TLS stack — schannel on Windows, Security.framework on macOS, OpenSSL on Linux. The Linux cost is real and is documented rather than hidden: native-tls needs the OpenSSL headers there.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "60 tests pass and clippy is clean on the host platform. Cross-platform verification is the honest gap: a Windows host cannot compile the cfg(unix) paths, and both cross-target checks fail on a dependency rather than on polinguard's own code — openssl-sys for x86_64-unknown-linux-gnu, and mac-notification-sys for aarch64-apple-darwin.",
            "Those failures reported zero errors in this crate's own sources, so the Unix code is unverified rather than known-broken. That distinction is written down in docs/KNOWN-GAPS.md instead of being glossed over.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "0.1.0", label: "Release — builds and runs" },
            { value: "60", label: "Tests passing, clippy clean" },
            { value: "7", label: "Defense layers, one binary" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: [
            "The documented gaps are the honest ones: the cfg(unix) code has never been compiled, persistence false-positives on legitimate software that runs from AppData (Electron apps, Teams, Discord), and a clean scan is not proof — it means no known indicator matched.",
            "The project also states plainly what it does not do. It cannot remove a resident implant; only persistence addresses that, and only negatively, since it can tell you something is there but never that nothing is. And it cannot un-steal credentials — data staged before it ran may already have been exfiltrated.",
          ],
        },
      ],
    },
  },
  {
    name: "DOS Site",
    description:
      "A free e-learning and weekly-quiz platform for MSSN Unilorin's Board of Studies — built for undergraduates and JAMB candidates, with no paywall anywhere.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Supabase", "Tailwind CSS"],
    repoHref: "https://github.com/MSSN-DOS/dos-app-new",
    slug: "dos-site",
    category: "Education Platform",
    year: "2026",
    status: "In Development",
    featured: true,
    attribution: "Contributor · MSSN Unilorin Board of Studies · 2026",
    summary:
      "A free platform where Unilorin undergraduates and JAMB aspirants practise weekly quizzes and track where they actually stand — with the academic structure owned by the Board rather than a generic subject list, and every score held until an admin releases it.",
    detailStack: [
      "Next.js App Router",
      "TypeScript strict",
      "Drizzle ORM",
      "Supabase Postgres",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "TanStack Query",
      "Vitest",
    ],
    // Drawn from the repo's README, PRODUCT.md and ARIORI.md solution log.
    // Kept in the team's voice on purpose: the README states the project is
    // built primarily with AI coding agents, and it is a Board-owned build —
    // so this documents the engineering without claiming sole authorship.
    caseStudy: {
      heroNote: "TODO — a screenshot of the student dashboard would go here.",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          body: [
            "DOS Site is a free e-learning and quiz platform for MSSN Unilorin's Board of Studies. It serves two first-class tracks: undergraduates, who navigate Faculty → Department → Level → Semester → Course, and JAMB aspirants, organised flat by exam subject.",
            "Both take weekly course quizzes, revise with ad-hoc topic quizzes, and track performance — CGPA for students, Post-UTME score on Unilorin's 50-point scale for aspirants. Every Faculty, Department, Level and Course is entered by the Board through the Admin UI, so the structure is the real catalogue rather than a generic subject list.",
            "My contributions sat in the teacher and admin surfaces and the layer beneath them — results reporting, resource links, account provisioning, and the CSP sitting in front of all of it.",
          ],
        },
        {
          id: "problem",
          title: "Problem Statement",
          body: [
            "The Board had no free, curriculum-faithful place for students and aspirants to practise and be assessed. Study material lived in scattered channels, and assessment reporting meant manual spreadsheet work.",
            "Two constraints shaped everything downstream: it has to work on the phones the audience actually uses, and the academic structure has to be the Board's real catalogue — not something a seed script invented.",
          ],
        },
        {
          id: "goals",
          title: "Goals & Success Metrics",
          bullets: [
            "Stay free: no payments, no subscriptions, no paywall anywhere in the product.",
            "Make the Board the owner of academic truth — structure entered through the Admin UI, never seeded by the build.",
            "Never leak a held score: an unreleased mark must not reach a non-admin client, enforced in the response shape rather than hidden in the UI.",
            "Mobile-first without exception — 44px interactive targets and 16px body text treated as requirements, not polish.",
          ],
        },
        {
          id: "discovery",
          title: "Research & Discovery",
          body: [
            "The requirements came from a Board IT review on 19 August 2026 and a follow-up alignment interview on 22 August that closed every open question from it; the resulting decisions are recorded in DESIGN.md as closed, not provisional.",
            "The recurring theme in Board feedback was trust — who may author, what a teacher is allowed to see, and what an in-flight score actually means. That turned into the rules the API enforces, rather than guidance for the UI to follow.",
          ],
        },
        {
          id: "ideation",
          title: "Ideation & Concept Development",
          body: [
            "Several stack choices were pinned deliberately and treated as closed decisions: pnpm over npm, Drizzle over Prisma, a custom JWT instead of Supabase Auth, and Zod schemas defined once and shared by the form and the route handler that both consume them.",
            "The decision that mattered most for security was the database posture. Supabase's default project grants PostgREST access on the public schema regardless of what the app does, so every table ships with revoked anon/authenticated grants and deny-all RLS in the same migration that creates it. The Next.js API is the only access path.",
          ],
        },
        {
          id: "architecture",
          title: "Design & Architecture",
          body: [
            "Next.js App Router with role route groups — (auth), (admin), (teacher), (student) and (aspirant) — and an /api tree that mirrors them. Every API route calls requireAuth() except register and login; folder placement is a convenience for humans reading the repo, never the enforcement mechanism.",
            "Drizzle sits over Supabase Postgres, with migrations generated from the schema and never hand-edited. Scoring lives in lib/scoring/ (CGPA and the Post-UTME conversion), and semester resolution goes through a single getActiveSemester() resolver so no screen computes dates inline.",
            "On the client, TanStack Query owns server state through one shared fetch wrapper, so the Authorization header, base URL and error handling exist in exactly one place.",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          challenges: [
            {
              title: "A held score is not a UI problem",
              problem:
                "The Teacher Results screen was specified with a held attempt's score shown beside a 'Held' pill. DESIGN.md said the opposite: a raw score must not reach a non-admin client while held — and a rule that leaks to teachers is not a rule.",
              solution:
                "The held-attempts query simply does not select score, so an unreleased mark is never read out of the database. Averages are computed over released attempts only and render as an em dash until something is released; a held row shows 'Held' and no number at all.",
            },
            {
              title: "Google refuses to frame a Drive /view link",
              problem:
                "Teachers paste the URL Drive gives them, which is a /view link. Embedded as-is, it renders a blank box that looks like it loaded — the worst failure mode, because nothing appears broken.",
              solution:
                "A pure parser rewrites /view to /preview and normalises the other Drive, YouTube and Telegram forms, and it rejects non-http(s) schemes so a javascript: URL can never be stored and later rendered as an href. The pasted URL is stored as-is and parsed at read time, so improving the parser improves every existing link rather than only new ones.",
            },
            {
              title: "Our own CSP blocked every video",
              problem:
                "The player showed 'This content is blocked. Contact the site owner to fix the issue', which reads like a Google fault. It wasn't: next.config.ts set default-src 'self' and declared no frame-src, which falls back to default-src and refuses every cross-origin iframe. No provider would have loaded.",
              solution:
                "Added frame-src for exactly the two hosts the parser can produce an embed URL for, leaving frame-ancestors 'none' untouched since that governs who may frame us. The lesson was to check the app's own policy before blaming the embed host.",
            },
            {
              title: "Credentials an admin types get leaked",
              problem:
                "The original screen took an admin-chosen identifier and password and passed them to the teacher, usually over chat — a password that gets reused or leaked — and it gave every teacher the whole question bank, so a Chemistry teacher authored everything.",
              solution:
                "Identifiers are generated sequentially and passwords come from an unambiguous alphabet, shown exactly once. Scope is enforced in the write routes themselves, so a teacher can only author within their assigned courses and subjects — with no assignments, the route fails closed.",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing & Iteration",
          body: [
            "Route handlers are invoked directly in colocated tests rather than over HTTP, with auth and the database mocked, so each one covers 401, 403, validation failures, conflicts, and the ownership rule.",
            "The held-score rule has its own test that feeds a score into a held row and asserts it is absent from the payload — because the rule is only worth something if it holds at the boundary a client can actually reach.",
            "The suite stands at 694 tests across 60 files, and RLS was verified against the dev project as 25 public tables with deny-all policies and zero anon/authenticated grants.",
          ],
        },
        {
          id: "results",
          title: "Results & Impact",
          stats: [
            { value: "694", label: "Tests across 60 files" },
            { value: "25", label: "Tables RLS-locked, zero anon grants" },
            { value: "4", label: "Board feedback items shipped" },
          ],
        },
        {
          id: "retrospective",
          title: "Retrospective",
          body: [
            "The honest gaps: a published quiz cannot be edited by anyone, admin included, pending a Board decision on editing mid-attempt; the semester exemption for videos is a SQL-level condition that no unit test would meaningfully cover; and the staff-ID format is still unsanctioned by the Board.",
            "The architectural lesson was that a held-release rule enforced in the response shape, not the view, is the only version that survives a second client. The process lesson was that most 'the video is broken' and 'that page errors' reports were a missing route and a one-line CSP setting, not the features they appeared to be.",
          ],
        },
      ],
    },
  },
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
  credit: "Designed & built by Ariori Abdulrafiu",
  // Easter egg label — swap the label and asset to make it yours.
  easterEggLabel: "Click for a spin",
};

// --- Résumé data (used by the PDF generator at /resume) ------------------
// Everything else it needs — profile, jobs, projects, about.skills — is
// shared with the site above, so the PDF always matches the page.

export const resume = {
  // Written for the role you're actually applying to. Lead with what you do
  // and the stack you want to be hired for, not with years of service.
  summary:
    "TODO — two or three sentences: what you build, the stack you want to be hired for, and the kind of team you do your best work on. Example shape: \"Software engineer focused on React and Next.js, building accessible, fast web apps. Comfortable owning a feature from database to UI. Looking for a product team where engineers talk to users.\"",
  // TODO — this was the template's university, not yours. Replace it with your
  // real school, degree and dates before you send the PDF anywhere. Remove the
  // whole block if you'd rather not show education.
  education: {
    school: "TODO — your school",
    degree: "TODO — your degree",
    range: "TODO — years",
  },
};
