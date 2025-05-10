import React from 'react'
import SideBar from '../../components/SideBar'


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

const SidebarEvents = () => {
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      SideBar Events
    </div>
  )
}

export default SidebarEvents
