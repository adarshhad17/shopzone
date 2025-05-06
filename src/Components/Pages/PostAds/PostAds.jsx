import React, { useState } from 'react';
import './PostAds.css';
import { createAdvertise } from '../../services/services';

function PostAds() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handlePost = (e) => {
    setProduct({...product,[e.target.name]: e.target.value, }); };

  const addProduct = async () => {
    try {
      let response = await createAdvertise(product);
      if (response?.id) {
        setProduct({
          title: "",
          price: "",
          description: "",
          image: "",
        });
        alert("Product added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ad-container" style={{ width: "900px", height: "675px", marginTop: "35px" }}>
      <div className="ad-input">
        <div className="login-input-group">
          <label className="label-input">Add Title*</label>
          <input
            className="input-form input-username"
            name="title"
            value={product.title}
            onChange={handlePost}
            placeholder='Type Here'
          />
        </div>
        <div className="login-input-group">
          <label className="label-input">Price*</label>
          <input
            className="input-form input-username"
            name="price"
            type="number"
            value={product.price}
            onChange={handlePost}
            placeholder='Type Here'
          />
        </div>
        <div className="login-input-group">
          <label className="label-input">Description*</label>
          <textarea
            className="input-form-dec"
            name="description"
            value={product.description}
            onChange={handlePost}
            style={{ height: "130px" }}
            placeholder='Type Here'
          />
        </div>
        <div className="login-input-group">
          <label className="label-input">Photos*</label>
          <input
            className="input-form"
            name="image"
            value={product.image}
            onChange={handlePost}
            placeholder='Image URL'
          />
        </div>
        <button className="login-button" onClick={addProduct}>
          Post
        </button>
      </div>
    </div>
  );
}

export default PostAds;
