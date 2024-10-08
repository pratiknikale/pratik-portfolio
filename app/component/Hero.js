"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Button from "../commonComponents/button";

export default function Hero() {
  const AnimatedImage = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: AnimatedImage.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/developer.json"),
    });
  }, []);

  return (
    <>
      <div>
        <span className="text-[#F16C20] text-[96px] font-bold blur-[6px] opacity-30 absolute mt-2 sm:block hidden">
          WEB DEVELOPER
        </span>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 h-[381px] content-center relative">
        <div className="sm:order-first order-last sm:pr-5 flex flex-col justify-center sm:text-start sm:items-start items-center text-center">
          <p className="leading-9">
            <span className="text-[#F16C20]">Hi, I am</span>
            <br></br>
            <span className="font-bold sm:text-[36px] text-[30px]">Pratik Nikale</span>
            <br></br>
            <span className="text-[#F16C20] sm:text-[36px] text-[30px]">
              <Typewriter
                typeSpeed={25}
                deleteSpeed={25}
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "MEAN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                ]}
                cursor={true}
                loop={true}
              />
              {/* Full Stack Developer */}
            </span>
            <br></br>
          </p>
          <p className="leading-[20px] py-4">
            Crafting digital marvels with Full Stack, MERN and Web expertise. Empowering your web journey with precision
            and innovaton.
          </p>
          <div className="hero-buttons flex flex-wrap sm:justify-start justify-center">
            <Link href="/Pratik Resume.pdf" target="blank">
              <Button customClass="px-6 w-[190px] h-[35px] mr-[16px] mt-[16px]">Download Resume</Button>
            </Link>
            <Link href="#section_contact">
              <Button customClass="px-6 w-[190px] h-[35px] mt-[16px]">Contact Me</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end content-center">
          <div className="AnimatedImage float-right" ref={AnimatedImage}></div>
        </div>
      </div>
    </>
  );
}
