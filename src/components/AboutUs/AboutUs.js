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
              <p className="about-us-text-component">{blurb.text}</p>
              {!blurb.references ? null : (
                <div className="list-container">
                  <p className="list-text">
                    <span>
                      <strong>Referenzen:</strong>
                    </span>
                    {blurb.references.map((item, i) => {
                      return (
                        <span className="text-span" key={i}>
                          <div className="dot"></div> {item.text}
                        </span>
                      )
                    })}
                  </p>
                </div>
              )}
              {!blurb.awards ? null : (
                <div className="list-container">
                  <p className="list-text">
                    <span>
                      <strong>Auszeichnungen:</strong>
                    </span>
                    {blurb.awards.map((item, i) => {
                      return (
                        <span className="text-span" key={i}>
                          <div className="dot"></div> {item.text}
                        </span>
                      )
                    })}
                  </p>
                </div>
              )}
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
