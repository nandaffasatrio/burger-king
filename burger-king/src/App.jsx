import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Promotions from "./pages/Promotions";
import LargeOrder from "./pages/LargeOrder";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/largeOrder" element={<LargeOrder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
