import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About | Travelling Duende'
  }, [])
  return (
    <div>About</div>
  )
}

export default About