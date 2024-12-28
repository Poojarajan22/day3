import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, countname] = useState(0)
    const add = (a) => {
        countname(++count)
        console.log(a.target.value)
    }
    const sub = (b) => {
        countname(--count)
        console.log(b.target.value)

    }


  return (
      <div>
          <Typography variant='h6'>count { count}</Typography>
          <Button variant='contained' onClick={add}>add</Button>&nbsp;
          <Button variant="contained" onClick={sub}>sub</Button>&nbsp;
      </div>
  )
}

export default Counter