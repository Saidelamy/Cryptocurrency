import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CoinDetails from "./pages/CoinDetails";
import Navbar from "./componants/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<CoinDetails />} path="/coinDetails/:id" />
      </Routes>
    </>
  );
}

export default App;
