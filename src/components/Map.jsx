import React from 'react'

const Map = () => {
    const students = ["Aisha", "Fade", "Faruq", "Dami", "David", "Chidimma"]
  return (
    <div>
        <h1>
            {
                students.map((student, idx) =>{
                    return(
                       <div key={idx}>
                           <h1> {student} is a student </h1>
                       </div>
                    )
                    
                })
            }
        </h1>
    </div>
  )
}

export default Map

//wed 11 dec 2023
//ASSIGNMENT{1}
//use the filter method to print names that are greater than 5
//check the video to see, the completion of code Event, prevent default, form
//
