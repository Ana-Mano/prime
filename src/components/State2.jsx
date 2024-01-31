import React, {useState} from 'react';

const State2 = () => {
         const [word, setWord] = useState('Ray, A drop of golden sun');
         function rv() {
            return ("I'd like to eat a hamburger")
         }
       
        function change() {
            setWord(rv(word));
          }
 
          
// const toggle = () => {
    const [color, setColor] = useState(true)
    const  btn = () => {
        // if (color == blue) { setColor(red) }
        setColor(!color)
    }
    
  


  return (
    <div>
        <div style={{ display: "flex", justifyContent: "center", alignContent:"center", height:"25vh", width:"90vw"}}>
        <button onClick={btn} style={{margin: "9%", padding: "1%"}}>Toggle</button>
        <h1 style={{color: 'black', fontSize: "38px", textAlign: "center"}}> This is the color {color ? <p style={{color: "blue"}}>blue</p> : <p style={{color: "red"}}>red</p>}</h1>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'40vh'}}>
        <h1 style={{color: 'black', fontSize: "38px", textAlign: "center"}}> {word}</h1>
       <button onClick={change} style={{margin:'2%', padding: '1%'}}>Change!</button></div>
    
    </div>
  )
  }


export default State2




// import React, {useState} from 'react'

// const State = () => {
//     const [time, setTime] = useState(10)
//     const  add = () => {
//         if (time < 20) { setTime(time + 1) }
//     }
    
//     const  minus = () => {
//       if (time > 0) { setTime(time - 1) }
//   }
//   return (
//     <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'40vh'}}>
//        <button onClick={minus} style={{margin:'2%', padding: '1%'}}>-</button>
//        <h1 style={{color: 'blue', fontSize: "70px"}}>{time}</h1>
//        <button onClick={add} style={{margin:'2%', padding: '1%'}}>+</button>
       
//     </div>
//   )
// }

// export default State

// const State2 = () => {
//     const [word, setWord] = useState('Ray, A drop of golden sun');
//     const change = () => {
//         setWord("I'd like to eat a hamburger")
//         let news = setWord
//         // onClick change news to useState

//     }



// import React, { useState } from "react";

// function ReverseButton() {
//   const [text, setText] = useState("Hello");

//   function reverseString(str) {
//     return str.split("").reverse().join("");
//   }

//   function handleClick() {
//     setText(reverseString(text));
//   }

//   return (
//     <div>
//       <p>{text}</p>
//       <button onClick={handleClick}>Reverse</button>
//     </div>
//   );
// 
