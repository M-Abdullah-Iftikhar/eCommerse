import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProducts from "../../Components/AddProducts/AddProducts";
import ListProducts from "../../Components/ListProducts/ListProducts";

const Admin = () => {
  return (
    <div className="lg:flex">
      <Sidebar className="" />

      <Routes>
        <Route path="/" element={
          <div className="text-[#454545] flex flex-col justify-center my-[30%] lg:my-[0%]  mx-auto items-center gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome to Admin Panel</h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Here is your Dashboard</p>
          </div>}></Route>
        <Route path="/addproduct" element={<AddProducts />}></Route>
        <Route path="/listproduct" element={<ListProducts />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
