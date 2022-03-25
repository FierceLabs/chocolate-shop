// component class = pf
import React from "react"
import PostCard from "../PostCard"
import PropTypes from "prop-types"
import "./styles.css"

const PostFeed = ({ posts }) => {
  return (
    <div className="pf-container">
      <div className="pf-post-feed">
        {posts.map((post, index) => {
          return (
            <PostCard
              key={post.slug}
              count={index}
              post={post}
              postClass={`post`}
            />
          )
        })}
      </div>
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
