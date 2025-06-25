import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/signup";
import Home from "./pages/home";
import Cart from "./components/Cart";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* ✅ Show Navbar only if logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

      {/* ✅ Show BottomNav only if logged in */}
      {isLoggedIn && <BottomNav />}
    </Router>
  );
}

export default App;
