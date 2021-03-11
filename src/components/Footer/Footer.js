import React from "react"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer-container">
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com/maps/place/Stendaler+Str.+4,+10559+Berlin,+Deutschland/data=!4m2!3m1!1s0x47a85175e13c9c49:0x6fc470b07148443?sa=X&ved=2ahUKEwiNuN7DkqfvAhVGvFkKHfZDCAkQ8gEwAHoECAUQAQ">
              Stendaler Straße 4 10559 Berlin
            </a>
          </li>
          <li>
            <p>//</p>
          </li>
          <li>
            <a href="mailto:info@lankeskoengeter.de">info@lankeskoengeter.de</a>
          </li>
          <li>
            <p>//</p>
          </li>
          <li>
            <a href="tel:+4930123456">030 123 456</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
