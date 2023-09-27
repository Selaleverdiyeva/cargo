import 'bootstrap/dist/css/bootstrap.min.css'

// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Presentation from './components/Presentation'
import Navbar from './pages/Navbar' 
import Title from './components/Title'
import Footer from './components/Footer'
import Home from './pages/Home'
import Connection from './pages/Connection'
import Registration from './pages/Registration'
import About from './components/About'
import Rates from './components/Rates'
import Shop from './components/Shop'
import Services from './components/Services'
import Faq from './components/Faq'
import Enter from './pages/Enter'
import Secrecy from './pages/Secrecy'
// import Message from './pages/Message'
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'


// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Title />
  
    {/* <Navbar /> */}

    <Routes>
     
    <Route path="/" element={<Home />} />
    <Route path="/haqqimizda" element={<About />} />
    <Route path="/tarifler" element={<Rates />} />
    <Route path="/magazalar" element={<Shop />} />
    <Route path="/xidmetler" element={<Services/>} />
    <Route path="/elaqe" element={<Connection />} />
    <Route path="/qeydiyyat" element={<Registration />} />
    <Route path="/suallar" element={<Faq />} />
    <Route path="/daxilol" element={<Enter />} />
    <Route path="/gizlilik" element={<Secrecy />} />
    {/* <Route path="/message" element={<Message />} /> */}
    </Routes>
    <Footer /> 
     </BrowserRouter>
    
    {/* <Navbar />
    <Presentation /> */}
   


 
    



    </>
  )
}

export default App
