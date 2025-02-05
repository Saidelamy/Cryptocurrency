import { Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import Navbar from "./componants/navbar";
import Home from "./pages/Home";

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
