// component class = i
import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LogoHero from "../components/LogoHero"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import PostFeed from "../components/PostFeed"
import { handleStyles } from "../lib/accessibility"
import { Logo, Signature } from "../components/Icons"
import Spacer from "../components/Spacer"
import { Col, Row, Container } from "react-bootstrap"
import "../utils/normalize.css"
import "../utils/css/screen.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.nodes

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
      <div className="post-content-body" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Col>
            <h2 style={{ textAlign: "center" }}>
              <em>We. The Dreamers</em> is out now! Here&apos;s a quick peek at
              the full album.
            </h2>
          </Col>
        </Container>
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
    allContentfulPost {
      nodes {
        slug
        title
        thumbnail {
          file {
            url
          }
        }
        audio {
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
