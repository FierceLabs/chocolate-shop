// component className type = h
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"
import "./header.css"

const Header = props => {
  const [toggleNav, setToggleNav] = useState(false)
  const [fixed, setFixed] = useState("")

  useEffect(() => {
    const handleScroll = e => {
      if (window.pageYOffset > 600) {
        setFixed("fixed")
      } else {
        setFixed("")
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    // return window.removeEventListener('scroll', handleScroll)
  }, [])

  const open = toggleNav ? "open" : ""
  const toggleHamburger = () => {
    setToggleNav(!toggleNav)
  }

  const Links = ({ className, current }) => {
    return (
      <div className={`${className}`}>
        <Link className={current === "home" ? "h-active" : ""} to={`/`}>
          Home
        </Link>
        <Link className={current === "about" ? "h-active" : ""} to={`/about`}>
          About
        </Link>
        <Link
          className={current === "elements" ? "h-active" : ""}
          to={`/elements`}
        >
          Elements
        </Link>
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
      <div className={`h-site-head-container-home ${fixed}`}>
        <Hamburger toggleHamburger={toggleHamburger} toggleState={toggleNav} />
        {toggleNav && (
          <div className={`h-mobile-menu ${open}`}>
            <Links className="h-mobile-links" current="home" />
          </div>
        )}
        <div className={`h-site-head-right`}>
          <Links className="h-nav-home-link h-social-links" current="home" />
        </div>
      </div>
    </header>
  )
}

export default Header
