import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsDetails, fetchCoinsHistory } from "../Redux/cryptoSlice";
import { useParams } from "react-router-dom";
import {
  IoStarOutline,
  IoShareOutline,
  IoCloudDownloadOutline,
} from "react-icons/io5";
import { TbTransferVertical } from "react-icons/tb";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { formatNumber } from "../utility/numberFormat";
import Loader from "../Ui/Loader";
import Error from "../Ui/Error";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const CoinChart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const days = 10;

  useEffect(() => {
    if (id) {
      dispatch(fetchCoinsHistory({ id, days }));
    }
  }, [dispatch, id, days]);

  useEffect(() => {
    dispatch(fetchCoinsDetails(id));
  }, [dispatch, id]);

  const { selectedCoin } = useSelector((state) => state.crypto);
  const { coinHistory } = useSelector((state) => state.crypto);

  const data = {
    labels: coinHistory?.prices?.map(
      (coin) => new Date(coin[0]).toLocaleDateString() || {},
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: coinHistory?.prices?.map((coin) => new Date(coin[1])) || [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const { status } = useSelector((state) => state.crypto);
  // if (status === "loading")
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  if (status === "failed")
    return (
      <>
        <Error />
      </>
    );

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="order-2 col-span-12 mt-4 md:order-1 md:col-span-8">
          <div className="justify-between md:flex">
            <div className="ml-2 flex items-center">
              <img src={selectedCoin?.image?.small} alt={selectedCoin?.name} />
              <h1 className="ml-2 text-2xl">{selectedCoin?.name}</h1>
              <p className="mt-1 ml-1">{selectedCoin?.symbol}</p>
            </div>
            <div className="hidden gap-6 md:flex">
              <div className="flex items-center gap-1">
                <IoStarOutline className="text-cyan-500" />
                <span>Add To Watchlist</span>
              </div>
              <div className="flex items-center gap-1">
                <IoShareOutline className="text-cyan-500" />
                <span>Share</span>
              </div>
              <div className="flex items-center gap-1">
                <IoCloudDownloadOutline className="text-cyan-500" />
                <span>Dawnload</span>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-[rgba(0,0,0,0.5)]">
            <div>
              <Line data={data} options={{ responsive: true }} />
            </div>
          </div>
          <div className="mt-2 flex justify-between gap-y-2 max-sm:flex-col">
            <div className="flex items-center justify-around md:flex-col">
              <span>Price</span>
              <span className="text-[rgba(72,185,215)]">
                $ {selectedCoin?.market_data?.current_price?.usd}
              </span>
            </div>
            <div className="flex items-center justify-around md:flex-col">
              <span>Volume</span>
              <span className="text-[rgba(72,185,215)]">
                $ {formatNumber(selectedCoin?.market_data?.total_volume?.usd)}
              </span>
            </div>
            <div className="flex items-center justify-around md:flex-col">
              <span>Market Cap</span>
              <span className="text-[rgba(72,185,215)]">
                $ {formatNumber(selectedCoin?.market_data?.market_cap?.usd)}
              </span>
            </div>
            <div className="flex items-center justify-around md:flex-col">
              <span>Total Supply</span>
              <span className="text-[rgba(72,185,215)]">
                $ {formatNumber(selectedCoin?.market_data?.total_supply)}
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 col-span-12 flex justify-center md:order-2 md:col-span-4">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
            <input
              type="text"
              placeholder="enter number of coins"
              className="rounded-lg border-2 border-cyan-500 px-6 md:px-12 md:py-2"
            />
            <TbTransferVertical className="text-cyan-500" />
            <input
              type="text"
              placeholder="enter number of coins"
              className="rounded-lg border-2 border-cyan-500 px-6 md:px-12 md:py-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinChart;
