import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/common/BottomNav";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppRoutes setIsLoggedIn={setIsLoggedIn} />

      {/* Show BottomNav only after login */}
      {isLoggedIn && <BottomNav />}
    </Router>
  );
}

export default App;