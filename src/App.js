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
import Order from "./pages/MyOrder";
import Notifications from "./pages/Notifications";
import MyAddress from "./pages/MyAddress";
import AddAddress from "./pages/AddAddress";
import ApplyFilters from "./pages/ApplyFilters";
import OrderSuccess from "./pages/OrderSuccess";

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
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/my-address" element={<MyAddress />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/apply-filters" element={<ApplyFilters />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      {/* ✅ Show BottomNav only if logged in */}
      {isLoggedIn && <BottomNav />}
    </Router>
  );
}

export default App;
