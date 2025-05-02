import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import '../../styles/AdminPanel/AdminSettings.css';

const AdminSettings = () => {
  useEffect(() => {
    document.body.classList.add('admin-settings-page');
    return () => {
      document.body.classList.remove('admin-settings-page');
    };
  }, []);

  const [profile, setProfile] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    password: '',
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, type, checked, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
    // Add logic to save settings (e.g., API call)
  };

  const handleLogout = () => {
    alert('You have been logged out!');
    // Add logic to handle logout (e.g., clearing tokens, redirecting to login page)
    window.location.href = '/SignIn'; // Redirect to the SignIn page
  };

  return (
    <div className="admin-settings-container">
      <AdminSidebar />
      <div className="settings-content">
        <div className="settings-header">
          <h1>Admin Settings</h1>
        </div>

        {/* Profile Settings */}
        <section className="settings-section">
          <h2>Profile Settings</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
              />
            </label>
          </form>
        </section>

        {/* Preferences */}
        <section className="settings-section">
          <h2>Preferences</h2>
          <form>
            <label>
              Theme:
              <select
                name="theme"
                value={preferences.theme}
                onChange={handlePreferencesChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <label>
              Notifications:
              <input
                type="checkbox"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferencesChange}
              />
            </label>
          </form>
        </section>
        <div className="settings-actions">
          <button className="save-button" onClick={handleSave}>
            Save Settings
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminSettings;