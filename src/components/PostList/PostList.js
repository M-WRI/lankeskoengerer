import React, { useState, useEffect } from "react"
import Img from "gatsby-image"

import "./PostList.scss"

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

const PostList = ({ data }) => {
  const [height, width] = useWindowSize()

  const dynamicHeight = height * 0.55

  return (
    <div className="post-list-container">
      {data.map(edge => {
        const { fields, frontmatter, html } = edge.node
        const { title, mainImages } = frontmatter

        console.log(mainImages, "<--- IMAGES")

        return (
          <div className="post-wrapper">
            <h1>{title}</h1>
            <div className="image-gallery">
              <ul>
                {mainImages.map(image => {
                  const imgRatio = image.childImageSharp.fluid.aspectRatio
                  const dynamicWidth = imgRatio * dynamicHeight

                  return (
                    <li style={{ width: dynamicWidth }}>
                      <Img
                        fluid={image.childImageSharp.fluid}
                        style={{ height: dynamicHeight }}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
