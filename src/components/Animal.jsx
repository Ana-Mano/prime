import React from 'react'

const Animal = (props) => {
  return (
    <div>
        <h1>They own a {props.AnimalInfo.bigcat}</h1>
        <h1>He also has a {props.AnimalInfo.color} {props.AnimalInfo.bigcat}</h1>
    </div>
  )
}

export default Animal