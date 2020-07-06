// component css prefix is 'header'
import React from "react"
import "./styles.css"
import PropTypes from "prop-types"

const Header = ({ children }) => {
  return <div className="header-img">{children}</div>
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
