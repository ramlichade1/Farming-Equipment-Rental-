import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = () => {
    if (location.pathname.includes("/home")) return "home";
    if (location.pathname.includes("/explore")) return "explore";
    if (location.pathname.includes("/cart")) return "cart";
    if (location.pathname.includes("/profile")) return "profile";
    return "home";
  };

  const activeTab = currentTab();

  const tabs = [
    { label: "Home", value: "home", icon: <HomeIcon /> },
    { label: "Explore", value: "explore", icon: <ExploreIcon /> },
    { label: "Cart", value: "cart", icon: <ShoppingCartIcon /> },
    { label: "Profile", value: "profile", icon: <PersonIcon /> },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: 16,
        right: 16,
        backgroundColor: "#fff",
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.value}
          onClick={() => navigate(`/${tab.value}`)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: activeTab === tab.value ? "#008000" : "#999999",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          {React.cloneElement(tab.icon, {
            style: { color: activeTab === tab.value ? "#008000" : "#999999" },
          })}
          <span style={{ marginTop: 4, fontWeight: activeTab === tab.value ? "600" : "400" }}>
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
