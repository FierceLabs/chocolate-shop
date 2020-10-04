import CMS from "netlify-cms-app"
import React from "react"
import "netlify-cms-yoast-seo/dist/main.js"
import PropTypes from "prop-types"
const YOAST = window.YOAST

class YoastComponent extends React.Component {
  render() {
    const entry = this.props.entry
    const title = entry.getIn(["data", "title"]) || ""

    YOAST.setContent({
      title: title,
      description: entry.getIn(["data", "description"]) || "",
      keyword: entry.getIn(["data", "yoast_keyword"]) || "",
      text: entry.getIn(["data", "body"]) || "",
      titleWidth: title.split("").length * 5, // 5px is an average width of each character ;)
    })

    return h("div", {}, this.props.widgetFor("body"), YOAST.getScoresAsHTML(h))
  }
}

YoastComponent.propTypes = {
  entry: PropTypes.object,
  widgetFor: PropTypes.object,
}

CMS.registerPreviewStyle(
  "https://unpkg.com/netlify-cms-yoast-seo@~1.0/dist/main.css"
)
CMS.registerPreviewTemplate("page", YoastComponent)
