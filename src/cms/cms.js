import CMS from "netlify-cms-app"
import PropTypes from "prop-types"
import "netlify-cms-yoast-seo/dist/main.js"
const YOAST = window.YOAST

var createReactClass = require("create-react-class")
var YoastComponent = createReactClass({
  render: function() {
    console.log(`rendering!!!!!`)
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
  },
})

YoastComponent.propTypes = {
  entry: PropTypes.any,
  widgetFor: PropTypes.any,
}

console.log(`running!!!!!(((((((((((((((())))))))))))))))`)

CMS.registerPreviewStyle(
  "https://unpkg.com/netlify-cms-yoast-seo@~1.0/dist/main.css"
)
CMS.registerPreviewTemplate("page", YoastComponent)
