"use client";

import Image from "next/image";
import Link from "next/link";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Navbar from "@/app/component/Navbar";
import { useEffect, useState } from "react";
import ProjectData from "../../data/projects";
import Button from "@/app/commonComponents/Button";

const Project = ({ params }) => {
    let [project, setProject] = useState({});

    useEffect(() => {
        let tempProject = ProjectData.find((project) => {
            return project.name === params.slug;
        })
        console.log(tempProject)
        setProject(tempProject)
    }, [params.slug])

    return (
        <>
            <div className="mb-20">
                <div className='absolute'>
                    <Image
                        className="w-[100%] imageFade opacity-[0.04] fixed"
                        src="/coding1-bg.jpg"
                        width={0}
                        height={0}
                        alt="background"
                        sizes='100vw'
                    />
                </div>
                <div className='relative'>
                    <section id="section_home" className="sticky px-12 top-0 z-50 bg-[#104964] bg-opacity-20 backdrop-blur-lg">
                        <Navbar />
                    </section>
                    <main className="py-4 xl:px-[185px] lg:px-[140px] md:px-[50px] px-[12px] font-primary">
                        {/* <h1 className="text-[#F16C20] font-bold text-[36px] flex justify-center"><span className="">{params.slug}</span></h1> */}
                        {project && project.videoUrl && <>
                            <div className="videoPlayer w-[100%] mt-6">
                                <Video
                                    // poster={`/${project.thumbnailUrl}`}
                                    autoplay loop>
                                    <source
                                        src={`/${project.videoUrl}`}
                                        type="video/webm" />
                                </Video>
                            </div>
                        </>
                        }
                        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-2">
                            <div className="bg-[#1395BA]/[15%] backdrop-blur-smd rounded-[10px] col-span-2 px-10 py-10">
                                <h2 className=""><span className="font-bold text-[20px]  text-[#F16C20]">{params.slug}</span></h2>
                                {/* <h2 className="mt-8"><span className="font-bold text-[20px]  text-[#F16C20]">Description</span></h2> */}
                                <div>
                                    <ul className="mt-8 ml-4 list-disc">
                                        {project && project?.discriptionPoints?.map((disp, i) => {
                                            return <>
                                                <li className="mb-2">{disp}</li>
                                            </>
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <span className="font-bold text-[#F16C20]">Demo Credentials: </span><br />
                                    <div className="demoCredentials pl-8 pt-2">
                                        <span className="font-bold text-[#F16C20]">Email: </span><span>{project?.demoCredentials_Email}</span><br />
                                        <span className="font-bold text-[#F16C20]">Password: </span><span>{project?.demoCredentials_Pass}</span><br />

                                    </div>
                                </div>

                                <div className="Project_actionButtons flex mt-8">
                                    <Link href={`${project.githubLink}`} target="blank">
                                        <Button customClass="w-[100px] h-[27px]">GitHub</Button>
                                    </Link>
                                    <Link href={`${project.liveLink}`} target="blank">
                                        <Button customClass="w-[100px] h-[27px] ml-[11px]">Live</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-[#1395BA]/[15%] backdrop-blur-smd rounded-[10px] py-10">
                                <h2 className="flex justify-center"><span className="font-bold text-[20px]  text-[#F16C20]">Technologies Used</span></h2>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 p-7 gap-2">
                                    {project && project?.technologies?.map((tech, i) => {
                                        return (
                                            <div key={tech.name} className="flex mb-3 flex-col justify-center items-center hover:scale-105">
                                                <div className="bg-[#1395BA] h-[70px] w-[70px] rounded-full flex justify-center items-center">
                                                    <span>
                                                        <Image
                                                            className="drop-shadow-2xl rounded-[10px]"
                                                            src={`/logo-images/${tech.logo}`}
                                                            width={40}
                                                            height={40}
                                                            alt="Hero Image"
                                                        />
                                                    </span>
                                                </div>
                                                <p className="my-1 text-center px-[3px] text-[#F16C20]">{tech.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Project;