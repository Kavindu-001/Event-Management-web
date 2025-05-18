import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import '../../src/styles/CommonHeader.css';

const CommonHeader = ({ user }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/SidebarProfile');
  };

  const goToEvents = () => {
    navigate('/SidebarEvents'); // Assumes your event table section has ID `eventTable`
  };

  return (
    <header className="header">
      <div className="header-left">
        
      </div>
      <div className="header-right">
        <div className="mailbox-link" onClick={goToEvents} title="Notifications">
          <FaEnvelope />
        </div>
        <div className="profile-link" onClick={goToProfile} title="Profile">
          <img
            src={user?.photo || '/default-avatar.png'}
            alt="Profile"
            className="profile-photo"
          />
          <span className="profile-name">{user?.name || 'User'}</span>
        </div>
      </div>
    </header>
  );
};

export default CommonHeader;