import React, { useState } from "react";
import RightLogo from "../../../assets/Component 2.png";
import Logo from "../../../assets/Link.png";
import { loginUser } from "../../services/services";
import "./Login.css"; 
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setUser({...user,[e.target.name]: e.target.value, }); };

  const handleClick = async () => {
    try {
      if(user?.username && user?.password){
          let response = await loginUser(user);
          if (response.jwt) {
            setUser({
                username:"",
                password:""
            })
            localStorage.setItem("jwt", response.jwt);
            navigate("/dashboard");
          }
      }else{
        alert('Please fill all fields')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Logo} height={32} alt="Logo" />
        <div className="login-description">
        <span className="bold-text"> Listbnb </span> a Largest Classified Listing Marketplace offers perfect Ads
          classifieds...
        </div>
        <div className="login-title">Login To Your Account</div>
        <div className="login-input-group">
          <label>Username</label>
          <input name="username" value={user?.username} onChange={handleLogin} />
        </div>
        <div className="login-input-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={user?.password}
            onChange={handleLogin}
          />
        </div>
        <button className="login-button" onClick={handleClick}>
          Login →
        </button>
      </div>
      <div className="login-right">
        <img src={RightLogo} height={250} alt="Right Logo" />
        <div className="register-title">Don’t Have an Account ?</div>
        <div className="register-description">
          To connect with us please register for a new account if you are not
          having one already.
        </div>
        <Link to={"/signup"}>
          <button className="register-button">Register →</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;
