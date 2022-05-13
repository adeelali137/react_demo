import React from 'react'
import { createUseStyles } from 'react-jss';
import Movielist from './Movielist'


const useStyles = createUseStyles({
    movie__item:{
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px 20px",
        margin: "20px 0"
    }
  })

export default function Moviecard() {
    const classes = useStyles();
  return (
    <>
    <div className={classes.movie__item}>
        <h3>Movie Name</h3>
        <h5>Movie Ratings</h5>
        <h6>Movie Price</h6>
    </div>
    </>
  )
}
