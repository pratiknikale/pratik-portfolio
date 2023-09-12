import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div><span className="text-[#F16C20] text-[96px] font-bold blur-[6px] opacity-30 absolute mt-2">WEB DEVELOPER</span></div>
            <div className="grid grid-cols-2 h-[381px] content-center relative">
                <div className="pr-5 flex flex-col justify-center">
                    <p className="leading-9">
                        <span className="text-[#F16C20]">Hi, I am</span><br></br>
                        <span className="font-bold text-[36px]">Pratik Nikale</span><br></br>
                        <span className="text-[#F16C20] text-[36px]">Full Stack Developer</span><br></br>
                    </p>
                    <p className="leading-[20px] py-1">Experienced Full Stack Engineer with a demonstrated history of working in IT industry. Skilled in building elegant and performing web applications and software. vienviei eivie vieuvieun vde vi vienvienvedv ind ivnedivne vie viedviednv iednvednvie.</p>
                    <div className="hero-buttons flex">
                        <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[181px] h-[35px] rounded-[10px] mt-[16px]">Download Resume</button>
                        <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] w-[181px] h-[35px] rounded-[10px] ml-[11px] mt-[16px]">Contact Me</button>
                    </div>
                </div>
                <div className="flex justify-end content-center">
                    <Image
                        className="drop-shadow-2xl"
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
