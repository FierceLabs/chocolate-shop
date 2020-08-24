import React, { useState } from "react"
import { graphql, StaticQuery, navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data, location }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    category: "inquiries",
    subject: "",
    message: "",
  })
  const [checkboxState, setCheckboxState] = useState(false)
  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const onChangeCheckbox = () => {
    setCheckboxState(!checkboxState)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const body = {
      clientEmail: formState.email,
      clientName: "Nelson At The Helm",
      userEmail: "roial33@hotmail.com",
      userSubject: formState.subject,
      type: formState.category,
      userMessage: formState.message,
    }

    try {
      const response = await fetch(
        "https://j77237xnyl.execute-api.us-west-2.amazonaws.com/Prod/no-reply-email",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (!response.ok) {
        //not 200 response
        return
      }

      //all OK
    } catch (e) {
      //error
    }
    navigate("/success")
  }
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Feel free to reach out.</h2>
          <p>
            {`Love our music? Hate our music? Want us to play a show at your
            birthday pizza-party in the South Caribbean while wearing flamingo
            costumes? We've heard it all. Feel free to reach out!`}
          </p>
          <h2 id="forms">Contact Us</h2>
          <form name="contact" onSubmit={handleSubmit}>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="demo-name"
                  placeholder="Name"
                  onChange={onChange}
                  value={formState.name}
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="demo-email"
                  placeholder="Email"
                  onChange={onChange}
                  value={formState.email}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select
                  name="category"
                  id="demo-category"
                  onChange={onChange}
                  value={formState.category}
                >
                  <option value>- Category -</option>
                  <option value={"inquiries"}>Inquiries</option>
                  <option value={"comments"}>Comments</option>
                  <option value={"booking"}>Booking</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="human"
                  onChange={onChangeCheckbox}
                  value={checkboxState}
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              {/* Break */}
              <div className="col-12 col-12-xsmall">
                <input
                  type="text"
                  name="subject"
                  id="demo-subject"
                  placeholder="Subject"
                  onChange={onChange}
                  value={formState.subject}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  onChange={onChange}
                  value={formState.message}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                      disabled={!checkboxState}
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
