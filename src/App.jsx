import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    document.title = 'Travelling Duende'
  }, [])
  return (
    <div>
      <Hero />
      <Tours />
    </div>
  )
}

export default App
