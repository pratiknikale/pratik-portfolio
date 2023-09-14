import Image from 'next/image';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';

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
        <main className="py-4 px-[185px] font-primary">
          <nav className="py-6 flex justify-between">
            <span className="text-[#F16C20] text-[20px] font-bold">PN</span>
            <ul className='inline-flex space-x-[70px]'>
              <li className="cursor-pointer hover:text-[#F16C20]">Home</li>
              <li className="cursor-pointer hover:text-[#F16C20]">About</li>
              <li className="cursor-pointer hover:text-[#F16C20]">Skills</li>
              <li className="cursor-pointer hover:text-[#F16C20]">Projects</li>
              <li className="cursor-pointer hover:text-[#F16C20]">Contact</li>
            </ul>
          </nav>
          <section className="mt-16">
            <Hero />
          </section>
          <section className="mt-32">
            <About />
          </section>
          <section className="mt-32">
            <Skills />
          </section>
          <section className="mt-32">
            <Projects />
          </section>

        </main>
      </div>
    </>
  )
}