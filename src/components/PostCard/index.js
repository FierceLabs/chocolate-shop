// component class = pc
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./styles.css"

const PostCard = ({ count, postClass, node }) => (
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
      <div className="pc-post-card-content">
        <h2 className="pc-post-card-title">
          {node.frontmatter.title || node.fields.slug}
        </h2>
      </div>
    </Link>
  </article>
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
