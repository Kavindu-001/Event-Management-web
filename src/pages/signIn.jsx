import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css"; // Add styles
const SignIn = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('sign-in-page');
    return () => {
      document.body.classList.remove('sign-in-page');
    };
  }, []);

  // Hardcoded User Credentials (Temporary for Testing)
  const users = [
    { email: "admin@eventia.com", password: "Admin@123", role: "Admin" },
    { email: "organizer@eventia.com", password: "Organizer@123", role: "EventOrganizer" },
    { email: "artist@eventia.com", password: "Artist@123", role: "Artist" },
    { email: "band@eventia.com", password: "Band@123", role: "Bands" },
    { email: "consumer@eventia.com", password: "Consumer@123", role: "Consumer" },
    { email: "security@eventia.com", password: "Security@123", role: "SecurityTeam" },
    { email: "sponsor@eventia.com", password: "Sponsor@123", role: "Sponsor" },
    { email: "designer@eventia.com", password: "Designer@123", role: "Designer" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      localStorage.setItem("token", "logged-in");
      localStorage.setItem("role", user.role);
      redirectToDashboard(user.role);
    } else {
      setError("Invalid credentials!");
    }
  };

  // Redirect user based on role
  const redirectToDashboard = (role) => {
    switch (role) {
      case "Admin":
        navigate("/AdminDashboard");
        break;
      case "EventOrganizer":
        navigate("/EventOrganizerDashboard");
        break;
      case "Artist":
        navigate("/ArtistDashboard");
        break;
      case "Bands":
        navigate("/BandDashboard");
        break;
      case "Consumer":
        navigate("/ConsumersDashboard");
        break;
      case "SecurityTeam":
        navigate("/SecurityTeamDashboard");
        break;
      case "Sponsor":
        navigate("/SponsorsDashboard");
        break;
      case "Designer":
        navigate("/DesignersDashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    
    <div className="login-container">
      <card className="card-login">
      <h2> Eventia Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/SignUp" className="signup-link">Sign Up</a></p>
      </form>
      </card>
    </div>
  );
};

export default SignIn;