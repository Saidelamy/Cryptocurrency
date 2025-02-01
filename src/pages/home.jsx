import { useDispatch, useSelector } from "react-redux";
import Navbar from "../componants/navbar";
import Coin from "./coin";
import { useEffect } from "react";
import { fetchAllCoins } from "../Redux/cryptoSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCoins());
  }, [dispatch]);

  const { allCoins } = useSelector((state) => state.crypto);

  console.log(allCoins);

  return (
    <>
      <div className="">
        <Navbar />
        <main className="mt-16 grid grid-cols-2 gap-3 px-3 text-2xl md:grid-cols-5 md:px-16">
          {allCoins.map((coin, index) => {
            return <Coin key={index} image={coin.image} name={coin.name} />;
          })}
        </main>
      </div>
    </>
  );
};

export default Home;
