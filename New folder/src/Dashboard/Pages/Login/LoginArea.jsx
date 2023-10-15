import React, { useState } from 'react';
import './Login.scss';

function LoginArea() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'ok') {
          alert('Login successful');
          localStorage.setItem('token', data.data);
          localStorage.setItem('loggedIn', true);
          window.location.href = './dashboard';
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } else {
        alert('Network error. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div id="back">
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>
      <div id="slideBox">
        <div className="topLayer login_btns">
          <div className="right">
            <div className="content">
              <h2>Login Dashboard</h2>
              <form id="form-login" method="post" onSubmit={handleSubmit}>
                <div className="form-element form-stack">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className=""
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className=""
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-element form-checkbox">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    className="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className="form-element form-submit">
                  <button id="logIn" className="login" type="submit" name="login">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginArea;
