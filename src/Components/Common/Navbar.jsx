import React, { useState } from 'react'
import image from '../../Assets/logo.png'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import {TiThMenu} from "react-icons/ti"
import Modal from 'react-modal';
import {CgClose} from "react-icons/cg"
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
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
  return (
    <div className={` w-full h-[70px] bg-opacity-0  bg-white flex items-center justify-between
    px-10`}>
        <div>
            <Link to="/">
                <img src={image} alt="portfolio logo" width="200px" height="5px" />
            </Link>
        </div>
        <div className='md:flex gap-6 text-xl hidden'>
            {
                link.map((item)=>{
                    return <NavLink key={item.id} link={item} iconName={item.icon}/>
                })
            }
        </div> 
        <div className='text-white md:hidden flex cursor-pointer text-2xl'
        onClick={openModal}>
            <TiThMenu/>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal h-fit m-4 p-4 bg-black bg-opacity-80 z-10"
      >
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-6 text-xl'>
            {
                link.map((item)=>{
                    return <NavLink key={item.id} link={item} iconName={item.icon}/>
                })
            }
        </div>
        <div className='text-4xl rounded-full w-fit flex items-center justify-center gap-2 font-semibold text-green-400 relative group m-4 mt-10 cursor-pointer'
        onClick={closeModal}>
            <CgClose/>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Navbar