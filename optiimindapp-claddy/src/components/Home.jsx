import React from 'react'
import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "../components";
const Home = () => {
  return (
    <div>
        <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  )
}

export default Home