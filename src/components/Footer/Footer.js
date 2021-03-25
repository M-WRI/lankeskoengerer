import React from "react"
import AdressComponent from "../AdressComponent/AdressComponent"

import "./Footer.scss"

const Footer = ({ site }) => {
  return (
    <footer className={`footer-container ${site === "about" ? "disable" : ""}`}>
      <AdressComponent site={site} />
    </footer>
  )
}

export default Footer
