import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

export default function Addmovie() {

    const [movies, setmovies] = useContext(MovieContext)

    const [name, setname] = useState('')
    const [imdb, setimdb] = useState('')
    const [price, setprice] = useState('')

    const updatename =(e) =>{
        setname(e.target.value)
    }
    const updateimdb =(e) =>{
        setimdb(e.target.value)
    }
    const updateprice =(e) =>{
        setprice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault()
        setmovies(prevMovies => [...prevMovies, {name: name, imdb: imdb, price: price}])

        
    }

  return (
    <>
    <form action="" onSubmit={addMovie}>
        <h4>Add Movies</h4>
        <input type="text" required name="name" value={name} onChange={updatename}/>
        <input type="text" required name="imdb" value={imdb} onChange={updateimdb} />
        <input type="text" required name="price" value={price} onChange={updateprice} />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}
