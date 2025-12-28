import React, { useEffect } from 'react'

const Tours = () => {

  useEffect(() => {
    document.title = 'Tours | Travelling Duende'
  }, [])
  return (
    <div>Tours</div>
  )
}

export default Tours