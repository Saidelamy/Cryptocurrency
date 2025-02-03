import { TbTransferVertical } from "react-icons/tb";
import { useSelector } from "react-redux";
import flag from "../assets/usd.png";

const CoinConvert = () => {
  const { selectedCoin } = useSelector((state) => state.crypto);
  console.log(selectedCoin);
  return (
    <div className="flex justify-center md:mt-18">
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[rgba(0,0,0,.5)] p-4 md:gap-5">
        <h2 className="">Currency Converter</h2>
        <div className="flex rounded-lg border-2 px-2">
          <div className="flex items-center gap-2">
            <img
              className="h-4 w-4 md:h-6 md:w-6"
              src={selectedCoin?.image.small}
              alt=""
            />
            {selectedCoin?.symbol.toUpperCase()}
          </div>
          <div>
            <input
              type="text"
              placeholder="enter number of coins"
              className="px-6 outline-none md:px-12 md:py-2"
            />
          </div>
        </div>
        <TbTransferVertical className="text-cyan-500" />
        <div className="flex rounded-lg border-2 px-2">
          <div className="flex items-center gap-2">
            <img className="h-4 w-4 md:h-6 md:w-6" src={flag} alt="" />
            <p>USD</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="enter number of coins"
              className="px-6 outline-none md:px-12 md:py-2"
            />
          </div>
        </div>
        <p>
          1 {selectedCoin?.symbol.toUpperCase()} ={" "}
          {selectedCoin?.market_data?.current_price?.usd} USD
        </p>
      </div>
    </div>
  );
};

export default CoinConvert;
