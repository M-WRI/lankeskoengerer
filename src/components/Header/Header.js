import React, { useState } from "react"
import { Link } from "gatsby"

import "./Header.scss"

// Icons
import Logo from "../../images/logo.svg"
import Arrow from "../../images/arrow.svg"

const Header = ({ site }) => {
  const [arrow, setArrow] = useState(false)

  const arrowHandeler = () => {
    setArrow(!arrow)
  }

  console.log(arrow, "<--- arrow")

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
            <Link
              to={site === "index" ? "/about-us" : "/"}
              onClick={arrowHandeler}
            >
              <img
                src={Arrow}
                alt="Über uns"
                className="arrow"
                style={
                  arrow
                    ? { transform: "rotate(90deg)" }
                    : { transform: "rotate(0)" }
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
