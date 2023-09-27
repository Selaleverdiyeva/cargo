import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
       {/* <Swiper
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
          
            <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694776891/c36ff647-777e-4539-ad1c-f4c259d4e6af_y7saea.jpg" alt="" className='presentation-img' />
            <div className="overlay-text">
             
              <h1 className='animate__animated animate__fadeInDown '>Fast Go </h1>
              <h2> Zaman kimi sürətli!</h2>
               </div>
               <img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1695139322/pexels-chanaka-906494_mqpmaf.jpg" alt="" className='presentation-img' />
            <div className="overlay-text">
              <h1 className='animate__animated animate__bounceInDown '>Sifariş et xidmətimizlə  </h1>
              <h2>bağlamanız, zəmanətli olsun</h2>
            </div>
            <img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694777300/542b683a-e0b2-4032-af01-a1a0483d5970_pslbkd.jpg" alt="" className='presentation-img' />
            <div className="overlay-text">
              <h1 className='animate__animated animate__bounceInRight '>Türkiyədən sifarişlərinizin  </h1>
              <h2> ölkəmizə  sürətli və </h2>
              <h3>güvənli çatdırılması!</h3>
            </div>
            <img className='logo-logo' src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694637714/fastlogo_qa0ppu.png" alt="" />
          </SwiperSlide>
        </Swiper></Swiper>



   <nav className="navbar navbar-expand-lg">
     
     <div className="container">
     
        <button onClick={butonuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <AiOutlineBars />
   </button>
   
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
     <li className="nav-item">
         <Link className="nav-link text-dark" to="/">Ana səhifə</Link>
       </li>
     <li className="nav-item">
       
         <Link className="nav-link text-dark" aria-current="page" to="/haqqimizda">Haqqımızda</Link>
         </li>
       <li className="nav-item">
         <Link className="nav-link text-dark" to="/tarifler">Tariflər</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link text-dark" to="/magazalar">Mağazalar</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link text-dark" to="/xidmetler">Xidmətlər</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link text-dark" to="/elaqe">Əlaqə</Link>
       </li>
       <div className="active-navbar"></div>
     </ul>
     <form className="d-flex" role="search">
      
       <button  className="btn btn-outline-success" type="submit">Sifariş</button>
       
     </form>
   </div>
 </div>
</nav> */}
    </>
  )
}

export default Navbar