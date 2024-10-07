"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

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
              <button class="group relative inline-flex h-12 items-center justify-center border-solid border-2 border-[#F16C20] overflow-hidden rounded-md bg-[#F16C20] hover:bg-[#EDEDED] active:scale-95 hover:text-[#F16C20] px-6 w-[190px] h-[35px] rounded-[10px] mr-[16px] mt-[16px] font-medium text-neutral-200 transition hover:scale-110">
                <span>Download Resume</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/100"></div>
                </div>
              </button>
            </Link>
            <Link href="#section_contact">
            <button class="group relative inline-flex h-12 items-center justify-center border-solid border-2 border-[#F16C20] overflow-hidden rounded-md bg-[#F16C20] hover:bg-[#EDEDED] active:scale-95 hover:text-[#F16C20] px-6 w-[190px] h-[35px] rounded-[10px] mt-[16px] font-medium text-neutral-200 transition hover:scale-110">
                <span>Contact Me</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/100"></div>
                </div>
              </button>
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
