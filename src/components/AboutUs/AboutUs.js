import React from "react"

import AboutUsNavigation from "../AboutUsNavigation/AboutUsNavigation"
import PersonalInfoNavigation from "../PersonalInfo/PersonalInfoNavigation"

import "./AboutUs.scss"

const AboutUs = ({ data }) => {
  return (
    <>
      <div className="about-us-container">
        {data.blurbs.map(blurb => {
          console.log(blurb.lists.length, "<----- list")
          if (blurb.lists.length > 1) {
            return (
              <div
                key={blurb.class}
                id={blurb.class}
                className="about-content-wrapper"
              >
                <p>
                  {blurb.lists.map((item, i) => {
                    return (
                      <span className="list-item-about-us" key={i}>
                        <div className="list-item-dot"></div>
                        {item.title && <strong>{item.title}:</strong>}{" "}
                        {item.text}
                      </span>
                    )
                  })}
                </p>
              </div>
            )
          } else {
            return (
              <div
                key={blurb.class}
                id={blurb.class}
                className="about-content-wrapper"
              >
                <p>
                  {blurb.lists.map((item, i) => {
                    return (
                      <span key={i}>
                        {item.title && <strong>{item.title}:</strong>}{" "}
                        {item.text}
                      </span>
                    )
                  })}
                </p>
              </div>
            )
          }
        })}
      </div>
      <AboutUsNavigation data={data} />
      <PersonalInfoNavigation />
    </>
  )
}

export default AboutUs
