import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"
import Header from "../components/Header"
import LogoHero from "../components/LogoHero"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import { handleStyles } from "../lib/accessibility"
import { Logo, Signature } from "../components/Icons"

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
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Header>
        <Menu />
        <LogoHero>
          <Logo />
          <div className="mt-10">
            <Signature />
          </div>
        </LogoHero>
      </Header>
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <Footer />
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
            description
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
