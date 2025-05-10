import React from 'react'
import SideBar from '../SideBar';

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
const SidebarOverview = () => {
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      SideBar Overview
    </div>
  )
}

export default SidebarOverview
