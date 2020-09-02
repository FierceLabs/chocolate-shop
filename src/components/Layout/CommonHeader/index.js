// component class = ch
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Facebook, Youtube, Spotify } from "../../Icons"

const CommonHeader = props => {
  const { title, handleClick, location } = props
  return (
    <header className="ch-site-head">
      <div className="ch-site-head-container">
        <a className="ch-nav-burger" href={`#`} onClick={() => handleClick()}>
          <div
            className="ch-hamburger ch-hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="ch-hamburger-box">
              <div className="ch-hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="swup" className="ch-site-head-left">
          <ul className="ch-nav" role="menu">
            <li
              className={`ch-nav-home ${
                location.pathname === "/" ? "ch-nav-current" : ""
              }`}
              role="menuitem"
            >
              <Link to={`/`}>Home</Link>
            </li>
            <li
              className={`ch-nav-listen ${
                location.pathname === "/listen" ? "ch-nav-current" : ""
              }`}
              role="menuitem"
            >
              <Link to={`/listen`}>Listen</Link>
            </li>
            <li
              className={`ch-nav-about ${
                location.pathname === "/about" ? "ch-nav-current" : ""
              }`}
              role="menuitem"
            >
              <Link to={`/about`}>About</Link>
            </li>
            <li
              className={`ch-nav-contact ${
                location.pathname === "/contact" ? "ch-nav-current" : ""
              }`}
              role="menuitem"
            >
              <Link to={`/contact`}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="ch-site-head-center">
          <Link className="ch-site-head-logo" to={`/`}>
            {title.toUpperCase()}
          </Link>
        </div>
        <div className="ch-site-head-right">
          <div className="ch-social-links">
            <div className="facebook">
              <Link
                href="https://www.facebook.com/nelsonatthehelm"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook width={27} height={27} />
              </Link>
            </div>
            <div className="spotify">
              <Link
                href="https://spotify.com/"
                title="Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Spotify width={23} height={23} />
              </Link>
            </div>
            <div className="youtube">
              <Link
                href="https://youtube.com/nelsonatthehelm"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

CommonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default CommonHeader
