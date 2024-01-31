import React, {useState} from 'react'
import '../css/style.css'

const StylingThree = () => {
  const [see, setSee] = useState(true)
  const hi = () => {
    
    setSee(!see)
  }
  return (
    <div>
        <h1 className='jam' >Tea, A drink with Bread and {see ? "blue": "green"} </h1>
        <button onClick={hi}>Click me!</button>
    </div>
  )
}

export default StylingThree


