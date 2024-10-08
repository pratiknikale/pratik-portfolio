"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import throttle from "../helpers/throttle";

export default function Navbar() {

    const sections = [
        { id: 'section_hero', title: 'Home' },
        { id: 'section_about', title: 'About' },
        { id: 'section_skills', title: 'Skills' },
        { id: 'section_projects', title: 'Projects' },
        { id: 'section_contact', title: 'Contact' },
    ];

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    const [activeSection, setActiveSection] = useState("section_hero");

    const handleScroll = () => {
        const middleViewport = window.innerHeight / 2; // Middle point of the viewport

        const currentSection = sections.find((section) => {
            const element = document.getElementById(section.id);
            const { top, bottom } = element.getBoundingClientRect();
            // Check if the middle of the viewport is within the section bounds
            return top <= middleViewport && bottom >= middleViewport;
        });

        if (currentSection) {
            setActiveSection(currentSection.id);
        }
    };

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 200); // Adjust limit as needed
        window.addEventListener('scroll', throttledHandleScroll);
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, []);


    return (
        <>
            {/* <nav className="py-6 flex justify-between">
                <span className="text-[#F16C20] text-[20px] font-bold">PN</span>
                <ul className='sm:inline-flex hidden space-x-[70px]'>
                    <li className="cursor-pointer hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"><Link href="/#section_hero">Home</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"><Link href="/#section_about">About</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"><Link href="/#section_skills">Skills</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"><Link href="/#section_projects">Projects</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"><Link href="/#section_contact">Contact</Link></li>
                </ul>
            </nav> */}
            <div className="flex items-center justify-between py-6">
                <span className="text-[#F16C20] text-[20px] font-bold cursor-pointer"><a href="/#section_hero">{"< PN.dev />"}</a></span>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2 cursor-pointer"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-[#EDEDED]"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-[#EDEDED]"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-[#EDEDED]"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600 hover:text-[#F16C20] transition ease-in-out delay-40 duration-150"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className={`border-b border-gray-400 my-8 uppercase ${activeSection === "section_hero" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}>
                                    <Link onClick={() => setIsNavOpen((prev) => !prev)} href="/#section_hero">Home</Link>
                                </li>
                                <li className={`border-b border-gray-400 my-8 uppercase ${activeSection === "section_about" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}>
                                    <Link onClick={() => setIsNavOpen((prev) => !prev)} href="/#section_about">About</Link>
                                </li>
                                <li className={`border-b border-gray-400 my-8 uppercase ${activeSection === "section_skills" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}>
                                    <Link onClick={() => setIsNavOpen((prev) => !prev)} href="/#section_skills">Skills</Link>
                                </li>
                                <li className={`border-b border-gray-400 my-8 uppercase ${activeSection === "section_projects" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}>
                                    <Link onClick={() => setIsNavOpen((prev) => !prev)} href="/#section_projects">Projects</Link>
                                </li>
                                <li className={`border-b border-gray-400 my-8 uppercase ${activeSection === "section_contact" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}>
                                    <Link onClick={() => setIsNavOpen((prev) => !prev)} href="/#section_contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-[70px] lg:flex">
                        <li className={`cursor-pointer ${activeSection === "section_hero" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}><Link href="/#section_hero">Home</Link></li>
                        <li className={`cursor-pointer ${activeSection === "section_about" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}><Link href="/#section_about">About</Link></li>
                        <li className={`cursor-pointer ${activeSection === "section_skills" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}><Link href="/#section_skills">Skills</Link></li>
                        <li className={`cursor-pointer ${activeSection === "section_projects" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}><Link href="/#section_projects">Projects</Link></li>
                        <li className={`cursor-pointer ${activeSection === "section_contact" && "text-[#F16C20]"} hover:text-[#F16C20] transition ease-in-out delay-40 duration-150`}><Link href="/#section_contact">Contact</Link></li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #0D3C55;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
        </>
    )
}