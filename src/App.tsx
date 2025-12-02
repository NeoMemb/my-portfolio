// import { useState } from 'react'
// import { links, details, photos, personalInfo } from './data/portfolio.ts'
// import { Button } from "./components/Button.tsx"
// import { Link } from "./components/Link.tsx"
import { Navigation } from './components/Navigation.tsx'
import { Hero } from "./components/Hero.tsx"
// import './App.css';
// import './styles/glassmorphism.css'

const App = () => {
  // Debugging Section
  // console.log(photos.dark.dp);

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
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
