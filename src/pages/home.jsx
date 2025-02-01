import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCoins } from "../Redux/cryptoSlice";
import Coin from "./coin";
import Pagination from "../componants/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCoins(currentPage));
  }, [dispatch, currentPage]);

  const { allCoins } = useSelector((state) => state.crypto);

  return (
    <>
      <div className="">
        <main>
          <div className="mt-12 grid grid-cols-2 gap-3 px-3 text-2xl md:grid-cols-5 md:px-16">
            {allCoins.map((coin) => {
              return (
                <Coin
                  key={coin.name}
                  id={coin.id}
                  current_price={coin.current_price}
                  image={coin.image}
                  name={coin.name}
                />
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
