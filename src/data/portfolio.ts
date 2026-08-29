// src/data/portfolio.ts
import mainBlueDp from "../assets/Image/main_blue_theme.png";
import type { Links, Details, Photos, PersonalInfo, SkillItems, Projects, Experience } from "../types/portfolio";

const links: Links = {
  header: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { platform: "Github", url: "https://github.com/NeoMemb/" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/ariori-abdulrafiu" },
    { platform: "X_Twitter", url: "https://x.com/ArioriDev" },
    {
      platform: "Instagram",
      url: "https://instagram.com/arioriabdulrafiu220/",
    },
  ],
  contacts: [
    { type: "Email", value: "abdulrafiuariori@gmail.com" },
    { type: "Email", value: "arioriabdulrafiu220@gmail.com" },
    { type: "Phone", value: "(+234)8146357386" },
  ],
};

const details: Details = {
  services: [
    "Software Engineer - Full Stack Developer",
    "Electrical Installation & Power Solutions",
    "Blockchain & Smart Contract Enthusiast",
  ],
  skills: {
    languages: [
      "HTML, CSS, JavaScript (The Big Trio for web development)",
      "C - Low-level programming, embedded systems, data structures & algorithms",
      "Python - High level, AI/ML (future specialization)",
      "Linux - Shell scripting & system navigation",
    ],
    frameworks: [
      "JavaScript DOM",
      "React.js - Dynamic UI development",
      "Next.js - Server-side rendering and scalability",
      "TailwindCSS - Utility-first styling",
      "ShadCN - Prebuilt UI components",
    ],
    workspaceTools: [
      "Microsoft PowerPoint - Project presentation",
      "Microsoft Word - Documentation",
      "Excel (Advanced) - Data analysis & visualization",
      "AI Prompting - ChatGPT, Claude, Perplexity",
      "Git & GitHub - Version control & collaboration",
    ],
    others: [
      "Docker - Containerization (learning)",
      "Firebase / Appwrite - Backend as a service",
      "REST APIs & JSON handling",
    ],
  },
  education: [
    {
      level: "Bachelor’s Degree",
      field: "Materials & Metallurgical Engineering",
      institution: "University of Ilorin",
      year: "2021 - Present",
    },
    {
      level: "Secondary School Certificate",
      institution: "Ginoka College & Dee Divine Favor Academy",
      year: "2012 - 2017",
    },
  ],
  // experience: [
  //   {
  //     role: "Factory Worker",
  //     company: "Lexcel Packaging Company",
  //     responsibilities: ["Loading/unloading goods", "Packaging operations"],
  //   },
  //   {
  //     role: "Iron Bender",
  //     company: "God's Own Construction Iron Steel",
  //     responsibilities: ["Bending steel for concrete construction"],
  //   },
  //   {
  //     role: "Solar & Inverter Installer",
  //     company: "Freelance",
  //     responsibilities: [
  //       "Installed inverters and solar panels",
  //       "Worked on power solutions & electrical installations",
  //     ],
  //   },
  // ],
  projects: [
    {
      name: "My Movie App",
      description: "Movie search app using React and API integration.",
      link: "https://github.com/NeoMemb/my-movie-app",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React, TailwindCSS & Vite.",
      link: "https://github.com/NeoMemb/my-portfolio",
    },
  ],
};
const photos: Photos = {
    dark: {
      dp: mainBlueDp,
      alt: "Sasuke_Uchiha_main.png"
    },
    light: {
      dp: "",
      alt: ""
    }
};

const personalInfo: PersonalInfo = {
  name: "Ariori Abdulrafiu Olayemi",
  role: "Software Engineer - Front-End Engineer",
  tagline:
    "Building the Future, Blending design, technology, and engineering to turn ideas into elegant, responsive, and impactful digital experiences.",
  description:
    "I am a passionate and versatile software developer with hands-on experience in C, Python, JavaScript, HTML/CSS, Bash scripting, and practical familiarity with Linux environments (including Termux and VirtualBox). Currently advancing my expertise in front-end development through ALX, I build responsive interfaces and functional web applications, leveraging React, Vite, and modern development tools. I enjoy low-level programming concepts, operating systems, and system customization, and I apply this curiosity to practical engineering and tech projects.",
  location: "📌Lagos, Nigeria | Remote",
};

const skills: SkillItems[] = [
  {
    id: 1,
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: 95, icon: "Code2" },
      { name: "CSS3", level: 90, icon: "Palette" },
      { name: "JavaScript", level: 88, icon: "FileCode" },
      { name: "React", level: 85, icon: "Component" },
      { name: "Next.js", level: 80, icon: "Layers" },
      { name: "TypeScript", level: 75, icon: "FileType" },
      { name: "TailwindCSS", level: 90, icon: "Paintbrush" }
    ]
  },
  {
    id: 2,
    category: "Programming Languages",
    items: [
      { name: "C", level: 80, icon: "Terminal" },
      { name: "Python", level: 85, icon: "Code" },
      { name: "JavaScript", level: 88, icon: "Braces" },
      { name: "Bash", level: 75, icon: "Shell" }
    ]
  },
  {
    id: 3,
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", level: 85, icon: "GitBranch" },
      { name: "Linux/Unix", level: 80, icon: "Database" },
      { name: "MS Office", level: 90, icon: "FileText" },
      { name: "VirtualBox", level: 75, icon: "HardDrive" }
    ]
  },
  {
    id: 4,
    category: "Blockchain & Web3",
    items: [
      { name: "Solidity", level: 65, icon: "Link" },
      { name: "Ethereum", level: 60, icon: "Coins" },
      { name: "Smart Contracts", level: 65, icon: "FileCode2" }
    ]
  }
];

const projects: Projects[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and TailwindCSS, featuring product catalog, shopping cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website Builder",
    description: "A dynamic portfolio builder that allows users to create stunning portfolio websites with pre-built components and customization options.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    technologies: ["React", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "A decentralized voting application built on Ethereum, ensuring transparent and tamper-proof voting records using smart contracts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    technologies: ["Solidity", "Ethereum", "Web3.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with interactive maps, forecasts, and location-based weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "APIs", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Linux System Monitor",
    description: "A comprehensive system monitoring tool for Linux built with Python and C, tracking CPU, memory, and process information.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    technologies: ["Python", "C", "Bash"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const experience:  Experience[] = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "ALX Africa",
    period: "2024 - Present",
    description: "Learning and building modern web applications using React, JavaScript, and industry-standard tools. Focus on responsive design and user experience.",
    current: true
  },
  {
    id: 2,
    title: "Blockchain Developer",
    company: "Self-Learning",
    period: "2024 - Present",
    description: "Studying Solidity for smart contract development and gaining understanding of Ethereum-based applications. Exploring DeFi and Web3 technologies.",
    current: true
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Building various applications using C, Python, and JavaScript. Focus on low-level programming concepts and system automation.",
    current: false
  }
];

export const education = [
  {
    id: 1,
    degree: "Front-End Development Program",
    institution: "ALX Africa",
    period: "2024 - Present",
    description: "Comprehensive program covering modern web development technologies, focusing on React, JavaScript, and industry best practices."
  },
  {
    id: 2,
    degree: "Self-Taught Developer",
    institution: "Various Online Platforms",
    period: "2022 - Present",
    description: "Continuous learning through various platforms covering C, Python, JavaScript, Linux systems, and blockchain development."
  }
]

export  { links, skills, details, photos, personalInfo, projects,  };
