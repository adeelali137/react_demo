import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'


export default function Movielist() {
    const [movies, setmovies] = useContext(MovieContext)
  return (
    <>
    
        {movies.map((movie) => {
            return(
               <div className='card'>
                <h3>{movie.name}</h3>
                <h5>{movie.imdb}</h5>
                <h6>${movie.price}</h6>
               </div>
            )
        })}

    </>
  )
}
