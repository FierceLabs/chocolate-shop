// component class = f
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Facebook, Youtube, Spotify, Logo } from "../Icons"
import "./styles.css"
import { customProperties } from "../../lib/exports"

const Footer = props => {
  const { title, color, isOpen } = props
  const fill = color === "black" ? "#ccc" : customProperties["--color-base"]
  return (
    <footer className={`f-site-foot ${color}`}>
      {isOpen && (
        <div className="f-logo open">
          <Logo height={40} fill={customProperties["--color-primary"]} />
          <div
            style={{ color: customProperties["--color-primary"] }}
            className="f-register"
          >
            {" "}
            &reg;
          </div>
        </div>
      )}
      {!isOpen && (
        <>
          <div className="f-logo">
            <Logo height={40} fill={fill} />
            <div className="f-register"> &reg;</div>
          </div>
          <div className="f-social-links">
            <div className="f-facebook">
              <a
                href="https://www.facebook.com/nelsonatthehelm"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook width={27} height={27} color={fill} />
              </a>
            </div>
            <div className="f-spotify">
              <a
                href="https://spotify.com/"
                title="Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Spotify width={23} height={23} color={fill} />
              </a>
            </div>
            <div className="f-youtube">
              <a
                href="https://youtube.com/nelsonatthehelm"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube width={30} height={30} color={fill} />
              </a>
            </div>
          </div>
          <div className="f-links">
            <span>
              <Link href="/privacy-policy" title="Privacy Policy">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/contact" title="Contact Us">
                Contact Us
              </Link>{" "}
              |{" "}
              <Link href="/press" title="Press Packet">
                Press
              </Link>
            </span>
          </div>
          <div className="f-site-info">
            &copy; {new Date().getFullYear()}{" "}
            <Link to={`/`}>{title.toUpperCase()}</Link> | Built by{" "}
            <a
              href="https://gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fierce Island&reg;
            </a>
          </div>
        </>
      )}
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["white", "black"]),
  isOpen: PropTypes.bool,
}

Footer.defaultProps = {
  color: "white",
  isOpen: false,
}

export default Footer
