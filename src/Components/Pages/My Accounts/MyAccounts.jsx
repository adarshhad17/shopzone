import React, { useState, useEffect } from "react";
import "./MyAccounts.css";
import { getUserProfile } from "../../services/services";

const MyAccounts = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        let response = await getUserProfile(); 
        if (response?.id) {
          setUserProfile(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, []); 
  
  return (
    <div className="profile-container">
      <div className="profile-top">
        <div className="profile-info">
          <img
            src={userProfile?.Image} 
            alt="Profile"
            className="profile-img"
          />
          <div>
            <h3 className="profile-name">{userProfile?.firstName}</h3>
            <p className="profile-subtext">{userProfile?.lastName}</p>
            <p className="profile-year">2019</p>
          </div>
        </div>
        <button className="edit-btn-myaccnt">Edit Profile</button>
      </div>
      <hr />
      <div className="profile-bottom">
        <span>📍 {userProfile?.location}</span>
        <span>✉️ {userProfile?.email}</span>
        <span>📞 {userProfile?.phone}</span>
      </div>
    </div>
  );
};

export default MyAccounts;
