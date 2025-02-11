import React from 'react'
import { Avatar } from '@mui/material'
const avatar = () => {

  return (
    <div>
      <Avatar 
      className="avatar" 
      variant= 'circle' 
      src="/images/Avatar.png" 
      alt="User Avatar" 
      sx={{ width: 40, height: 40, right: 10, top: 10, position:'fixed' , bgcolor: 'darkgray', cursor: 'pointer' }}
      />
    </div>
  )
}

export default avatar
