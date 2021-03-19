import React, { useState, useEffect } from "react"

const HasMounted = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <div className="loading-spinner"></div>
  }

  return children
}

export default HasMounted
