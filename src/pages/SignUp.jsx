import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'; // Importing styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    yourRole: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Proceed to save data or make an API call
    console.log('User registered successfully:', formData);
    navigate('/signIn'); // Redirect to SignIn page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="role">Your Role</label>
            <select
              
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              required
            >
            <option value="Cliant">Cliant</option>
            <option value="Admin">Admin</option>
            <option value="Bands">Bands</option>
            <option value="Artist">Artist</option>
            <option value="LightingAndSound">Lighting And Sound</option>
            <option value="stage">Stage</option>
            <option value="Security">Security</option>
            <option value="Sponsors">Sponsors</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </form>
        <p className="signIn-link">
          Already have an account? <a href="/">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

