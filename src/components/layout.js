import React from "react"

import Header from "./Header/Header"
// import Footer from "./Footer/Footer"

import "./layout.scss"

const Layout = ({ children, site }) => {
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
