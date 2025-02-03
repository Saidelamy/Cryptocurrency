/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatNumber } from "../utility/numberFormat";

const Coin = ({
  id,
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
  symbol,
  count,
}) => {
  return (
    <>
      <tr
        key={id}
        className="border-b border-b-[rgba(87,255,213,0.3)] text-center text-xs md:text-2xl"
      >
        <td>{count}</td>
        <Link className="flex justify-center" to={`/coinDetails/${id}`}>
          <td className="flex items-center gap-2 p-2">
            <img className="h-6 w-6" src={image} alt={name} />
            {name} - {symbol}
          </td>
        </Link>
        <td>${current_price}</td>
        <td
          className={
            price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
          }
        >
          {price_change_percentage_24h.toFixed(2)} %
        </td>
        <td>{formatNumber(market_cap)}</td>
      </tr>
    </>
  );
};

export default Coin;
