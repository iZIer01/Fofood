import React from 'react'

// Components
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/Explore/Explore'
import AboutUsSection from './Components/AboutUs/AboutUsSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Explore/>
      <AboutUsSection/>
    </div>
  )
}

export default App