import { useSelector } from "react-redux";
import CoinChart from "../componants/coinChart";

const CoinDetails = () => {
  const { status } = useSelector((state) => state.crypto);
  if (status === "loading")
    return (
      <>
        <div>loading</div>
      </>
    );
  if (status === "failed")
    return (
      <>
        <div>Error, please refresh the page</div>
      </>
    );
  return (
    <div className="mt-10 md:px-16">
      <CoinChart />
    </div>
  );
};

export default CoinDetails;
