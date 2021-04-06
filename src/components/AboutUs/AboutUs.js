import React from "react"

import AboutUsNavigation from "../AboutUsNavigation/AboutUsNavigation"
import PersonalInfoNavigation from "../PersonalInfo/PersonalInfoNavigation"

import "./AboutUs.scss"

const AboutUs = ({ data }) => {
  return (
    <>
      <div className="about-us-container">
        {data.blurbs.map(blurb => {
          return (
            <div
              key={blurb.class}
              id={blurb.class}
              className="about-content-wrapper"
            >
              <p>{blurb.text}</p>
            </div>
          )
        })}
      </div>
      <AboutUsNavigation data={data} />

      <PersonalInfoNavigation />
    </>
  )
}

export default AboutUs
