import Image from 'next/image';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

export default function Home() {

  return (
    <>
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
        <main className="py-4 pb-32 xl:px-[185px] lg:px-[140px] sm:px-[50px] px-[16px] font-primary">
          <Navbar />
          <section id="section_hero" className="sm:mt-16 mt-28">
            <Hero />
          </section>
          <section id="section_about" className="sm:mt-32 mt-52">
            <About />
          </section>
          <section id="section_skills" className="mt-32">
            <Skills />
          </section>
          <section id="section_projects" className="mt-32">
            <Projects />
          </section>
          <section id="section_contact" className="mt-32">
            <Contact />
          </section>

        </main>
        <div className="myFooter bg-[#1395BA]/[15%] h-[50px] sm:text-[14px] text-[10px] text-[#bebebe] flex justify-center items-center">@ Copyright 2023. Developed by Pratik Nikale. All rights reserved.</div>

      </div>
    </>
  )
}