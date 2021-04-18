import React from "react"
import Img from "gatsby-image"

const PostMobileWideScreen = ({ dynamicHeight, data }) => {
  return (
    <div className="wheel-element">
      <div className="gallery-wrapper">
        <div className="gallery-container">
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

                      let wideMobileWidth = !image.imgDesc
                        ? dynamicWidth
                        : dynamicWidth + 300

                      return (
                        <li
                          key={image.imgSrc.childImageSharp.id}
                          style={{ width: wideMobileWidth }}
                        >
                          <Img
                            fluid={image.imgSrc.childImageSharp.fluid}
                            style={
                              !image.imgDesc
                                ? { height: dynamicHeight, width: "100%" }
                                : { height: dynamicHeight, width: dynamicWidth }
                            }
                          />
                          {!image.imgDesc ? null : (
                            <p className="image-description">{image.imgDesc}</p>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PostMobileWideScreen
