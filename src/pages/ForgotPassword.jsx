import React, { useState } from 'react';
import '../styles/ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for backend integration
    console.log(`Password reset request sent for: ${email}`);
    setMessage(
      'If the email exists in our system, a password reset link will be sent.'
    );
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-box">
        <h2>Reset Password</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Send Reset Link
          </button>
        </form>
        <p className="signIn-link">
          <a href="/">Back to Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
