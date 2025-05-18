import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../styles/SignIn.css';

const SignIn = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('sign-in-page');
    return () => {
      document.body.classList.remove('sign-in-page');
    };
  }, []);

  // Map backend role names to frontend dashboard routes
  const roleToDashboard = {
    admin: '/AdminDashboard',
    organizer: '/EventOrganizerDashboard',
    artist: '/ArtistDashboard',
    bands: '/BandDashboard',
    'lighting and sound': '/DesignersDashboard',
    stage: '/DesignersDashboard',
    security: '/SecurityTeamDashboard',
    sponsors: '/SponsorsDashboard',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || isLoggedIn) return;
    setError('');
    setLoading(true);

    // Client-side validation
    if (!values.email || !values.password) {
      setError('Please enter all fields');
      setLoading(false);
      return;
    }

    try {
      console.log('Attempting login with:', values.email);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: values.email,
        password: values.password,
      });

      // Store token
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Token stored:', token);

      // Decode token and extract role
      let userRole;
      try {
        const decoded = jwtDecode(token);
        userRole = decoded.role?.toLowerCase(); // Ensure lowercase
        console.log('Decoded JWT:', decoded);
        if (!userRole) {
          throw new Error('Role not found in token');
        }
      } catch (decodeError) {
        console.error('JWT decode error:', decodeError);
        throw new Error('Invalid token format');
      }

      // Store role
      localStorage.setItem('role', userRole);
      console.log('Stored role:', userRole);

      // Redirect to appropriate dashboard
      const dashboardPath = roleToDashboard[userRole] || '/';
      console.log('Navigating to:', dashboardPath);
      setIsLoggedIn(true);
      navigate(dashboardPath, { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setLoading(false);
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  if (isLoggedIn) {
    return null; // Prevent rendering after redirect
  }

  return (
    <div className="login-container">
      <div className="card-login">
        <h2>Eventia Login</h2>
        {error && <p className="error-text">{error}</p>}
        {loading && <p>Loading...</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p>
            Don't have an account? <a href="/SignUp" className="signup-link">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;