import React from 'react'
import State from './State'
import State2 from './State2'
import Map from './Map'

const ConditTwo = () => {
    const age = 17

    // const fret = () {
    //         return (
    //              <div>
    //                 <Map/>
    //             </div>
    //           )
    // }

    // const fret2 = () {
    //     return (
    //          <div>
    //             <State/>
    //         </div>
    //       )
    // }  

    // age > 17 ? fret() : fret2()    VERY WRONG BY THE WAY!!


    return (
        <div>
          {age > 17 ? <Map /> : <State />}
        </div>
      )
    
}


export default ConditTwo