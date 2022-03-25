import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Established in 2012 <br />
            and disbanded in 2192
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <StaticImage
              src="../assets/images/bench.jpg"
              alt="A boat"
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">About the band</h3>
          <p>Nelson At The Helm is an Indie Pop / Indie Rock duo.</p>
          <p>
            Our names are Jared and Rachelle. We really like each other. (Maybe
            too much. There have been accusations.) One day, we decided to get
            married. In 2012, our pastor performed a simple ceremony in a lawn
            next to a cornfield, launching us into a lifetime of adventures
            together.
          </p>
          <p>
            Jared studied music in college. Rachelle liked to sing harmonies
            along with the radio. Inevitably, we ended up singing together.
          </p>
          <p>
            We write love songs. We also write about theology and philosophy.
            Sometimes we write about completely made up scenarios from our heads
            that make us want to laugh or cry.
          </p>
          <p>
            Everyone experiences pain. We live in a ruined world on the edge of
            eternity. With that in mind, we hope that our music can bring hope,
            joy, or at least a moment of connection.
          </p>
          <p>
            Our first album, <em>All These Dreams</em>, is full of our hope and
            desire to change the world. Changing the world starts with us. We
            want to love in purity, we long to be filled with faith, and we are
            haunted by the knowledge that God has a life for us more abundant
            than we can imagine.
          </p>
          <p className="footnotes">
            <strong>*A note about our band name:</strong>
          </p>
          <p className="footnotes">{`Nelson At The Helm has been our moniker since 2012. 
          We both grew up in land-locked Idaho and have romanticized anything coastal since our childhoods. 
          Nelson is our last name and a 'helm' is the steering wheel of a nautical ship, 
          which sounded pretty cool to us, so we printed it on a t-shirt and the band name stuck.`}</p>
          <p className="footnotes">
            In the years since, we have questioned it. We have seen loss and
            sorrow in the world around us. We have faced illness. Rachelle was
            diagnosed with a symptomatic brain tumor that drastically altered
            our lives. Our ocean is not smooth.
          </p>
          <p className="footnotes">
            {`No matter what we might tell ourselves in our illusionist desire for
            control, we are not at the helm of our lives. Nor do we want to be.
            We have given the helm over to the one who made the seas. The wind
            and the waves obey him. Jesus is steering our ship, and we couldn't
            be more thankful.`}
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
