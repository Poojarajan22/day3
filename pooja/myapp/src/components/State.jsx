import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const State = () => {
    var [name, setname] = useState("pooja")
    var[nval,sval]=useState()

    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const newname = () => {
        sval(name)
        
}
    return (
        <div>
        <Typography variant="h4">welcome {nval}</Typography>
    <TextField variant="outlined" onChange={setval} /> <br/> <br/>
    <Button variant='contained' onClick={newname}>submit</Button>
        
    </div>
  )
}

export default State