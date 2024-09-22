import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Login Component
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    console.log("Input username:", username);
    console.log("Input password:", password);
    navigate('/home');
  }

  return (
    <div className="container mt-5">
      <div className="login_form">
        <h2>Login Form</h2>
        <form onSubmit={handleForm}>
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(event) => setUsername(event.target.value)} id="username" placeholder="Enter your username" value={username} className="form-control" />
  
          <label htmlFor="password" className="mt-2">Password</label>
          <input type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Enter your password" value={password} className="form-control" />
  
          <button type="submit" className="btn btn-primary mt-3">Login</button>
          
          <div className="mt-3 text-end">
            <Link to="/forgot-password" className="text-light">Forgot Password?</Link>
          </div>
  
          <div className="mt-3">
            <span>Don't have an account? </span>
            <Link to="/register" className="btn-register-link">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// Registration Component
function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    console.log("Registering email:", email);
    console.log("Registering username:", username);
    console.log("Registering password:", password);
    navigate('/');
  }

  return (
    <div className="container mt-5">
      <div className="login_form">
        <h2>Registration Form</h2>
        <form onSubmit={handleForm}>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={(event) => setEmail(event.target.value)} id="email" placeholder="Enter your email" value={email} className="form-control" />

          <label htmlFor="username" className="mt-2">Username</label>
          <input type="text" onChange={(event) => setUsername(event.target.value)} id="username" placeholder="Enter your username" value={username} className="form-control" />

          <label htmlFor="password" className="mt-2">Password</label>
          <input type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Enter your password" value={password} className="form-control" />

          <button type="submit" className="btn btn-primary mt-3">Register</button>

          <div className="mt-4">
            <span>Alreay have an account? </span>
            <Link to="/" className="btn-register-link">Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// Forgot Password Component
function ForgotPassword() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    console.log("Password reset email sent to:", email);
    navigate('/');
  }

  return (
    <div className="container mt-5">
      <div className="login_form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForm}>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} id="email" placeholder="Enter your email" value={email} className="form-control" />

          <button type="submit" className="btn btn-primary mt-3">Send Reset Link</button>
          <div className="mt-4">
            <span>Remember the password? </span>
            <Link to="/" className="btn-register-link">Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// Home Component
function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container mt-5">
      <div className="home-box shadow p-5 rounded">
        <h2 className="text-center mb-4">Welcome to the Home Page!</h2>
        <p className="text-center">You have successfully logged in. Explore your dashboard and manage your account.</p>
      </div>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;