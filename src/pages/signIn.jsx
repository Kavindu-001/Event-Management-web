import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link here
import axios from 'axios';
import "../styles/SignIn.css"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Temporary credentials for demo purposes
  const tempCredentials = {
    email: 'admin@example.com',
    password: 'password123',
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Check against temporary credentials
    if (email === tempCredentials.email && password === tempCredentials.password) {
      alert('Login successful (temporary credentials)');
      localStorage.setItem('auth', JSON.stringify({ email }));
      navigate('/sideNavBar'); // Redirect to dashboard
      return;
    }


    try {
      const response = await axios.post('/api/auth/signin', { email, password });
      if (response.data.success) {
        localStorage.setItem('auth', JSON.stringify(response.data));
        navigate('/sideNavBar'); // Redirect to dashboard
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>

      {/* Links to Forgot Password and Sign Up */}
      <div className="links-container">
        <p>
          Forgot your password? <Link to="/ForgotPassword">Click here</Link>
        </p>
        <p>
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;




