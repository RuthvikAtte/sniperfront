import React, {useState} from 'react'
import { LuMenu} from "react-icons/lu"
import { IoMdClose } from "react-icons/io";
import {Link} from "react-router-dom"

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className = 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white navbar-bg'>
      <h1 className='w-full text-3xl font-bold'>RU TURBO</h1>
        <ul className=' hidden md:flex'>
        <button className='p-4'><Link to="/">Home</Link></button>
        <button className='p-4'>About</button>
        <button className='p-4'><Link to="/contact">Contact</Link></button>
        </ul>
    </div>
  )
}

export default Navbar;