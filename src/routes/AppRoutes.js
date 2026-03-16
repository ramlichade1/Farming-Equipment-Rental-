import { Routes, Route } from "react-router-dom";

import Login from "../features/auth/Signup";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Explore from "../pages/Explore";
import Favorites from "../features/favorites/Favorites";
import Profile from "../features/profile/Profile";
import AboutMe from "../features/profile/AboutMe";
import Order from "../features/orders/MyOrder";
import Notifications from "../features/notifications/Notifications";
import MyAddress from "../features/address/MyAddress";
import AddAddress from "../features/address/AddAddress";
import ApplyFilters from "../pages/ApplyFilters";
import OrderSuccess from "../features/orders/OrderSuccess";

function AppRoutes({ setIsLoggedIn }) {
  return (
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
  );
}

export default AppRoutes;