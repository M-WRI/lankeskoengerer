import React from "react"
import Img from "gatsby-image"

const PostMobile = ({ dynamicHeight, data }) => {
  return (
    <>
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
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PostMobile
