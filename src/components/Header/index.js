// component className type = h
import React, { useState } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"
import "./header.css"

const Header = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = useState(false)
  const open = toggleNav ? "open" : ""
  const toggleHamburger = () => {
    setToggleNav(!toggleNav)
  }

  const Links = ({ className }) => {
    return (
      <div className={`${className}`}>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/elements`}>Elements</Link>
        <a
          href="https://www.facebook.com"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <Link
          to={`/rss.xml`}
          title="RSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </Link>
      </div>
    )
  }
  return (
    <header className={`h-site-head ${toggleNav ? `h-site-head-open` : ``}`}>
      <div className="h-site-head-container-home" id="nav">
        <Hamburger toggleHamburger={toggleHamburger} toggleState={toggleNav} />
        {toggleNav && (
          <div className={`h-mobile-menu ${open}`}>
            <Links className="h-mobile-links" />
          </div>
        )}
        <div className="h-site-head-right">
          <Links className="h-nav-home-link h-social-links" />
        </div>
      </div>
    </header>
  )
}

export default Header
