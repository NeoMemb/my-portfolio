// src/data/portfolio.ts
import mainBlueDp from "../assets/Image/main_blue_theme.png";
import type { Links, Details, Photos, PersonalInfo } from "../types/portfolio";

const links: Links = {
  header: [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ],
  social: [
    { platform: "GitHub", url: "https://github.com/NeoMemb/" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/ariori-abdulrafiu" },
    { platform: "X (Twitter)", url: "https://x.com/arioriabdulraf1" },
    {
      platform: "Instagram",
      url: "https://insta.com/ArioriAbdulraafiuOlayemi/",
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
  experience: [
    {
      role: "Factory Worker",
      company: "Lexcel Packaging Company",
      responsibilities: ["Loading/unloading goods", "Packaging operations"],
    },
    {
      role: "Iron Bender",
      company: "God's Own Construction Iron Steel",
      responsibilities: ["Bending steel for concrete construction"],
    },
    {
      role: "Solar & Inverter Installer",
      company: "Freelance",
      responsibilities: [
        "Installed inverters and solar panels",
        "Worked on power solutions & electrical installations",
      ],
    },
  ],
  projects: [
    {
      name: "My Movie App",
      description: "Movie search app using React and API integration.",
      link: "https://github.com/NeoMemb/my-movie-app",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React, TailwindCSS & Vite.",
      link: "https://github.com/NeoMemb/portfolio",
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
  role: "Front-End Developer & Electrical Technician",
  tagline:
    "Blending design, technology, and engineering to turn ideas into elegant, responsive, and impactful digital experiences.",
  description:
    "I’m a passionate Front-End Developer and Electrical Technician with a strong drive for innovation and precision. I specialize in crafting visually appealing, responsive, and efficient web interfaces that bring ideas to life. With a background in engineering and hands-on experience in electrical systems, I combine creativity, technical expertise, and problem-solving skills to build digital products that are both functional and impactful. My goal is to design solutions that seamlessly connect technology with human experience.",
  location: "Lagos, Nigeria",
};


export  { links, details, photos, personalInfo };
