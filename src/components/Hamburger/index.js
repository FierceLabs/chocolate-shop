// component className type = ham
import React, { useState, useEffect } from "react"
import "./hamburger.css"

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

export default Hamburger
