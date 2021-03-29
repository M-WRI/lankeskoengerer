import React from "react"
import Img from "gatsby-image"

const PostMobile = ({ dynamicHeight, data }) => {
  return (
    <>
      {data.map(edge => {
        const { frontmatter, id } = edge.node
        const { galleria, mobileText } = frontmatter

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
                      {/* {!image.imgDesc ? null : (
                        <p className="image-description">{image.imgDesc}</p>
                      )} */}
                    </li>
                  )
                })}
              </ul>
              <p>{mobileText}</p>
              {/* <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                /> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PostMobile
