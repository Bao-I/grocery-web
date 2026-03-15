import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Home from "./pages/Home/Home";
=======
import Home from "./pages/Home";
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";
import AccountPage from "./pages/AccountPage";
<<<<<<< HEAD
import ResetPassword from "./pages/ResetPassword";
import SearchPage from "./pages/SearchPage";
import ForgotPassword from "./pages/ForgotPassword";
import LuckyWheel from "./pages/LuckyWheel";
import OrderTracking from "./pages/OrderTracking";
import VnpayReturn from "./pages/VnpayReturn";
import { Toaster } from "react-hot-toast";
import WelcomePopup from "./pages/Home/WelcomePopup";
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

function App() {
  return (
    <CartProvider>
      <Router>
<<<<<<< HEAD
        <div className="bg-transparent app-container">
          <Header />
          <WelcomePopup />
=======
        <div className="app-container">
          <Header />
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
<<<<<<< HEAD
              <Route path="/search" element={<SearchPage />} />
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/category/:slug" element={<CategoryPage />} />

              <Route path="/account" element={<AccountPage />} />

              <Route path="/profile" element={<AccountPage />} />
<<<<<<< HEAD
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/lucky-wheel" element={<LuckyWheel />} />
              <Route path="/order-tracking/:id" element={<OrderTracking />} />
              <Route path="/vnpay-return" element={<VnpayReturn />} />
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
<<<<<<< HEAD
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerStyle={{
              zIndex: 99999,
            }}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#fdfaf5",
                color: "#5e4027",
                border: "1px solid #800a0d",
                fontFamily: "Momo Trust Sans, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "12px",
                padding: "12px 24px",
                boxShadow: "0 10px 15px -3px rgba(128, 10, 13, 0.1)",
              },
              success: {
                iconTheme: {
                  primary: "#800a0d",
                  secondary: "#fdfaf5",
                },
              },
              error: {
                iconTheme: {
                  primary: "#800a0d",
                  secondary: "#fdfaf5",
                },
              },
            }}
          />
=======
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
