import React, { useRef,useState} from 'react'
import { BsTelephonePlus } from "react-icons/bs";
import { Link } from 'react-router-dom'
import sekil from './images/sun.png'
import Blue from './images/blue.jpg'
import presentation from './images/PlanePlane.jpg';
import information from './images/container.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { HiXMark } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";
import 'animate.css';
import 'swiper/css';
// SwiperCore.use([Autoplay,Navigation]);
// import 'swiper/css/navigation';

const Title = () => {
  const overlayiAc = useRef()
  const butonuAc = () => {
    overlayiAc.current.classList.add('active')
    // console.log(overlayiAc);
  }
  const baglaButonu = () => {
    overlayiAc.current.classList.remove('active')

  }
const butonaKlikle = useRef() 

 const openLink = ()=> {
  window.open('http://localhost:5173/daxilol')
}

const [showImage, setShowImage] = useState(true);

  const handleLinkClick = () => {
    setShowImage(false); 
  };




  return (

    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}


      >
  
        <Swiper className="mySwiper">
       
          <SwiperSlide>
 
          <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695498277/Ba%C5%9Fl%C4%B1qs%C4%B1z_dizayn_4_pbh2ef.png" alt=""className='presentation-img'/>
            <div className="overlay-text">
             <h1 className='animate__animated animate__fadeInDown '>Fast Go </h1>
              <h1> Zaman kimi sürətli!</h1>
              </div>
              


          </SwiperSlide>
          <SwiperSlide>

            <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695498252/Ba%C5%9Fl%C4%B1qs%C4%B1z_dizayn_5_pljlf9.png" alt="" className='presentation-img'/>
            <div className="overlay-text">
              <h1 className=''>Sifariş et xidmətimizlə  </h1>
              <h1>bağlamanız, zəmanətli olsun</h1>
            </div>
            {/* <img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695498286/Ba%C5%9Fl%C4%B1qs%C4%B1z_dizayn_3_bjawmx.png" alt="" className='presentation-img' />
            <div className="overlay-text">
              <h1 className='animate__animated animate__bounceInRight '>Türkiyədən sifarişlərinizin  </h1>
              <h1> ölkəmizə  sürətli və </h1>
              <h1>güvənli çatdırılması!</h1>
            </div>
            {/* <img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" /> */}
          </SwiperSlide>
        </Swiper></Swiper>
        
{/* <div className="sliders">
  <div className="slide slide--1">
    <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695059271/istockphoto-526545250-612x612_jslsmv.jpg" alt=""className='slide__image' />
  </div>
  <div className="slide slide--1">
    <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694776891/c36ff647-777e-4539-ad1c-f4c259d4e6af_y7saea.jpg" alt=""className='slide__image' />
  </div>
  <div className="slide--1">
    <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694777300/542b683a-e0b2-4032-af01-a1a0483d5970_pslbkd.jpg" alt=""className='slide__image_img' />
  </div>
  
</div> */}



      <div className='presentation'>
        <div className="presentation-title">
        <div className="overlay" ref={overlayiAc}>
            <div className="nav-links">
              <button onClick={baglaButonu} className='close-icon'> <HiXMark /></button>
              <Link to="/">Ana səhife</Link>
              <Link to="/haqqimizda">Haqqımızda</Link>
              <Link to="/xidmetler">Xidmətlər</Link>
              <Link to="/tarifler">Tariflər</Link>
              <Link to="/elaqe">Əlaqə</Link>
              <Link to="/magazalar">Mağazalar</Link>
            </div>
          </div>
    
<div className="title-metni">
<img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695500037/FAST_GO_LOGO_ockn2b.png" alt="" />
            <Link className='title' to="/qeydiyyat">Qeydiyyat |</Link>
            <Link to="/daxilol" ref={butonaKlikle}>Daxil ol |</Link>
            <Link to="/suallar">Ən çox verilən suallar |</Link>
</div>
          <nav className="navbar navbar-expand-lg">

            <div className="container">
   
              <button onClick={butonuAc} className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <AiOutlineBars />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Ana səhifə</Link>
                  </li>
                  <li className="nav-item">

                    <Link onClick={handleLinkClick} className="nav-link text-white" aria-current="page" to="/haqqimizda">Haqqımızda</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link text-white" to="/tarifler">Tariflər</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link text-white" to="/magazalar">Mağazalar</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/xidmetler">Xidmətlər</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/elaqe">Əlaqə</Link>
                  </li>
                  <div className="active-navbar"></div>
                </ul>
                <form className="d-flex" role="search">
 <button onClick={openLink} className="btn btn-outline-success" type="submit">Sifariş</button>
 </form>
              </div>
            </div>
          </nav>
        </div>





      </div>




    </>

  )
}

export default Title