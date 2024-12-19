import React from "react";
import { useSearchContext } from "../hooks/SearchProvider";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useData } from "../hooks/GlobalDataProvider";

const Nav = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { state } = useData();
  const dropDownData = [...new Set(state.data.map((item) => item.name))];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const Navigate = useNavigate();

  const searchRedirect = () => {
    if (searchValue.length > 0) {
      Navigate("/res");
    }
  };

  const homeRedirect = () => {
    Navigate("/home");
  };
  return (
    <div className="flex justify-between p-6 bg-slate-400 fixed w-[100%] z-[10]">
      <div onClick={homeRedirect} className="hover:cursor-pointer">
        <p>Pasakon-Magasin</p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <button onClick={searchRedirect}>
              <IoIosSearch className="text-2xl" />
            </button>
            <input
              type="text"
              name=""
              id=""
              value={searchValue}
              placeholder="Search for Laptops"
              onChange={handleSearchChange}
            />
          </div>
          <div className="absolute right-45 translate-x-8 top-[48px] bg-white h-fit pr-[31px] overflow-y-scroll no-scrollbar">
            {dropDownData
              .filter((item) => {
                const search = searchValue.toLowerCase();
                const name = item.toLowerCase();

                return searchValue && name.startsWith(search) && name !== search;
              }).splice(0,10)
              .map((item, index) => (
                <div key={index} className="hover:cursor-pointer">
                  <p onClick={()=>setSearchValue(item)}>{item}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="hover:cursor-pointer" onClick={() => Navigate("/cart")}>
          <p>Cart</p>
        </div>

        <p>Sign-in/Login</p>
      </div>
    </div>
  );
};

export default Nav;
