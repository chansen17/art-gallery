import { useEffect } from 'react';
import '../styles/globals.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';

function MyApp({Component, pageProps}){

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-hidden">
    <Navbar />
     <Component {...pageProps} /> 
    </div>
  )
}

export default MyApp
