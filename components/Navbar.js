import { useState } from 'react';
import Link from 'next/link'
import { GiSolarTime } from 'react-icons/gi';

export default function Navbar() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => setNavToggled(!navToggled);
  return (
    <div className="h-28 w-full fixed top-0 left-0 right-0 bg-gradient-to-br from-black/90 to-black/40 backdrop-blur-md z-40">
        {/* mobile nav */}
        <div className={navToggled ? "animate animate__animated animate__fadeInRight fixed top-0 right-0 h-screen w-full md:w-[60vw] lg:[50vw] xl:w-[40vw] bg-gradient-to-br from-black to-slate-900/80 flex items-start justify-center flex-col p-8 text-3xl md:text-5xl lg:text-7xl space-y-4 font-heading" : "hidden"}>
            <d onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Visiting</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </d>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Exhibitions</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Tours</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Events</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Schedule</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Book</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
            <div onClick={navToggled} className="animate animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between w-full text-slate-300 hover:text-slate-100 duration-300 border-separate border-b-2 border-slate-400">
                <Link href="/">Contact Us</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>

        </div>
        {/* end mobile nav */}
        <nav className="max-w-8xl mx-auto p-8 flex items-center justify-between text-slate-400/90">
            <div className="flex items-center space-x-4 text-xl">
                <GiSolarTime/>
                <span className="uppercase font-light tracking-wide">Louvre</span>
            </div>
            <div className="hidden items-center space-x-4">
                <div>
                    <Link href="/">Visiting</Link>
                </div>
                <div>
                    <Link href="/">Exhibitions</Link>
                </div>
                <div>
                    <Link href="/">Tours</Link>
                </div>
                <div>
                    <Link href="/">Events</Link>
                </div>
                <div>
                    <Link href="/">Schedule</Link>
                </div>
                <div>
                    <Link href="/">Book</Link>
                </div>
                <div>
                    <Link href="/">Contact Us</Link>
                </div>
            </div>
            <div className={navToggled ? "rotate-90 duration-300 z-[50] cursor-pointer" : "rotate-0 duration-300 z-[50] cursor-pointer"} onClick={handleNavToggle}>
                {navToggled ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </div>
        </nav>
    </div>
  )
}
