import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { window } from "browser-monads"
import ResHorizontalScroll from "../HorizontalScroll/ResHorizontalScroll"

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
      <ResHorizontalScroll>
        {data.map(edge => {
          const { fields, frontmatter, html } = edge.node
          const { title, mainImages } = frontmatter

          return (
            <div key={fields.slug} className="post-wrapper">
              {/* <h1>{title}</h1> */}
              <div className="image-gallery">
                <ul>
                  {mainImages.map(image => {
                    const imgRatio = image.childImageSharp.fluid.aspectRatio
                    const dynamicWidth = imgRatio * dynamicHeight

                    return (
                      <li
                        key={image.childImageSharp.fluid.src}
                        style={{ width: dynamicWidth }}
                      >
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
      </ResHorizontalScroll>
    </div>
  )
}

export default PostList
