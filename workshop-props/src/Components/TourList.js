import React from 'react'
import TourCard from './TourCard'
const TourList = ({data}) => {
    
  return (
    <div>
    {
data.map((element)=><TourCard  key={element.id} element={element} />)
    }
    </div>
  )
}

export default TourList