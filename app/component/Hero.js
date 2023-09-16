"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    return (
        <>
            <div>
                <span className="text-[#F16C20] text-[96px] font-bold blur-[6px] opacity-30 absolute mt-2 sm:block hidden">WEB DEVELOPER</span>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 h-[381px] content-center relative">
                <div className="sm:order-first order-last sm:pr-5 flex flex-col justify-center sm:text-start sm:items-start items-center text-center">
                    <p className="leading-9">
                        <span className="text-[#F16C20]">Hi, I am</span><br></br>
                        <span className="font-bold sm:text-[36px] text-[30px]">Pratik Nikale</span><br></br>
                        <span className="text-[#F16C20] sm:text-[36px] text-[30px]">
                            <Typewriter typeSpeed={25} deleteSpeed={25} words={["Full Stack Developer", "MERN Stack Developer", "MEAN Stack Developer", "Frontend Developer", "Backend Developer"]} cursor={true} loop={true} />
                            {/* Full Stack Developer */}
                        </span><br></br>
                    </p>
                    <p className="leading-[20px] py-4">Crafting digital marvels with Full Stack, MERN and Web expertise. Empowering your web journey with precision and innovaton.</p>
                    <div className="hero-buttons flex flex-wrap sm:justify-start justify-center">
                        <Link href="/Pratik Resume.pdf" target="blank">
                            <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[158px] h-[35px] rounded-[10px] mr-[11px] mt-[16px] transition ease-in-out delay-40 duration-150">Download Resume</button>
                        </Link>
                        <Link href="#section_contact">
                            <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[158px] h-[35px] rounded-[10px] mr-[11px] mt-[16px] transition ease-in-out delay-40 duration-150">Contact Me</button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end content-center">
                    <Image
                        className="imageFade drop-shadow-2xl"
                        src="/logo-images/Web-development,-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG.png"
                        width={484}
                        height={381}
                        alt="Hero Image"
                    />
                </div>

            </div>
        </>
    )
}
