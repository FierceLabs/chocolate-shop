// component class = pc
import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import PropTypes from "prop-types"
import "./styles.css"

const truncateString = (string, index) => {
  if (string.length <= index) {
    return string
  }
  return string.slice(0, index) + "..."
}

const PostCard = ({ count, postClass, post }) => {
  const { title, thumbnail, slug } = post

  return (
    <div className="pc-container">
      <article
        className={`pc-post-card ${postClass} ${
          thumbnail ? `pc-with-image` : `pc-no-image`
        }`}
        style={{
          backgroundImage: `url(${thumbnail.file.url})`,
          height: "250px",
          width: "250px",
        }}
      >
        <Link to={slug} className="pc-post-card-link">
          <div className="pc-post-card-content" />
        </Link>
      </article>
      <h2 className="pc-post-card-title">{truncateString(title, 18)}</h2>
    </div>
  )
}

PostCard.propTypes = {
  count: PropTypes.number.isRequired,
  postClass: PropTypes.string,
  node: PropTypes.shape({
    frontmatter: PropTypes.shape.isRequired,
    fields: PropTypes.shape.isRequired,
  }).isRequired,
}

PostCard.defaulProps = {
  postClass: "",
}

export default PostCard
