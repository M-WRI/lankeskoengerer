import React from "react"
import { Link } from "gatsby"

import "./PersonalInfoNavigation.scss"

const PersonalInfoNavigation = () => {
  return (
    <div className="personal-info-navigation">
      <nav>
        <ul>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PersonalInfoNavigation
