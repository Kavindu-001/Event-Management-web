import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar';
import '../../styles/SideBar/SidebarProfile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const SidebarProfile = () => {
  const [user, setUser] = useState({
    name: '',
    role: '',
    photo: null, //Store the uploaded image
    password: ''
  });

  const [notification] = useState(false); // State to control notification visibility

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prev) => ({
          ...prev,
          photo: reader.result // Store the base64 image data
        }));
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', user);
    toast.success('Profile saved successfully!')
  };

  useEffect(() => {
      document.body.classList.add('sidebar-profile-page');
      return () => {
        document.body.classList.remove('sidebar-profile-page');
      };
    }, []);
    
  
  return (
    <div>
      <div className='Sidebarcontainer'>
        <SideBar />
      </div>
      <div className="profile-editor">
        <h2>Edit Profile Template</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              placeholder="Enter your role"
            />
          </label>
          <label>
            Profile Photo (Upload):
            <input
              type="file"
              name="photo"
              accept="image/*"// Restrict to image files only
              onChange={handleFileChange} 
            />
          </label>
          <label>
            Change Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </label>
          <button type="submit" className="profile-btn" >
            Save
          </button>
        </form>

        <h3>Preview</h3>
        <div className="profile-preview">
          {user.photo && (
            <img src={user.photo} alt="User" className="preview-photo" />
          )}
          <div className="preview-info">
            <h4>{user.name || 'Your Name'}</h4>
            <p>{user.role || 'Your Role'}</p>
            <div className="preview-actions">
              <button className="profile-btn" onClick={handleSubmit}>Save</button>
              <button className="logout-btn" onClick={() => console.log('Logged out')}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification for successful save */}
      {notification && (
        <div className="notification">
          <p>Profile saved successfully!</p>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default SidebarProfile
