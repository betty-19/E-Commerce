import React, { useState } from 'react';
import './Login.css';
import LoginPic from '../../assets/images/signup-login.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firease';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Email and password are required");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
     nav('/home');
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="signup-img">
        <img src={LoginPic} alt="login" />
      </div>
      <div className="login-content">
        <div className="login-texts">
          <p>Log in to Exclusive</p>
          <p>Enter your details below</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="email-field">
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMsg && <p style={{ color: 'red', marginTop: '8px' }}>{errorMsg}</p>}
          <div className="logon-forget-div">
            <button type="submit">Log in</button>
            <p>Forget Password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
