import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext<{
  searchValue: string;
  setSearchValue: (value: string) => void;
}>({
  searchValue: "",
  setSearchValue: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
