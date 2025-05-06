import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Components/Main/NavBar/NavBar";
import Footer from "./Components/Main/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import Home from "./Components/Main/HomePage/HomePage";
import AdsDetailPage from "./Components/Pages/AdsDetailPage/AdsDetailPage";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";
import CartPage from "./Components/Pages/CartPage/CartPage";

function App() {
  
  return (
    <div>
      <NavBar />

      <div style={{ width: "98vw" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/productDetails/:id" element={<AdsDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
