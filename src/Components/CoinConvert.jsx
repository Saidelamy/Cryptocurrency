import { useState } from "react";
import { useSelector } from "react-redux";
import { TbTransferVertical } from "react-icons/tb";

import flag from "../assets/usd.png";

const CoinConvert = () => {
  const [amount, setAmount] = useState(1);
  const { selectedCoin } = useSelector((state) => state.crypto);

  const amountAllCoins =
    amount * (selectedCoin?.market_data?.current_price?.usd ?? 0);

  return (
    <div className="flex justify-center md:mt-[104px]">
      <div className="flex flex-col justify-center gap-2 bg-[rgba(0,0,0,.5)] p-4 md:gap-5">
        <h2 className="">Currency Converter</h2>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex rounded-lg border-2 px-2">
            <div className="flex items-center gap-2">
              <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={selectedCoin?.image.small}
                alt={selectedCoin?.name}
              />
              {selectedCoin?.symbol.toUpperCase()}
            </div>
            <div>
              <input
                type="number"
                placeholder={amount}
                className="px-6 text-end outline-none md:px-12 md:py-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={0}
              />
            </div>
          </div>
          <TbTransferVertical className="text-cyan-500 md:text-3xl" />
          <div className="flex rounded-lg border-2 px-2">
            <div className="flex items-center gap-2">
              <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={flag}
                alt="flag of usd"
              />
              <p>USD</p>
            </div>
            <div>
              <input
                type="number"
                placeholder="enter number of coins"
                value={isNaN(amountAllCoins) ? "" : amountAllCoins}
                className="px-6 text-end outline-none md:px-12 md:py-2"
                disabled
              />
            </div>
          </div>
        </div>
        <p className="text-blue-300">
          1 {selectedCoin?.symbol.toUpperCase()} ={" "}
          {selectedCoin?.market_data?.current_price?.usd} USD
        </p>
      </div>
    </div>
  );
};

export default CoinConvert;
