import React, { useState, useEffect } from "react"
import { window } from "browser-monads"
import HorizontalScroll from "react-scroll-horizontal"

const ResHorizontalScroll = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)

  setTimeout(() => {
    setWidth(window.innerWidth)
  }, 0)

  useEffect(() => {
    const handleWidthRezise = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWidthRezise)
  }, [])

  return (
    <>
      {width <= 600 ? (
        <>{children}</>
      ) : (
        <HorizontalScroll>{children}</HorizontalScroll>
      )}
    </>
  )
}

export default ResHorizontalScroll
