import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList/PostList"
import Footer from "../components/Footer/Footer"

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges

  return (
    <Layout site="index">
      <SEO title="Netlify CMS Boilerplate" />
      <PostList data={data} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            galleria {
              imgSrc {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  id
                }
              }
              imgDesc
            }
            date
            title
          }
          id
        }
      }
    }
  }
`

export default IndexPage
