import React from 'react'
import State from './State'
import State2 from './State2'
import Map from './Map'

// const Condit = () => {
//     const age = 19
//     if(age > 18){

//        return (
//            <div>
//                <Map/>
//            </div>
//         )
//     } 

//     else{
//       return (
//            <div>
//               <State/>
//           </div>
//         )
//     }   


const Condit = () => {
    const age = 18
    if(age > 18){

       return (
           <div>
               <Map/>
           </div>
        )
    } 

    else if(age == 18){
        return (
             <div>
                <State2/>
            </div>
          )
      }   

    else{
      return (
           <div>
              <State/>
          </div>
        )
    }   


}
export default Condit