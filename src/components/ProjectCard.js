import React, { useState } from "react";
import wc from '../images/Web capture_11-1-2024_192652_themovielist09.netlify.app.jpeg'
import wc2 from '../images/Web capture_12-1-2024_15123_hectront.com.jpeg'
import wc3 from '../images/Web capture_5-2-2024_232732_passwordgenra.netlify.app.jpeg'
import { RiGithubLine, RiLinksFill } from "react-icons/ri";
import '../App.css';

const ProjectCard = () => {
    return (
    <div className=" snap-y snap-mandatory ">
        {/* Project 1 */}
        <div className=" snap-start bg-white p-[20px] mx-auto flex flex-wrap justify-center rounded-[15px]  gap-4 mb-[20px]">
            <div className="max-w-[30rem] w-[100%] h-[20rem] overflow-hidden rounded-[15px]">
                <img
                className="w-[100%] h-[100%] object-cover object-top hover:object-bottom transition-all duration-[1.5s]"
                src={wc}
                alt="website"
                />
            </div>
            <div className="flex-[1] min-w-[15rem] px-[10%] flex flex-col justify-center text-center  p-[1rem]">
                <h2 className="font-[700] text-lg uppercase mb-[2rem]">The Movie List<span className="font-[600] text-slate-500">(Aug 2023)</span></h2>
                <p className="text-slate-500 font-[500] text-lg">Built a React app with the Movie DB API and Tailwind CSS to
                                    enable users to browse and search for movies and TV shows
                                    with various features.</p>
                <div className="my-[1rem]">
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">React</p>
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">Tailwind</p>
                </div>
                <div className="flex gap-4 mx-auto text-slate-500 my-[0.25rem]">
                    <a href="https://github.com/Vivek7097/TheMovieList" className=" hover:text-blue-400 text-lg">
                        Code
                        <RiGithubLine className = "inline"/>
                    </a>
                    <a href="https://themovielist09.netlify.app/" className=" hover:text-blue-400 text-lg" >
                        Live Demo
                        <RiLinksFill className = "inline"/>
                    </a>
                </div>

            </div>
        </div>
        {/* Project 2 */}
        <div className="snap-start bg-white p-[20px] mx-auto flex flex-wrap-reverse justify-center rounded-[15px]  gap-4 mb-[20px]">
            <div className="flex-[1] min-w-[15rem] px-[10%] flex flex-col justify-center text-center  p-[1rem]">
                <h2 className="font-[700] text-lg uppercase mb-[2rem]">Hectront<span className="font-[600] text-slate-500">(Nov 2023)</span></h2>
                <p className="text-slate-500 font-[500] text-lg"> Created a portfolio website for Hectront, a 2D/3D modeling company,
                            using React and Tailwind. Applied SEO and analytics to enhance the
                            website’s speed and ranking.</p>
                <div className="my-[1rem]">
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">React</p>
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">Tailwind</p>
                </div>
                <div className="flex gap-4 mx-auto  text-slate-500 my-[0.25rem]">
                    <a href="https://github.com/Vivek7097/hectront" className=" hover:text-blue-400 text-lg">
                        Code
                        <RiGithubLine className = "inline"/>
                    </a>
                    <a href="http://hectront.com/" className=" hover:text-blue-400 text-lg">
                        Live Demo
                        <RiLinksFill className = "inline"/>
                    </a>
                </div>

            </div>
            <div className="max-w-[30rem] w-[100%] h-[20rem] overflow-hidden rounded-[15px]">
                <img
                className="w-[100%] h-[100%] object-cover object-top hover:object-bottom transition-all duration-[1.5s]"
                src={wc2}
                alt="website"
                />
            </div>
        </div>
            {/* project 3 */}
            <div className=" snap-start bg-white p-[20px] mx-auto flex flex-wrap justify-center rounded-[15px]  gap-4 mb-[20px]">
            <div className="max-w-[30rem] w-[100%] h-[20rem] overflow-hidden rounded-[15px]">
                <img
                className="w-[100%] h-[100%] object-cover object-top hover:object-bottom transition-all duration-[1.5s]"
                src={wc3}
                alt="website"
                />
            </div>
            <div className="flex-[1] min-w-[15rem] px-[10%] flex flex-col justify-center text-center  p-[1rem]">
                <h2 className="font-[700] text-lg uppercase mb-[2rem]">Password Generator<br/><span className="font-[600] text-slate-500">(March 2023)</span></h2>
                <p className="text-slate-500 font-[500] text-lg">This web app creates random and secure passwords using HTML, CSS, and JavaScript. Users can adjust the password length and character types to suit their needs. The app also allows users to copy the password and see its strength with a visual indicator.</p>
                <div className="my-[1rem] flex flex-wrap justify-center">
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">HTML/CSS</p>
                    <p className=" inline px-[12px] py-[5px] shadow-md text-xl font-[700] mx-[10px]">JavaScript</p>
                </div>
                <div className="flex gap-4 mx-auto text-slate-500 my-[0.25rem]">
                    <a href="https://github.com/Vivek7097/Password_Genrator" className=" hover:text-blue-400 text-lg">
                        Code
                        <RiGithubLine className = "inline"/>
                    </a>
                    <a href="https://passwordgenra.netlify.app/" className=" hover:text-blue-400 text-lg" >
                        Live Demo
                        <RiLinksFill className = "inline"/>
                    </a>
                </div>

            </div>
        </div>
       
    </div>
    )

}

export default ProjectCard

