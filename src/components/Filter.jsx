import React from 'react'

// const Filter = () => {
//     const students = ["Aisha", "Fade", "Faruq", "Dami", "David", "Chidimma"]

//     if(age > 18){ 
     
//     return (
//       <div>
//               {
//                   students.filter((student, idx) =>{
//                       return(
//                          <div key={idx}>
//                              <h1> {student} is a name with more than 5 letters</h1>
//                          </div>
//                       )
                      
//                   }, if students.length > 5 ? "" : "")
//               }
          



const Filter = () => {
  const students = ["Aisha", "Fade", "Faruq", "Dami", "David", "Chidimma"];
    return (
      <div>
          <h1>
          {students.filter(student => student.length >= 5).map((filteredStudent, idx) => (
        <li key={idx}>
          {filteredStudent}
        </li>
      ))}
          </h1>
      </div> 
    )  
}

export default Filter