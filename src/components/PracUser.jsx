import React, {useState, useEffect} from 'react'

const PracUser = () => {
     const [users, setUsers] = useState([])

     useEffect(() => {
      dataFetch(10)
    }, [])


     const dataFetch = async (n) =>{
        const dataUrl = await fetch(`https://randomuser.me/api/?results=${n}`)
          const data = await dataUrl.json()
          setUsers(data.results)
      } 


      const render = users.map((user, idx) => {
         return(
             <div key={idx}>
              <div style={{margin: '3%'}}>
                <img src= {user.picture.large} alt="user-image"/>
                <p>Name: {user.name.title} {user.name.first} {user.name.last}</p>
                <p>Age: {user.dob.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.location.street.number} {user.location.street.name} {user.location.street.city} {user.location.street.country}</p>
              </div>  
             </div>
         )
      })
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>APIs fetch</h1>
        {render}
      </div>
    </div>
  )
}

export default PracUser