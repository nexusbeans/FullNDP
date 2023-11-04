import React, { useState } from 'react';
import './Login.scss';
import { baseURL } from "../../../utils/constant";

function LoginArea() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmits(e) {
    e.preventDefault();

    const { email, password } = credentials;

    fetch(`${baseURL}/login-user`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          handleLoginSuccess(data.data);
        } else {
          alert("Login failed. Please check your credentials.");
        }
      });
  }

  function handleLoginSuccess(token) {
    alert("Login successful");
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("loggedIn", true);
    window.location.href = "./user-dashboard";
  }

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
              <form id="form-login" method="post" onSubmit={handleSubmits}>
                <div className="form-element form-stack">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>
                <div className="form-element form-checkbox">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    className="checkbox"
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
