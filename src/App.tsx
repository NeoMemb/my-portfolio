// import { useState } from 'react'
// import { links, details, photos, personalInfo } from './data/portfolio.ts'
// import { Button } from "./components/Button.tsx"
// import { Link } from "./components/Link.tsx"
import { Navigation } from './components/Navigation.tsx'
import { Hero } from "./components/Hero.tsx"
import './App.css';

const App = () => {
  // Debugging Section
  // console.log(photos.dark.dp);

  return (
    <div className="App bg-[#050816] text-white min-h-screen">
    {/* Header */}
      <header>
        
      </header>
      <Navigation />
      {/* Main */}
      <main>
        
      </main>
      <Hero />
    </div>
  )
}

export default App
