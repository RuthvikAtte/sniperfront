import React from 'react'
import { ReactTyped} from 'react-typed'
// import Typed from 'typed.js';
import Calendar from 'react-calendar'
function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '> 
        <p className='theme-text font-bold' >Get Your Classes Faster With</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>RU TURBO</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-4xl text-xl font-bold'>Fast and reliable, get notified Via </p>
            <ReactTyped className='md:text-3xl sm:text-4xl text-xl font-bold pl-2 text-[#808080]' strings={["Call" , "Email", "Discord", "Telegram", "SMS"]} typeSpeed={120} backSpeed={140} loop/>
        </div>

        <div className='flex justify-center items-center '>
        <a className=' font-bold pl-2 text-[#808080]'> Fill out our interest form and snipe</a>
        <a className='md:text-3xl text-bold text-[#00df9a] pl-2'>7 FREE</a>
        <a className=' font-bold pl-2 '>Classes</a>
        </div>

       
        <div>
        
        </div>

        <div className=' flex justify-center items-center '>
            <p className='font-bold text-2xl'>Under</p>
            <p className='md:text-3xl text-bold text-[#00df9a] pl-2'>ONE</p>
            <p className='pl-2 font-bold text-2xl'>second</p>
        </div>

        <div className='justify-center'>
        <a href='https://forms.gle/QsvvAsndmc6z4DDv8' target="_blank" > 
        <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ' >Get Started</button>

        </a>
        </div>
        
        {/* <p>Coming soon !</p>   */}
      </div>
    </div>
  )
}

export default Hero;