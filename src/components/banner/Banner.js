import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaGithub, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si"

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Frontend Developer.", "React Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })

  return (
    <section id="home" className="w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
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
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me on
                </h2>
            </div>
        </div>
        <div className="w-1/2"></div>
    </section>
  )
}

export default Banner
