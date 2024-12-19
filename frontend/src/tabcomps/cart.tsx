import React from "react";
import { useData } from "../../hooks/GlobalDataProvider";
import { Laptop } from "types/types";
import { formatToINR } from "./individual";
import axios from "axios";

const Cart = () => {
  const { state, dispatch } = useData();

  const cartData = state.data.filter((item: Laptop) => item.addToCart === true);

  const handleClick = async (id: string, currentAddToCart: boolean) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/products/${id}`, {
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

  let sum = 0;
  const tot = () => {
    cartData.map((item: Laptop) => {
      sum += Number(item.spec[0].price);
    });
    return sum;
  };

  return (
    <main className="pt-20">
      <p>{cartData.length} items in Cart</p>
      <div className="grid grid-cols-5 gap-x-10 gap-y-5 px-4 ">
        {cartData.map((item: Laptop) => (
          <div className="flex flex-col gap-4 border-solid border-2 border-gray-400 px-5 py-10" key={item._id}>
            <div>
              <img
                src="/laptop.jpeg"
                alt="Laptop"
                className="max-h-70 max-w-70 object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between gap-2">
                {/* Name */}
                <p className="whitespace-nowrap">{item.name}</p>

                <p>{formatToINR(Number(item.spec[0].price))}</p>
              </div>

              <div>
                <button
                  className={(item.addToCart ? "bg-red-500" : "bg-green-500") + " p-2 rounded-md" }
                  onClick={() => handleClick(item._id, item.addToCart)}
                >
                  {item.addToCart ? <span className="text-white">Remove</span> : <span className="text-white">Add</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      Total : {formatToINR(tot())}
    </main>
  );
};

export default Cart;
