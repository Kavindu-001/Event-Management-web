import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const roleMapping = {
    Client: 'organizer',
    Admin: 'admin',
    Bands: 'bands',
    Artist: 'artist',
    LightingAndSound: 'lighting and sound',
    Stage: 'stage',
    Security: 'security',
    Sponsors: 'sponsors',
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const { role, name, email, password, confirmPassword } = formData;
    if (!role || !name || !email || !password || !confirmPassword) {
      return setError('All fields are required.');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }
    if (password.length < 6) {
      return setError('Password must be at least 6 characters.');
    }

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/register',
        { role: roleMapping[role], name, email, password, confirmPassword }
      );
      localStorage.setItem('token', data.token);
      const decoded = jwtDecode(data.token);
      localStorage.setItem('role', decoded.role);
      navigate('/signIn');
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
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
          >
            <option value="">Select a role</option>
            <option value="Client">Organizer</option>
            <option value="Admin">Admin</option>
            <option value="Bands">Bands</option>
            <option value="Artist">Artist</option>
            <option value="LightingAndSound">Lighting & Sound</option>
            <option value="Stage">Stage</option>
            <option value="Security">Security</option>
            <option value="Sponsors">Sponsors</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className="btn-submit" type="submit">
          Sign Up
        </button>
      </form>
      <p className="signin-link">
        Already have an account? <a href="/signIn">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
