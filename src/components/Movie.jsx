import React, {useState, useEffect} from 'react'
import movieData from '../data/movie.js'
import '../css/movie.css'

const Movie = () => {
    const [movies, setMovies] = useState(movieData)

    const remove = (id) => {
        const newData = movies.filter(movie => movie.id !== id)
        setMovies(newData)
    }
    
    const category = (category) => {
      const newCat = movieData.filter(movie => movie.category == category)
      setMovies(newCat)
    } 

    const genre = (genre) => {
      const newGenre = movieData.filter(movie => movie.genre == genre)
      setMovies(newGenre)
    } 

    const all = () => {
      setMovies(movieData)
    } 

  const render = movies.map((movie,idx) => {
    return(
        <div key={idx}>
            <div className='each-movie-container'>
                <img src={movie.url} alt='movie-image' />
                    <p> Title: {movie.title}</p>
                    <p> Genre: {movie.genre}</p>
                    <p> Category: {movie.category}</p>
                    <button className= 'each-movie-button' onClick={()=>remove(movie.id)}>X</button>
                    
            </div>
        </div>


    )
  })
  return (
    <div className='overall-movie'>
    <h1 style={{ textAlign: 'center', margin: '1%'}}> {movies.length == 1 ? "1 Movie Available" : movies.length + " Movies Available"}  </h1>
    <div className="movie-cat">
      <div>
        <ul className='movie-cat-list'>
          <li onClick={()=>category("Hollywood")}>Hollywood</li>
          <li onClick={()=>category("Nollywood")}>Nollywood</li>
          <li onClick={()=>category("K.Drama")}>K.Drama</li>
        </ul>

      </div>

      <div>
      <ul className='movie-cat-list'>
          <li onClick={all}>All&nbsp;movies</li>
      </ul>

      </div>
      
      <div>
      <ul className='movie-cat-list'>
          <li onClick={()=>genre("Action")}>Action</li>
          <li onClick={()=>genre("Thriller")}>Thriller</li>
          <li onClick={()=>genre("Comedy")}>Comedy</li>
          <li onClick={()=>genre("Romance")}>Romance</li>
        </ul>

      </div>
    </div>

    <div className= 'movie-container'>
      {render}
    </div>
    </div>
  )
}

export default Movie


//assignment: when the no. of movies gets to 1, it should change to singular form...., (2) refresh hollywood blank,
//switch once, do same for other side 'genres' action, mystery.
