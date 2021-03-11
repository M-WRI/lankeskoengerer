import React from "react"
import Img from "gatsby-image"

import HorizontalScroll from "react-scroll-horizontal"

const PostWideScreen = ({ dynamicHeight, data }) => {
  return (
    <>
      <HorizontalScroll>
        {data.map(edge => {
          const { frontmatter, id } = edge.node
          const { galleria } = frontmatter

          // const { title } = frontmatter
          // const { html } = edge.node

          return (
            <div key={id} className="post-wrapper">
              {/* <h1>{title}</h1> */}
              <div className="image-gallery">
                <ul>
                  {galleria.map(image => {
                    const imgRatio =
                      image.imgSrc.childImageSharp.fluid.aspectRatio
                    const dynamicWidth = imgRatio * dynamicHeight

                    return (
                      <li
                        key={image.imgSrc.childImageSharp.id}
                        style={{ width: dynamicWidth }}
                      >
                        <Img
                          fluid={image.imgSrc.childImageSharp.fluid}
                          style={{ height: dynamicHeight }}
                        />
                        <p className="image-description">{image.imgDesc}</p>
                      </li>
                    )
                  })}
                </ul>
                {/* <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                /> */}
              </div>
            </div>
          )
        })}
      </HorizontalScroll>
    </>
  )
}

export default PostWideScreen
