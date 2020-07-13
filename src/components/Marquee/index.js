// component css class = mar
import React from "react"
import Img from "gatsby-image"
import "./styles.css"
import PropTypes from "prop-types"

const Marquee = ({ image }) => {
  return (
    <div className="mar-marquee">
      <figure className="mar-width-full">
        <Img fluid={image} />
      </figure>
      <p className="mar-text">
        "We. The Dreamers." is here. Discover each song below. <p>&#8609;</p>
      </p>
    </div>
  )
}

Marquee.propTypes = {
  image: PropTypes.node.isRequired,
}

export default Marquee
