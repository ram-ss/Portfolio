import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Particle from '../Components/Common/Particle'
import Footer from '../Components/Common/Footer'
import AboutCard from '../Components/About/AboutCard'
import about from "../Assets/about-2.jpg"
import Skills from '../Components/About/Skills'
import Tool from '../Components/About/Tool'

function About() {
  return (
    <div className='w-full'>
        <Navbar/>
        <Particle/>
        <div className='flex justify-between items-center mx-auto w-11/12'>
            <AboutCard/>
            <img src={about} height={"500px"} width={"500px"} className=' opacity-90 rounded-md' />
        </div>
        <Skills/>
        <Tool/>
        <Footer/>
    </div>
  )
}

export default About