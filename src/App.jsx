import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } > </Route>
        <Route path = '/gallery' element ={ <Gallery /> }></Route>
        <Route path = '/about' element ={ <About /> }></Route>
      </Routes>
      
      </BrowserRouter>
      
      <br/>
      <br/>
      <Footer />
    </>
  )
}

export default App;
