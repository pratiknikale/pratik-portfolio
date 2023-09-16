import Image from "next/image";
import Link from "next/link";
import ProjectData from "../data/projects"

export default function Projects() {

    return (
        <>
            <div className="flex flex-col">
                <h2 className="font-bold text-[36px] flex justify-center"><span className="">PROJECTS</span></h2>
                <div className="mt-16">
                    {ProjectData.map((project, i) => {
                        return <>
                            {i % 2 == 0
                                ?
                                <>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 bg-[#1395BA]/[15%] rounded-[10px]">
                                        <div className="sm:px-6 px-4 flex flex-col justify-center sm:py-10 pb-10 sm:order-first order-last">
                                            <h2 className="text-[#F16C20] font-bold text-[20px]">{project.name}</h2>
                                            <p className="leading-[20px] py-2">{project.discriptionPoints[0].substring(0, 150) + " ..."}</p>
                                            <div className="grid xl:grid-cols-8 md:grid-cols-5 grid-cols-4 gap-2 py-2">
                                                {project.technologies.slice(0, 4).map((tech, i) => {
                                                    return <>
                                                        <div className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                                            <div className="bg-[#1395BA] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                                                                <span>
                                                                    <Image
                                                                        className="drop-shadow-2xl rounded-[10px]"
                                                                        src={`/logo-images/${tech.logo}`}
                                                                        width={25}
                                                                        height={25}
                                                                        alt="Hero Image"
                                                                    />
                                                                </span>
                                                            </div>
                                                            {/* <p className="my-1 text-center px-[3px] text-[#F16C20]">React</p> */}
                                                        </div>
                                                    </>
                                                })}
                                                <div className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                                    <div className="bg-[#1395BA] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                                                        <span>
                                                            ...
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Project_actionButtons flex flex-wrap">
                                                <Link href={`/projects/${project.name}`}>
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-150">Read More</button>
                                                </Link>
                                                <Link href={`${project.githubLink}`} target="blank">
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-150">GitHub</button>
                                                </Link>
                                                <Link href={`${project.liveLink}`} target="blank">
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-150">Live</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center sm:px-6 px-4 py-10">
                                            <Image
                                                className="transition ease-in-out delay-40 duration-200 hover:scale-[1.18] w-[100%] rounded-[10px]"
                                                src={`/${project.thumbnailUrl}`}
                                                width={1000}
                                                height={1000}
                                                alt="Hero Image"
                                            />
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 bg-[#1395BA]/[15%] rounded-[10px] mt-4">
                                        <div className="flex items-center sm:px-6 px-4 py-10">
                                            <Image
                                                className="transition ease-in-out delay-40 duration-200 hover:scale-[1.18] w-[100%] rounded-[10px]"
                                                src={`/${project.thumbnailUrl}`}
                                                width={1000}
                                                height={1000}
                                                alt="Hero Image"
                                            />
                                        </div>
                                        <div className="sm:px-6 px-4 flex flex-col justify-center sm:py-10 pb-10">
                                            <h2 className="text-[#F16C20] font-bold text-[20px]">{project.name}</h2>
                                            <p className="leading-[20px] py-2">{project.discriptionPoints[0].substring(0, 180) + " ..."}</p>
                                            <div className="grid xl:grid-cols-8 md:grid-cols-5 grid-cols-4 gap-2 py-2">
                                                {project.technologies.slice(0, 4).map((tech, i) => {
                                                    return <>
                                                        <div className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                                            <div className="bg-[#1395BA] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                                                                <span>
                                                                    <Image
                                                                        className="drop-shadow-2xl rounded-[10px]"
                                                                        src={`/logo-images/${tech.logo}`}
                                                                        width={25}
                                                                        height={25}
                                                                        alt="Hero Image"
                                                                    />
                                                                </span>
                                                            </div>
                                                            {/* <p className="my-1 text-center px-[3px] text-[#F16C20]">React</p> */}
                                                        </div>
                                                    </>
                                                })}
                                                <div className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                                    <div className="bg-[#1395BA] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                                                        <span>
                                                            ...
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Project_actionButtons flex flex-wrap">
                                                <Link href={`/projects/${project.name}`}>
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-200">Read More</button>
                                                </Link>
                                                <Link href={`${project.githubLink}`} target="blank">
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-200">GitHub</button>
                                                </Link>
                                                <Link href={`${project.liveLink}`} target="blank">
                                                    <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[100px] h-[27px] rounded-[10px] mr-[11px] mt-[8px] transition ease-in-out delay-40 duration-200">Live</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>}
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
