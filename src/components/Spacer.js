import React from "react"
import PropTypes from "prop-types"

const Spacer = ({
  top,
  bottom,
  left,
  right,
  vertical,
  horizontal,
  all,
  children,
}) => {
  let margin
  if (all) {
    margin = `${all}`
  } else if (vertical && horizontal) {
    margin = `${vertical} ${horizontal}`
  } else if (vertical) {
    margin = `${vertical} 0`
  } else if (horizontal) {
    margin = `0 ${horizontal}`
  } else {
    margin = `${top || `0`} ${right || `0`} ${bottom || `0`} ${left || `0`}`
  }
  return (
    <>
      {children && <div style={{ margin: margin }}>{children}</div>}
      {!children && <div style={{ margin: margin }} />}
    </>
  )
}

Spacer.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  all: PropTypes.string,
  children: PropTypes.node,
}

Spacer.defaultProps = {
  top: "",
  bottom: "",
  left: "",
  right: "",
  vertical: "",
  horizontal: "",
  all: "",
  children: null,
}

export default Spacer
