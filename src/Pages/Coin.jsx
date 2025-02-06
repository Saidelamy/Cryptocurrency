/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
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
        className="items-center justify-between border-b border-b-[rgba(87,255,213,0.3)] text-center text-xs max-sm:flex md:text-2xl"
      >
        <td>{count}</td>
        <td className="flex items-center justify-center p-2">
          <Link
            className="flex items-center justify-center gap-2"
            to={`/coinDetails/${id}`}
          >
            <img className="h-6 w-6" src={image} alt={name} />
            {name} - {symbol}
          </Link>
        </td>
        <td>${current_price}</td>
        <td
          className={`flex items-center justify-center py-5 ${price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}
        >
          {price_change_percentage_24h > 0 ? (
            <IoIosArrowRoundUp />
          ) : (
            <IoIosArrowRoundDown />
          )}
          {price_change_percentage_24h?.toFixed(2)} %
        </td>
        <td>{formatNumber(market_cap)}</td>
      </tr>
    </>
  );
};

export default Coin;
