import React, { useState } from 'react'
// import { HashLink } from 'react-router-hash-link';
import { BsLayoutTextSidebarReverse } from "react-icons/bs";


const Navbar = () => {

  const [sideBar, setSideBar] = useState(false)

  return (
    <div className={`
      max-w-[1400px] w-[100%] mx-auto  py-[1.25rem] px-[2rem] shadow-md
     flex justify-between items-center fixed z-50 bg-white
     font-Mulish `}>
        <a href='#start' className='text-xl font-[1000]  text-[#35363c] transition-all duration-500'>Vivek.dev</a>
        <ul className='gap-10 font-semibold hidden sm:flex text-lg text-[#35363c] '>
            <li className=' hover:underline
                     cursor-pointer '><a href='#home'>Home</a></li>
            <li className=' hover:underline
                     cursor-pointer'><a href='#about' className=' scroll-smooth duration-500'>About</a></li>
            <li className=' hover:underline
                     cursor-pointer'><a href='#project'>Projects</a></li>
            <li className=' hover:underline
                     cursor-pointer'><a href='#contact'>Contact</a></li>
        </ul>
        <BsLayoutTextSidebarReverse className={`sm:hidden text-xl  hover:tex-blue-400 z-70 ${sideBar ? "ml-[2rem] text-5xl" : ""} transition-all duration-500`} onClick={() => setSideBar(!sideBar)}/>

        <div className={` bg-white ${sideBar ? "h-[25rem]" : "h-[0rem] hidden"} w-[100%] top-[4.5rem] flex justify-center items-center duration-1000 left-0`}>
          <ul className={`gap-5 font-semibold flex  flex-col text-center  text-lg text-[#35363c] ${sideBar ? "" : "hidden"} duration-1000`}>
              <li className=' hover:underline cursor-pointer'
                      onClick={() => setSideBar(!sideBar)}
                      ><a href='#home'>Home</a></li>
              <li className=' hover:underline cursor-pointer'
                  onClick={() => setSideBar(!sideBar)}
                  ><a href='#about' className=' scroll-smooth duration-00'>About</a></li>
              <li className=' hover:underline cursor-pointer'
                  onClick={() => setSideBar(!sideBar)}
                  ><a href='#project'>Projects</a></li>
              <li className=' hover:underline cursor-pointer'
              onClick={() => setSideBar(!sideBar)}
              ><a href='#contact'>Contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar