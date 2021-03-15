import React, { useState } from "react"
import { Link } from "gatsby"

import "./Header.scss"

// Icons
import Logo from "../../images/logo.svg"
import Arrow from "../../images/arrow.svg"

const Header = ({ site }) => {
  return (
    <header className="header-container">
      <nav className="header-navigation">
        <ul>
          <li>
            <Link to="/">
              <div className="logo-wrapper">
                <img src={Logo} alt="Logo" className="logo" />
              </div>
            </Link>
          </li>
          <li>
            {site === "index" ? (
              <Link to="/about-us">
                <img src={Arrow} alt="Über uns" className="arrow" />
              </Link>
            ) : (
              <Link to="/">
                <img
                  src={Arrow}
                  alt="Über uns"
                  className="arrow"
                  style={{ transform: "rotate(180deg)" }}
                />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
