import React, { useEffect, useState } from "react";
import "./AdsPage.css";
import { useNavigate } from "react-router-dom";
import { deleteAdvertiseById, fetchAdvertise, getUserProfile } from "../../services/services";

const AdsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetchAdvertise();
      const { id } = await getUserProfile();
      const formattedData = res.filter((el) => el.owner.id === id);
      setProducts(formattedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAdvertiseById(id);
      await fetchData();
    } catch (error) {
      console.error("Failed to delete ad:", error);
    }
  };

  return (
    <>
      {products.map((el) => (
        <div className="ad-card" key={el.id}>
          <div className="ad-left">
            <img
              src={
                el.image ||
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              }
              alt="Apartment"
              className="ad-img"
            />
            <div className="ad-details">
              <h3 className="ad-title">{el.title || "Unknown"}</h3>
              <p className="ad-location">
                Dallas, Texas · <span className="ad-time">24hrs ago</span>
              </p>
              <p className="ad-price">{el.price || "$124.80"}</p>
            </div>
          </div>
          <div className="ad-buttons">
            <button
              className="view-btn"
              onClick={() =>
                navigate(`/productDetails/${el?.id}`, {
                  state: { id: el?.id },
                })
              }
            >
              View
            </button>
            <button
              className="edit-btn"
              onClick={() => handleDelete(el.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdsPage;
