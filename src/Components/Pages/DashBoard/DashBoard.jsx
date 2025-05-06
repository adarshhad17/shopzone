import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SideBar from "../../SideBar/SideBar";
import PostAds from "../PostAds/PostAds";
import EditProfilePage from "../EditProfilePage/EditProfilePage";
import AdsPage from "../AdsPage/AdsPage";
import MyAccounts from "../My Accounts/MyAccounts";

function DashBoard() {
  const location = useLocation();

  const [selectedItem, setSelectedItem] = useState("postAd");

  useEffect(() => {
  setSelectedItem(location?.state?.source);
  }, [location]);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {console.log(selectedItem)}
      <div style={{ marginTop: "210px", marginBottom: "110px" }}>
        <SideBar
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      </div>
      <div style={{ marginTop: "275px", marginBottom: "110px" }}>
        {selectedItem === "profile" && <EditProfilePage />}
        {selectedItem === "postAd" && <PostAds /> }
        {selectedItem === "ads" &&<AdsPage /> }
        {selectedItem === "myaccounts" && <MyAccounts />}
      </div>
    </div>
  );
}

export default DashBoard;
