import React, {useState, useEffect} from 'react'

const Assignment = () => {
    const [users, setUsers] = useState([])

    const dataFetch = async (n) =>  {
        const apiUrl = await fetch(`https://randomuser.me/api/?results=${n}`)
        const result = await apiUrl.json()
        setUsers(result.results)
    }

    useEffect(() =>{
        dataFetch(5)
    }, [])

    const render = users.map((user, idx) => {
            return(
                <div key={idx}>
                    <p>Profile Pic: <img src={user.picture.large} alt="" /> </p>
                    <p>Name: {user.name.title}  {user.name.first}  {user.name.last} </p>   <br/> 
                    <p>Gender: {user.gender} </p>
                    <p>Date of Birth: {user.dob.date} </p>
                    <p>Address: {user.location.street.number}  {user.location.street.name}  {user.location.city} {user.location.country} </p>   <br/> <br/>

                </div>
            )
        })
    


  return (
    <div className='fetch-container'>
        {/* <h2 className='fetch-heading'>  We have {users.results.length} users data</h2> <br/> */}
    {render}
    
    </div>
  )
}
// large picture, gender, first name, last name and title, dob, address: location-country, phone 
export default Assignment