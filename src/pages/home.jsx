import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCoins } from "../Redux/cryptoSlice";
import Coin from "./coin";
import Pagination from "../componants/Pagination";
import Loader from "../Ui/Loader";
import Error from "../Ui/Error";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const totalPages = 5;

  const { allCoins } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchAllCoins(currentPage));
  }, [dispatch, currentPage]);

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
        <div className="mt-10">
          <Error />
        </div>
      </>
    );

  return (
    <>
      <div className="">
        <div className="mt-12 flex flex-col items-center justify-center md:px-20">
          <h1 className="text-4xl md:text-9xl">Crypto Marketplace</h1>
          <p className="text-center text-blue-300 md:w-[70%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni
            corporis iure. Maxime qui labore, quisquam expedita asperiores dicta
            tempore ratione consectetur amet beatae distinctio accusantium
            laudantium debitis.
          </p>
        </div>
        <main>
          <div className="mt-12 flex items-center justify-center gap-3 px-3 text-xs md:px-25 md:text-2xl">
            <div className="bg-[rgba(72,185,215,.2)] p-4 shadow shadow-cyan-500 md:w-[80%] md:rounded-4xl">
              <table className="w-full">
                <thead className="border-b border-b-[rgba(87,255,213,0.3)] max-sm:hidden">
                  <tr className="">
                    <th className="py-3">#</th>
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
}
