import React,{useState} from "react";
import { useSearchContext } from "../hooks/SearchProvider";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useData } from "../hooks/GlobalDataProvider";
import { Input } from "@/components/ui/input"


const Nav = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { state } = useData();
  const [searchbtn,setSearchbtn] = useState(false);
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
    <div className="flex justify-between p-6 bg-black fixed w-[100%] z-[10] text-white ">
      <div onClick={homeRedirect} className="hover:cursor-pointer">
        <p className="text-[#E50914] font-sans font-semibold text-lg">Pasakon-Magasin</p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <button onClick={() => { searchRedirect(); setSearchbtn(false) }}>
              <IoIosSearch className="text-2xl text-white" />
            </button>
            <Input
              type="text"
              name=""
              id=""
              value={searchValue}
              className="outline-none border-none text-white bg-gray-950  w-[400px]"
              onClick={()=>setSearchbtn(true)}
              placeholder="Search for Laptops"
              onChange={handleSearchChange}

            />
          </div>
          <div className={`absolute right-45 translate-x-8 top-[58px] bg-black h-fit w-[400px] overflow-y-scroll no-scrollbar flex flex-col gap-1 ${searchbtn ? 'block' : 'hidden'}`}>
            {dropDownData
              .filter((item) => {
                const search = searchValue.toLowerCase();
                const name = item.toLowerCase();

                return searchValue && name.startsWith(search) && name !== search;
              }).splice(0,10)
              .map((item, index) => (
                <div key={index} className="hover:cursor-pointer">
                  <p onClick={() => { setSearchValue(item); setSearchbtn(false) }} >{item}</p>
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
