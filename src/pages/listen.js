import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import AudioFeature from "../components/AudioFeature"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ListenPage = ({ data, location }) => {
  const audioCards = data.allContentfulAudioCard.nodes
  const siteTitle = data.site.siteMetadata.title
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
          <figure className="kg-card kg-image-card kg-width-full">
            <StaticImage
              src="../assets/images/nath.jpg"
              alt="A boat"
              className="kg-image"
            />
          </figure>
          <h2>All These Dreams</h2>
          <p>
            Our first album, <em>All These Dreams</em>, is full of our hope and
            desire to change the world. Changing the world starts with us. We
            want to love in purity, we long to be filled with faith, and we are
            haunted by the knowledge that God has a life for us more abundant
            than we can imagine.
          </p>
          {audioCards &&
            audioCards.map((card) => (
              <AudioFeature
                card={card}
                key={card.title}
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
    allContentfulAudioCard {
      nodes {
        slug
        title
        thumbnail {
          gatsbyImageData(height: 50)
        }
        audio {
          file {
            url
          }
        }
      }
    }
  }
`

const Listen = (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <ListenPage location={props.location} data={data} {...props} />
    )}
  />
)

Listen.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Listen
