import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const PostMobile = () => {
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
    <div className="post-container-mobile">
      {query.allMarkdownRemark.edges.map(edge => {
        const { title, mainImages } = edge.node.frontmatter
        const { html, fields } = edge.node

        return (
          <article key={fields.slug}>
            <div className="image-gallery-container">
              <ul>
                {mainImages.map(image => {
                  return (
                    <li className="img-wrapper">
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

export default PostMobile
