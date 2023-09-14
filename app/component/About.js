import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="flex flex-col">
                <h2 className="font-bold text-[32px] flex justify-center"><span className="">ABOUT</span></h2>
                <div className="grid grid-cols-5 gap-4 mt-16">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center">
                            <span>
                                <Image
                                    className="drop-shadow-2xl"
                                    src="/logo-images/fast.png"
                                    width={65}
                                    height={65}
                                    alt="Hero Image"
                                />
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Fast</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center">
                            <span>
                                <Image
                                    className="drop-shadow-2xl"
                                    src="/logo-images/responsive (1).png"
                                    width={70}
                                    height={70}
                                    alt="Hero Image"
                                />
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Responsive</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center">
                            <span>
                                <Image
                                    className="drop-shadow-2xl"
                                    src="/logo-images/algorithm (1).png"
                                    width={60}
                                    height={60}
                                    alt="Hero Image"
                                />
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Complex</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center">
                            <span>
                                <Image
                                    className="drop-shadow-2xl"
                                    src="/logo-images/scalable (1).png"
                                    width={60}
                                    height={60}
                                    alt="Hero Image"
                                />
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Scalable</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#1395BA] h-28 w-28 rounded-full flex justify-center items-center">
                            <span>
                                <Image
                                    className="drop-shadow-2xl"
                                    src="/logo-images/routing (1).png"
                                    width={60}
                                    height={60}
                                    alt="Hero Image"
                                />
                            </span>
                        </div>
                        <p className="my-2 text-center px-[3px] text-[#F16C20] font-bold text-[20px]">Dynamic</p>
                        <p className="text-center px-[3px] leading-[20px]">Fast load times and lag free interaction, my highest priority.</p>
                    </div>

                </div>

                <div className="grid grid-cols-2 mt-20">
                    <div className="bg-[#1395BA]/[15%] rounded-[10px] h-[400px] flex flex-col justify-center items-center">
                        <p className="text-[#F16C20] font-bold text-[20px]">Who is this guy?</p>
                        <p className="mt-10 px-10 text-center leading-[20px]">I'm a Full-Stack Developer who has serious passion for logic building, problem solving, web development and technology. Let's make something special.</p>
                        <div className="social-icon-links mt-10 h-12">
                            <Link href="https://github.com/pratiknikale" target="blank">
                                <Image
                                    className="drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                                    src="/logo-images/github-sign.png"
                                    width={40}
                                    height={40}
                                    alt="github profile"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/pratik-nikale/" target="blank">
                                <Image
                                    className="drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                                    src="/logo-images/linkedin.png"
                                    width={40}
                                    height={40}
                                    alt="linkedin profile"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="h-[400px] flex flex-col justify-center items-end">
                        <Image
                            className="rounded-full"
                            src="/logo-images/profilePicture.png"
                            width={400}
                            height={400}
                            alt="Hero Image"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
