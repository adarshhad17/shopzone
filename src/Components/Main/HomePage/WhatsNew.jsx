import React, { useState,useEffect } from "react";
import "../../../assets/Headset.png";
import Card from "./Card";
import { fetchAdvertise } from "../../services/services";
import "./WhatsNew.css";

const WhatsNew = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetchAdvertise();
        if (res.length) setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whatsnew-container">
      <header className="whatsnew-header">
        <div className="head-div-ads">WHAT'S NEW</div>
        <h2>Fresh Recomendations</h2>
      </header>

      <div className="whatsnew-subheader">
        <div style={{color:"#f50963"}}>{products.length} items</div>
        <div className="whatsnew-indicators">
          <div className="whatsnew-dot"></div>
          <div className="whatsnew-dot"></div>
        </div>
      </div>

      <div className="whatsnew-card-container">
        {products?.map((obj) => (
          <Card key={obj?.id} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
