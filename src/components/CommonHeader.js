import React from "react"
import { Link } from "gatsby"

const CommonHeader = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className={`site-head ${toggleNav ? `site-head-open` : ``}`}>
      <div className="site-head-container" id="nav">
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
            <li className="nav-home nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-elements" role="menuitem">
              <Link to={`/elements`}>Elements</Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            NELSON AT THE HELM
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links">
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

export default CommonHeader
