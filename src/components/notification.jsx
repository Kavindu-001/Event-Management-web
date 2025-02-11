import React from 'react'
import { Badge, Box } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
const notification = () => {
  return (
    
    <Box sx={{color:'action.active',right: 75, top: 20, position:'fixed' ,  cursor: 'pointer'
    
    }}>
      <Badge color='secondary' variant='dot'>
        <NotificationsIcon sx={{width: 28, height: 28}} />
      </Badge>
     </Box>   

    
  )
}

export default notification
