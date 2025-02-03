import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCoins } from "../Redux/cryptoSlice";
import Coin from "./coin";
import Pagination from "../componants/Pagination";
import Loader from "../Ui/loader/Loader";
import Error from "../Ui/Error";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCoins(currentPage));
  }, [dispatch, currentPage]);

  const { allCoins } = useSelector((state) => state.crypto);

  const { status } = useSelector((state) => state.crypto);
  if (status === "loading")
    return (
      <>
        <Loader />
      </>
    );
  if (status === "failed")
    return (
      <>
        <Error />
      </>
    );

  return (
    <>
      <div className="">
        <main>
          <div className="mt-12 gap-3 px-3 md:grid-cols-5 md:px-16 md:text-2xl">
            <div className="bg-[rgba(0,0,0,.4)] p-2">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="">
                    <th>#</th>
                    <th>Coins</th>
                    <th>Price</th>
                    <th>24H Change</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {allCoins.map((coin, index) => {
                    return (
                      <Coin
                        key={coin.name}
                        id={coin.id}
                        count={index + 1}
                        current_price={coin.current_price}
                        image={coin.image}
                        name={coin.name}
                        price_change_percentage_24h={
                          coin.price_change_percentage_24h
                        }
                        symbol={coin.symbol}
                        market_cap={coin.market_cap}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
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
