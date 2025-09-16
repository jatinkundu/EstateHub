import React from 'react'
import { assets } from '../assets/assets'
import { testimonialsData } from '../assets/assets'
import { motion } from "motion/react"


function Testinomials() {
  return (
    <motion.div 
      initial={{opacity:0,x:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1, x:0}}
         viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testinomial'>
      <h1 className='text-2xl sm:text-4xl font-bold  mb-2 text-center'>Customer<span className='underline underline-offset-4 decoration-1 font-light'>Testinomials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto '>Real Stories From Those Who Found Home With Us</p>
      <div className='flex flex-wrap justify-center  gap-8'>
        {testimonialsData.map((testinomial , index)=>(
         <div key={index} className='max-w-[340px]  shadow-lg rounded px-8 py-12 text-center'>
          <img className='w-20 h-20  rounded-full mx-auto mb-4' src={testinomial.image} alt={testinomial.alt} />
          <h2 className='text-xl text-gray-700 font-medium'>{testinomial.name}</h2>
          <p className='text-gray-500 mb-4 text-sm'>{testinomial.title}</p>
          <div className='flex justify-center gap-1 text-red-500 mb-4'>
             {Array.from({length:testinomial.rating},(item,index)=>(
            <img key={index} src={assets.star_icon} alt=""  />
             ))}
          </div>
          <p className='text-gray-600'>{testinomial.text}</p>
         </div>
        ))}
 


      </div>
    </motion.div>
  )
}

export default Testinomials
