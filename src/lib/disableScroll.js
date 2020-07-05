const disableScroll = () => {
  if (typeof window !== "undefined") {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }
}
const enableScroll = () => {
  if (typeof window !== "undefined") {
    window.onscroll = function() {}
  }
}

export const handleDisableScroll = toggleState => {
  if (!toggleState) {
    disableScroll()
  } else {
    enableScroll()
  }
}
