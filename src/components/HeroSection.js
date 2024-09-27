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
import nodejs from '../images/icons8-nodejs-50.png'
import expressjs from '../images/icons8-express-js-50.png'
import ProjectCard from './ProjectCard';
import resume from '../images/vivek.pdf'

const HeroSection = () => {
  return (
    <div className='snap-y snap-mandatory'>
      <section className='max-w-[107rem] mx-auto snap-start flex flex-col w-full justify-center relative py-8 px-4 sm:px-8 bg-[#f9f9f9]'>
  <div id='start' className='md:w-[90%] mx-auto pt-16'>{/* container */}
    <div id="home" className='flex flex-col text-center gap-12 justify-center mx-auto h-auto md:gap-40 md:flex-row relative'>{/* content */}
      <div className='flex flex-col-reverse text-center h-auto gap-3 justify-center relative w-auto md:gap-40 md:flex-row md:text-left hero-main'>{/* hero-main */}
        <div className='flex flex-col max-w-[50rem] relative mx-auto md:ml-8 md:flex-[0.7]'>{/* hero-text */}
          <h1 className='font-[700] text-4xl sm:text-5xl leading-tight text-[#2d2e32] font-Mulish'>Web Developer</h1>
          <p className='my-4 text-lg text-[#555555] leading-relaxed mb-20 font-[400] font-Mulish md:mb-0'>Hi. I'm Vivek Kumar. A passionate Web Developer based in Gurugram, India</p>
          <span className='flex flex-wrap gap-6 justify-center mt-[-2rem] mb-16 items-center transition-all duration-200 md:gap-5 md:my-10 md:justify-normal'>
            <a
              href={resume}
              download='resume'
              className='text-xl text-[#2d2e32] transition-all duration-500 hover:text-white border py-1 px-4 bg-white hover:bg-blue-500'
            >
              Resume
            </a>
            <div className='flex gap-6 md:gap-5'>
              <a
                aria-label='linkedin'
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/vivek-kumar-ba017b213/'
                className='text-3xl text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]'
              >
                <BsLinkedin width={32} height={32} />
              </a>
              <a
                aria-label='github'
                rel='noreferrer'
                target='_blank'
                href='https://github.com/Vivek7097'
                className='text-3xl text-[#2d2e32] transition-all duration-200 hover:text-[#147efb]'
              >
                <BsGithub width={32} height={32} />
              </a>
            </div>
          </span>
        </div>
        <div className='hero-img bg-white mx-auto md:flex-[0.3] md:!right-[10%] md:left-auto'></div>
      </div>
    </div>

    <div className='w-full md:w-[90%] mx-auto mt-8'>
      <div className='flex flex-col gap-8 sm:flex-row sm:gap-12 justify-center sm:justify-start items-center px-4 sm:px-0'>
        <p className='font-[500] mr-8 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-500 text-slate-500 sm:pr-4 font-Mulish text-lg'>Tech Stack</p>
        <div className='flex flex-wrap justify-center gap-6'>
          <img src={html} alt='HTML' className='w-[3.75em] h-[3.75em]' />
          <img src={css} alt='CSS' className='w-[3.75em] h-[3.75em]' />
          <img src={js} alt='JavaScript' className='w-[3.75em] h-[3.75em]' />
          <img src={rt} alt='React' className='w-[3.75em] h-[3.75em]' />
          <img src={tailwind} alt='Tailwind CSS' className='w-[3.75em] h-[3.75em]' />
          <img src={redux} alt='Redux' className='w-[3.75em] h-[3.75em]' />
          <img src={nodejs} alt='Node.js' className='w-[3.75em] h-[3.75em]' />
          <img src={expressjs} alt='Express.js' className='w-[3.75em] h-[3.75em]' />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Section 2 About */}
      <section className='snap-start pb-4'>
        <div id="about" className='max-w-[107rem] md:w-[90%] mx-auto px-4 py-4 overflow-clip'>
          <div className='flex flex-col md:flex-row justify-center gap-8 w-full h-full'>{/* content */}
            <img
              src={aboutImg}
              alt='About'
              className='max-w-[25rem] w-[90%] max-h-[22rem] object-fill rounded-[15px] mt-8 mx-auto md:mx-0'
            />
            <div className='p-4 md:pl-16 flex-[0.8] text-center md:text-left'>
              <h2 className='font-[700] text-blue-600 uppercase text-xl'>About me</h2>
              <h3 className='font-[700] text-2xl my-4'>A dedicated Web Developer based in Gurugram, India 📍</h3>
              <p className='text-base text-gray-500 text-justify'>
                From Gurugram, India, I am a MERN Stack Developer specializing in creating dynamic and robust web applications. With a focus on quality and innovation, I leverage my technical skills to turn ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 Projects */}
      <section className='snap-start max-w-[107rem] mx-auto px-6 py-8 overflow-clip bg-[#f9f9f9]'>
        <div id="project" className='max-w-[107rem] md:w-[90%] mx-auto'>
          <h2 className='font-[700] text-blue-600 uppercase text-2xl'>Projects</h2>
          <h3 className='font-[700] text-2xl my-4'>Each project is a unique piece of development 🧩</h3>
          <ProjectCard />
        </div>
      </section>
      {/* Section 4 Contact */}
      <section className='snap-start flex flex-col relative py-16 px-8 bg-white'>
        <div id="contact" className='max-w-[107rem] md:w-[90%] mx-auto px-6 text-center md:text-start'>
          <h2 className='font-[700] text-blue-600 uppercase text-xl'>Contact</h2>
          <h3 className='font-[700] text-2xl my-4'>Don't be shy! Hit me up! 👇</h3>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col items-center md:flex-row md:gap-4'>
              <FaMapLocationDot className='text-4xl text-blue-500' />
              <div className='flex flex-col'>
                <h3 className='text-lg font-[700]'>Location</h3>
                <p className='text-gray-500 hover:text-blue-500'>Gurugram, India</p>
              </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:gap-4'>
              <IoIosMail className='text-4xl text-blue-500' />
              <div className='flex flex-col'>
                <h3 className='text-lg font-[700]'>Mail</h3>
                <a href="mailto:vivekkr.bhagat@gmail.com" className='text-gray-500 hover:text-blue-500'>vivekkr.bhagat@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 Footer */}
      <footer className='flex flex-col relative py-8 px-8 bg-[#2d2e32]'>
        <div className='max-w-[107rem] md:w-[90%] mx-auto px-6 text-center md:text-start flex flex-wrap justify-center sm:justify-between gap-4 items-center'>
          <p className='text-white text-xl font-[700]'>Copyright © 2024. All rights are reserved</p>
          <div className='flex gap-3 text-xl'>
            <a href='https://github.com/Vivek7097'>
              <BsGithub className='text-white hover:text-blue-500 transition-all duration-200' />
            </a>
            <a href='https://www.linkedin.com/in/vivek-kumar-ba017b213/'>
              <BsLinkedin className='text-white hover:text-blue-500 transition-all duration-200' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HeroSection