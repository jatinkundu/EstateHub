import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex  w-full overflow-hidden'style={{backgroundImage:"url('header_img.png')"}} id='header'>
      <Navbar/>
       <motion.div 
         initial={{opacity:0,y:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1, y:0}}
         viewport={{once:true}}

       className='container text-center mx-auto py-30  md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[80px] inline-block max-w-3xl font-semibold pt-40'>Explore homes that fit your dreams</h2>
        <div className=' space-x-10 mt-20 '>
          <a className='border border-white px-8 py-3 rounded' href="#Projects">Projects</a>
          <a className='  px-8 py-3 rounded bg-blue-500' href="#contact">Contact Us</a>
        </div>
       </motion.div>
    </div>
  )
}

export default Header
