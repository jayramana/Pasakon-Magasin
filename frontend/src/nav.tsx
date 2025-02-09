import React, { useState, useEffect } from "react";
import { useSearchContext } from "../hooks/SearchProvider";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useData } from "../hooks/GlobalDataProvider";
import { Input } from "@/components/ui/input";

const Nav = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { state } = useData();
  const [searchbtn, setSearchbtn] = useState(false);
  const [recentData, setRecentData] = useState<string[]>([]);
  const dropDownData = [...new Set(state.data.map((item) => item.name))];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const Navigate = useNavigate();

  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("recentData") || "[]");
      setRecentData(Array.isArray(storedData) ? storedData : []);
    } catch {
      setRecentData([]);
    }
  }, []);

  const localAdd = (term: string) => {
    if(term.length === 0) return;
    const updatedRecents = [term, ...recentData].slice(0, 5);
    setRecentData(updatedRecents);
    localStorage.setItem("recentData", JSON.stringify(updatedRecents));
  };

  const searchRedirect = () => {
    localAdd(searchValue);
    if (searchValue.length > 0) {
      Navigate("/res");
    }
  };

  const homeRedirect = () => {
    Navigate("/home");
  };
  return (
    <div className="flex justify-between p-6 bg-gray-300 fixed w-[100%] z-[10]">
      <div onClick={homeRedirect} className="hover:cursor-pointer">
        <p className="font-sans font-semibold text-lg">Pasakon-Magasin</p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <button
              onClick={() => {
                searchRedirect();
                setSearchbtn(false);
              }}
            >
              <IoIosSearch className="text-2xl text-teal-400" />
            </button>
            <Input
              type="text"
              name=""
              id=""
              value={searchValue}
              className="outline-none border-none  w-[400px]"
              onClick={() => setSearchbtn(true)}
              placeholder="Search for Laptops"
              onChange={handleSearchChange}
            />
          </div>
          <div
            className={`absolute right-45 translate-x-8 top-[58px] h-fit w-[400px] overflow-y-scroll no-scrollbar flex flex-col gap-4 ${
              searchbtn ? "block" : "hidden"
            }`}
          >
            <div className="border-b-2 border-b-teal-600 flex flex-col gap-4">
              <p>Recent Searches</p>
              {recentData.map((item, index) => (
                <div key={index} className="hover:cursor-pointer">
                  <p
                    onClick={() => {
                      setSearchValue(item);
                      setSearchbtn(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {dropDownData
              .filter((item) => {
                const search = searchValue.toLowerCase();
                const name = item.toLowerCase();

                return (
                  searchValue && name.startsWith(search) && name !== search
                );
              })
              .splice(0, 5)
              .map((item, index) => (
                <div key={index} className="hover:cursor-pointer">
                  <p
                    onClick={() => {
                      setSearchValue(item);
                      setSearchbtn(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div onClick={() => Navigate("/add")} className="hover:cursor-pointer">
          <p>Add</p>
        </div>
        <div className="hover:cursor-pointer" onClick={() => Navigate("/cart")}>
          <p>Cart</p>
        </div>

        <div className="flex gap-2 items-center transform translate-y-[-6.5px]">
          <button><p>Log-In</p></button>
          Or
          <button><p>Register</p></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
