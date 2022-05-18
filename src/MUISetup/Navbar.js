import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import img from '../../src/logo.svg'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Box>
        <AppBar position="static">
            <Toolbar>
                {/* <Button sx={{ flexGrow: 1 }} color="inherit"  >Home</Button> */}
                <Typography sx={{ flexGrow: 1, color: "#fff", textDecoration: "none", textTransform: "uppercase" }} component={NavLink} to="/">Alb</Typography>

                {/* <Link to="/about" style={{ padding: "10px" }}> About</Link> */}
                <Button style={({isActive})=> {return {backgroundColor: isActive ? '#555' : ' '}}} color="inherit" component={NavLink} to="/" >Home</Button>
                <Button style={({isActive})=> {return {backgroundColor: isActive ? '#555' : ' '}}} color="inherit" component={NavLink} to="/about">About</Button>
                <Button style={({isActive})=> {return {backgroundColor: isActive ? '#555' : ' '}}} color="inherit" component={NavLink} to='/contact' >Contact</Button>
                <Button style={({isActive})=> {return {backgroundColor: isActive ? '#555' : ' '}}} color="inherit" component={NavLink} to="/login">Login</Button>

                

            </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}
