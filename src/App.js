import NavBar from "./components/navbar";
import About from "./pages/about";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Spacer from "./components/common/Spacer";
import { Box } from "@mui/material";
// import TeamDetails from "./pages/teamDetails";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  return (
    <>
      <nav>
        <NavBar />
        <Box sx={{ marginTop: { xs: 8, sm: 8, md: 8 } }} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/member-detail/:id" element={<TeamDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
