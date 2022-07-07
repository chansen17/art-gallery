import React from 'react'
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const slideImages = [
    'https://images.pexels.com/photos/3713476/pexels-photo-3713476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2939793/pexels-photo-2939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/169406/pexels-photo-169406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

const tempLinks = [
    {   route: '/events/details',
        name: 'Events',
        title: 'the touch exhibition',
        excerpt: 'Newest: Sculpture exhibition',
        cover: 'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {   route: '/tours/details',
        name: 'tours',
        title: 'the first louvre',
        excerpt: 'Approx. 1.5 hours - Eng.',
        cover: 'https://images.pexels.com/photos/2939793/pexels-photo-2939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {   route: '/art-of-the-day/details',
        name: 'art of the day',
        title: 'the louve collection',
        excerpt: 'Andrea Mangeta and Parnasus',
        cover: 'https://images.pexels.com/photos/169406/pexels-photo-169406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
]

export default function Hero() {
  return (
    <div className="h-full w-screen flex flex-col items-start relative">
        {/* elements */}
        {/* <Splide className="fixed h-screen w-screen object-cover object-top" options={{
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false
        }}>
            {slideImages.map((img) => (
                <SplideSlide>
                    <img className="animate animate__animated animate__fadeIn animate__delay-2s fixed h-screen w-screen object-cover object-top" src={img} />
                </SplideSlide>
            ))}
        </Splide> */}
        <img className="animate animate__animated animate__fadeIn fixed h-screen w-screen object-cover object-top" src={slideImages[0]} />
        <div className="fixed h-screen w-screen bg-gradient-to-tr from-gray-900 to-black/40" />
        {/* end elements */}
        <section className="max-w-[1440px] h-full w-full mx-auto pt-60 px-8 z-20">
            <div className="max-w-2xl text-gray-100/90 z-10">
                <p className="animate animate__animated animate__fadeInLeft py-6 text-xl">Guided tours available from 10am to 2pm everyday</p>
                <h2 className="animate animate__animated animate__fadeInLeft text-6xl md:text-7xl lg:text-8xl font-semibold uppercase tracking-wide">Welcome<br/> to the Louvre</h2>
                <button className="animate animate__animated animate__fadeInLeft pt-6 px-3 text-xl md:text-2xl underline font-semibold">Get tickets</button>
            </div>
        </section>
        <section className="max-w-[1440px] mx-auto py-24 px-8 grid gap-4 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3 z-20">
        {tempLinks ? tempLinks.map((obj, i) => (
            <Link href={obj.route}>
                <div className="animate animate__animated animate__fadeIn animate__delay-2s col-span-1 group mb-12 cursor-pointer" key={i}>
                    <img className="h-64 w-full object-cover brightness-75 group-hover:brightness-110 duration-500 shadow-xl shadow-black/50" src={obj.cover} alt="cover image"/>
                    <div className="my-4 text-slate-200 space-y-2">
                        <h2 className="text-xl md:text-2xl lg:text:4xl uppercase border-b-2 inline-flex border-slate-200/70 mt-2">{obj.name}</h2>
                        <p className="text-lg md:text-xl lg:text:3xl capitalize">{obj.title}</p>
                        <p className="text-lg md:text-xl lg:text:3xl capitalize">{obj.excerpt}</p>
                    </div>
                </div>
            </Link>
        )) : (
            <>
            <p>Getting data</p>
            </>
        )}
        </section>
    </div>
  )
}
