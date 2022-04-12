import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About.js';
import { db } from './firebase.js';
import Gallery from './Gallery.js';

function ContentWrapper() {

      
    const [paintings, setPaintings] = useState([]);

    useEffect(()=> {
        db.collection("paintings").onSnapshot(s => {
            setPaintings(s.docs.map(d => ({
                id: d.id,
                painting: d.data()
            })))
        })
    }, [])



  return (

    <div>
        
        <BrowserRouter>

            <Routes>
                <Route path="/gallery" >
                    <Gallery data={paintings}/>
                </Route>
                <Route path="/gallery" element={<Gallery/>} />      {/* y mediante las props le paso los paintigns */}
                <Route path="/about" element={<About/>}/>
            </Routes>

        </BrowserRouter>

    </div>

  )

}

export default ContentWrapper