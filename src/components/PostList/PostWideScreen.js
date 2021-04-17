import React, { useRef, useState, useEffect } from "react"
import Img from "gatsby-image"
import gsap from "gsap"

const PostWideScreen = ({ dynamicHeight, data, width }) => {
  const [position, setPosition] = useState(170)
  const [prevPosition, setPrevPosition] = useState(0)

  const itemEls = useRef([])

  let gallery = useRef()

  const wheel = e => {
    let rawData = -e.deltaY ? -e.deltaY : -e.deltaX
    setPosition(
      Math.min(
        Math.max(-gallery.offsetWidth + width.width, position + rawData * 0.7),
        170
      )
    )
  }

  const jump = i => {
    if (i === prevPosition) {
      let next = prevPosition + 1
      if (prevPosition === itemEls.current.length - 1) {
        setPrevPosition(prevPosition - 2)
      } else {
        setPosition(
          Math.max(
            -gallery.offsetWidth + width.width,
            position - itemEls.current[next].getBoundingClientRect().left + 300
          )
        )
        setPrevPosition(next)
      }
    } else if (i === 0) {
      setPosition(
        Math.max(
          -gallery.offsetWidth + width.width,
          position - itemEls.current[i].getBoundingClientRect().left + 170
        )
      )
      setPrevPosition(i)
    } else {
      setPosition(
        Math.max(
          -gallery.offsetWidth + width.width,
          position - itemEls.current[i].getBoundingClientRect().left + 300
        )
      )
      setPrevPosition(i)
    }
  }

  useEffect(() => {
    gsap.to(gallery, {
      x: `${position}px`,
    })
  }, [position])

  let addToRefs = el => {
    if (el && !itemEls.current.includes(el)) {
      itemEls.current.push(el)
    }
  }

  return (
    <div onWheel={wheel} className="wheel-element">
      <div className="gallery-wrapper">
        <div ref={el => (gallery = el)} className="gallery-container">
          {data.map((edge, i) => {
            const { frontmatter, id } = edge.node
            const { galleria } = frontmatter

            return (
              <div
                key={id}
                className="post-wrapper"
                ref={ref => itemEls.current.push(ref)}
                onClick={() => jump(i)}
              >
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
        </div>
      </div>
    </div>
  )
}

export default PostWideScreen
