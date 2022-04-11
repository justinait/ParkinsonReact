import React from 'react'
import '../css/Header.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';

function Header() {
  return (
    
    <header className="header">

      <div className="leftHeader">
        <img src="https://cdn-icons-png.flaticon.com/512/2972/2972163.png" className="App-logo" alt="logo" width="80"/>
        <h1 className='title'>Jorgelina Parkinson</h1>
      </div>

      <div className="rightHeader">
        {/*<Link to="/gallery">Gallery</Link>*/}
        <BrowserRouter>
          <Routes>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </header>

  )
}

export default Header