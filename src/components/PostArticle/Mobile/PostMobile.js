import React from "react"

const PostMobile = () => {
  return (
    <div className={width <= 600 ? "post-container-mobile" : "post-container"}>
      <HorizontalScroll>
        {query.allMarkdownRemark.edges.map(edge => {
          const { title, mainImages } = edge.node.frontmatter
          const { html, fields } = edge.node

          const dynamicHeight = height * 0.55

          // Dynamic width for Article, depending of image ratio
          let reduceWidth = 0
          for (let i = 0; i < mainImages.length; i++) {
            // width * fixed height + margin
            reduceWidth +=
              mainImages[i].childImageSharp.fluid.aspectRatio * dynamicHeight +
              40
          }

          return (
            <article
              key={fields.slug}
              style={width <= 600 ? null : { width: `${reduceWidth}px` }}
            >
              <div className="image-gallery-container">
                <ul>
                  {mainImages.map(image => {
                    let imageWidth =
                      image.childImageSharp.fluid.aspectRatio * dynamicHeight
                    return (
                      <li
                        className="img-wrapper"
                        style={
                          width <= 600 ? null : { width: `${imageWidth}px` }
                        }
                      >
                        <Img
                          fluid={{
                            ...image.childImageSharp.fluid,
                          }}
                          style={{ height: dynamicHeight }}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </article>
          )
        })}
      </HorizontalScroll>
    </div>
  )
}

export default PostMobile
