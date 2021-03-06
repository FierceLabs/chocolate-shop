// component class = i
import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LogoHero from "../components/LogoHero"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import PostFeed from "../components/PostFeed"
import { handleStyles } from "../lib/accessibility"
import { Logo, Signature } from "../components/Icons"
// import Marquee from "../components/Marquee"
import Spacer from "../components/Spacer"

// import "../utils/global.scss"
import "../utils/normalize.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  useEffect(() => handleStyles(), [])

  return (
    <div>
      <SEO
        title="Official Site | The SoundTrack To A Revolution"
        keywords={[`nelson`, `helm`, `official site`, `band`]}
      />
      <Header>
        <Menu />
        <LogoHero>
          <Logo />
          <Spacer top="10px">
            <Signature />
          </Spacer>
        </LogoHero>
      </Header>
      <Spacer horizontal="3vw" vertical="3vw">
        <figure className="kg-image-card kg-width-full">
          <Img fluid={data.stack.childImageSharp.fluid} className="kg-image" />
        </figure>
      </Spacer>
      {/* <div className="placeholder" /> */}
      {/* <Marquee image={data.face.childImageSharp.fluid} /> */}
      <div style={{ backgroundColor: "#fff" }}>
        <PostFeed posts={posts} />
      </div>
      <Footer title={siteTitle} color={"black"} />
    </div>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
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
    stack: file(relativePath: { eq: "stack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
