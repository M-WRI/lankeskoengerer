import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import AboutUsComponent from "../components/AboutUs/AboutUs"

const AboutUs = ({ data }) => {
  const { content } = data.markdownRemark.frontmatter

  return (
    <Layout site="about">
      <AboutUsComponent data={content} />
    </Layout>
  )
}

export const query = graphql`
  query AboutUsQuery {
    markdownRemark(fields: { slug: { eq: "about-us" } }) {
      frontmatter {
        title
        content {
          blurbs {
            text
            title
            class
          }
        }
      }
    }
  }
`

export default AboutUs
