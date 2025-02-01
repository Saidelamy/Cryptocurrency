import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  return <div className="mt-10 px-16">CoinDetails {id}</div>;
};

export default CoinDetails;
