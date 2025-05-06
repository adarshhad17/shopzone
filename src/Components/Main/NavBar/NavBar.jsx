import React, { useEffect, useState } from "react";
import "./NavBar.css";
import toplogo from "../../../assets/TopbarAssets/toplogo.png";
import navsign from "../../../assets/TopbarAssets/nav-sign.png";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../services/services";

function NavBar() {
  const navigate = useNavigate();
  const handleOnClick = (type) => {
    if (type === "login") navigate("/login");
    else {
      navigate("/dashboard", {
        state: {
          source: type,
        },
      });
    }
  };
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserProfile();

        if (res) {
          setProfile(res);
        } else {
          setProfile({});
        }
      } catch {}
    };
    fetchData();
  }, []);

  console.log({ profile });

  return (
    <nav className="top-bar">
      <div className="nav-log">
        <img
          style={{ cursor: "pointer" }}
          src={toplogo}
          alt="top-logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="nav-icons">
        <div className="nav-sign-logo">
          <img src={navsign} alt="signn" />
        </div>

        <div
          onClick={() =>
            profile.username
              ? handleOnClick("myaccounts")
              : handleOnClick("login")
          }
          style={{ fontWeight: "600px", cursor: "pointer" }}
        >
          {profile.username ? profile.username : " Sign In"}
        </div>

        <button
          className="post-ur-add-btn"
          onClick={() => handleOnClick("postAd")}
        >
          {" "}
          Post Your Add →
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
