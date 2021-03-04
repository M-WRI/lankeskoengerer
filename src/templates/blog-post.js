import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  return (
    <Layout>
      {/* <Img fluid={thumbnail.childImageSharp.fluid} />
      <h1>{title}</h1> */}
    </Layout>
  )
}
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         thumbnail {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `
