import React from "react";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <>
    {/* min-[280px]:w-[300px] min-[520px]:w-[250px] */}
      <div class="rounded-xl  w-[350px]  overflow-hidden shadow-lg bg-white mt-4 p-2  border  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div class="relative">
          <Link to={`/product/${props.id}`}>
          <img
          onClick={window.scrollTo(0,0)}
            class=" rounded-t-xl h-full  w-full object-cover"
            src={props.image}
            alt="Product"
          />
          </Link>
          <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        </div>
        <div class="px-2 py-2">
          <h2 class="font-bold text-sm md:text-lg mb-2 text-gray-800">{props.title}</h2>
          <div class="flex items-center">
            <span class="text-lg font-bold text-green-600">${props.newprice}</span>
            <span class="text-sm line-through text-gray-500 ml-2">${props.oldprice}</span>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Items;
