// component css class = mar
import React from "react"
import Img from "gatsby-image"
import "./styles.css"

const Marquee = ({ image }) => {
  return (
    <div className="mar-marquee">
      <figure className="mar-width-full">
        <Img fluid={image} />
      </figure>
      <p className="mar-text">NEW ALBUM RELEASE COMING SOON</p>
    </div>
  )
}

export default Marquee
