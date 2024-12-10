import React from "react";
import logo from "../Assets/logo.png";
import { IoSomeIcon } from 'react-icons/io5';

import { IoLogoWhatsapp } from "react-icons/io5";
import logoChar from "../Assets/mtChars.png";
import logoLady from "../Assets/mtLady.png";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlinePinterest } from "react-icons/ai";

const Footer = () => {
  return (
    <footer class="bg-gray-100 pt-10 mt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col gap-10 justify-center items-center">
          <div class="text-center md:text-left mb-5 md:mb-0 flex gap-3 justify-center items-center">
          <img className="w-10 sm:w-12 md:w-14 lg:w-16" src={logoLady} alt="Logo Lady" />
          <img className="w-10 sm:w-12 md:w-14 lg:w-16 -ml-2" src={logoChar} alt="Logo Char" />
            <a href="#" class="text-gray-800 font-bold text-3xl">
              MISHI & THREADS
            </a>
          </div>
          <div class="flex  gap-2 sm:gap-5 text-xs sm:text-sm md:text:md ld:text-lg ">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Company
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Products
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Offices
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
          <div class="flex gap-10">
            <a href="#" class="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">
              <IoLogoWhatsapp />
            </a>
            <a href="#" class="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="#" class="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">
              <AiOutlinePinterest />
            </a>
          </div>
        </div>
        <hr className="h-1 mx-20 mt-10 bg-gray-500" />
        <div className="flex text-xs sm:text-sm md:text:md ld:text-lg  justify-center py-5 text-gray-600 font-semibold">
          <p>Copyright c 2024 - All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
