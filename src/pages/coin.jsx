// eslint-disable-next-line react/prop-types
const Coin = ({ key, name, image }) => {
  console.log(name);
  return (
    <>
      <div
        key={key}
        className="flex flex-col items-center justify-center rounded-xl border-4 border-white shadow-lg shadow-white md:w-44"
      >
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h2>$708.22</h2>
      </div>
    </>
  );
};

export default Coin;
