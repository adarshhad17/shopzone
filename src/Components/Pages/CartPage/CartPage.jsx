import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items);
      } catch (err) {
        console.error("Failed to fetch cart items:", err);
      }
    };
    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      await removeCartItem(id);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (err) {
      alert("Failed to remove item");
    }
  };

  const handleBuyNow = async () => {
    try {
      await buyProduct(adsDetails.id);
      alert("Product purchased successfully! We will contact you soon.");
      navigate("/"); 
    } catch (error) {
      alert("Failed to buy product");
      console.error(error);
    }
  };

 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                  <button style={{marginLeft:"30px", width:"80px", height:"39px", backgroundColor:"orange"}} onClick={handleBuyNow}>Buy</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
