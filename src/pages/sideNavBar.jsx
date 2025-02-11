import React from 'react'
import header from '../components/header'
import {  Box } from '@mui/material'
import avatar from '../components/avatar'
import notification from '../components/notification'
const sideNavBar = () => {
  

  return (
    <div>

        {/* Apply styles to the header container */}
        <Box className="header-container" >
        
        
          <ul className="menuItems">
          <header>{header()}</header>
          <avatar>{avatar()}</avatar>
          <notification>{notification()}</notification>
          </ul>
          
          
        </Box>
        
          
       




      
    </div>
   
  )
}

export default sideNavBar





