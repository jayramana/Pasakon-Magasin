import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/GlobalDataProvider";
import axios from "axios";
import { Laptop } from "types/types";
import { GoStarFill } from "react-icons/go";

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

  const price = Number(product?.spec?.[0]?.price);
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
      const res = await axios.put(`${import.meta.env.VITE_API_PORT}api/products/${id}`, {
        addToCart: !addToCart,
      });
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
    <div className="pt-20">
      <main className="flex gap-10" key={product._id}>
        <div className="flex flex-col gap-4">
          <div className="p-4 border-solid border-2 flex flex-col">
            <img src="/laptop.jpeg" alt="" className="h-80" />
          </div>
          <div className="flex justify-center gap-4">
            <button
              className={`bg-blue-500 text-white p-2 rounded-md ${
                product.addToCart ? "bg-red-500" : "bg-green-500"
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
        <div>
          <p>
            {product.name} {product.model} {"("}
            {product.processor?.[0]?.ram}/
            {product.spec?.[0]?.storagespace +
              " " +
              product.processor?.[0]?.storageType}
            /{product.displayAudio?.[0]?.screenSize}
            {")"}
          </p>
          <div className="flex gap-2">
            <div className="flex items-center bg-green-600 w-fit px-0.5 py-0.5 gap-0.5 rounded-sm">
              <p className="text-white text-xs font-bold">{product.ratings}</p>
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
          <p>{newPrice}</p>
          <div className="">
            <div className="w-fit flex gap-4">
              <p className="text-gray-500 font-semibold">Description</p>
              <p className="">{product.description}</p>
            </div>
          </div>
          <p>Specifications</p>
          <div>

          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">General</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Name : </span>
                  <span>{product.name}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Model : </span>
                  <span>{product.model}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Brand : </span>
                  <span>{product.brand}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Category : </span>
                  <span>{product.category}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Weight : </span>
                  <span>{product.spec?.[0].weight}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Color : </span>
                  <span>{product.additionalDetails?.[0].color}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Processor And Memory Features</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Name : </span>
                  <span>{product.processor?.[0]?.processorname}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">SSD : </span>
                  <span>
                    {product.processor?.[0].ssd ? (
                      <span>Yes</span>
                    ) : (
                      <span>No</span>
                    )}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">RAM : </span>
                  <span>{product.processor?.[0].ram}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Type : </span>
                  <span>{product.processor?.[0].ramtype}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Processor Variant : </span>
                  <span>{product.processor?.[0].processorVariant}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Graphic Processor : </span>
                  <span>{product.processor?.[0].graphicProcessor}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Number of Cores : </span>
                  <span>{product.processor?.[0].numberOfCores}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Storage Type : </span>
                  <span>{product.processor?.[0].storageType}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Operating System</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">OS : </span>
                  <span>{product.os?.[0].os}</span>
                </p>
                <p>
                  <span className="font-semibold">OS Architecture: </span>
                  <span>{product.os?.[0].osarchitecture}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Display and Audio Features</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Screen Size : </span>
                  <span>{product?.displayAudio?.[0]?.screenSize}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Screen Type : </span>
                  <span>{product?.displayAudio?.[0]?.screenType}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Screen Resolution : </span>
                  <span>{product?.displayAudio?.[0]?.screenResolution}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Touch Screen : </span>
                  {product?.displayAudio?.[0]?.touchScreen ? (
                    <span>Yes</span>
                  ) : (
                    <span>No</span>
                  )}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Internal Mic : </span>
                  <span>{product?.displayAudio?.[0]?.internalMic}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Speakers : </span>
                  <span>{product?.displayAudio?.[0]?.speakers}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Connectivity</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Wireless LAN : </span>
                  <span>{product?.connectivity?.[0]?.wirelessLAN}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Bluetooth : </span>
                  <span>{product?.connectivity?.[0]?.bluetooth}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Battery Details</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Battery Cell Type : </span>
                  <span>{product?.battery?.[0]?.batterycelltype}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Number of Cells : </span>
                  <span>{product?.battery?.[0]?.numberofcells}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Battery Energy Content : </span>
                  <span>{product?.battery?.[0]?.batteryenergycontent}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2  w-1/2 border-x-2">
              <p className="text-2xl font-semibold bg-gray-100 border-y-2 p-2">Warranty</p>
              <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
                <p className="text-sm">
                  <span className="font-semibold">Warranty Details : </span>
                  <span>{product?.warranty?.[0]?.warrantyDetails}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Warranty Period : </span>
                  <span>{product?.warranty?.[0]?.warrantyPeriod}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Warranty Type : </span>
                  <span>{product?.warranty?.[0]?.warrantyType}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Warranty Summary : </span>
                  <span>{product?.warranty?.[0]?.warrantySummary}</span>
                </p>
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </main>
    </div>
  );
};

export default Individual;
