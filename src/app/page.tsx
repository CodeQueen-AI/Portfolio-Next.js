import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import About from './About/page'
import Skill from './Skill/page'
import Journey from './Journey/page'
import Project from './project/page'
import Contact from './Contact/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Journey/>
      <Project/>
      <Contact/>
      
    </div>
  )
}

export default page
