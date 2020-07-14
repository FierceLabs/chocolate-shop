// component class = f
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./styles.css"

const Footer = props => {
  const { title } = props
  return (
    <footer className="f-site-foot">
      &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
      Built by{" "}
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Fierce Island
      </a>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Footer
