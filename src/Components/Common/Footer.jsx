import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import {AiFillGithub,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className='bg-white bg-opacity-30 mt-5'>
        <div className='h-[50px] bg-opacity-3 mx-auto w-11/12 flex lg:justify-between justify-center items-center text-white'>
            <div className='lg:flex hidden lg:visible'>
                Designed and Developed by Ram Swaroop Sahani
            </div>
            <div>
                Copyright © {year} Ram Swaroop Sahani
            </div>
            <div className='lg:flex gap-10 hidden lg:visible'>
                <AiFillGithub/>
                <FaLinkedinIn/>
                <AiFillTwitterCircle/>
                <AiFillInstagram/>
            </div>
        </div>
    </div>
  )
}

export default Footer