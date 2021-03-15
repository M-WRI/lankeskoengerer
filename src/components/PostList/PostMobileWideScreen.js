import React from "react"
import Img from "gatsby-image"

import HorizontalScroll from "react-scroll-horizontal"

const PostMobileWideScreen = ({ dynamicHeight, data }) => {
  return (
    <>
      <HorizontalScroll>
        {data.map(edge => {
          const { frontmatter, id } = edge.node
          const { galleria } = frontmatter

          return (
            <div key={id} className="post-wrapper">
              <div className="image-gallery">
                <ul>
                  {galleria.map(image => {
                    const imgRatio =
                      image.imgSrc.childImageSharp.fluid.aspectRatio
                    const dynamicWidth = imgRatio * dynamicHeight
                    const wideMobileWidth = dynamicWidth + 300

                    return (
                      <li
                        key={image.imgSrc.childImageSharp.id}
                        style={{ width: wideMobileWidth }}
                      >
                        <Img
                          fluid={image.imgSrc.childImageSharp.fluid}
                          style={{ height: dynamicHeight, width: dynamicWidth }}
                        />
                        <p className="image-description">{image.imgDesc}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </HorizontalScroll>
    </>
  )
}

export default PostMobileWideScreen
