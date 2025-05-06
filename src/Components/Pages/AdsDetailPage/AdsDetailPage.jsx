import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchAdvertiseById, getUserProfile } from "../../services/services"; 
// import { addToCart, buyProduct } from "../../services/services";
import "./AdsDetailPage.css";

const AdsDetailPage = () => {
  const { state } = useLocation();
  const [adsDetails, setAdsDetails] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchAdvertiseById(state?.id);
        const resp = await getUserProfile();
        setUser(resp);
        setAdsDetails(response);
      } catch (error) {
        console.error("Error fetching ad details:", error);
      }
    };

    if (state?.id) {
      fetchDetails();
    }
  }, [state?.id]);

  // const handleAddToCart = async () => {
  //   try {
  //     await addToCart(adsDetails.id);
  //     alert(" Product added to cart!");
  //     navigate("/cart"); 
  //   } catch (error) {
  //     alert("Failed to add to cart");
  //     console.error(error);
  //   }
  // };
  
  
  // const handleBuyNow = async () => {
  //   try {
  //     await buyProduct(adsDetails.id);
  //     alert("Product purchased successfully! We will contact you soon.");
  //     navigate("/"); 
  //   } catch (error) {
  //     alert("Failed to buy product");
  //     console.error(error);
  //   }
  // };
  
  

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="left-1st-div">
          <h2 className="product-title">{adsDetails?.title}</h2>

          <div className="product-meta">
            <span>📍 New York, United States</span>
            <span>🗓️ Nov 01, 2023, 10:00am</span>
          </div>

          <div className="img-detail-div">
            <img
              src={adsDetails?.image}
              alt="Product"
              className="product-main-img"
            />
          </div>

          <button className="btn-buy" >
            Buy Now
          </button>
          <button className="btn-cart" >
            Add to Cart
          </button>
        </div>

        <div className="left-second-div">
          <div className="product-overview">
            <h3>Overview</h3>
            <p>{adsDetails?.description}</p>
          </div>
        </div>
      </div>

      <div className="product-right">
        <div className="price-div">
          <div className="price-tag">
            <p>Price:</p>
            <h2>$ {adsDetails?.price}</h2>
          </div>
        </div>

        <div className="seller-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Seller"
            className="seller-img"
          />
          <p className="seller-joined">Member since Nov 24, 2020</p>
          <h4 className="seller-name">{user.username}</h4>
          <p className="seller-data">{user.phone}</p>
          <p className="seller-label">{user.location}</p>
          <p className="seller-data">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdsDetailPage;
