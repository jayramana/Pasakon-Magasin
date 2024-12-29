import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/GlobalDataProvider";
import axios from "axios";
import { Laptop } from "types/types";
import { GoStarFill } from "react-icons/go";
import General from "../../comps/individual/general";
import Pandm from "../../comps/individual/pandm";
import Os from "../../comps/individual/os";
import Daaf from "../../comps/individual/daaf";
import Connectivity from "../../comps/individual/connectivity";
import Battery from "../../comps/individual/battery";
import Warranty from "../../comps/individual/warranty";
import Specs from "../../comps/individual/specgraph";

export const formatToINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};
const Individual = () => {
  const { id } = useParams();
  const { state } = useData();
  const [product, setProduct] = useState<Laptop | null>(null);

  const price = Number(product?.spec?.price);
  const newPrice = formatToINR(price);

  useEffect(() => {
    if (id) {
      const foundProduct = state.data.find((item: Laptop) => item._id === id);
      setProduct(foundProduct || null);
    }
  }, [id, state.data]);

  const handleClick = async (id: string, addToCart: boolean) => {
    try {
      console.log(addToCart);
      const res = await axios.put(
        `${import.meta.env.VITE_API_PORT}api/products/${id}`,
        {
          addToCart: !addToCart,
        }
      );
      console.log(res.data);
      if (product) {
        setProduct({ ...product, addToCart: !addToCart });
      }
      return res.data;
    } catch (error) {
      console.error("Error updating laptop:", error);
      throw new Error("Failed to update laptop");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-20 bg-gray-900">
      <main className="flex flex-col gap-4 pt-10" key={product._id}>
        <div className="flex self-center gap-4 pl-10">
          <div className="p-4 border-solid border-2 flex flex-col">
            <img src="/laptop.jpeg" alt="" className="h-96 max-w-96 " />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 border-1 border-b-slate-500  border-t-0 pb-10">
            <div>
              <p className="text-2xl font-semibold text-white ">
                {product.name} {product.model} {"("}
                {product.processor?.ram}/{+" " + product.processor?.storageType}
                /{product.displayAudio?.screenSize}
                {")"}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center bg-green-600 w-fit px-0.5 py-0.5 gap-0.5 rounded-sm">
                <p className="text-white text-xs font-bold">
                  {product.ratings}
                </p>
                <span>
                  <GoStarFill className="text-xs text-white" />
                </span>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">
                  {product.numberOfRatings} Ratings & {product.numberofReviews}{" "}
                  Reviews
                </p>
              </div>
            </div>
            <p className="text-3xl font-semibold text-teal-300">{newPrice}</p>

            <div className="grid grid-rows-2  justify-center pb-10c h-fit gap-x-4">
              <div className="h-fit">
                <p className="w-1/2 text-slate-400">{product.description}</p>
              </div>

              <div>
                <p className="w-1/2 text-white">{product.seller}</p>
              </div>
            </div>
            <div className="flex  gap-4">
              <button
                className={`bg-teal-600 text-white p-2 rounded-md ${
                  product.addToCart ? "bg-white" : "bg-teal-500"
                }`}
                onClick={() => handleClick(product._id, product.addToCart)}
              >
                {product.addToCart ? (
                  <span>Remove from Cart</span>
                ) : (
                  <span>Add to Cart</span>
                )}
              </button>
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 mt-4 ">
            <div className="flex flex-col gap-2  w-1/2 ">
              <p className="text-2xl font-semibold bg-gray-800 text-teal-600  p-2">
                General
              </p>
              <General product={product} />
            </div>
            <div className="flex flex-col gap-2  w-1/2">
              <p className="text-2xl font-semibold bg-gray-800  text-teal-600 p-2">
                Processor And Memory Features
              </p>
              <Pandm product={product} />
            </div>
            <div className="flex flex-col gap-2  w-1/2">
              <p className="text-2xl font-semibold bg-gray-800  text-teal-600 p-2">
                Operating System
              </p>
              <Os product={product} />
            </div>

            <div className="flex flex-col gap-2  w-1/2 ">
              <p className="text-2xl font-semibold bg-gray-800  text-teal-600 p-2">
                Display and Audio Features
              </p>
              <Daaf product={product} />
            </div>
            <div className="flex flex-col gap-2  w-1/2 ">
              <p className="text-2xl font-semibold bg-gray-800  text-teal-600 p-2">
                Connectivity
              </p>
              <Connectivity product={product} />
            </div>
            <div className="flex flex-col gap-2  w-1/2 ">
              <p className="text-2xl font-semibold bg-gray-800 text-teal-600  p-2">
                Battery Details
              </p>
              <Battery product={product} />
            </div>
            <div className="flex flex-col gap-2  w-1/2 ">
              <p className="text-2xl font-semibold bg-gray-800 text-teal-600  p-2">
                Warranty
              </p>
              <Warranty product={product} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold bg-gray-800 text-teal-600  p-2">
              Performance Score :{" "}
              <span>
                {Number(product.spec.gpuscore) * 0.35 +
                  Number(product.spec.cpuscore) * 0.3 +
                  (Number(product.spec.ramscore) > 0
                    ? Number(product.spec.ramscore) * 0.2
                    : Number(product.spec.ramscore) + 1 * 0.2) +
                  Number(product.spec.storagescore) * 15}
              </span>
            </p>
            <Specs product={product.spec} />
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Individual;
