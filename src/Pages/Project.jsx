import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Particle from '../Components/Common/Particle'
import Footer from '../Components/Common/Footer'
import ProjectCard from '../Components/Project/ProjectCard'
import image1 from "../Assets/Project/studyinfinity.png"
import image2 from "../Assets/Project/shopzone.png"
import image3 from "../Assets/Project/todo.png"
import image4 from "../Assets/Project/weather.png"

function Project() {
  return (
    <div>
        <Navbar/>
        <Particle/>
        <div className='flex flex-col justify-center items-center gap-5 text-white'>
            <p className='text-[3em]'>My Recent <span className='text-green-400'>Works</span></p>
            <p className='text-xl'>Here are a few projects I've worked on recently.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-[100px] mt-8'>
                <ProjectCard
                imgPath={image1}
                title="Study Infinity"
                description="Study Infinity is a ed-tech platform that opens the doors to limitless learning in the world of technology. With a comprehensive array of courses and a user-centric design, Study Infinity is your go-to destination for mastering new and emerging technologies."
                link="http://studyinfinity.vercel.app"
                />
                <ProjectCard
                imgPath={image2}
                title="Shop Zone"
                description="Shop Zone is a dynamic e-commerce platform designed to revolutionize your shopping experience. With an extensive range of products and seamless navigation, Shop Zone offers a user-friendly interface that makes online shopping a breeze."
                link="https://shopzone-appv7.netlify.app/"
                />
                <ProjectCard
                imgPath={image3}
                title="TODO Application"
                description="TODO Application is a powerful task management tool designed to streamline your day and boost your productivity. With a user-friendly interface and robust features, this application empowers you to efficiently organize and track your tasks from start to finish."
                link="https://github.com/ram-ss/TODO-Application"
                />
                <ProjectCard
                imgPath={image4}
                title="Weather Application"
                description="The Weather Application is your go-to source for accurate and up-to-date weather information, helping you make informed decisions about your day, travel plans, and outdoor activities. With a user-friendly interface and real-time data, this application ensures you're always prepared for whatever Mother Nature has in store."
                link="https://weather-appv7.netlify.app"
                />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Project