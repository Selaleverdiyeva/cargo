import React from 'react'

import Details from '../components/Details'
import Rates from '../components/Rates'
import Map from '../components/Map'
import Shop from '../components/Shop'
import Services from '../components/Services'
import About from '../components/About'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
      
     <Details />
    <Rates />
    <Map />
    <Shop />
    <Services />
    <About />
    <Faq /> 
    
    </div>
  )
}

export default Home