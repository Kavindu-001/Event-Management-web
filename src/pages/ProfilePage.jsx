import React from "react";
import "../../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-role">Event Organizer</p>
      </div>

      <div className="profile-details">
        <h3>Profile Information</h3>
        <div className="detail-item">
          <span>Email:</span>
          <span>john@example.com</span>
        </div>
        <div className="detail-item">
          <span>Phone:</span>
          <span>+94 77 123 4567</span>
        </div>
        <div className="detail-item">
          <span>Joined Date:</span>
          <span>January 5, 2025</span>
        </div>
        <div className="detail-item">
          <span>Bio:</span>
          <span>Passionate event planner with 5+ years of experience.</span>
        </div>
      </div>

      <div className="profile-actions">
        <button className="edit-button">Edit Profile</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
