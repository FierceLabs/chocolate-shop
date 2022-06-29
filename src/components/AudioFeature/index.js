import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./styles.css"

// component class = af

const AudioFeature = ({ card }) => {
  const { audio, picture, title, slug } = card

  const audioUrl = audio
  const image = getImage(picture)

  return (
    <div className="af-main-container">
      <Link to={`/${slug}`}>
        <h2 className="title">{title}</h2>
      </Link>
      <div className="desktop">
        <div className="af-container">
          <div className="af-thumbnail">
            {picture && (
              <GatsbyImage image={image} className="kg-image" alt={title} />
            )}
          </div>
          <div className="af-audio">
            {audio && (
              <AudioPlayer src={audioUrl} layout="horizontal-reverse" />
            )}
          </div>
        </div>
      </div>
      <div className="mobile">
        <div>
          <div className="af-audio">
            {audio && <AudioPlayer src={audioUrl} layout="stacked-reverse" />}
          </div>
        </div>
      </div>
    </div>
  )
}

AudioFeature.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    audio: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    thumbnail: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }),
}

export default AudioFeature
