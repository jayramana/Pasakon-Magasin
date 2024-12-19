// src/hooks/api.ts
import axios from "axios";

export const updateLaptopInCart = async (id: string, addTocart: boolean) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/products/${id}`,
      {
        addTocart: addTocart,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating laptop:", error);
    throw new Error("Failed to update laptop");
  }
};
