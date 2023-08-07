import NavBar from "./components/navbar";
import About from "./pages/about";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
// import TeamDetails from "./pages/teamDetails";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  return (
    <>
      <nav>
        <NavBar />
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
