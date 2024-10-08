import Image from "next/image";
import Link from "next/link";
import ProjectData from "../data/projects";
import Button from "../commonComponents/Button";

export default function Projects() {

    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 flex justify-center mb-3">
                        <Image
                            className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                            src="/logo-images/projectsLogo.png"
                            width={40}
                            height={40}
                            alt="projects logo"
                        />
                    </div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-r-2"></div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-l-2"></div>
                </div>
                <h2 className="font-bold text-[36px] flex justify-center"><span className="">PROJECTS</span></h2>
                <div className="mt-16">
                    {ProjectData.map((project, i) => {
                        return <>
                            {i % 2 == 0
                                ?
                                <>
                                    <div className={`grid sm:grid-cols-2 grid-cols-1 bg-[#1395BA]/[15%] backdrop-blur-smd rounded-[10px] ${i === 0 ? "mt-0" : "mt-5"}`}>
                                        <div className="sm:px-6 px-4 flex flex-col justify-center items-center sm:py-24 pb-10 sm:order-first order-last">
                                            <h2 className="text-[#F16C20] font-bold text-[20px]">{project.name}</h2>
                                            <p className="leading-[20px] text-center py-2">{project.discriptionPoints[0].substring(0, 150) + " ..."}</p>
                                            <div className="grid grid-cols-5 gap-2 py-2">
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
                                                                        alt="skills logo"
                                                                    />
                                                                </span>
                                                            </div>
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
                                            <div className="Project_actionButtons flex flex-wrap justify-center items-center">
                                                <Link href={`/projects/${project.name}`}>
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">Read More</Button>
                                                </Link>
                                                <Link href={`${project.githubLink}`} target="blank">
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">GitHub</Button>
                                                </Link>
                                                <Link href={`${project.liveLink}`} target="blank">
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">Live</Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center sm:h-[100%] h-[250px]">
                                            <div className="relative w-[100%] h-[100%]">
                                                <div className="w-[100%] h-[100%] absolute">
                                                    <Link href={`/projects/${project.name}`}>
                                                        <Image
                                                            className="object-cover w-[100%] h-[100%] rounded-[10px]"
                                                            src={`/${project.thumbnailUrl}`}
                                                            width={1000}
                                                            height={1000}
                                                            alt="Hero Image"
                                                        />
                                                    </Link>
                                                </div>
                                                {/* <Link className="flex justify-center items-center w-[100%] h-[100%] bg-[black] rounded-[10px] absolute opacity-0 hover:opacity-60 transition ease-in-out delay-40 duration-150" href={`/projects/${project.name}`}>
                                                    <span className="text-[20px] text-[#F16C20] font-bold">Read More</span>
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={`grid sm:grid-cols-2 grid-cols-1 bg-[#1395BA]/[15%] backdrop-blur-smd rounded-[10px] ${i === 0 ? "mt-0" : "mt-5"}`}>
                                        <div className="flex items-center sm:h-[100%] h-[250px]">
                                            <div className="relative w-[100%] h-[100%]">
                                                <div className="w-[100%] h-[100%] absolute">
                                                    <Link href={`/projects/${project.name}`}>
                                                        <Image
                                                            className="object-cover w-[100%] h-[100%] rounded-[10px]"
                                                            src={`/${project.thumbnailUrl}`}
                                                            width={1000}
                                                            height={1000}
                                                            alt="Hero Image"
                                                        />
                                                    </Link>
                                                </div>
                                                {/* <Link className="flex justify-center items-center w-[100%] h-[100%] bg-[black] rounded-[10px] absolute opacity-0 hover:opacity-60 transition ease-in-out delay-40 duration-150" href={`/projects/${project.name}`}>
                                                    <span className="text-[20px] text-[#F16C20] font-bold">Read More</span>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="sm:px-6 px-4 flex flex-col justify-center items-center sm:py-24 pb-10">
                                            <h2 className="text-[#F16C20] font-bold text-[20px]">{project.name}</h2>
                                            <p className="leading-[20px]  text-center py-2">{project.discriptionPoints[0].substring(0, 150) + " ..."}</p>
                                            <div className="grid grid-cols-5 gap-2 py-2">
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
                                            <div className="Project_actionButtons flex flex-wrap justify-center items-center">
                                                <Link href={`/projects/${project.name}`}>
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">Read More</Button>
                                                </Link>
                                                <Link href={`${project.githubLink}`} target="blank">
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">GitHub</Button>
                                                </Link>
                                                <Link href={`${project.liveLink}`} target="blank">
                                                    <Button customClass="w-[100px] h-[27px] m-[11px]">Live</Button>
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
