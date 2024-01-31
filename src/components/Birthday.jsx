import React, {useState} from 'react'
import personData from '../data/birthday'
import '../css/movie.css'

const Birthday = () => {
      const [persons, setPersons] = useState(personData)

      const remove = (id) => {
        const newData = persons.filter(person => person.id !== id)
        setPersons(newData)
    }

    const all = () => {
      setPersons(personData)
    }

      const render = persons.map((person, idx) => {
        return(
          <div key={idx}>
             <div className='each-movie-container'>
              <img src={person.url} alt='person-image'/>
               <p>Name: {person.name}</p>
               <p>Birthday: {person.date}</p>
               <p>Personality: {person.personality}</p>
               <button className= 'each-movie-button' onClick={()=>remove(person.id)}>X</button>
             </div>
          </div>
        )
      })
  
      return (
        <div className='overall-movie'>
        <h1 style={{ textAlign: 'center', margin: '1%'}}> {persons.length == 1 ? "1 Person Available" : persons.length + " People Available"}  </h1>
        
        <div className='movie-cat'>
      <ul className='movie-cat-list' style={{textAlign: 'center', color: 'green'}}>
          <li onClick={all}>All&nbsp;names</li>
      </ul>

      </div>
    
        <div className= 'movie-container'>
          {render}
        </div>
        </div>
      )
    
}

export default Birthday