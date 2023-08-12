import React from 'react'
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className='flex flex-col gap-1 text-white'>
        <p className='text-[3em] text-center'>Know Who <span className='text-green-400'>I'M</span></p>
        <p className='text-xl mt-8 '>Hi Everyone, I am <span className='text-green-400'>Ram Swaroop Sahani</span> from <span className='text-green-400'>Uttar Pradesh, India.</span></p>
        <p className='text-xl'>I am a final year student pursuing a B.Tech in <span className='text-green-400'>Computer Science and Engineering</span> at Pranveer Singh Institute of Technology, Kanpur.</p>
        <div className='flex flex-col mt-5'>
            <p className='text-xl'>Apart from coding, some other activities that I love to do!</p>
            <div className='flex flex-col gap-1 px-10 text-xl'>
                <p className='mt-4 flex gap-3 items-center'> <ImPointRight /> Playing Games</p>
                <p className='flex gap-3 items-center'> <ImPointRight /> Writing Tech Blogs</p>
                <p className='flex gap-3 items-center'> <ImPointRight /> Travelling</p>
            </div>
        </div>
        <p className='text-2xl text-green-400 text-center opacity-70 mt-5'>
            "Create with purpose, influence with passion."
        </p>
        <p className='text-2xl text-green-400 opacity-70 text-center'>-- Ram Swaroop Sahani</p>
    </div>
  )
}

export default AboutCard