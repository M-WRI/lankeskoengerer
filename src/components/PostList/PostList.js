import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { window } from "browser-monads"
import ResHorizontalScroll from "../HorizontalScroll/ResHorizontalScroll"
import MobileScreen from "../PostArticle/Mobile/PostMobile"

import WideScreen from "../PostArticle/WideScreen/PostWideScreen"

import "./PostList.scss"

const PostList = ({ data }) => {
  const [height, setHeight] = useState(null)

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
      <div className="mobile-screen">
        <MobileScreen dynamicHeight={dynamicHeight} data={data} />
      </div>
    </div>
  )
}

export default PostList
