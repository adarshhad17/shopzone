import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = ({ setSelectedItem, selectedItem }) => {

  const logout=()=>{
    localStorage.clear()
  }
  
  return (
    <div style={{ width: "540px" }}>
    
      <div className="sidebar-head">
        <div>Home</div>
        <div>Profile</div>
      </div>

      
      <div className="main-sidebar">
        <ul className="sidbar-list">
          
          <li
            className="sidebar-items"
            style={
              selectedItem === "myaccounts"
                ? { background: "#000", color: "#fff" }
                : {}
            }
            onClick={() => setSelectedItem("myaccounts")}
          >
            My Account
          </li>
          <li
            className="sidebar-items"
            style={
              selectedItem === "profile"
                ? { background: "#000", color: "#fff" }
                : {}
            }
            onClick={() => setSelectedItem("profile")}
          >
            Profile
          </li>
          <li
            className="sidebar-items"
            style={
              selectedItem === "ads"
                ? { background: "#000", color: "#fff" }
                : {}
            }
            onClick={() => setSelectedItem("ads")}
          >
            Ads
          </li>

          <li
            className="sidebar-items"
            style={
              selectedItem === "postAd"
                ? { background: "#000", color: "#fff" }
                : {}
            }
            onClick={() => setSelectedItem("postAd")}
          >
            Post Ads
          </li>

          <li className="sidebar-items">
  <Link to="/cart">Cart</Link>
</li>
        </ul>
        <a className="sidebar-items-logout" onClick={logout} href="/">
          Logout
        </a>
      </div>
    </div>
  );
};

export default SideBar;
