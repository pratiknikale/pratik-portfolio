"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function About() {
    const fastAni = useRef(null);
    const responsiveAni = useRef(null);
    const complexAni = useRef(null);
    const scalableAni = useRef(null);
    const dynamicAni = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: fastAni.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../public/fastAni.json"),
        });
        lottie.loadAnimation({
            container: responsiveAni.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../public/responsiveAni.json"),
        });
        lottie.loadAnimation({
            container: complexAni.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../public/complexAni.json"),
        });
        lottie.loadAnimation({
            container: scalableAni.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../public/scalableAni.json"),
        });
        lottie.loadAnimation({
            container: dynamicAni.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../public/dynamicAni.json"),
        });
    }, []);
    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 flex justify-center mb-3">
                        <Image
                            className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                            src="/logo-images/aboutLogo.png"
                            width={40}
                            height={40}
                            alt="about logo"
                        />
                    </div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-r-2"></div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-l-2"></div>
                </div>
                <h2 className="font-bold text-[36px] flex justify-center"><span className="">ABOUT</span></h2>
                <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mt-16">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <span>
                                <div className="fastAni p-4" ref={fastAni}></div>
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Fast</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="sm:flex sm:flex-col items-center hidden">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <span>
                                <div className="responsiveAni p-2" ref={responsiveAni}></div>
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Responsive</p>
                        <p className="text-center px-[3px] leading-[20px]">My layouts will work on any device, big or small.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <span>
                                <div className="complexAni" ref={complexAni}></div>
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Complex</p>
                        <p className="text-center px-[3px] leading-[20px]">Intricate problems into elegant softwares is my forte.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <span>
                                <div className="scalableAni p-3" ref={scalableAni}></div>
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Scalable</p>
                        <p className="text-center px-[3px] leading-[20px]">Be it any number of people, my app can handle it.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <span>
                                <div className="dynamicAni scale-125" ref={dynamicAni}></div>
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Dynamic</p>
                        <p className="text-center px-[3px] leading-[20px]">Websites don&apos;t have to be static, I love making pages come to life.</p>
                    </div>

                </div>

                <div className="rounded-[10px] grid sm:grid-cols-2 grid-cols-1 mt-20 sm:bg-transparent bg-[#1395BA]/[15%]">
                    <div className="flex flex-col justify-center sm:items-start items-center">
                        <div className="animation-pulse rounded-full bg-[#1395BA]/[15%] sm:mt-0 mt-10 transition ease-in-out delay-40 duration-200 hover:drop-shadow-[0px_0px_20px_#1395BA]">
                            <Image
                                className="rounded-full p-3 sm:w-[400px] sm:h-auto w-[260px] h-[260px]"
                                src="/logo-images/profilePicture.png"
                                width={0}
                                height={0}
                                sizes='100vw'
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                    <div className="sm:bg-[#1395BA]/[15%] backdrop-blur-smd bg-none rounded-[10px] h-[400px] flex flex-col justify-center items-center">
                        <p className="text-[#F16C20] font-bold text-[20px]">Who is this guy?</p>
                        <p className="mt-10 sm:px-10 px-4 text-center leading-[20px]">I&apos;m a Full-Stack Developer who has serious passion for logic building, problem solving, web development and technology. Experienced Full Stack Engineer with a demonstrated history of working in IT industry. Skilled in building elegant and performing web applications and software. <Link href="#section_contact"><span className="text-[#83e0fa] underline">Let&apos;s make something special</span></Link>.</p>
                        <div className="social-icon-links mt-10 h-12">
                            <Link href="https://github.com/pratiknikale" target="blank">
                                <Image
                                    className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                                    src="/logo-images/github-sign.png"
                                    width={40}
                                    height={40}
                                    alt="github profile"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/pratik-nikale/" target="blank">
                                <Image
                                    className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                                    src="/logo-images/linkedin.png"
                                    width={40}
                                    height={40}
                                    alt="linkedin profile"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
