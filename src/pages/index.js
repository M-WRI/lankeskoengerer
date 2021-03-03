import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Netlify CMS Boilerplate" />
      <h1>Netlify CMS Boilerplate</h1>

      <div className="post-container">
        {/* props.data.allMarkdownRemark.edges */}
        {props.data.allMarkdownRemark.edges.map(edge => {
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
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
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
`

export default IndexPage
