import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList/PostList"

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Netlify CMS Boilerplate" />
      <PostList data={data} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
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

/*
{
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
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

*/
