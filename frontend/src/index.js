// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Landing_page/home/HomePage";
import AboutPage from "./Landing_page/about/AboutPage";
import ProductPage from "./Landing_page/products/ProductPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import SupportPage from "./Landing_page/support/SupportPage";
import Signup from "./Landing_page/signup/Signup";
import NotFound from "./Landing_page/NotFound";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import Login from "./Landing_page/Login/Login";
import YourAccount from "./Landing_page/YourAccount";
import ProtectedRoute from "./Landing_page/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />

      {/* 🔒 Protected Routes */}
      <Route path="/pricing" element={
        <ProtectedRoute>
          <PricingPage />
        </ProtectedRoute>
      } />
      <Route path="/support" element={
        <ProtectedRoute>
          <SupportPage />
        </ProtectedRoute>
      } />

      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<YourAccount />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <ToastContainer position="top-center" autoClose={3000} />
  </BrowserRouter>
);
