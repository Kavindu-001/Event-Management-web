import React from 'react'
import SideBar from '../../components/SideBar';


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

const SidebarSettings = () => {
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      SideBar Settings
    </div>
  )
}

export default SidebarSettings
