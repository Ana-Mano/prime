import React from 'react'

const CarThree = (props) => {
    const {brand, model, year} = props
  return (
    <div>
       <h1> The {year} {brand} {model} just shipped in</h1>
    </div>
  )
}

export default CarThree