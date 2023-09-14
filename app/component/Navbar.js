import Link from "next/link";

export default function Navbar() {

    return (
        <>
            <nav className="py-6 flex justify-between">
                <span className="text-[#F16C20] text-[20px] font-bold">PN</span>
                <ul className='sm:inline-flex hidden space-x-[70px]'>
                    <li className="cursor-pointer hover:text-[#F16C20]"><Link href="#section_hero">Home</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20]"><Link href="#section_about">About</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20]"><Link href="#section_skills">Skills</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20]"><Link href="#section_projects">Projects</Link></li>
                    <li className="cursor-pointer hover:text-[#F16C20]"><Link href="#section_contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}