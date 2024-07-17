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
    <div className = 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold'>RU TURBO</h1>
        <ul className=' hidden md:flex'>
        <button className='p-4'><Link to="/">Home</Link></button>
        <button className='p-4'>About</button>
        <button className='p-4'><Link to="/contact">Contact</Link></button>
        </ul>
        
        <div onClick={handleNav}>
            {!nav ? <IoMdClose />: <LuMenu size = {25} className='block md:hidden' />}     
        </div
>
        <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] bg-opacity-90 ease-in-out duration-700' : 'fixed left-[-100%] ease-in-out duration-700'}>
        <h1 className='w-full text-3xl font-bold red-theme m-4'>RU TURBO</h1>
            <ul className='pt-12 uppercase'>
            <li className='p-4 border-b border-gray-600'><Link to ="/">Home</Link></li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <button className='p-4'><Link to="/contact">Contact</Link></button>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
