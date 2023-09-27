import React,{useState,useEffect,} from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";

import { AiOutlineArrowUp, AiOutlineMessage, AiOutlineClose, AiOutlineSend } from "react-icons/ai";

import './Footer.css'

// function ScroolTop(){
//   const handleClick = () =>{
//     window.scroll({
//       top:0,
//       behavior:"smooth"
//     })
//   }
// }
const Footer = () => {
   const [isVisible, setIsVisible] = useState(false);
  useEffect(()=>{
    function handleScroll () {
      if (window.pageYOffset > 200){
        setIsVisible(true);
      }
      else{
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleInputs = () => {
  //   setIsOpen(!isOpen);
  // };

  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
    setIsButtonOpen(!isButtonOpen);
  };

  
 return (
    <>
    <div className='Footer-end'>
        <div className="footer-img">
        <img className='logofooter-fastgo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" />
        </div>
        <div className="footer-links">
        <div className="footer-service">
        <Link className="footer_link text-dark" to="/">Ana səhifə</Link>
        <Link className="footer_link text-dark" aria-current="page" to="/haqqimizda">Haqqımızda</Link>
        <Link  className="footer_link text-dark" to="/tarifler">Tariflər</Link>
        <Link  className="footer_link text-dark" to="/magazalar">Mağazalar</Link>
        
        </div>
        <div className="footer-faq">
        <Link className="footer_link text-dark" to="/suallar">FAQ</Link>
        <Link className="footer_link text-dark" to="/xidmetler">Xidmətlər</Link>
        <Link className="footer_link text-dark" to="/elaqe">Əlaqə</Link>
        <Link className="footer_link text-dark" to="/gizlilik">Gizlilik şərtləri</Link>
        
        </div>
        <div className="instagram">
          <p>Bizi izləyin</p>
          <a href="https://www.facebook.com/"><p>Facebook</p></a>
          <a href="https://www.instagram.com/?hl=ru&ysclid=lmduhxf544586494714"><p>Instagram</p></a>
        <a className='linkedin' href="https://www.linkedin.com/home?original_referer=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"><p>Linkedin</p></a>
        </div>
        {/* <div className="footer-connection">
        <a href=""></a>
        <a href=""></a>
        </div> */}
        </div>
        <div className="footer-app">
         
        <a href="https://www.apple.com/app-store/"><img className='store' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694375493/appstore_jvn9rc.png"  alt="" /></a>
        <a href="https://play.google.com/store/games?hl=ru&gl=US"><img className='app-store' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694375440/download_slj8rf.png" alt="" /></a>
         
        </div>
        <div class="back-to-top">
        <button onClick={scrollToTop} className="back-to-topbtn"><AiOutlineArrowUp /></button>
    </div>
    {/* <div className='message'>
      {isButtonOpen ? (
        <button className='message_btn' onClick={toggleMessage}><AiOutlineClose /></button>
      ) : (
        <button className='message_btn' onClick={toggleMessage}><AiOutlineMessage /></button>
      )}
      {isMessageOpen && (
        <div className="message-container">
          <h1>Suallariniz var? Buyurun!</h1>
          <form action="">
           <input className='input' type="text" placeholder='*Ad' />
           <input className='input' type="text" placeholder='*E-poct' />
           <input className='input' type="text" placeholder='*Mesajiniz' />
           <button><AiOutlineSend />Gonder</button>
          </form>
          
        </div>
      )}
    </div> */}
    </div>
    
    <div className="fastgo text-center">
        <a href=""></a> <h1>© Fast Go 2023.Bütün hüquqlar qorunur</h1>
        {/* <Link className="message" to="/message">Əlaqə</Link> */}
        </div>

        {/* <div>
      <button onClick={toggleInputs}><AiOutlineMessage /></button>
      {isOpen && (
        <div>
          <input type="text" placeholder="Mesajınızı yazın" />
          <button onClick={toggleInputs}>X</button>
        </div>
      )}
    </div> */}


    </>  
  )

}

export default Footer