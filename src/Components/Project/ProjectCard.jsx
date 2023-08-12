import React from 'react'
import {BiLinkExternal} from "react-icons/bi"
import { Link } from 'react-router-dom'

function ProjectCard(props) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-white bg-opacity-30 p-5 rounded-md
    hover:scale-105 transition-all'>
        <img src={props.imgPath}/>
        <h1 className='text-xl font-semibold'>{props.title}</h1>
        <p className='text-xl'>{props.description}</p>
        <Link target='_blank' to={props.link}>
          <div className='hover:scale-105 transition-all cursor-pointer rounded-md bg-green-400 flex items-center justify-center px-4 py-2 gap-2 font-bold'>
              <BiLinkExternal/>
              <p>Link</p>
          </div>
        </Link>
    </div>
  )
}

export default ProjectCard