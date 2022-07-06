import '../styles/globals.css'
import 'animate.css';
import Navbar from '../components/Navbar';

function MyApp({Component, pageProps}){
  return (
    <div className="overflow-x-hidden">
    <Navbar />
     <Component {...pageProps} /> 
    </div>
  )
}

export default MyApp
