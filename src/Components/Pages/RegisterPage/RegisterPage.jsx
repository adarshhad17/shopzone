import React, { useState } from "react";
import RightLogo from "../../../assets/RegisterPageAssets/RegisterPage.png";
import Logo from "../../../assets/RegisterPageAssets/logo.png";
import "./RegisterPage.css";
import { createUser } from "../../services/services";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userRegister = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value }); };

  const handleSignUp = async () => {
    if (
      !userProfile.email ||
      !userProfile.username ||
      !userProfile.password ||
      !userProfile.confirmpassword
    ) {
      setError("All fields are required");
      return;
    }

    if (userProfile.password !== userProfile.confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      let resp = await createUser(userProfile);
      if (resp.jwt) {
        localStorage.setItem("jwt", resp.jwt);
        navigate("/login");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="main-div">
      <div className="form-div">
        <img src={Logo} height={32} alt="logo" />
        <div className="signup-intro">
          <span className="bold-text"> Listbnb </span> a Largest Classified
          Listing Marketplace offers perfect <br /> Ads classifieds...
        </div>
        <h3>Create Your Account</h3>

        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          <label className="label-input">Email* </label>
          <input
            onChange={userRegister}
            type="email"
            name="email"
            value={userProfile.email}
            className="input-form"
            placeholder="Type Here"
          />
        </div>

        <div className="input-group">
          <label className="label-input">Username* </label>
          <input
            onChange={userRegister}
            name="username"
            value={userProfile.username}
            className="input-form"
            placeholder="Type Here"
          />
        </div>

        <div className="input-group">
          <label className="label-input">Password* </label>
          <input
            onChange={userRegister}
            type="password"
            name="password"
            value={userProfile.password}
            className="input-form"
            placeholder="Type Here"
          />
        </div>

        <div className="input-group">
          <label className="label-input">Confirm Password* </label>
          <input
            onChange={userRegister}
            type="password"
            name="confirmpassword"
            value={userProfile.confirmpassword}
            className="input-form"
            placeholder="Type Here"
          />
        </div>

        <button className="register-btn" onClick={handleSignUp}>
          Register →
        </button>
      </div>

      <div className="info-div">
        <img
          src={RightLogo}
          height={250}
          alt="illustration"
          className="info-img"
        />

        <div className="info-text">
          <h3> Already Have an Account?</h3>
          <p>
            {" "}
            To Connect With us Please Login to your <br /> account if you
            already have one.
          </p>
        </div>
        <Link to={"/login"}>
          <button className="login-btn">Login →</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
