import React, { useState } from "react";
import OrganizerSidebar from "../../components/OrganizerSidebar";
import DashboardHeader from "../../components/DashboardHeader";
import "../../styles/OrganizerPanel/OraganizerSettings.css";

const OrganizerSettings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (password.newPassword === password.confirmPassword) {
      alert("Password changed successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <DashboardHeader />
      </div>
      <div className="organizer-settings-page">
        <OrganizerSidebar />

        <h1>Settings</h1>

        <div className="settings-container">
          

          {/* Profile Section */}
          <div className="settings-section">
            <h2>Profile</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
              />
            </div>
            <button className="save-button" onClick={handleSaveProfile}>
              Save Profile
            </button>
          </div>

          {/* Password Section */}
          <div className="settings-section">
            <h2>Change Password</h2>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="save-button" onClick={handleChangePassword}>
              Change Password
            </button>
          </div>

          {/* Notifications Section */}
          <div className="settings-section">
            <h2>Notifications</h2>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={notifications.emailNotifications}
                  onChange={handleNotificationChange}
                />
                Email Notifications
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={notifications.smsNotifications}
                  onChange={handleNotificationChange}
                />
                SMS Notifications
              </label>
            </div>
            <button className="save-button" onClick={() => alert("Notifications updated!")}>
              Save Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerSettings;