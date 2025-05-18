import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DashboardHeader.css"; // Assuming you have a CSS file for styling

const DashboardHeader = ({ userType }) => {
  const navigate = useNavigate();

  useEffect(() => {
        document.body.classList.add('organizer-header-page');
          return () => {
        document.body.classList.remove('organizer-header-page');
          };
      }, []);

  const handleProfileClick = () => {
    if (userType === "organizer") {
      navigate("/organizer-profile"); // Link to Organizer Profile
    } else {
      navigate("/user-profile"); // Link to General User Profile
    }
  };

  return (
    <div className="dashboard-header"> 
      <div className="profile-section" onClick={handleProfileClick}>
        <img
          src="/images/profile-photo.jpg"
          alt="Profile"
          className="profile-photo"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;