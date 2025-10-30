import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import all the icons in Free Solid, Free Regular, and Brands styles */
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { links, photos, personalInfo } from './data/portfolio.ts'
import { Button } from '../Components/Button.tsx'
import './App.css'

// library.add(fas, far, fab)

const Links = ({ value, hrefs, className }: { value: string, hrefs: string, className?: string }) => (
  <a href={hrefs} className={className}>{value}</a>
)



const App = ()=> {
  // Debugging Section
  // console.log(photos.dark.dp);

  // States and variables...
  const [isOpen, setIsOpen] = useState(false)
  const openSideBar= () => { setIsOpen(true);}
  const closeSideBar = () => { setIsOpen(false)}

  return (
    <>
    {/* Header */}
      <header className="header">
        <Links value="Ariori" className="logo" hrefs={links.header[0].href} />
        <nav className="nav">
          <Button id="open-sidebar-btn" onClick={()=>{openSideBar()}} aria-label="open sidebar" ariaControls='navbar' aria-expanded={isOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9"><path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"/></svg>
          </Button>
          <ul className={isOpen ? ("show"):("")}>
            <li>
              <Button id="close-sidebar-btn" onClick={() => {closeSideBar()}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9"><path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/></svg>
              </Button>
            </li>
            {links.header.map(
            (item, index) => (
              <li className="no-list-style nav-items" key={index+1}><Links value={item.name} hrefs={item.href} className="no-link-style"/></li>
            )
            )}
          </ul>
          
        </nav>
        <div className="menu-btn"><i className='fa-solid fa-burger'></i></div>
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
