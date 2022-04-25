import React from 'react'
import '../css/Header.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

function Header() {
  return (
    
    <header className="header">

      <div className="leftHeader">
        <img src="https://cdn-icons-png.flaticon.com/512/2972/2972163.png" className="App-logo" alt="logo" width="80"/>
        <h1 className='title'>Jorgelina Parkinson</h1>
      </div>

      <nav className="rightHeader">
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>

  )
}

export default Header