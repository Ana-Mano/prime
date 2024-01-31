//WEDNESDAY 4 december 2023

// .....REACT classes begin
//all the components must start with capital letter, eg. App.jsx. in .jsx, u can write html and javascript
//together in the same file. RAFC and RAFCE do the same work, it depends on which one you want.


import React from 'react'//rafce

import CarTwo from './components/CarTwo'

import Animal from './components/Animal'

import CarThree from './components/CarThree'

import Styling from './components/Styling'

import StylingTwo from './components/StylingTwo'

import StylingThree from './components/StylingThree'

import State from './components/State'

import State2 from './components/State2'

import Map from './components/Map'

import MapTwo from './components/MapTwo'

import Filter from './components/Filter'

import Event from './components/Event'

import EventTwo from './components/EventTwo'

import PreventDefault from './components/PreventDefault'

import TinyThing from './components/TinyThing'

import Form from './components/Form'

import Condit from './components/Condit'

import ConditTwo from './components/ConditTwo'

import Effect from './components/Effect'

import Fetch from './components/Fetch'

import Assignment from './components/Assignment'

import Movie from './components/Movie'

import PracUser from './components/PracUser'

import Birthday from './components/Birthday'



  const App = () => {
  
    const carInfo = {
      name: "Ford",
      model: "Mustang"
    }

    const AnimalInfo = {
       color: "Red",
       bigcat: "Tiger"
    }
    
    const simple = <h1>He is a king</h1>

  return (
    <div>
      {/* <h1>Hello there</h1>
      <h4>Prominence is there</h4>
      <p>Hardwork and sacrifice</p>
      <Car car="Toyota"/> 
      <CarTwo brand={carInfo}/> 
      <CarTwo brand={carInfo}/><br></br>
      <Animal AnimalInfo={AnimalInfo}/>
      <CarThree brand="Chevrolet" model="Camaro" year="2022"/> 
      {simple}  */}
      {/* <Styling/>
      <StylingTwo/>
      <StylingThree/>
      <State/>
      <State2/>                <br/> <br/>
      <Map/>                   <br/> <br/>
      <MapTwo/>                <br/> <br/> */}
      {/* <Filter/>                <br/> <br/>
      <Event/>                 <br/> <br/>
      <EventTwo/>              <br/> <br/>
      <PreventDefault/>        <br/> <br/>
      <TinyThing/>             <br/> <br/>
      <Form/>                  <br/> <br/>
      <Condit/>                <br/> <br/>
      <ConditTwo/>             <br/> <br/>
      <Effect/>                <br/> <br/> */}
      {/* <Fetch/>                 <br/> <br/> */}
      {/* <Assignment/>            <br/> <br/> */}
      <Movie/>                  <br/>  <br/>
      {/* <PracUser/>                   <br/>  <br/> */}
      <Birthday/>                   <br/>  <br/>

    </div>


  )
}

export default App


// To start our code on a fresh page, we use rafce, or rafc
//functional based components came later and are more fresh, compared to the older 'class component'. both are usable.
//we will be using functional

//destructring of props is what we will do next class

//ASSIGNMENT
//create a similar component, name it animal (Animal.jsx) tha will be displaying we also have a tiger, he also has a red tiger, red and tiger are props




//WEDNESDAY 6th DECEMBER 2023

// everything you do should be in a parent div, all under 'return'
// Destructuring of props is what is in line 39(CarThree stuff..), you should also make sure all tags are closed, this is essential.
//Styling in React also uses: Internal, external, and inline.











