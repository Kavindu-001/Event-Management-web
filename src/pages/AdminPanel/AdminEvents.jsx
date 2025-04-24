import React from 'react'
import Sidebar from '../../components/Sidebar'
import {  Card, CardContent } from '@mui/material'
import SharedCalendar from '../../components/SharedCalendar' // Import SharedCalendar component
import '../../styles/AdminPanel/AdminEvents.css'
const Events = () => {
  return (
    <div>
      <Sidebar />
      <Card className="card-calendar">
        <CardContent className="card-content">
          <h2>Shared Calendar</h2>
          <SharedCalendar />
        </CardContent>
        
        
        
      </Card>
    




    </div>
  )
}

export default Events
