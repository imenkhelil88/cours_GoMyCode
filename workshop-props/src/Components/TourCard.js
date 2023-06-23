import React from 'react'

const TourCard = ({element}) => {
  return (
    <div>
    <img src={element.image} alt='404'></img>
    <h4>{element.name}</h4>
    <p>{element.info}</p>
    <p>{element.price}</p>
    
    </div>
  )
}

export default TourCard