import { Route, Routes } from "react-router-dom";
import Navbar from "../src/componants/Navbar.jsx";
import CoinDetails from "./pages/CoinDetails.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CoinDetails />} path="/coinDetails/:id" />
      </Routes>
    </>
  );
}

export default App;
