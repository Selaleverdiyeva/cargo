import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram,AiOutlineYoutube} from "react-icons/ai";

import './Connection.css'
const Connection = () => {
  return (
    <div className='connection'>
        <h2>Əlaqə</h2>
        <div className="connection-section">
            <div className="address">
              <h1>Ünvan</h1>  
 <p><MdOutlinePlace /> Bakı şəhəri. Yasamal rayonu, A M Şərifzadə pr 119</p>
            </div>
            <div className="address">
              <h1>İş vaxtı</h1>  
 <p><BiCalendarAlt />B.e.-C. 10:00-20:00 Ş. 10:00-18:00</p>
            </div>
            <div className="address">
              <h1>Əlaqə</h1>  
 <p>< BsTelephone />+994 050 5932549</p>
            </div>
            <div className="address">
                <h1>Sosial şəbəkələr</h1>
                <div className="social">
            <a href="https://www.facebook.com/"><p><CiFacebook  /></p></a>
          <a href="https://www.instagram.com/?hl=ru&ysclid=lmduhxf544586494714"><p><AiOutlineInstagram /></p></a>
          <a href="https://www.youtube.com/"><p><AiOutlineYoutube /></p></a>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Connection