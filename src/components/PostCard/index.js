// component class = pc
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./styles.css"

const truncateString = (string, index) => {
  if (string.length <= index) {
    return string
  }
  return string.slice(0, index) + "..."
}

const PostCard = ({ count, postClass, node }) => (
  <div className="pc-container">
    <article
      className={`pc-post-card ${postClass} ${
        node.frontmatter.thumbnail ? `pc-with-image` : `pc-no-image`
      }`}
      style={
        node.frontmatter.thumbnail && {
          backgroundImage: `url(${node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
        }
      }
    >
      <Link to={node.fields.slug} className="pc-post-card-link">
        <div className="pc-post-card-content" />
      </Link>
    </article>
    <h2 className="pc-post-card-title">
      {truncateString(node.frontmatter.title, 18)}
    </h2>
  </div>
)

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
