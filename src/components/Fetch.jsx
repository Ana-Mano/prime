// import React, {useState} from 'react'

// const Fetch = () => {
//     const [users, setUsers] = useState([])

//     const dataFetch = async () =>  {
//         const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users")
//         const result = await apiUrl.json()
//         setUsers(result)
//     }

//     const render = users.map((user, idx) => {
//             return(
//                 <div key={idx}>
//                     <p>Name: {user.name} </p>    
//                     <p>Email: {user.email}</p>  
//                     Address: {user.address.suite} {user.address.street} {user.address.city} <br/> <br/>
//                 </div>
//             )
//         })
    


//   return (
//     <div className='fetch-container'>
//         <h2 className='fetch-heading'>  We have {users.length} users data</h2> <br/>
//     {render}
//     <button onClick={dataFetch}><h1>Fetch!</h1></button>
//     </div>
//   )
// }

// export default Fetch



import React, {useState, useEffect} from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([])

    const dataFetch = async () =>  {
        const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await apiUrl.json()
        setUsers(result)
    }

    useEffect(() =>{
        dataFetch()
    }, [])

    const render = users.map((user, idx) => {
            return(
                <div key={idx}>
                    <p>Name: {user.name} </p>    
                    <p>Email: {user.email}</p>  
                    Address: {user.address.suite} {user.address.street} {user.address.city} <br/> <br/>
                </div>
            )
        })
    


  return (
    <div className='fetch-container'>
        <h2 className='fetch-heading'>  We have {users.length} users data</h2> <br/>
    {render}
    {/* <button onClick={dataFetch}><h1>Fetch!</h1></button> */}
    </div>
  )
}

export default Fetch

//assignment for the year: randomuser.me get api stuff