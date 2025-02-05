import CoinChart from "../Components/CoinChart";
import CoinConvert from "../Components/CoinConvert";

const CoinDetails = () => {
  return (
    <div className="mt-10 grid grid-cols-12 md:gap-2 md:px-16">
      <div className="order-2 col-span-12 mt-4 md:order-1 md:col-span-8">
        <CoinChart />
      </div>
      <div className="order-1 col-span-12 md:order-2 md:col-span-4">
        <CoinConvert />
      </div>
    </div>
  );
};

export default CoinDetails;
