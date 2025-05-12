import React from 'react'
import SideBar from '../../components/SideBar'
import SharedCalendar from '../../components/SharedCalendar'

const Sidebarcontainer = ({ to, children, className }) => {
  return (
    <Sidebarcontainer
      to={to}
        
      className={({ isActive }) => `${className || ''} ${isActive ? 'active' : ''}`.trim()}
    >
      {children}
    </Sidebarcontainer>
  );
};

const SidebarCalendar = () => {
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      <div className='shared-calendar'>
        <div className='shared-calendar-header'>
          <h2>Shared Calendar</h2>
        </div>
        
         {/* calendar */}
        <div className='shared-calendar-content'>
          <SharedCalendar />
        </div>
      </div>
    </div>
  )
}

export default SidebarCalendar
