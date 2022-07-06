import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
    'https://images.pexels.com/photos/3713476/pexels-photo-3713476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2939793/pexels-photo-2939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/169406/pexels-photo-169406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export default function details() {
    const [image, setImage] = useState(images[0])

  return (
    <div className="min-h-screen h-full w-screen bg-[#0e0e0e]">
        <section className="pt-40 px-8 grid gap-4 grid-cols-4">
            <div className="col-span-2 h-[70vh] animate animate__animated animate__fadeInLeft">
                <div className="flex flex-col justify-between h-full">
                    <div onMouseEnter={() => setImage(images[0])} className="w-full flex items-center justify-between">
                        <div className="text-slate-200/90">
                            <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                                <Link href="/">Exhibition One</Link>
                            </h2>
                            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                    <div onMouseEnter={() => setImage(images[1])} className="w-full flex items-center justify-between">
                        <div className="text-slate-200/90">
                            <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                                <Link href="/">Exhibition One</Link>
                            </h2>
                            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                    <div onMouseEnter={() => setImage(images[2])} className="w-full flex items-center justify-between">
                        <div className="text-slate-200/90">
                            <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                                <Link href="/">Exhibition One</Link>
                            </h2>
                            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                    <div onMouseEnter={() => setImage(images[3])} className="w-full flex items-center justify-between">
                        <div className="text-slate-200/90">
                            <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                                <Link href="/">Exhibition One</Link>
                            </h2>
                            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-2 shrink-0 h-[70vh] animate animate__animated animate__fadeInRight">
                <img className="h-full w-full object-cover" src={image} alt="" />
            </div>
        </section>
    </div>
  )
}
