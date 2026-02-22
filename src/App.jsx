import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Tours from './components/Tours'
import TourInfo from './components/TourInfo'

function App() {

  useEffect(() => {
    document.title = 'Travelling Duende'
  }, [])
  return (
    <div>
      <Hero />
      <Tours />
      <TourInfo />
    </div>
  )
}

export default App
