import React from 'react'
import Painting from './Painting';

function Gallery(props) {
  
    return (
    
        <div className='gallery'>
            {
                props.paintings.map(({id, painting}) => (
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