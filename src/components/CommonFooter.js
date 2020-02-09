import React from "react"
import { Link } from "gatsby"

const CommonFooter = props => {
  const { title } = props
  return (
    <footer className="site-foot">
      &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
      Built with{" "}
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>
    </footer>
  )
}

export default CommonFooter
