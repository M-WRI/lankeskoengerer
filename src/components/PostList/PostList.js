import React, { useState, useEffect } from "react"
import { window } from "browser-monads"
import MobileScreen from "./PostMobile"
import WideScreen from "./PostWideScreen"

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

  console.log(data, "<--- DATA")

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
