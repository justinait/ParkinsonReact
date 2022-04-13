import React, { useEffect, useState } from 'react'
import Painting from './Painting';
import { db } from './firebase.js';

function Gallery(props) {
      
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
        <div className='gallery'>
            {
                paintings.map(({id, painting}) => (
                    <Painting
                    key={`painting-${id}`}
                    image = {painting.image}
                    title = {painting.title}
                    category = {painting.category}
                    /* onClick = {openPainting}*/
                    />            
                ))
            }

        </div>
    )
}

export default Gallery