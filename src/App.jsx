import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoinDetails from "./Pages/CoinDetails";
import Navbar from "./Components/Navbar";

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
