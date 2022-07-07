import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

export default function eventOne() {
  const textRefOne = useRef();
  const textRefTwo = useRef();
  const textRefThree= useRef();

  const {
    inViewport,
  } = useInViewport(
    textRefOne,
    textRefTwo,
    textRefThree,
  );


  return (
    <div className="h-fit w-screen bg-[#1e1e1e]">
      <div className="">
        <section className="h-screen w-full flex flex-col items-center justify-center relative">
          <div className="px-8 z-20">
            <h2 className="animate animate__animated animate__fadeInDown max-w-4xl mx-auto text-6xl md:text-9xl font-black text-slate-300 text-center z-20">The Exhibition</h2>
            <div className="max-w-2xl mx-auto text-slate-300 text-center z-20">
              <p className="text-3xl md:text-4xl lg:text-6xl font-semibold">Begins August 01 | Ends August 21</p>
              <div className="pt-6 text-4xl">
                <p>Hours:</p>
                <p>10 a.m to 2:30 p.m</p>
              </div>
            </div>
            <p className="animate animate__animated animate__fadeIn animate__delay-1s animate__slow absolute z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl md:text-[18vw] overflow-hidden font-bold text-slate-700/50 uppercase">Greece</p>
          </div>
        </section>
        <section className="h-screen w-full flex items-center justify-center bg-[url(https://images.pexels.com/photos/11840357/pexels-photo-11840357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat bg-fixed">
          <p className="max-w-4xl mx-auto text-6xl md:text-9xl font-black text-slate-300 text-center mix-blend-screen uppercase">
            <span ref={textRefOne} className={inViewport ? "animate animate__animated animate__fadeIn animate__delay animate__slow" : null}>Take</span> a step into <span ref={textRefThree} className={inViewport ? "animate animate__animated animate__fadeInDown animate__delay-2s animate__slow" : null}>ancient greece</span>
          </p>
        </section> 
        <section className="max-w-[1440px] mx-auto px-8 min-h-fit h-full w-full pt-40 pb-20">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4 place-items-center">
            <div className="col-span-2 md:col-span-1">
              <img className="md:h-[350px] w-full h-full object-cover" src="https://images.pexels.com/photos/11840357/pexels-photo-11840357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div className="col-span-2 md:col-span-3">
              <p className="text-3xl md:text-5xl font-vold text-slate-300 uppercase pb-4">Lorem, ipsum dolor.</p>
              <p data-aos="fade-in" className="max-w-2xl text-2xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur ex? Quia excepturi atque enim obcaecati error architecto, nobis magnam quaerat itaque delectus dignissimos facere beatae eaque id dolorum vel.</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <img className="md:h-[350px] w-full h-full object-cover" src="https://images.pexels.com/photos/11840357/pexels-photo-11840357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div className="col-span-2 md:col-span-3">
              <p className="text-3xl md:text-5xl font-vold text-slate-300 uppercase pb-4">Lorem, ipsum dolor.</p>
              <p data-aos="fade-in" className="max-w-2xl text-2xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur ex? Quia excepturi atque enim obcaecati error architecto, nobis magnam quaerat itaque delectus dignissimos facere beatae eaque id dolorum vel.</p>
            </div>
          </div>
        </section> 
      </div>
    </div>
  )
}
