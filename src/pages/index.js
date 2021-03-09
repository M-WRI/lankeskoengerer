import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostArticle from "../components/PostArticle/PostArticle"
import PostList from "../components/PostList/PostList"

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Netlify CMS Boilerplate" />
      {/* <PostArticle data={data} /> */}
      <PostList data={data} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
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
