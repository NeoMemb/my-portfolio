import { useState } from 'react'
import { links, details, photos, personalInfo } from './data/portfolio.ts'
import { Button } from "./components/Button.tsx"
import { Link } from "./components/Link.tsx"
import './App.css'

const App = ()=> {
  // Set Menu-(IsOpen || IsClose)
  const [isOpen, setIsOpen] = useState(false);
  // const [isClose, setIsClose] = useState(true);
  const toggleFunc = () => {  
    setIsOpen(!isOpen); 
    // setIsClose(!isClose)
  };

  // Debugging Section
  // console.log(photos.dark.dp);

  return (
    <>
    {/* Header */}
      <header>
        <Link value="Ariori" className="logo" hrefs={links.header[0].href} />
        <nav className="nav">
            {/* 
            On Mobile screen:
                Two different states:
                    1. Open Menu
                    2. Close menu

            isOpen is true:

            */}
            {/* There'll be a menu-bar here, which'll open the ul li items */}
            <Button id="open-menu" 
            className={(isOpen) ? ("hide") : ("show")} 
            onClick={() => {toggleFunc()}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </Button>
            <ul className={`nav-links no-list-style ${(!isOpen) ? ("hide") : ("show")}`}>
                <Button id="close-menu" 
                className={`close-btn ${(!isOpen) ? ("hide") : ("show")}`}
                onClick={() => { toggleFunc()}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
                {links.header.map(
                    (item, index) => (
                        <li className="no-list-style nav-items" key={index+1}><Link value={item.name} hrefs={item.href} className="no-link-style"/></li>
                    )
                )}
            </ul>
        </nav>
      </header>
      
      {/* Main */}
      <main className="home" onClick={()=>{setIsOpen(false)}}>
        <section className="home" id="home">
        <div className="home-img">
          <img className="dp-img" src={photos.dark.dp} alt={photos.dark.alt} />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span className="blue-txt highlight">Ariori</span>...</h1>
          {/* <h3 className="typing-text">I'm a <span >{personalInfo.role}</span></h3> */}
          <h3 className="typing-text">I'm a <span>Software Developer</span></h3>
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
        <section className="about-me" id="about-me">
          <div className="txt-content">
            <h1 className="blue-txt">About Me</h1>
            <p>
              {`I'm Ariori Abdulrafiu, from Nigeria. I'm ${details.services[0]} and also I'm ${details.services[1]} and ${details.services[2]}.`}
            </p>
          </div>
        </section>
        <section id="skills" className="skills"></section>
        <section id="education" className="education"></section>
        <section id="experience" className="experience"></section>
        <section id="projects" className="projects"></section>
        <section id="contact" className="contact"></section>
      </main>
    </>
  )
}

export default App
