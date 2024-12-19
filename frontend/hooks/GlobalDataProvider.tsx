import React, { createContext, useReducer, useContext, ReactNode } from "react";
import {updateLaptopInCart} from "./bool"
import { Laptop } from "../types/types";


type DataContextType = {
  state: { data: Laptop[] };
  dispatch: React.Dispatch<ActionType>;
};

type ActionType =
  | { type: "SET_DATA"; payload: Laptop[] }
  | { type: "UPDATE_DATA"; payload: Laptop };

const DataContext = createContext<DataContextType>({
  state: { data: [] },
  dispatch: () => {
    throw new Error("Dispatch function must be used within a DataProvider");
  },
});

const dataReducer = (state: { data: Laptop[] }, action: ActionType) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
      case "UPDATE_DATA":
        return {
          ...state,
          data: state.data.map((item: Laptop) =>
            item._id === action.payload._id
              ? { ...item, addToCart: !item.addToCart } 
              : item
          ),
        };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dataReducer, { data: [] });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export const handleAddToCartToggle = async (item: Laptop, dispatch: any) => {
  // Toggle the addTocart property locally first
  const updatedLaptop = { ...item, addToCart: !item.addToCart };

  try {
    // Call the API to update the addTocart property in the backend
    const updatedLaptopData = await updateLaptopInCart(item._id, updatedLaptop.addToCart);

    // Dispatch the update action to update the state
    dispatch({
      type: 'UPDATE_DATA',
      payload: updatedLaptopData, // Pass the updated laptop data returned from API
    });
  } catch (error) {
    console.error('Error toggling add to cart:', error);
  }
};

