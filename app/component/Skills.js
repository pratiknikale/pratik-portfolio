import Image from "next/image";
import Link from "next/link";

export default function Skills() {
    const frontEndSkills = [
        { name: "React.js", logo: "react_logo.png" },
        { name: "Angular", logo: "angular_logo.png" },
        { name: "Redux", logo: "redux_logo.png" },
        { name: "Three.js", logo: "three_logo.png" },
        { name: "JavaScript", logo: "javascript_logo.png" },
        { name: "MUI", logo: "mui_logo.png" },
        { name: "Bootstrap", logo: "bootstrap_logo.png" },
        { name: "Tailwind", logo: "tailwind_logo.png" },
        { name: "Html", logo: "html_logo.png" },
        { name: "Css", logo: "css_logo.png" },
    ]

    const backEndSkills = [
        { name: "Node.js", logo: "node_logo.png" },
        { name: "Express.js", logo: "express_logo.png" },
        { name: "Mongodb", logo: "mongodb_logo.png" },
        { name: "Next.js", logo: "next_logo.jpeg" },
        { name: "Socket.io", logo: "socket_logo.png" }
    ]

    const otherSkills = [
        { name: "Vs Code", logo: "vscode_logo.png" },
        { name: "Postman", logo: "postman_logo.png" },
        { name: "Typescript", logo: "typescript_logo.png" },
        { name: "Git", logo: "git_logo.png" },
        { name: "Github", logo: "github_logo.png" },
        { name: "Figma", logo: "figma_logo.png" }
    ]
    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 flex justify-center mb-3">
                        <Image
                            className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                            src="/logo-images/skillsLogo.png"
                            width={40}
                            height={40}
                            alt="skills logo"
                        />
                    </div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-r-2"></div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-l-2"></div>
                </div>
                <h2 className="font-bold text-[36px] flex justify-center"><span className="">SKILLS</span></h2>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-16">
                    <div className="bg-[#1395BA]/[15%] rounded-[10px]">
                        <h2 className="flex justify-center mt-6"><span className="font-bold text-[20px]  text-[#F16C20]">Frontend</span></h2>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-3 p-7 gap-2">
                            {frontEndSkills.map((skill, i) => {
                                return (
                                    <div key={skill.name} className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                        <div className="bg-[#1395BA] h-[70px] w-[70px] rounded-full flex justify-center items-center">
                                            <span>
                                                <Image
                                                    className="drop-shadow-2xl rounded-[10px]"
                                                    src={`/logo-images/${skill.logo}`}
                                                    width={40}
                                                    height={40}
                                                    alt="Hero Image"
                                                />
                                            </span>
                                        </div>
                                        <p className="my-1 text-center px-[3px] text-[#F16C20]">{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="bg-[#1395BA]/[15%] rounded-[10px]">
                        <h2 className="flex justify-center mt-6"><span className="font-bold text-[20px]  text-[#F16C20]">Backend</span></h2>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-3 p-7 gap-2">
                            {backEndSkills.map((skill, i) => {
                                return (
                                    <div key={skill.name} className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                        <div className="bg-[#1395BA] h-[70px] w-[70px] rounded-full flex justify-center items-center">
                                            <span>
                                                <Image
                                                    className="drop-shadow-2xl rounded-[10px]"
                                                    src={`/logo-images/${skill.logo}`}
                                                    width={40}
                                                    height={40}
                                                    alt="Hero Image"
                                                />
                                            </span>
                                        </div>
                                        <p className="my-1 text-center px-[3px] text-[#F16C20]">{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="bg-[#1395BA]/[15%] rounded-[10px]">
                        <h2 className="flex justify-center mt-6"><span className="font-bold text-[20px]  text-[#F16C20]">Tools/Other</span></h2>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-3 p-7 gap-2">
                            {otherSkills.map((skill, i) => {
                                return (
                                    <div key={skill.name} className="flex mb-3 flex-col justify-center items-center hover:scale-105 transition ease-in-out delay-40 duration-150">
                                        <div className="bg-[#1395BA] h-[70px] w-[70px] rounded-full flex justify-center items-center">
                                            <span>
                                                <Image
                                                    className="drop-shadow-2xl rounded-[10px]"
                                                    src={`/logo-images/${skill.logo}`}
                                                    width={40}
                                                    height={40}
                                                    alt="Hero Image"
                                                />
                                            </span>
                                        </div>
                                        <p className="my-1 text-center px-[3px] text-[#F16C20]">{skill.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
