import React from "react"
import { Link } from "gatsby"

import "./Header.scss"

// Icons
import Logo from "../../images/logo.svg"
import Arrow from "../../images/arrow.svg"

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-navigation">
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={Arrow} alt="Über uns" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
