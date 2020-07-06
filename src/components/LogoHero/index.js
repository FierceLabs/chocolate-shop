// component css prefix is 'logo'
import React from "react"
import "./styles.css"
import PropTypes from "prop-types"

const LogoHero = ({ children }) => {
  return <div className="logo-container">{children}</div>
}

LogoHero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LogoHero
