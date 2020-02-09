import React from "react"
import { Link } from "gatsby"

const Header = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className={`site-head ${toggleNav ? `site-head-open` : ``}`}>
      <div className="site-head-container-home">
        <a
          className="nav-burger"
          href={`#`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="swup" class="site-head-left">
          <ul className="nav" role="menu">
            <li className="nav-home nav-home-link nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about nav-home-link" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-elements nav-home-link" role="menuitem">
              <Link to={`/elements`}>Elements</Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            {""}
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links nav-home-link">
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
