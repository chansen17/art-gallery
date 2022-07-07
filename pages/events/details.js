import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const events = [
    {
        id: 0,
        title: 'The Exhibition',
        excerpt: 'lorem ipsum dolor sit amet',
        route: 'event/eventOne',
        img: 'https://images.pexels.com/photos/3713476/pexels-photo-3713476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 1,
        title: 'The Exhibition',
        excerpt: 'lorem ipsum dolor sit amet',
        route: 'event/eventTwo',
        img: 'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 2,
        title: 'The Exhibition',
        excerpt: 'lorem ipsum dolor sit amet',
        route: 'event/eventThree',
        img: 'https://images.pexels.com/photos/169406/pexels-photo-169406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
]


export default function details() {
    const bodyRef = useRef();
    const [image, setImage] = useState(null)

    const onHoverChange = (imgPayload) => {
        
        let img = window.document.getElementById('coverImg');
        img.classList.remove('animate__fadeOut')
        img.classList.add('animate', 'animate__animated', 'animate__fadeIn');

        if(image === imgPayload) {
            return;
        } else {
        }
        setImage(imgPayload);
    }

    const onHoverOut = () => {
        let img = window.document.getElementById('coverImg');
        img.classList.add('animate', 'animate__animated' , 'animate__fadeOut');
    }

  return (
    <div className="h-screen w-screen bg-[#0e0e0e] relative overflow-hidden">
        <img id="coverImg" className="absolute h-full w-screen object-cover animate animate__animated animate__fadeIn" src={image} alt="" />
        <div className="absolute h-screen w-full bg-gradient-to-br from-black to-slate-800/10 backdrop-blur-sm" />
        {/* <div className="hidden md:block text-[14vw] font-bold tracking-tight absolute rotate-90 top-[35%] right-0 text-slate-700/80 z-20">Events</div> */}
        <section className="max-w-[1440px] h-full flex items-center justify-center">
            <div className="flex flex-col space-y-6">
            {/* events */}
            {events && events.map((event) => (
                <div onMouseLeave={onHoverOut} onMouseEnter={() => onHoverChange(event.img)} className="w-full flex items-center justify-between img-link z-20">
                    <div className="text-slate-200/90 hover:text-slate-100 duration-300">
                        <h2 className="text-3xl md:text-5xl lg:text-8xl font-normal">
                            <Link className="link" href={event.route}>{event.title}</Link>
                        </h2>
                        <p className="text-xl">{event.excerpt}</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
                ))}
            </div>
        </section>
    </div>
  )
}
