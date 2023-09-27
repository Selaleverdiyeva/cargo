import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';





// import required modules
import { FreeMode,Autoplay, } from 'swiper/modules';


import './Shop.css'



const Shop = () => {
  return (
     <>
     <h4>Mağazalar</h4>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
     
        modules={[FreeMode,Autoplay,]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        568: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    
      className="mySwiper-shop"
     
    >
     <div className="shop">
      <SwiperSlide>
  
      <a className='shop-swiper' href="https://us.puma.com/us/en"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694555740/download_hgqd9g.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.maccosmetics.com/"><img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694556026/download_oar443.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.pullandbear.com/az/"><img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694556002/download_rgaxjq.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.patirti.com/"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694556260/images_fpghyw.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.dkny.com/"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694556403/images_hiji2b.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.bershka.com/"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694803941/download_t1p08e.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.nike.com/"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694621643/download_cpmy7c.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.aldoshoes.com/international"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694621308/images_pjcj76.png" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.zara.com/"> <img src="https://res.cloudinary.com/dhttiivwi/image/upload/v1694803812/download_ibz69j.png" alt="" /></a>
      </SwiperSlide>
      </div>
    </Swiper>
   
  </>
    
  )
}

export default Shop