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
      </div>

      <footer>
        <p>By Moritz Wright</p>
        <ul>
          <li>
            <a href="https://github.com/M-WRI">@M-WRI Github</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mwri_dev/">Instagram</a>
          </li>
        </ul>
      </footer>
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
        }
      }
    }
  }
`

export default IndexPage
