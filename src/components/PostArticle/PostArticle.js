import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { window } from "browser-monads"

// Styles
import "./PostArticle.scss"

import PostWideScreen from "./PostWideScreen"
import PostMobile from "./PostMobile"

// Hook
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handleRezise = () => {
      setSize([window.innerHeight, window.innerWidth])
    }

    window.addEventListener("resize", handleRezise)
  }, [])
  return size
}

const PostArticle = ({ data }) => {
  const [height, width] = useWindowSize()

  return (
    <>
      <div className="post-wide-screen">
        <PostWideScreen height={height} data={data} />
      </div>
      <div className="post-mobile-screen">
        <PostMobile height={height} data={data} />
      </div>
    </>
  )
}

export default PostArticle
