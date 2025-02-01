import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Coin = ({ id, name, image, current_price }) => {
  return (
    <>
      <Link to={`/coinDetails/${id}`}>
        <div
          key={name}
          className="flex flex-col items-center justify-center rounded-xl bg-[rgba(0,0,0,.5)] duration-1500 hover:border md:w-44"
        >
          <img className="w-[50%] p-2" src={image} alt={name} />
          <h2 className="text-lg md:text-2xl">{name}</h2>
          <h2>{current_price}$</h2>
        </div>
      </Link>
    </>
  );
};

export default Coin;
