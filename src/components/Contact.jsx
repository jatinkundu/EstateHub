import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef56dc0f-e07f-4054-ae58-a52693df0c65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };
  return (
    <motion.div 
      initial={{opacity:0,x:-100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1, x:0}}
         viewport={{once:true}}
          className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
      <h1 className='text-2xl sm:text-4xl font-bold  mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto '>Real Stories From Those Who Found Home With Us</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-8 text-gray-600 '>
        <div className='flex flex-wrap '>
            <div className='w-full md:w-1/2 text-left'>Your Name
            <input className='w-full border border-gray-300 rounded py-2 px-4 mt-2' type="text" placeholder='Your Name' required name='Name' />
            </div>
             <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
            <input className='w-full border border-gray-300 rounded py-2 px-4 mt-2' type="email" placeholder='Your Email' required name='Email' />
            </div>
        </div>
        <div>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-50 resize-none' name="Message" placeholder='Message' required ></textarea>
        </div>
         <button className='bg-blue-600 text-white py-2 px-6 mb-10 mt-4 rounded '>{result? result : "Send Message"}</button>
         
      </form>
    </motion.div>
  )
}

export default Contact
