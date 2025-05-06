import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ obj }) => {
  const navigate = useNavigate();
  const handleCardSelect = () => {
    navigate(`/productDetails/${obj?.id}`, {
      state: { id: obj?.id },
    });
  };

  return (
    <div className="card-container" onClick={handleCardSelect}>

      <div className="img-div"> <img className="card-image" src={obj?.image} alt={obj?.title} /> </div>

      
      <div className="card-content">
        <div> 
          <div style={{color:"gray"}}> Paris * 1day go</div>
          
        </div>
        <div className="card-title-row">
          <div>{obj?.title}</div>
        </div>
        <div className="card-description">
          {obj?.description?.substring(0, 100)}...
        </div>
        <div className="card-price">₹{obj?.price}</div>
      </div>

    </div>
  );
};

export default Card;
