import React from 'react'

function Painting(props) {
  return (
    <div className="painting" >
        <img src={props.image} alt="painting" />
        <h5>{props.title}</h5>
      
    </div>
  )
}

export default Painting