import React, {useState, useContext, createContext} from 'react'
import Header from './Header';
import Moviecard from './Moviecard';
import Movielist from './Movielist';


export const MovieContext = createContext() ;

export const MovieProvide = props => {
    const [movies, setmovies] = useState([
        {
            name: "Harry Potter",
            imdb: "9.1",
            price: "12.99"
        },
        {
            name: "GOT",
            imdb: "9.3",
            price: "12.99"
        },
        {
            name: "Lord of Rings",
            imdb: "8.4",
            price: "11.99"
        },
    ])

    return(
            <MovieContext.Provider value={[movies, setmovies]}>
               {props.children}
            </MovieContext.Provider>
    )
}