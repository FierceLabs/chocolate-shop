// component class = ch
import React from "react"
import { Link } from "gatsby"
import Footer from "../Footer"
import CommonHeader from "./CommonHeader"
import PropTypes from "prop-types"
import "./styles.css"

const Layout = props => {
  const { title, children, location } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const handleClick = () => setToggleNav(!toggleNav)
  return (
    <div className={`ch-site-wrapper ${toggleNav ? `ch-site-head-open` : ``}`}>
      <CommonHeader {...{ title, handleClick, location }} />
      <main id="site-main" className="ch-site-main">
        <div id="swup" className="ch-transition-fade">
          {children}
        </div>
      </main>
      <Footer title={title} />
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
