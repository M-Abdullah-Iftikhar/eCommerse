import React from "react";
import handicon from "../Assets/hand_icon.png";
import arrowimg from "../Assets/arrow.png";
import heroImg from "../Assets/hero_image.png";
import './Hero.css'
// import heroImg2 from "../Assets/hero1.png";

const Hero = () => {
  const gradientStyle = {
    background: 'linear-gradient(90deg, rgba(255,196,0,0.6223739495798319) 1%, rgba(243,210,33,0.5495448179271709) 38%, rgba(243,241,237,0.8436624649859944) 69%)',
  };
  return (
   
    <div style={gradientStyle} class="">
    <div class="flex flex-col-reverse min-[510px]:flex-row justify-around">
      <div class="flex flex-col p-10 items-center min-[510px]:items-baseline  justify-center">
        <span class="w-20 h-2 bg-gray-800 mb-12"></span>
        <h1 class="text-lg sm:text-2xl md:text-3xl font-black leading-none">
          New Arrivals Only
        </h1>
        <div class="flex gap-5 items-center">
          <p class="text-[#171717] min-[300px]:text-3xl  text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold">
            new
          </p>
          <img class="w-12 sm:w-16 md:w-20 lg:w-24" src={handicon} alt="" />
        </div>
        <div>
          <p class="text-[#171717] min-[300px]:text-3xl  text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
            collections
          </p>
          <p class="text-[#171717] min-[300px]:text-3xl  text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
            for everyone
          </p>
        </div>
        <div>
          <a href="#Newcollection">
          <button class="flex justify-center text-xs md:text-lg items-center gap-3 md:gap-5 w-[170px] md:w-[250px] text-white font-bold h-[50px]  md:h-[60px] rounded-r-full rounded-l-full bg-[#e93232] mt-5 sm:mt-10">
            Latest Collection <img className="w-5" src={arrowimg} alt="" />
          </button>
          </a>
        </div>
      </div>
      <div>
        <img src={heroImg} class="heroimg" alt="hero section" />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
