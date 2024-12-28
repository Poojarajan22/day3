import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcom = () => {
    var [name, setname] = useState("")
    const first = () => {
        setname("React")

    }
    const second = () => {
        setname("Angular")
    }
    const third = () => {
        setname("Python")
    }
    useEffect(() => {
        second()
    },[])
  return (
      <div>
          <Typography variant='h6' >welcome {name}</Typography><br/>
          <Button variant="contained" onClick={first} color='error' >React</Button>&nbsp;
          <Button variant="contained" onClick={second} color='error'>Angular</Button>&nbsp;
          <Button variant="contained" onClick={third} color='error'>Python</Button>
      </div>
  )
}

export default Welcom