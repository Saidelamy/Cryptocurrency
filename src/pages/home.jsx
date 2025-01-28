import Navbar from "../componants/navbar";
import Coin from "./coin";

const Home = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <main className="m-auto mt-16 text-2xl">
          <Coin />
        </main>
      </div>
    </>
  );
};

export default Home;
