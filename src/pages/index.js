import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostArticle from "../components/PostArticle/PostArticle"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Netlify CMS Boilerplate" />
      <PostArticle />
    </Layout>
  )
}

export default IndexPage
