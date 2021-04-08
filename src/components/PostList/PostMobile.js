import React from "react"
import Img from "gatsby-image"

const PostMobile = ({ dynamicHeight, data }) => {
  return (
    <>
      {data.map(edge => {
        const { frontmatter, id } = edge.node
        const { galleria, mobileText } = frontmatter

        return (
          <div key={id} className="post-wrapper">
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
                    </li>
                  )
                })}
              </ul>
              <p>{mobileText}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PostMobile
