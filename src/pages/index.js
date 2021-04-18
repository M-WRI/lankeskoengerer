import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { window } from "browser-monads"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList/PostList"
import Footer from "../components/Footer/Footer"

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    setWindowWidth({
      width: window.innerWidth,
    })
  }, [])

  function handleResize() {
    setWindowWidth({
      width: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Layout site="index" width={windowWidth}>
      <SEO title="Netlify CMS Boilerplate" />
      <PostList data={data} width={windowWidth} />
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
            mobileText
          }
          id
        }
      }
    }
  }
`

export default IndexPage
