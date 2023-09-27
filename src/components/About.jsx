import React,{useEffect} from 'react'
import { FiCheckCircle } from "react-icons/fi";
import {PiTelevisionDuotone } from "react-icons/pi";
import {GoWorkflow } from "react-icons/go";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'


const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='About'>
        <div className="left-side" data-aos="fade-right">
<h1>Haqqımızda</h1>
<h5>Türkiyədən sifariş üçün xidmətlərimizdən istifadə edə bilərsiniz.</h5>
<p><FiCheckCircle /> Dəyərlərimiz</p>
<small>İstifadəçilərə yönəlik sadə işləyiş tərzi. Və davamlı inkişaf.</small>
<p className='left-about'><PiTelevisionDuotone /> Vizyonumuz</p>
<small>Sektorda ən dəqiq şirkət olmaq.Eyni gündə çatdırılma xidmətini həyata keçirmək.</small>
<p className='mission'><GoWorkflow /> Missiyamız</p>
<small>Keyfiyyətli xidmət və müştərilərimizin razılığını təmin etmək.</small>
        </div>
        <div className="right-side" data-aos="fade-left">
     <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694725761/about_m1b2ln.jpg" alt="" />
        </div>
    </div>
  )
}

export default About