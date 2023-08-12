import React from 'react'
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiVscodium,
} from "react-icons/si";

function Tool() {
  return (
    <div className='text-white w-full mt-10'>
        <p className='text-[3em] text-center'><span className='text-green-400'>Tools</span> I use</p>
        <div className='grid grid-cols-5 gap-5 text-3xl mt-10 mb-10 w-11/12 mx-auto'>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><SiMacos/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><SiVisualstudiocode/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><SiPostman/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><SiSlack/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><SiVercel/></div>
        </div>
    </div>
  )
}

export default Tool