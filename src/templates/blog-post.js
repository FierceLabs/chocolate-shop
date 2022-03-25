import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./styles.css"

const BlogPostTemplate = props => {
  console.log(props)
  const post = props.data.contentfulPost
  const siteTitle = props.data.site.siteMetadata.title
  const audioUrl = post.audio.file.url
  const image = getImage(post.thumbnail)

  return (
    <Layout location={props.location.href} title={siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <article className={`post-content ${post.thumbnail || `pc-no-image`}`}>
        <header className="post-content-header">
          <h1 className="post-content-title">{post.title}</h1>
        </header>

        {post.description && (
          <p class="post-content-excerpt">{post.description}</p>
        )}

        {post.thumbnail && (
          <div className="post-content-image pc-image-container">
            {post.thumbnail && (
              <GatsbyImage
                image={image}
                className="kg-image"
                alt={post.title}
              />
            )}
          </div>
        )}
        <div className="audio">
          {post.audio && (
            <AudioPlayer src={audioUrl} layout="stacked-reverse" />
          )}
        </div>

        <div
          className="post-content-body"
          // dangerouslySetInnerHTML={{ __html: post.html }}
        >
          {renderRichText(post.content)}
        </div>

        <footer className="post-content-footer">
          {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      audio {
        file {
          url
        }
      }
      content {
        raw
      }
      thumbnail {
        gatsbyImageData
      }
      slug
      title
    }
  }
`
