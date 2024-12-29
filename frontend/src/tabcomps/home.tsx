import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchContext } from "../../hooks/SearchProvider";
import { Laptop } from "../../types/types";
import { useData } from "../../hooks/GlobalDataProvider";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Homeskeleton from "../../comps/home/homeskeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [products, setProducts] = useState<Laptop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
        setLoading(true); 
        const res = await axios.get(
          `${import.meta.env.VITE_API_PORT}api/products/`
        );
        setProducts(res.data.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
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

  const topselling = products.filter(
    (prod: Laptop) => Number(prod.numberofbuys) > 8000
  );

  const Worklaptops = products.filter(
    (product: Laptop) => product.category === "Work Laptop"
  );

  const costEfficient = products.filter(
    (prod: Laptop) => Number(prod.spec.price) < 50000
  );

  if (loading) {
    return (
      <div className="pt-28 h-[100%] w-screen flex flex-col gap-4 p-4 bg-[#0B0F17] text-teal-400 overflow-x-hidden">
        {[
          "Best Gaming Laptops",
          "Top Selling Laptops",
          "Best Laptops for Work",
          "Laptops under 60,000",
        ].map((sectionTitle, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-semibold">{sectionTitle}</p>
            <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth gap-4 no-scrollbar">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-300 flex flex-col items-start gap-2 w-80 p-4 hover:shadow-xl hover:cursor-pointer"
                >
                  <Skeleton className="h-40 w-full object-cover bg-gray-700 rounded-md" />
                  <Skeleton className="h-5 w-3/4 bg-gray-700 rounded-md" />
                  <Skeleton className="h-4 w-1/4 bg-gray-600 rounded-sm mt-1" />
                  <Skeleton className="h-4 w-1/2 bg-gray-600 rounded-sm mt-1" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="pt-28 h-[100%] w-screen flex flex-col gap-4 p-4 bg-[#0B0F17] overflow-x-hidden ">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-teal-500 text-2xl">
          Best Gaming Laptops
        </p>
        <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth gap-4 no-scrollbar">
          {gamingLaptops.splice(0,4).map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all bg-slate-900  border-2 border-solid border-slate-800  duration-300 flex flex-col justify-self-center gap-0   hover:shadow-xl hover:cursor-pointer"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/laptop.jpeg`}
                alt="laptop"
                className="max-h-30 max-w-60 object-cover transition-all duration-300 hover:scale-105 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#2DD4BF] text-xl font-semibold mt-2">
                  {" "}
                  {game.name}
                </span>
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
                <span className="font-semibold text-wheight text-white">
                  {" "}
                  {formatToINR(Number(game.spec.price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="font-semibold text-teal-500 text-2xl">
          Top Selling Laptops
        </p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {topselling.slice(0,4).map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col bg-slate-900 border-slate-800 items-start gap-0 w-80  hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/laptop.jpeg`}
                alt="laptop"
                className="max-h-30 max-w-60 rounded-lg object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[#2DD4BF] text-xl font-semibold mt-2">
                  {" "}
                  {game.name}
                </span>
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
                <span className="font-semibold text-wheight text-white">
                  {" "}
                  {formatToINR(Number(game.spec.price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-teal-500 text-2xl">
          Best Laptops for Work
        </p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {Worklaptops.slice(0,4).map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300  bg-slate-900 border-slate-800flex flex-col items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/laptop.jpeg`}
                alt="laptop"
                className="max-h-30 max-w-60 rounded-lg object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[#2DD4BF] text-xl font-semibold mt-2">
                  {" "}
                  {game.name}
                </span>
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
                <span className="font-semibold  text-white">
                  {" "}
                  {formatToINR(Number(game.spec.price))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-teal-500 text-2xl">
          Laptops under 60,000
        </p>
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4">
          {costEfficient.slice(0,4).map((game: Laptop) => (
            <div
              key={game._id}
              className="transition-all duration-300 flex flex-col bg-slate-900 border-slate-800 items-start gap-0 w-80 p-4 hover:shadow-xl hover:cursor-pointer  h-30 w-70"
              onClick={() => Navigate(`/ind/${game._id}`)}
            >
              <img
                src={`/laptop.jpeg`}
                alt="laptop"
                className="max-h-30 max-w-60 rounded-lg object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[#2DD4BF] text-xl font-semibold mt-2">
                  {" "}
                  {game.name}
                </span>
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
                  <span className="text-white font-semibold">{formatToINR(Number(game.spec.price))}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
