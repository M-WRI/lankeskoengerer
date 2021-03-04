import React from "react"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
