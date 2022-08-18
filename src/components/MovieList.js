import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies , name , searchRate}) => {
  
  return (
    <div style={{display:"flex" , justifyContent:"space-between" , flexWrap :"wrap"}}>
        {
            movies.filter(el=>el.name.toLowerCase().includes(name.toLowerCase().trim()) && el.rate >=searchRate ).map(el=> <MovieCard movie={el}/>)
        }
        
    </div>
  )
}

export default MovieList