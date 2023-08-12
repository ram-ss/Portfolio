import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {BiLogoTailwindCss} from "react-icons/bi"
import {TbBrandRedux} from "react-icons/tb"

function Skills() {
  return (
    <div className='text-white w-full mt-10'>
        <p className='text-[3em] text-center'>Professional <span className='text-green-400'>Skillset</span></p>
        <div className='grid grid-cols-5 gap-5 text-3xl mt-10 w-11/12 mx-auto'>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><CgCPlusPlus/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiJavascript1/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiReact/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiNodejs/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiMongodb/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiPython/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiGit/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><DiJava/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><BiLogoTailwindCss/></div>
            <div className='flex items-center justify-center border-2 rounded-md h-[200px] text-[100px] border-green-400 bg-white bg-opacity-30 hover:scale-105 transition-all'><TbBrandRedux/></div>
        </div>
    </div>
  )
}

export default Skills