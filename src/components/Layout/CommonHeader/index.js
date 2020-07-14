// component class = ch
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CommonHeader = props => {
  const { title, handleClick } = props
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
            <li className="ch-nav-home ch-nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="ch-nav-about" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="ch-nav-elements" role="menuitem">
              <Link to={`/elements`}>Elements</Link>
            </li>
          </ul>
        </nav>
        <div className="ch-site-head-center">
          <Link className="ch-site-head-logo" to={`/`}>
            {title}
          </Link>
        </div>
        <div className="ch-site-head-right">
          <div className="ch-social-links">
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
              Twitter
            </a>
            <Link
              to={`/rss.xml`}
              title="RSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

CommonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default CommonHeader
