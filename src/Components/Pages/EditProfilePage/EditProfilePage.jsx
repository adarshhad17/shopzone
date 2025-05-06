import React, { useEffect, useState } from "react";
import "./EditProfilePage.css";
import { getUserProfile, updateUserProfile } from "../../services/services";

function EditProfilePage() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    location: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserProfile();
      setDetails(res);
    };

    fetchUser();
  }, []);

  const handleInput = (e) => {
    setDetails({ ...details,[e.target.name]: e.target.value,}); };

  const updateUser = async () => {
    try {
      let response = await updateUserProfile(details);
      if (response?.id) {
        alert("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="ad-container-profile"
      style={{ height: "682px", marginTop: "35px", width: "860px" }}
    >
      <div className="ad-input">
        <div className="login-input-group">
          <label className="label-input">First Name</label>
          <input
            className="input-form input-username"
            name="firstName"
            value={details?.firstName}
            onChange={handleInput}
            placeholder="Type Here"
          />
        </div>

        <div className="login-input-group">
          <label className="label-input">Last Name</label>
          <input
            className="input-form"
            name="lastName"
            value={details?.lastName}
            onChange={handleInput}
            placeholder="Type Here"
          />
        </div>

        <div className="login-input-group">
          <label className="label-input">Email</label>
          <input
            className="input-form"
            name="email"
            value={details?.email}
            onChange={handleInput}
            type="email"
            placeholder="Type Here"
          />
        </div>

        <div className="login-input-group">
          <label className="label-input">User Name</label>
          <input
            className="input-form input-username"
            name="username"
            value={details?.username}
            onChange={handleInput}
            placeholder="Type Here"
          />
        </div>

        <div className="login-input-group">
          <label className="label-input">Location</label>
          <input
            className="input-form input-username"
            name="location"
            value={details?.location}
            onChange={handleInput}
            placeholder="Type Here"
          />
        </div>

        <div className="login-input-group">
          <label className="label-input">Contact Number</label>
          <input
            className="input-form"
            name="phone"
            value={details?.phone}
            onChange={handleInput}
            placeholder="Phone Number"
          />
        </div>

        <button className="login-button" onClick={updateUser}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfilePage;
