import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Styles
import "./PostArticle.scss"

const PostArticle = () => {
  const query = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              mainImages {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className="post-container">
      {query.allMarkdownRemark.edges.map(edge => {
        const { title, mainImages } = edge.node.frontmatter
        const { html, fields } = edge.node

        // Dynamic width for Article, depending of image ratio
        let reduceWidth = 0
        for (let i = 0; i < mainImages.length; i++) {
          // width * fixed height + margin
          reduceWidth +=
            mainImages[i].childImageSharp.fluid.aspectRatio * 550 + 40
        }

        return (
          <article key={fields.slug} style={{ width: `${reduceWidth}px` }}>
            <div className="image-gallery-container">
              <ul>
                {mainImages.map(image => {
                  let imageWidth = image.childImageSharp.fluid.aspectRatio * 550
                  return (
                    <li
                      className="img-wrapper"
                      style={{ width: `${imageWidth}px` }}
                    >
                      <Img
                        fluid={{
                          ...image.childImageSharp.fluid,
                        }}
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
    </div>
  )
}

export default PostArticle
