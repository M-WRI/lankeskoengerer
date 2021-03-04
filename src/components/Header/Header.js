import React from "react"

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
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <img src={Arrow} alt="Über uns" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
