import React from "react";
import exlusiveImage from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section class="px-3 py-5 bg-neutral-100 lg:py-10 container mx-auto">
      <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5 ">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p class="text-4xl font-bold md:text-7xl text-orange-600">Exlusive</p>
          <p class="text-4xl font-bold md:text-7xl">OFFER FOR YOU</p>
          <p class="mt-2 text-sm md:text-lg">Only on Best Selling Products</p>
          <Link to="/womens">
            <button class="cursor-pointer text-lg md:text-2xl w-[170px] sm:w-[230px] h-12 sm:h-16 rounded-r-full rounded-l-full bg-[#e93232] text-white py-2 px-5 mt-6 sm:mt-10">
              Shop Now
            </button>
          </Link>
        </div>
        <div class="order-1 lg:order-2">
          <img
            class="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
            src={exlusiveImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
