import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import AudioPlayer from "react-h5-audio-player"
import { StructuredText } from "react-datocms"
import "react-h5-audio-player/lib/styles.css"
import "./styles.css"

const BlogPostTemplate = (props) => {
  console.log(props)
  const post = props.data.datoCmsBlog
  const siteTitle = props.data.site.siteMetadata.title
  const audioUrl = post.audio
  const image = getImage(post.picture)

  return (
    <Layout location={props.location.href} title={siteTitle}>
      <SEO title={post.title} />
      <article className={`post-content ${post.thumbnail || `pc-no-image`}`}>
        <header className="post-content-header">
          <h1 className="post-content-title">{post.title}</h1>
        </header>

        {post.description && (
          <p class="post-content-excerpt">{post.description}</p>
        )}

        {post.picture && (
          <div className="post-content-image pc-image-container">
            {post.picture && (
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
          <StructuredText data={post.body} />
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
    datoCmsBlog(slug: { eq: $slug }) {
      audio
      body {
        value
      }
      picture {
        gatsbyImageData
      }
      slug
      title
    }
  }
`
