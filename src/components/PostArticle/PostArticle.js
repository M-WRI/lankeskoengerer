import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import HorizontalScroll from "react-scroll-horizontal"

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
    <div className="post-container">
      {/* <HorizontalScroll> */}
      {query.allMarkdownRemark.edges.map(edge => {
        const { title, mainImages } = edge.node.frontmatter
        const { html, fields } = edge.node

        const dynamicHeight = height * 0.55

        // Dynamic width for Article, depending of image ratio
        let reduceWidth = 0
        for (let i = 0; i < mainImages.length; i++) {
          // width * fixed height + margin
          reduceWidth +=
            mainImages[i].childImageSharp.fluid.aspectRatio * dynamicHeight + 40
        }

        return (
          <article key={fields.slug} style={{ width: `${reduceWidth}px` }}>
            <div className="image-gallery-container">
              <ul>
                {mainImages.map(image => {
                  let imageWidth =
                    image.childImageSharp.fluid.aspectRatio * dynamicHeight
                  return (
                    <li
                      className="img-wrapper"
                      style={{ width: `${imageWidth}px` }}
                    >
                      <Img
                        fluid={{
                          ...image.childImageSharp.fluid,
                        }}
                        style={{ height: dynamicHeight }}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        )
      })}
      {/* </HorizontalScroll> */}
    </div>
  )
}

export default PostArticle
