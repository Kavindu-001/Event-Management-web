import React  from 'react'
import { useEffect } from 'react';
import SideBar from '../../components/SideBar'
import '../../styles/SideBar/SidebarBookings.css';
import CreatePost from './CreatePost';

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

  
const SidebarBookings = () => {
  useEffect(() => {
    document.body.classList.add('organizer-header-page');
    return () => {
      document.body.classList.remove('organizer-header-page');
    };
  }, []);
 
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      <div className='Sidebar-Bookings-template'>
        <CreatePost />

      </div>



    </div>
  )
}


export default SidebarBookings
