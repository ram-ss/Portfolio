import React from 'react'
import image from '../../Assets/logo.png'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
const link=[
    {   
        id:"1",
        name:"Home",
        link:"/",
        icon:"HiOutlineHome"
    },
    {
        id:"2",
        name:"About",
        link:"/about",
        icon:"HiOutlineUser"
    },
    {
        id:"3",
        name:"Projects",
        link:"/project",
        icon:"HiOutlineCode"
    },
    {
        id:"4",
        name:"Resume",
        link:"/resume",
        icon:"HiOutlineDocumentText"

    }
]
function Navbar() {
  return (
    <div className={` w-full h-[70px] bg-opacity-0  bg-white flex items-center justify-between
    px-10`}>
        <div>
            <Link to="/">
                <img src={image} alt="portfolio logo" width="200px" height="5px" />
            </Link>
        </div>
        <div className='flex gap-6 text-xl'>
            {
                link.map((item)=>{
                    return <NavLink key={item.id} link={item} iconName={item.icon}/>
                })
            }
        </div>
    </div>
  )
}

export default Navbar