import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { window } from "browser-monads"

// Styles
import "./PostArticle.scss"

import PostWideScreen from "./WideScreen/PostWideScreen"
import PostMobile from "./Mobile/PostMobile"

// Hook
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])

  useEffect(() => {
    const handleRezise = () => {
      setSize([window.innerHeight, window.innerWidth])
    }

    window.addEventListener("resize", handleRezise)
  }, [])

  return size
}

const PostArticle = () => {
  const [height, width] = useWindowSize()

  const query = useStaticQuery(graphql`
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
  `)

  return (
    <>
      {width <= 600 ? (
        <PostMobile height={height} query={query} />
      ) : (
        <PostWideScreen height={height} query={query} />
      )}
    </>
  )
}

export default PostArticle
