import React from 'react'
import './Header.css'

function Header() {
  return (
    
    <header className="header">

        <div className="leftHeader">
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972163.png" className="App-logo" alt="logo" width="80"/>
            <h1 className='title'>Jorgelina Parkinson</h1>
        </div>

        <div className="rightHeader">
            <h3>Home</h3>
            <h3>Series</h3>
            <h3>Awards</h3>
            <h3>About</h3>
        </div>

    </header>

  )
}

export default Header