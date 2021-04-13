import React, { useState } from "react"
import Img from "gatsby-image"
// import { Link } from "react-scroll"
import { Link } from "gatsby"
import styled from "styled-components"

import HorizontalScroll from "react-scroll-horizontal"

const HorizontalScrollComponent = styled(HorizontalScroll)`
  div:first-child {
    
  }
`

const PostWideScreen = ({ dynamicHeight, data }) => {
  const [position, setPosition] = useState(1)

  const handlePosition = () => {
    setPosition(position + 1)
  }

  console.log(position, "<------- POSITION")

  return (
    <>
      <HorizontalScroll config={{ stiffness: 2000, damping: 80 }}>
        {data.map((edge, i) => {
          const { frontmatter, id } = edge.node
          const { galleria } = frontmatter

          return (
            <div id={`position-${i}`} key={id} className="post-wrapper">
              <div className="image-gallery">
                <ul>
                  {galleria.map(image => {
                    const imgRatio =
                      image.imgSrc.childImageSharp.fluid.aspectRatio
                    const dynamicWidth = imgRatio * dynamicHeight

                    return (
                      <li
                        key={image.imgSrc.childImageSharp.id}
                        style={{ width: dynamicWidth }}
                      >
                        <Img
                          fluid={image.imgSrc.childImageSharp.fluid}
                          style={{ height: dynamicHeight }}
                        />
                        <p className="image-description">{image.imgDesc}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </HorizontalScroll>
      <Link
        // activeClass="active"
        to={`#position-${position}`}
        // spy={true}
        // duration={500}
      >
        <div onClick={handlePosition} className="arrow-class"></div>
      </Link>
    </>
  )
}

export default PostWideScreen
