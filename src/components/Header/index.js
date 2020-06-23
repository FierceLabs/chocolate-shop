// component className type = h
import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className={`h-site-head ${toggleNav ? `h-site-head-open` : ``}`}>
      <div className="h-site-head-container-home" id="nav">
        <a
          className="h-nav-burger"
          href={`#`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="h-hamburger h-hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="h-hamburger-box">
              <div className="h-hamburger-inner" />
            </div>
          </div>
        </a>
        <div className="h-site-head-center">
          <Link className="h-site-head-logo" to={`/`}>
            {""}
          </Link>
        </div>
        <div className="h-site-head-right">
          <div className="h-social-links h-nav-home-link">
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
        </div>
      </div>
    </header>
  )
}

export default Header
