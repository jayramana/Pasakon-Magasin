import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../hooks/SearchProvider";
import axios from "axios";
import Filters from "./filters";
import { useData } from "../../hooks/GlobalDataProvider";
import { useFilterContext } from "../../hooks/FilterProvider";
import { Laptop } from "types/types";
import { useNavigate } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { formatToINR } from "./individual";
import { BestsellerBadge } from "@/components/ui/bestseller";
import { TopRatedBadge } from "@/components/ui/topRated";
const Results = () => {
  const { searchValue } = useSearchContext();
  const { state, dispatch } = useData();
  const [searchResults, setSearchResults] = useState<Laptop[]>([]);
  const { filters } = useFilterContext();
  const [desc, setDesc] = useState("");
  const [topRated, setTopRated] = useState<string[]>([]);
  const [bestSeller, setBestSeller] = useState<string[]>([]);

  useEffect(() => {
    setSearchResults(
      state.data.filter(
        (item: Laptop) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          item.processor?.[0]?.graphicProcessor
            .toLowerCase()
            .includes(filters.graphicsCard.toLowerCase()) &&
          item.processor?.[0]?.processorname
            .toLowerCase()
            .includes(filters.processor.toLowerCase()) &&
          item.processor?.[0]?.ram
            .toLowerCase()
            .includes(filters.ram.toLowerCase()) &&
          item.spec?.[0]?.storagespace
            .toLowerCase()
            .includes(filters.storage.toLowerCase()) &&
          item.os?.[0]?.os
            .toLowerCase()
            .includes(filters.operatingSystem.toLowerCase()) &&
          item.processor?.[0]?.ramtype
            .toLowerCase()
            .includes(filters.ramType.toLowerCase()) &&
          item.category.toLowerCase().includes(filters.category.toLowerCase())
      )
    );
  }, [
    state.data,
    searchValue,
    filters.graphicsCard,
    filters.processor,
    filters.ram,
    filters.storage,
    filters.operatingSystem,
    filters.ramType,
    filters.category,
  ]);

  const SortFilter = () => {
    try {
      const sortedResults = [...searchResults];

      if (desc) {
        if (desc === "plth") {
          sortedResults.sort(
            (a, b) => Number(a.spec[0].price) - Number(b.spec[0].price)
          );
        }
        if (desc === "phtl") {
          sortedResults.sort(
            (a, b) => Number(b.spec[0].price) - Number(a.spec[0].price)
          );
        }
        if (desc === "rhtl") {
          sortedResults.sort((a, b) => Number(b.ratings) - Number(a.ratings));
        }
        if (desc === "rlth") {
          sortedResults.sort((a, b) => Number(a.ratings) - Number(b.ratings));
        }
      }

      setSearchResults(sortedResults);
    } catch (err) {
      console.log(err);
    }
  };


  const Navigate = useNavigate();

  useEffect(() => {
    const TopRatedID = async () => {
      try {
        const res = await axios.get(`${import.meta.env.env.VITE_API_PORT}api/products/toprated`);
        const data = res.data;
        setTopRated(data.map((item: Laptop) => item._id));
      }
      catch (err) {
        console.log(err);
      }
    }
    TopRatedID();
    
  },[])
  useEffect(() => {
    const BestSellers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_PORT}api/products/bestseller`);
        const data = res.data;
        setBestSeller(data.map((item: Laptop) => item._id));
      }
      catch (err) {
        console.log(err);
      }
    }
    BestSellers();
    
  },[])


  const handleClick = async (id: string, currentAddToCart: boolean) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_PORT}api/products/${id}`, {
        addToCart: !currentAddToCart,
      });

      console.log(res.data);

      dispatch({
        type: "UPDATE_DATA",
        payload: {
          _id: id,
          addToCart: !currentAddToCart,
        } as Laptop,
      });
    } catch (error) {
      console.error("Error encountered while updating the cart:", error);
    }
  };

  const Individual = (id: string) => {
    console.log(id);
    Navigate(`/ind/${id}`);
  };


  return (
    <div className="pt-20 flex">
      <div className="w-1/16 pl-2">
        <Filters />
      </div>
      <div className="pl-10 flex-grow   border-solid border-l-2 h-full border-y-0 ">
        <p className="font-semibold">
          Showing {searchResults.length} results for "<i>{searchValue}</i>"
        </p>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => setDesc(e.target.value)}
            onClick={SortFilter}
          >
            <option value="">Sort by</option>
            <option value="plth">Price: Low to High</option>
            <option value="phtl">Price: High to Low</option>
            <option value="rhtl">Ratings: High to Low</option>
            <option value="rlth">Ratings: Low to High</option>
          </select>
        </div>
        <div className="pt-0 flex flex-col gap-8 ">
          {searchResults.map((item: Laptop) => (
            <div className="py-10 border-b-2 border-b-gray-200" key={item._id}>
              <div key={item._id} className="flex hover:cursor-pointer gap-8 ">
                <div className="relative inline-block h-30 w-70">
                  <img
                    src={`/${item.brand.toLowerCase()}.png`}
                    alt=""
                    className="max-h-30 max-w-60 object-cover transform translate-y-[3px] translate-x-[1px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      Individual(item._id);
                    }}
                  />
                  {bestSeller.includes(item._id) &&
                  !topRated.includes(item._id) ? (
                    <div className="absolute top-[0] left-0">
                      <BestsellerBadge />
                    </div>
                  ) : topRated.includes(item._id) ? (
                    <div className="absolute top-[0] left-0">
                      <TopRatedBadge />
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className="hover:text-gray-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      Individual(item._id);
                    }}
                  >
                    <span>{item.name + " " + item.model}</span>{" "}
                    <span>Core {item.processor?.[0]?.processorname}</span>
                    <span>
                      {"(" + item.processor?.[0]?.ram}/
                      {item.spec?.[0]?.storagespace +
                        " " +
                        item.processor?.[0]?.storageType}
                    </span>
                    <span>
                      /{item.displayAudio?.[0]?.screenSize}
                      {")"}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.brand}</p>
                  <div className="flex gap-2">
                    <div
                      className={`flex items-center w-fit px-0.5 py-0.5 gap-0.5 rounded-sm ${
                        Number(item.ratings) >= 4
                          ? "bg-green-600"
                          : Number(item.ratings) >= 3
                          ? "bg-orange-600"
                          : "bg-red-600"
                      }`}
                    >
                      <p className="text-white text-xs font-bold">
                        {item.ratings}
                      </p>
                      <span>
                        <GoStarFill className="text-xs text-white" />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold">
                        ({item.numberOfRatings})
                      </p>
                    </div>
                  </div>
                  <p>{formatToINR(Number(item.spec?.[0]?.price))}</p>
                  <button
                    onClick={() => handleClick(item._id, item?.addToCart)}
                    className={`text-white px-2 py-1 rounded-md ${
                      item.addToCart ? "bg-red-600" : "bg-green-600"
                    } transition-all duration-300 delay-100 w-fit `}
                  >
                    {item.addToCart ? (
                      <span className="text-md">Remove</span>
                    ) : (
                      <span className="text-md">Add</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
