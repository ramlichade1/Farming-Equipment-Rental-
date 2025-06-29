import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/signup";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import BottomNav from "./components/BottomNav";
import Categories from "./pages/Categories";
import Explore from './pages/Explore';
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import AboutMe from "./pages/AboutMe";
import Order from "./pages/MyOrder"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/my-orders" element={<Order />} />
      </Routes>

      {/* ✅ Show BottomNav only if logged in */}
      {isLoggedIn && <BottomNav />}
    </Router>
  );
}

export default App;
