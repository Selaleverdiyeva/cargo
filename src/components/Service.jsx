import React from 'react'
import Plane from './images/plane2.jpg'

const Service = (props) => {
  console.log(props.sirketinSekli);
  return (
    <>
    
    <div className="card">
        <img src={props.sirketinSekli} alt=""className='card-sekil' />
        <h1>{props.sirketinbasliqi}</h1>
        <p>{props.sirketinmetni}</p>
        
         </div>
         </>
  )
}

export default Service