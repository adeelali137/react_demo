import React, {useContext} from 'react'
import { createUseStyles } from 'react-jss';
import {MovieContext} from './MovieContext'


const useStyles = createUseStyles({
    item: {
      marginRight: 20
    },
    wrapper: {
      display: 'flex',
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#ccc",
      height: "8vh",
      fontFamily: "sans-serif"
      
    }
  })


export default function Header() {
  const [movies, setmovies] = useContext(MovieContext)
    const classes = useStyles();
  return (
    <>
    <div className={classes.wrapper}>
        <h2>Movie App</h2>
        <h4>Mivies Count {movies.length} </h4>
    </div>
    </>
  )
}
