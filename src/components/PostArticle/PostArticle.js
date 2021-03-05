import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import HorizontalScroll from "../HorizontalScroll/HorizontalScroll"

// Styles
import "./PostArticle.scss"

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

  console.log(width, "<---- Width")

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

  const postContainer = () => {
    return (
      <div
        className={width <= 600 ? "post-container-mobile" : "post-container"}
      >
        {query.allMarkdownRemark.edges.map(edge => {
          const { title, mainImages } = edge.node.frontmatter
          const { html, fields } = edge.node

          // Dynamic width for Article, depending of image ratio
          let reduceWidth = 0
          for (let i = 0; i < mainImages.length; i++) {
            // width * fixed height + margin
            reduceWidth +=
              mainImages[i].childImageSharp.fluid.aspectRatio * 550 + 40
          }

          return (
            <article
              key={fields.slug}
              style={width <= 600 ? null : { width: `${reduceWidth}px` }}
            >
              <div className="image-gallery-container">
                <ul>
                  {mainImages.map(image => {
                    let imageWidth =
                      image.childImageSharp.fluid.aspectRatio * 550
                    return (
                      <li
                        className="img-wrapper"
                        style={
                          width <= 600 ? null : { width: `${imageWidth}px` }
                        }
                      >
                        <Img
                          fluid={{
                            ...image.childImageSharp.fluid,
                          }}
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
      </div>
    )
  }

  return <HorizontalScroll>{postContainer()}</HorizontalScroll>
}

export default PostArticle

{
  /* <div className="post-container">
        {query.allMarkdownRemark.edges.map(edge => {
          const { title, mainImages } = edge.node.frontmatter
          const { html, fields } = edge.node

          return (
            <article key={fields.slug}>
              <div className="image-gallery-container">
                <ul>
                  {mainImages.map(image => {
                    return (
                      <li className="img-wrapper">
                        <Img
                          fluid={{
                            ...image.childImageSharp.fluid,
                          }}
                          objectFit="contain"
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
      </div> */
}
