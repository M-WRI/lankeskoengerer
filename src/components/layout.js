import React, { useEffect } from "react"
import { document } from "browser-monads"

import Header from "./Header/Header"

import "./layout.scss"

const Layout = ({ children, site, width }) => {
  let body = document.body
  let html = document.documentElement

  if (site === "index") {
    html.classList.add("mystyle")
    body.classList.add("mystyle")
  } else {
    html.classList.remove("mystyle")
    body.classList.remove("mystyle")
  }

  console.log(site)

  return (
    <>
      <div>
        <Header site={site} />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
