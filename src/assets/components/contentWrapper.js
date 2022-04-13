import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About.js';
import { db } from './firebase.js';
import Gallery from './Gallery.js';
import Home from './Home.js';

function ContentWrapper() {

  return (

    <div>
        
        <BrowserRouter>

            <Routes>

                <Route path="/" exact element={<Home/>}/>

                <Route path="/gallery" element={<Gallery/> } />
                
                <Route path="/about" element={<About/>}/>

            </Routes>

        </BrowserRouter>

    </div>

  )

}

export default ContentWrapper