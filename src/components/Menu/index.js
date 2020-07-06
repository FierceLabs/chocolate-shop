// component className type = h
// TODO: Maybe make the links an array of props
import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"
import PropTypes from "prop-types"
import "./styles.css"

const Menu = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [fixed, setFixed] = useState("")

  const handleScroll = useCallback(e => {
    if (window.pageYOffset > 20) {
      setFixed("fixed")
    } else {
      setFixed("")
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

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

  Links.propTypes = {
    className: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
  }

  return (
    <nav className={`h-site-head ${toggleNav ? `h-site-head-open` : ``}`}>
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
    </nav>
  )
}

export default Menu
