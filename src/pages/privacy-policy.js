import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const PrivacyPolicyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Nelson At The Helm Privacy Policy <br />
          </h2>
          <h3 id="dynamic-styles">Privacy Notice</h3>
          <p>
            This privacy notice discloses the privacy practices for
            nelsonatthehelm.com. This privacy notice applies solely to
            information collected by this website. It will notify you of the
            following:
          </p>
          <ol>
            <li>
              What personally identifiable information is collected from you
              through the website, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ol>
          <h3>Information Collection, Use, and Sharing</h3>
          <p>
            We are the sole owners of the information collected on this site. We
            only have access to/collect information that you voluntarily give us
            via email or other direct contact from you. We will not sell or rent
            this information to anyone. We will use your information to respond
            to you, regarding the reason you contacted us. We will not share
            your information with any third party outside of our organization,
            other than as necessary to fulfill your request, e.g. to ship an
            order. Unless you ask us not to, we may contact you via email in the
            future to tell you about specials, new products or services, or
            changes to this privacy policy.
          </p>
          <h3>Your Access to and Control Over Information</h3>
          <p>
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number given on our website:
          </p>
          <ol>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ol>
          <h3>Security</h3>
          <p>
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline. Only employees who need the information to
            perform a specific job (for example, billing or customer service)
            are granted access to personally identifiable information. The
            computers/servers in which we store personally identifiable
            information are kept in a secure environment.
          </p>
          <h3>
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at (208) 631-4945 or via
            email.
          </h3>
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
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <PrivacyPolicyPage location={props.location} data={data} {...props} />
    )}
  />
)
