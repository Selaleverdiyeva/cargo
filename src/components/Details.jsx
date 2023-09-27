import React,{useEffect} from 'react'
import contact from './images/contact.png'
import plane from './images/plane.png'
import location from './images/location.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Details.css'

const Details = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
    <h1 className='details-section text-center'>FastGo- <small>Xoş gəldiniz</small></h1>
    {/* <div className="card__details">
      <div className="card__inner">
        <div className="card__side">
          <div className="card__image">
            <img src={contact} alt="" />
          </div>
          </div>
          <div className="card__right">
<div className="card__body">
  <h1>FastGo-nun mobil tətbiqi və ya  <br /> saytı vasitəsi ilə qeydiyyatdan keçin. </h1>
</div>
          </div>
        
   
      </div>
    </div> */}
    <div className="details text-center">
    
    <div className="information">
    <div className="images" data-aos="fade-right">
    <img src={contact} alt="" />
    <h1>FastGo-nun mobil tətbiqi və ya  <br /> saytı vasitəsi ilə qeydiyyatdan keçin. </h1>
    </div>
    <div className="images" data-aos="fade-right">
    <img className='info-images data-aos="fade-left"'src={plane} alt="" />
    <h1 className='info-images'>Sifarişlərinizi sürətli və <br /> güvənli şəkildə ünvanınıza çatdırırıq.</h1>
    </div>
    <div className="images" data-aos="fade-right">
   <img src={location} alt="" />
   <h1>Sifarişdən öncə sizə yaxın olan filialı <br /> seçin və bağlamanızı oradan təhvil alın.</h1>
    </div>
    </div>
   </div>
  
    </>
  )
}

export default Details