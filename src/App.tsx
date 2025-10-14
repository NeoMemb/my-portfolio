import { useState } from 'react'
import { links, details, photos } from './data/portfolio.ts'
import './App.css'

const Links = ({ value, hrefs, className }: { value: string, hrefs: string, className?: string }) => (
  <a href={hrefs} className={className}>{value}</a>
)


const App = ()=> {
  return (
    <>
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
      <main className="home">
        <div className="home-img">
          <img src={photos.dp} alt="" />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Ariori</span></h1>
            <h3 className="typing-text">I'm a <span></span></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.</p>
            <div className="social-icons">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <a href="#" className="btn">Hire me</a>
        </div>
      </main>
    </>
  )
}

export default App
