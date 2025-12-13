// import { useRef } from 'react'
// import { links, details, photos, personalInfo } from './data/portfolio.ts'
// import { Button } from "./components/Button.tsx"
// import { Link } from "./components/Link.tsx"
import { Navigation } from './components/Navigation.tsx';
import { Hero } from "./components/Hero.tsx";
import { Skills } from "./components/Skills.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Experience from "./components/Experience.tsx";
import { Footer } from "./components/Footer.tsx";
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
// import './styles/glassmorphism.css'

const App = () => {
  // Debugging Section
  // console.log(photos.dark.dp);
  
  return (
    <ThemeProvider>
      <div className="App">
      {/* Header */}
      <header>
        <Navigation />
      </header>
      {/* Main */}
      <main>
        <section id="home"><Hero /></section>
        <section id="about-me"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        {/* <section id="contact"><Contact /></section> */}
      </main>
      <Footer />
    </div>
    </ThemeProvider>
    )
}

export default App
