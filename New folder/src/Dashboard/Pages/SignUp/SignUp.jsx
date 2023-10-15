import React, { useState } from "react";
import { Link } from "react-router-dom";

function FormInput({ label, type, name, value, onChange, required }) {
  return (
    <div className="form-element form-stack">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (secretKey !== "nexusbeansControl") {
      alert("You Entered the Wrong Key");
    } else {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            email,
            lname,
            password,
            userType: "Admin", 
          }),
        });
        const data = await response.json();
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("User Already Registered");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during registration.");
      }
    }
  };

  const goLogin = () => {
    window.open("/login-dashboard");
  };

  return (
    <>
      <div id="back">
        <div className="backLeft"></div>
      </div>
      <div id="slideBox">
        <div className="topLayer login_btns">
          <div className="right">
            <div className="content">
              <h2>Sign Up</h2>
              <form id="form-signup" method="post" onSubmit={handleSubmit} >
                <FormInput
                  label="Enter Secret Key to Authorize"
                  type="text"
                  name="secretKey"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  required
                />
                <FormInput
                  label="First Name"
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
                <FormInput
                  label="Email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="form-element form-checkbox">
                  <input
                    id="confirm-terms"
                    type="checkbox"
                    name="confirm"
                    defaultValue="yes"
                    className="checkbox"
                    required
                  />
                  <label htmlFor="confirm-terms">
                    I agree to the <Link to="/termsusage">Terms of Service</Link> and{" "}
                    <Link to="/policy-details">Privacy Policy</Link>
                  </label>
                </div>
                <div className="form-element form-submit">
                  <button id="signUp" className="signup" type="submit" name="signup">
                    Sign up
                  </button>
                  <button id="goLeft" className="signup off" onClick={goLogin}>
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
