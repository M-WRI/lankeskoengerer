import React from "react"
import { Link } from "react-scroll"

import "./AboutUsNavigation.scss"

const AboutUsNavigation = ({ data }) => {
  return (
    // <div className="about-us-nav-container">
    <nav className="about-us-navigation">
      <ul>
        <li className="contact-link">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Kontakt
          </Link>
        </li>
        {data.blurbs.map(blurb => {
          return (
            <li key={blurb.class} className="about-us-nav-item">
              <Link to={blurb.class} spy={true} smooth={true} duration={500}>
                {blurb.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    // </div>
  )
}

export default AboutUsNavigation
