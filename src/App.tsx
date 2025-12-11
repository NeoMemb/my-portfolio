import { useRef } from 'react'
// import { links, details, photos, personalInfo } from './data/portfolio.ts'
// import { Button } from "./components/Button.tsx"
// import { Link } from "./components/Link.tsx"
import { Navigation } from './components/Navigation.tsx'
import { Hero } from "./components/Hero.tsx"
import { Skills } from "./components/Skills.tsx"
import About from "./components/About.tsx"
import Projects from "./components/Projects.tsx"
import Experience from "./components/Experience.tsx"
import { Footer } from "./components/Footer.tsx"
import Contact from "./components/Contact.tsx"
import './App.css';
// import './styles/glassmorphism.css'

const App = () => {
  // Debugging Section
  // console.log(photos.dark.dp);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const xperienceRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App bg-[#050816] text-white min-h-screen">
      {/* Header */}
      <header>
        <Navigation />
      </header>
      {/* Main */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
