import { useState } from 'react'
import { links, details, photos, personalInfo } from './data/portfolio.ts'
import './App.css'

const Links = ({ value, hrefs, className }: { value: string, hrefs: string, className?: string }) => (
  <a href={hrefs} className={className}>{value}</a>
)


const App = ()=> {
  // Debugging Section
  // console.log(photos.dark.dp);

  return (
    <>
    {/* Header */}
      <header>
        <Links value="Ariori" className="logo" hrefs={links.header[0].href} />
        <nav className="nav">
          {links.header.map(
            (item, index) => (
              <li className="no-list-style nav-items" key={index+1}><Links value={item.name} hrefs={item.href} className="no-link-style"/></li>
            )
          )}
        </nav>
      </header>
      
      {/* Main */}
      <main className="home">
        <section className="home" id="home">
        <div className="home-img">
          <img className="dp-img" src={photos.dark.dp} alt={photos.dark.alt} />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span className="blue-txt highlight">Ariori</span>...</h1>
          <h3 className="typing-text">I'm a <span >{personalInfo.role}</span></h3>
          <p className="landing-info letter-space">{personalInfo.description}</p>
          <div className="social-icons">
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="#" className="btn">Hire me</a>
        </div>
        </section>
      </main>
    </>
  )
}

export default App
