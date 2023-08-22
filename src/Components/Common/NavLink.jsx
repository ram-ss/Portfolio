import React from 'react'
import * as Icons from "react-icons/hi"
import { Link } from 'react-router-dom'
function NavLink({link,iconName}) {
    const Icon=Icons[iconName]

  return (
        <Link to={link.link}>
        <div className='w-fit flex items-center justify-center gap-2 font-semibold text-white relative group'>
            <Icon/>
            <p>
                <span className=''>{link.name}</span>
                <span className='w-0 rounded-md absolute left-1 -bottom-2 h-1 bg-green-400 z-10 group-hover:w-full opacity-80 group-hover:transition-all duration-500'></span>
            </p>
        </div>
        </Link>
  )
}

export default NavLink