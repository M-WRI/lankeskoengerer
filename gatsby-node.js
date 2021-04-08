// const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode })
    slug = slug.replace(/\//g, "")
    actions.createNodeField({ node, name: "slug", value: slug })
  }
}
