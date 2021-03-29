import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import "./AdressComponent.scss"

const AdressComponent = ({ site }) => {
  const query = useStaticQuery(graphql`
    query AdressQuery {
      markdownRemark(frontmatter: { title: { eq: "Address" } }) {
        frontmatter {
          telefon
          email
          address
          addressLink
        }
      }
    }
  `)

  const {
    email,
    address,
    telefon,
    addressLink,
  } = query.markdownRemark.frontmatter

  console.log(site, "<------ SITE")

  return (
    <address
      id="contact"
      className={`address-container ${site === "about" ? "disable" : ""}`}
    >
      <div>
        <a href={addressLink} target="_blanc">
          {address}
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <a href={`tel:+49${telefon.slice(1)}`}>{telefon}</a>
      </div>
    </address>
  )
}

export default AdressComponent
