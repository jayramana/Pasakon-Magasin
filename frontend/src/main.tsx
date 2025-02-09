import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./tabcomps/home";
import Individual from "./tabcomps/individual";
import Results from "./tabcomps/results";
// import Nav from "./nav";
import App from "./App";
import { DataProvider } from "../hooks/GlobalDataProvider";
import FilterProvider from "../hooks/FilterProvider";
import SearchProvider from "../hooks/SearchProvider";
import Filters from "./tabcomps/filters";
import Cart from "./tabcomps/cart";
import AddProduct from "./tabcomps/addProduct";
import Register from "../comps/auth/register";
import Login from "../comps/auth/login";
import { UserHome, DeveloperHome, AdminHome } from "../comps/homepage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <SearchProvider>
        <FilterProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ind/:id" element={<Individual />} />
              <Route path="/res" element={<Results />} />
              <Route path="/filters" element={<Filters />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home/user" element={<UserHome />} />
              <Route path="/home/dev" element={<DeveloperHome />} />
              <Route path="/home/admin" element={<AdminHome />} />
            </Routes>
          </Router>
        </FilterProvider>
      </SearchProvider>
    </DataProvider>
  </StrictMode>
);
