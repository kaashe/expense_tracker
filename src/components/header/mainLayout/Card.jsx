import { Typography } from '@mui/material'
import React from 'react'

const Card = (props) => {
  return (
    <div>
          <Typography variant="h4">{props.title}</Typography> 
              <Typography variant="p">{props.description}</Typography>  
    </div>
  )
}

export default Card