import React from 'react'
import '../App.css';
import aboutImg from '../images/about-img.62b47e7f183d4b4e9feb.webp'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import rt from '../images/icons8-react-30.png'
import css from '../images/icons8-css-96.png'
import tailwind from '../images/icons8-tailwindcss-96.png'
import js from '../images/icons8-javascript-96.png'
import redux from '../images/icons8-redux-96.png'
import html from '../images/icons8-html-logo-96.png'
import ProjectCard from './ProjectCard';
import resume from '../images/vivek.pdf'

const HeroSection = () => {
  return (
    <>
    <section className='flex flex-col w-[100%]  relative  py-[4rem] px-[2rem] bg-[#f9f9f9]'>
      <div id='start'  className='max-w-[107rem] md:w-[90%] mx-auto px-[1.7rem]  pt-[4rem] '>{/* container */}
       <div id="home" className='flex flex-col  text-center gap-[3rem] justify-center mx-auto h-auto  
                        md:gap-[10rem] md:flex-row relative'>  {/* content */}
          <div className='flex flex-col-reverse text-center h-auto gap-3 justify-center relative w-auto 
                          md:gap-[10rem] md:flex-row md:text-left hero-main '>  {/* hero-main */}
                          <div className='flex flex-col max-w-[50rem] relative mx-auto  md:ml-[2rem] md:flex-[0.7] '> {/* hero-text */}
                              <h1 className='font-[700] text-[2.5rem] sm:text-[4rem] leading-[1.2]  text-[#2d2e32] font-Mulish '>Front-End React Devloper</h1>
                              <p className='my-[1em] text-[1.3rem] text-[#555555] leading-[1.6] mb-[5rem] font-[400] font-Mulish md:mb-0'>Hi. I'm Vivek Kumar. A passionate Front-end React Devloper based in Mohali, India</p>
                              <span className='flex flex-wrap gap-[1.6rem] justify-center mt-[-2rem] mb-[4rem]  items-center transition-all duration-200
                                              md:gap-[1.3rem] md:my-[2.5rem] md:justify-normal'>
                                <a
                                  href={resume}
                                  download='resume'
                                  className='text-[2rem] text-[#2d2e32] transition-all duration-500 hover:text-white border py-[2px] px-[15px] bg-white hover:bg-blue-500'>
                                  Resume
                                </a>
                                <div className='flex gap-[1.6rem] md:gap-[1.3rem]'>
                                  <a
                                    aria-label='linkedin'
                                    rel='noreferrer'
                                    target='_blank'
                                    href='https://www.linkedin.com/in/vivek-kumar-ba017b213/'
                                    className='text-[3rem] text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]'>
                                    <BsLinkedin width={32} height={32}/>
                                  </a>
                                  <a
                                    aria-label='github'
                                    rel='noreferrer'
                                    target='_blank'
                                    href='https://github.com/Vivek7097'
                                    className='text-[3rem] text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]'>
                                    <BsGithub width={32} height={32}/>
                                  </a>
                                </div>
                              </span>
                          </div>  
                          <div className='hero-img bg-green-400 mx-auto md:flex-[0.3]  md:!right-[10%]  md:left-auto'></div>                 
              </div> 
        </div>
              <div className='flex  w-[80%] gap-[3rem] justify-center md:justify-start items-center flex-wrap mx-auto md:ml-[2rem]'>
                  <p className='font-[500]  mr-[2rem] border-b-2 md:border-b-0 md:border-r-2 border-slate-500 text-slate-500 md:pr-4 font-Mulish text-[18px] '>Tect-Stack</p>
                  <div className='flex gap-6 flex-wrap justify-center'>
                    <img src = {html} className='w-[3.75em] h-[3.75em]'/>
                    <img src = {css} className='w-[3.75em] h-[3.75em]'/>
                    <img src = {js} className='w-[3.75em] h-[3.75em]'/>
                    <img src = {rt} className='w-[3.75em] h-[3.75em]'/>
                    <img src = {tailwind} className='w-[3.75em] h-[3.75em]'/>
                    <img src = {redux} className='w-[3.75em] h-[3.75em]'/>
                  </div>           
              </div>
      </div>
    </section>
    {/* Section 2  About*/}
    <section>
      <div id="about" className=' max-w-[107rem] md:w-[90%]  mx-auto px-[1.7rem] py-[1rem] overflow-clip '>
          <div className='flex flex-col md:flex-row justify-center gap-[2rem] w-[100%] h-[100%] '> {/* content */}
              <img src={aboutImg} className=' max-w-[25rem] w-[90%]  max-h-[22rem] object-fill rounded-[15px] mt-[2rem] mx-auto'/>
              <div className='  p-[1rem] md:pl-[4rem]  flex-[0.8] text-center'>
                <h2 className='font-[700] text-blue-600 uppercase text-xl'>About me</h2>
                <h3 className='font-[700] text-2xl my-[1rem]'>A dedicated Front-end Developer
                    based in Mohali, India 📍</h3>
                <p  className=' text-[16px] text-gray-500 text-justify'
                    >As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
              </div>
          </div>
      </div>
    </section >
    {/* section 3 Projects */}
    <section className='flex flex-col  relative  py-[8rem] px-[2rem] bg-[#f9f9f9]'>
      <div id="project" className='max-w-[107rem] md:w-[90%] mx-auto px-[1.7rem] bg-'>
          <h2 className='font-[700] text-blue-600 uppercase text-xl'>Projects</h2>
          <h3 className='font-[700] text-2xl my-[1rem]'>Each project is a unique piece of development 🧩</h3>
          <ProjectCard/>
      </div>
    </section>
    {/* section 4 contact */}
    <section  className='flex flex-col   relative  py-[4rem] px-[2rem] bg-white'>
      <div id="contact" className='max-w-[107rem] md:w-[90%] mx-auto px-[1.7rem]  text-center md:text-start'>
          <h2 className='font-[700] text-blue-600 uppercase text-xl '>Contact</h2>
          <h3 className='font-[700] text-2xl my-[1rem] '>Don't be shy! Hit me up! 👇</h3>
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex flex-col items-center  md:flex-row md:gap-4 mr-[1rem]'>
              <FaMapLocationDot className=' text-4xl text-blue-500'/>
              <div className='flex flex-col'>
                  <h3 className='text-lg font-[700]'>Location</h3>
                  <p className='text-gray-500 hover:text-blue-500'>Mohali, India</p>
              </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:gap-4'>
                <IoIosMail className=' text-4xl text-blue-500'/>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-[700]'>Mail</h3>
                    <a href="mailto:Hectront@gmail.com" className='text-gray-500 hover:text-blue-500'>vivekkr.bhagat@gmail.com</a>
                </div>
            </div>
          </div>
      </div>
    </section>

    {/* section 5 footer */}
    <footer className='flex flex-col   relative  py-[2rem] px-[2rem] bg-[#2d2e32]'>
      <div className='max-w-[107rem] md:w-[90%] mx-auto px-[1.7rem]  text-center md:text-start flex flex-wrap justify-center sm:justify-between gap-4 items-center'>
        <p className='text-white text-xl font-[700]'>Copyright © 2024. All rights are reserved</p>
        <div className='flex gap-3 text-xl'>
          <a href='https://github.com/Vivek7097' >
            <BsGithub className='text-white hover:text-blue-500 transition-all duration-200'/>
          </a>
          <a href='https://www.linkedin.com/in/vivek-kumar-ba017b213/' >
            <BsLinkedin className='text-white hover:text-blue-500 transition-all duration-200'/>
          </a>
        </div>
      </div>
    </footer>

  </>
  )
}

export default HeroSection