import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div>
          <AppBar id='hello'> 
              <Toolbar>
          <Typography variant="h5">Home</Typography>&nbsp;
          <Link to="/login">
            <Button variant="contained" color='primary' >login</Button>
          </Link>&nbsp;
          <Link to="/signup">
            <Button variant="contained" color='primary' >signup</Button>
          </Link>&nbsp;
          <Link to="/tab">
            <Button variant="contained" color='primary' >list</Button>
          </Link>&nbsp;
          <Link to="/states">
            <Button variant="contained" color='primary' >state</Button>
          </Link>&nbsp;
          <Link to="/count">
          <Button variant="contained" color='primary'>count</Button>
          </Link>&nbsp;
          <Link to="/welcome">
            <Button variant="contained" color='primary'>welcome</Button>
          </Link>&nbsp;
          <Link to="/api">
          <Button variant='contained' color='primary'>api</Button>
          </Link>&nbsp;
          <Link to="/product">
          <Button variant='contained' color='primary'>product</Button>
          </Link>&nbsp;
        
          </Toolbar>
        
          </AppBar>
          <br /><br /><br />
          
    </div>
  )
}
