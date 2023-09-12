import Image from 'next/image';
import Hero from './component/Hero';
import About from './component/About';

export default function Home() {
  return (
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

    </main>
  )
}