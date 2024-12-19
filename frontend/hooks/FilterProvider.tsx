import React, { createContext, useContext, useState } from "react";

// Define the context type
type FilterContextType = {
  filters: {
    graphicsCard: string;
    processor: string;
    ram: string;
    storage: string;
    operatingSystem: string;
    ramType: string;
    category: string;
  };
  updateFilter: (category: keyof FilterContextType["filters"], value: string) => void;
  resetFilters: () => void;
};

// Initialize the context
export const FilterContext = createContext<FilterContextType>({
  filters: {
    graphicsCard: "",
    processor: "",
    ram: "",
    storage: "",
    operatingSystem: "",
    ramType: "",
    category: "",
  },
  updateFilter: () => { },
  resetFilters: () => { },
});

// Hook to use the context
export const useFilterContext = () => useContext(FilterContext);

const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState({
    graphicsCard: "",
    processor: "",
    ram: "",
    storage: "",
    operatingSystem: "",
    ramType: "",
    category: "",
  });

  const updateFilter = (category: keyof typeof filters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };
  const resetFilters = () => {
    setFilters({
      graphicsCard: "",
      processor: "",
      ram: "",
      storage: "",
      operatingSystem: "",
      ramType: "",
      category: "",
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter,resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
