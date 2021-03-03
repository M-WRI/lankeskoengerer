import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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

        return (
          <article key={fields.slug}>
            <div className="image-gallery-container">
              <ul>
                {mainImages.map(image => (
                  <Img fluid={image.childImageSharp.fluid} />
                ))}
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
