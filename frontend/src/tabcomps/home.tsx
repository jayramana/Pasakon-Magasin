import  { useState, useEffect } from "react";
import axios from "axios";
import { useSearchContext } from "../../hooks/SearchProvider";
import { Laptop } from "../../types/types";
import { useData } from "../../hooks/GlobalDataProvider";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Homeskeleton from "../../comps/home/homeskeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchValue } = useSearchContext();
  const { dispatch } = useData();
  const Navigate = useNavigate();

  const formatToINR = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_PORT}api/products/`
        );
        setProducts(res.data.data);
      } catch {
        console.log("Error fetching data");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    axios
      .get<Laptop[]>(`${import.meta.env.VITE_API_PORT}api/products/`)
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);
  console.log("API", import.meta.env.VITE_API_PORT);

  const gamingLaptops = products.filter(
    (product: Laptop) => product.category === "Gaming Laptop"
  );

  console.log("Search Value", searchValue);

  const topselling = products.filter(
    (prod: Laptop) => Number(prod.numberofbuys) > 8000
  );

  const Worklaptops = products.filter(
    (product: Laptop) => product.category === "Work Laptop"
  );

  const costEfficient = products.filter(
    (prod: Laptop) => Number(prod.spec[0].price) < 60000
  );
  console.log(costEfficient);
  if (products.length === 0) {
    return <Homeskeleton />;
  }
  return (
    <div className="pt-28 h-[100%] w-screen flex flex-col gap-4 p-4 bg-black text-white">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Best Gaming Laptops</p>
        <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth gap-4 no-scrollbar">
          {gamingLaptops.map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/${game.brand.toLowerCase()}.png`}
                alt="laptop"
                className="max-h-30 max-w-60 object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className=""> {game.name}</span>
                <div
                  className={`flex items-center w-fit px-0.5 py-0.5 gap-0.5 rounded-sm ${
                    Number(game.ratings) >= 4
                      ? "bg-green-600"
                      : Number(game.ratings) >= 3
                      ? "bg-orange-600"
                      : "bg-red-600"
                  }`}
                >
                  <p className="text-white text-xs font-bold">{game.ratings}</p>
                  <span>
                    <GoStarFill className="text-xs text-white" />
                  </span>
                </div>
                <span className="">
                  {" "}
                  {formatToINR(Number(game.spec[0].price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Top Selling Laptops</p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {topselling.map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/${game.brand.toLowerCase()}.png`}
                alt="laptop"
                className="max-h-30 max-w-60 object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className=""> {game.name}</span>
                <div
                  className={`flex items-center w-fit px-0.5 py-0.5 gap-0.5 rounded-sm ${
                    Number(game.ratings) >= 4
                      ? "bg-green-600"
                      : Number(game.ratings) >= 3
                      ? "bg-orange-600"
                      : "bg-red-600"
                  }`}
                >
                  <p className="text-white text-xs font-bold">{game.ratings}</p>
                  <span>
                    <GoStarFill className="text-xs text-white" />
                  </span>
                </div>
                <span className="">
                  {" "}
                  {formatToINR(Number(game.spec[0].price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Best Laptops for Work</p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {Worklaptops.map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/${game.brand.toLowerCase()}.png`}
                alt="laptop"
                className="max-h-30 max-w-60 object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className=""> {game.name}</span>
                <div
                  className={`flex items-center w-fit px-0.5 py-0.5 gap-0.5 rounded-sm ${
                    Number(game.ratings) >= 4
                      ? "bg-green-600"
                      : Number(game.ratings) >= 3
                      ? "bg-orange-600"
                      : "bg-red-600"
                  }`}
                >
                  <p className="text-white text-xs font-bold">{game.ratings}</p>
                  <span>
                    <GoStarFill className="text-xs text-white" />
                  </span>
                </div>
                <span className="">
                  {" "}
                  {formatToINR(Number(game.spec[0].price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Laptops under 60,000</p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {costEfficient.map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/${game.brand.toLowerCase()}.png`}
                alt="laptop"
                className="max-h-30 max-w-60 object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className=""> {game.name}</span>
                <div
                  className={`flex items-center w-fit px-0.5 py-0.5 gap-0.5 rounded-sm ${
                    Number(game.ratings) >= 4
                      ? "bg-green-600"
                      : Number(game.ratings) >= 3
                      ? "bg-orange-600"
                      : "bg-red-600"
                  }`}
                >
                  <p className="text-white text-xs font-bold">{game.ratings}</p>
                  <span>
                    <GoStarFill className="text-xs text-white" />
                  </span>
                </div>
                <span className="">
                  {" "}
                  {/* {formatToINR(Number(game.spec[0].price))} */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
