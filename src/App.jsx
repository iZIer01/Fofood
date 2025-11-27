import React from 'react'

// Components
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/Explore/Explore'
import AboutUsSection from './Components/AboutUs/AboutUsSection'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Explore/>
      <AboutUsSection/>
      <div className='px-4 py-13 rounded-full'>
        <Testimonials/>
      </div>
    </div>
  )
}

export default App