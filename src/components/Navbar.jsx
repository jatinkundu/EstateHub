import React, { useEffect, useState } from "react";
import { assets } from "./../assets/assets";

function Navbar() {
  const[ShowMobileMenu,setShowMobileMenu] = useState(false)
  useEffect(()=>{ 
    // scrolling rok dega 
       if(ShowMobileMenu){
        document.body.style.overflow = 'hidden'
       } else{
                document.body.style.overflow = 'auto'

       }
       return()=>{
                         document.body.style.overflow = 'auto'

       }
      //  Ye return()=>{document.body.style.overflow = 'auto'} ek safety net hai jo body scroll ko hamesha reset kar deta hai jab effect clean hota hai.
  },[ShowMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Home">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#About">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Projects">
            Projects
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Testinomial">
            Testinomials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer ">
          Sign up
        </button>
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden  w-7 cursor-pointer" alt="" />
      </div>
      {/* mobile view  */}
      <div className={`md:hidden ${ShowMobileMenu ? 'fixed w-full' : "h-0 w-0" }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className=" flex justify-end p-5 cursor-pointer">
          <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block" href="#Header">
            Home
          </a>
          <a onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block" href="#About">
            About
          </a>
          <a onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block" href="#Projects">
            Projects
          </a>
          <a onClick={()=>setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Testinomials"
          >
            Testinomials
            
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
