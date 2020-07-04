// component className type = ham
import React, { useState, useEffect } from "react"
import "./hamburger.css"

const Hamburger = ({ toggleHamburger, toggleState }) => {
  const open = toggleState ? "open" : "closed"
  // const disableScroll = () => {
  //     if (typeof window !== 'undefined') {
  //         const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  //         const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  //         // if any scroll is attempted, set this to the previous value
  //         window.onscroll = function () {
  //             window.scrollTo(scrollLeft, scrollTop)
  //         }
  //     }
  // }
  // const enableScroll = () => {
  //     if (typeof window !== 'undefined') {
  //         window.onscroll = function () { }
  //     }
  // }

  // const handleDisableScroll = () => {
  //     if (!toggleState) {
  //         disableScroll()
  //     } else {
  //         enableScroll()
  //     }
  // }
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
