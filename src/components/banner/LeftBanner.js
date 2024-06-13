import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaGithub, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si"

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Frontend Developer.", "React Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })

  return (
    <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm {" "}
                    <span className="text-designColor capitalize">Carlos Randay</span>
                </h1>
                <h2 className=" text-4xl font-bold text-white">
                    a {" "} <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I use animatio as a third dimension by which to simplify experiences and kuiding thor eaxh and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        SOCIALS
                    </h2>
                    <div className="flex gap-4">
                        <span className='bannerIcon'>
                            <FaGithub />
                        </span>
                        <span className='bannerIcon'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedin />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        SKILLS
                    </h2>
                    <div className="flex gap-4">
                        <span className='bannerIcon'>
                            <SiNextdotjs />
                        </span>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LeftBanner
