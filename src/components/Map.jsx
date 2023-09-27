import React,{useEffect} from 'react'
import Capture from './images/Capture3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Map.css'
const Map = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className='Map text-center' data-aos="fade-down">
    <h3>Karqo-Filialarimiz</h3>
    <img src={Capture} alt="" />
    </div>
    
    </>
  )
}

export default Map