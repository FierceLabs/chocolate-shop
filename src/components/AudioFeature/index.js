import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./styles.css"

// component class = af

const AudioFeature = ({ post, defaultThumbnail }) => {
  const { node } = post
  const { excerpt, frontmatter, fields } = node
  const { slug } = fields
  const { audio, thumbnail, title } = frontmatter

  return (
    <div className="af-main-container">
      <Link to={node.fields.slug}>
        <h2 className="title">{title}</h2>
      </Link>
      <div className="af-container">
        <div className="af-thumbnail">
          {thumbnail && (
            <Img
              className="kg-image"
              fluid={thumbnail.childImageSharp.fluid}
              alt={title}
            />
          )}
          {!thumbnail && (
            <Img
              className="kg-image"
              fluid={defaultThumbnail.childImageSharp.fluid}
              alt={title}
            />
          )}
        </div>
        <div className="af-audio">
          {audio && <AudioPlayer src={audio} layout="horizontal-reverse" />}
        </div>
      </div>
    </div>
  )
}

AudioFeature.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default AudioFeature
