// component class = pf
import React from "react"
import PostCard from "../PostCard"
import PropTypes from "prop-types"
import "./styles.css"

const PostFeed = ({ posts }) => {
  return (
    <div className="pf-post-feed">
      {posts.map(({ node }, index) => {
        return (
          <PostCard
            key={node.fields.slug}
            count={index}
            node={node}
            postClass={`post`}
          />
        )
      })}
    </div>
  )
}

PostFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object,
    })
  ),
}

export default PostFeed
