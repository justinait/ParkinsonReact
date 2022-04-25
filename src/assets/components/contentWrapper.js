import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import About from './About.js';
import Gallery from './Gallery.js';
import Home from './Home.js';
import Layout from './Layout.js';

function ContentWrapper() {

  return (

    <div>
        
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index exact element={<Home/>}/>

            <Route path="gallery" element={<Gallery/> } />
            
            <Route path="about" element={<About/>}/>

            <Route path="*" element={<Navigate replace to="/" />} />

          </Route>

        </Routes>

      </BrowserRouter>
      
      <Outlet />
      
    </div>

  )

}

export default ContentWrapper