import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Netlify CMS Boilerplate" />
    <h1>Netlify CMS Boilerplate</h1>

    <div>
      <ul>
        {props.data.allMarkdownRemark.edges.map(edge => {
          return (
            <Link to={`${edge.node.fields.slug}`} key={edge.node.fields.slug}>
              <li>
                <Img
                  fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <h2>{edge.node.frontmatter.title}</h2>
              </li>
            </Link>
          )
        })}
      </ul>
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

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

/*

{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}

*/

export default IndexPage
