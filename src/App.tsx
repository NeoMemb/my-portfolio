import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { links, details, photos, personalInfo } from './data/portfolio.ts'
import './App.css'

library.add(fas, far, fab)

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
      <main className="main">
        <section className="home" id="home">
        <div className="home-img">
          <img className="dp-img" src={photos.dark.dp} alt={photos.dark.alt} />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span className="blue-txt highlight">Ariori</span>...</h1>
          <h3 className="typing-text">I'm a <span className="typing-text">{personalInfo.role}</span></h3>
          <p className="landing-info letter-space no-select">{personalInfo.description}</p>
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
