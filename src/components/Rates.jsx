import React,{useEffect} from 'react'
import { PiScalesThin } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Rates.css'
const Rates = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
     <div className="basliq text-center"> <h2>Tariflərimiz</h2>
     </div>
      <div className="rates">
        <div className="weight" data-aos="zoom-in">
          <span><PiScalesThin /> </span>  <h1>Çəki (kq)</h1>
          <p>0.0-0.10 kq</p>
          <p>0.10-0.25 kq</p>
          <p>0.25-0.50 kq</p>
          <p>0.50-0.75 kq</p>
          <p>0.75-1.0 kq</p>
          <p>1 kq-dan yuxarı (hər kq görə)</p>
        </div>
        <div className="weight" data-aos="zoom-in">
          <span> <BsBox /> </span> <h1>Standart tariflər</h1>
          <p>$ 0.98</p>
          <p>$ 1.98</p>
          <p>$ 2.98</p>
          <p>$ 3.58</p>
          <p>$ 3.88</p>
          <p>$ 3.88</p>

        </div>
        <div className="weight" data-aos="zoom-in">
          <span> <MdOutlineWaterDrop />  </span><h1>Maye və təhlükəli məhsullar</h1>
          <p>$ 1.60</p>
          <p>$ 3.20</p>
          <p>$ 4.60</p>
          <p>$ 5.50</p>
          <p>$ 5.95</p>
          <p>$ 5.95</p>
        </div>

      </div>
     
    </>

  )
}

export default Rates