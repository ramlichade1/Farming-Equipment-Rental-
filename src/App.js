import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/signup";
import Home from "./components/home";
import Cart from "./components/Cart";
import BottomNav from "./components/BottomNav";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* ✅ Show BottomNav only if logged in */}
       {isLoggedIn && <BottomNav />}
    </Router>
  );
}

export default App;
