// component className type = ham
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./styles.css"

const Hamburger = ({ toggleHamburger, toggleState }) => {
  const open = toggleState ? "open" : "closed"
  return (
    <button
      className="ham-nav-burger"
      onClick={() => {
        toggleHamburger()
      }}
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
    >
      <div className={`ham-hamburger-box ${open}`}>
        <div className="ham-hamburger-inner" />
      </div>
    </button>
  )
}

Hamburger.propTypes = {
  toggleHamburger: PropTypes.func.isRequired,
  toggleState: PropTypes.bool.isRequired,
}

export default Hamburger
