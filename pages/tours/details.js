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

    const onHoverChange = (imgPayload) => {
        

        if(image === imgPayload) {
            return;
        } else {
            let img = window.document.getElementById('coverImg');
            img.classList.add('animate', 'animate__animated', 'animate__fadeIn');
        }
        setImage(imgPayload);
    }

    const onHoverOut = () => {
        let img = window.document.getElementById('coverImg');
        img.classList.remove('animate', 'animate__animated', 'animate__fadeIn');
    }

  return (
    <div className="h-screen w-screen bg-[#0e0e0e] relative overflow-x-hidden">
        <img id="coverImg" className="absolute h-full w-screen object-cover" src={image} alt="" />
        <div className="absolute h-screen w-full bg-gradient-to-br from-black to-slate-800/10 backdrop-blur-sm" />
        <section className="max-w-[1440px] h-full flex items-center justify-center">
            <div className="flex flex-col space-y-6">
                <div onMouseLeave={onHoverOut} onMouseEnter={() => onHoverChange(images[0])} className="w-full flex items-center justify-between img-link z-20">
                    <div className="text-slate-200/90 hover:text-slate-100 duration-300">
                        <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                            <Link href="/">Exhibition One</Link>
                        </h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
                <div onMouseLeave={onHoverOut} onMouseEnter={() => onHoverChange(images[1])} className="w-full flex items-center justify-between img-link z-20">
                    <div className="text-slate-200/90 hover:text-slate-100 duration-300">
                        <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                            <Link href="/">Exhibition Two</Link>
                        </h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
                <div onMouseLeave={onHoverOut} onMouseEnter={() => onHoverChange(images[2])} className="w-full flex items-center justify-between img-link z-20">
                    <div className="text-slate-200/90 hover:text-slate-100 duration-300">
                        <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                            <Link href="/">Exhibition Three</Link>
                        </h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    </div>
  )
}
