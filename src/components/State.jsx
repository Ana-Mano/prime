import React, {useState} from 'react'

const State = () => {
    const [time, setTime] = useState(10)
    const  add = () => {
        if (time < 20) { setTime(time + 1) }
    }
    
    const  minus = () => {
      if (time > 0) { setTime(time - 1) }
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'40vh'}}>
       <button onClick={minus} style={{margin:'2%', padding: '1%'}}>-</button>
       <h1 style={{color: 'blue', fontSize: "70px"}}>{time}</h1>
       <button onClick={add} style={{margin:'2%', padding: '1%'}}>+</button>
       
    </div>
  )
}

export default State


//hooks are in functional components, useState is a hook, useState has to be destructured i.e in curly braces{}, 
// line3 const day, setDay = useState("november")
//There is another hook, useEffect hook


//ASSIGMENTS
//{1}another button by the side to be deducting it, that does not go below 0, no -1, beside it. 
// {2}another component, make it display (Ray, a drop of golden sun). this sentence is the state. with a button below, 
//that says change.this will change the sentence to (I'd like to eat a hamburger),it may also change back if you want.
//{3}'this is the color blue', button below that says'toggle'. if you press it only the 'blue' will change to red.
//press again and red changes to blue.
//
//
//
//
//MONDAY 11th DECEMBER 2023, check styling 3.
