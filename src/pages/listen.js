import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import AudioFeature from "../components/AudioFeature"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ListenPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { defaultThumbnail } = data

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Listen"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>We just dropped an album. Take a listen!</h2>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          {posts &&
            posts.map((post, index) => (
              <AudioFeature
                post={post}
                key={index}
                defaultThumbnail={defaultThumbnail}
              />
            ))}
        </div>
      </article>
    </Layout>
  )
}

ListenPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    defaultThumbnail: file(relativePath: { eq: "defaultThumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            audio
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Listen = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ListenPage location={props.location} data={data} {...props} />
    )}
  />
)

Listen.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Listen
