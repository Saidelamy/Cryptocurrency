import { useSelector } from "react-redux";
import CoinChart from "../componants/coinChart";
import Loader from "../Ui/loader/Loader";
import Error from "../Ui/Error";

const CoinDetails = () => {
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
    <div className="mt-10 md:px-16">
      <CoinChart />
    </div>
  );
};

export default CoinDetails;
