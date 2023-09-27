import React, {useState, useEffect} from 'react'
import Plane from './images/plane2.jpg'
import Kuryer from './images/kuryer.png'
import Card from './images/card.png'
import Service from './Service'
import Melumat from '../melumatlar.json'
import './Services.css'

const Services = () => {
  const [depoMelumat, setDepoMelumat]= useState ([])
    useEffect(()=>{
        fetch('src/melumatlar.json')
        .then(cavab => cavab.json())
        .then(melumatlar => setDepoMelumat(melumatlar))
        
    },[] )
  return (
    <>
    <div className="basliq-metni text-center">
      <h1>Xidmətlərimiz</h1>
      </div>
    <div className='card-services'>
      
      {
      
         
       depoMelumat.map(birMelumat=>{
        console.log(birMelumat);
         return <Service sirketinSekli={birMelumat.logo} sirketinbasliqi={birMelumat.basliq} sirketinmetni={birMelumat.metn} />
       })   
        
      }
 
 {/* <Service logo={birMelumat.logo} basliq={birMelumat.basliq} metn={birMelumat.metn} /> */}
  </div>
    {/* <div className='Services'> 
    <h1>Xidmətlərimiz</h1>
    </div>
    <div className="service">
        <div className="card service">
        <img src={Plane} alt="" />
        <h1>Türkiyədən çatdırılma</h1>
        <p>'Fast Go' Türkiyədən sifariş olunan malların, <br /> ən sərfəli qiymət və extra sürət ilə <br /> çatdırılmasını həyata keçirir</p>
        </div>
        <div className="card service">
        <img src={Kuryer} alt="" />
        <h1>Kuryer xidməti</h1>
        <p>Bakı anbarına daxil olmuş, <br /> bağlamalarınızı istənilən ünvana çatdırırıq</p>
        </div>
        <div className="card service">
        <img src={Card} alt="" />
        <h1>Sifariş et</h1>
        <p>Bəyəndiyin məhsulun linkini göndərin biz sifariş edək. <br /> Və yaxud sifariş etdikdən sonra bəyan et</p>
        </div>
    </div> */}
  
    </>
  )
}

export default Services