import React, { useState, useEffect } from "react"
import { window } from "browser-monads"
import { useInView } from "react-intersection-observer"

import MobileScreen from "./PostMobile"
import WideScreen from "./PostWideScreen"
import MobileWideScreen from "./PostMobileWideScreen"

import "./PostList.scss"

const PostList = ({ data }) => {
  const [height, setHeight] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  setTimeout(() => {
    setHeight(window.innerHeight)
  }, 0)

  useEffect(() => {
    const handleHeightRezise = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleHeightRezise)
  }, [])

  const dynamicHeight = height * 0.55

  return (
    <div className="post-list-container">
      <div className="wide-screen">
        <WideScreen dynamicHeight={dynamicHeight} data={data} />
      </div>
      <div className="mobile-screen" ref={ref}>
        <MobileScreen dynamicHeight={dynamicHeight} data={data} />
      </div>
      <div className="wide-mobile-screen">
        <MobileWideScreen dynamicHeight={dynamicHeight} data={data} />
      </div>
    </div>
  )
}

export default PostList
