import React, { useContext, useState, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";
import logoChar from "../Assets/mtChars.png";
import logoLady from "../Assets/mtLady.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import { orderNotificationSchema } from "../Notifications/orderNotification"
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { TotalCartItem } = useContext(ShopContext);
  // const { UserNotifications } = useContext(orderNotificationSchema);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdownTimeout = useRef(null);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownEnter = () => {
    // Clear any existing close timeout to keep the dropdown open
    clearTimeout(closeDropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    // Set a timeout to close the dropdown after 500ms if still not hovered over
    closeDropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  return (
    <>
      <section className="flex justify-between items-center p-3 shadow-md bg-white">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <img className="w-10 sm:w-12 md:w-14 lg:w-16" src={logoLady} alt="Logo Lady" />
            <img className="w-10 sm:w-12 md:w-14 lg:w-16 -ml-2" src={logoChar} alt="Logo Char" />
          </div>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-900 font-bold">MISHI & THREADS</p>
        </div>

        {/* Right Section with Menu, Cart, and Login/Logout */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
        <div
  className="relative cursor-pointer block"
  onMouseEnter={handleDropdownEnter}
  onMouseLeave={handleDropdownLeave}
>
  <span className="hover:text-[#ff4141]">MENU</span>
  {isDropdownOpen && (
    <ul className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-lg z-10 p-3 text-sm">
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/">View All Collection</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/casual">Casual Wear</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/formals">Formals</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/co-ord">Co-ord Set</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/matching-separates">Matching Separates</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/four-piece">4 Piece</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/night-dress">Night Dress</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/frocks">Frocks</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/lehenga">Lehenga</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/western">Western Wear</Link>
      </li>
      <li className="py-1 hover:text-[#ff4141]">
        <Link to="/unstitched">Unstitched</Link>
      </li>
    </ul>
  )}
</div>

          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.replace("/");
              }}
              className="rounded-full border border-gray-400 w-20 sm:w-28 h-8 text-sm font-semibold text-gray-600"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="rounded-full border border-gray-400 w-20 sm:w-28 h-8 text-sm font-semibold text-gray-600">
                Log in
              </button>
            </Link>
          )}
          <Link to="/cart" className="relative">
            <img className="w-6 sm:w-8" src={cart_icon} alt="Cart Icon" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {TotalCartItem()}
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-2xl" onClick={handleMenuToggle}>
            {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </section>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-700">
          <ul className="flex flex-col gap-4 py-4 px-6 font-semibold">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/">View All Collection</Link>
            </li>
           
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/casual">Casual Wear</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/formals">Formals</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/co-ord">Co-ord Set</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/matching-separates">Matching Separates</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/four-piece">4 Piece</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/night-dress">Night Dress</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/frocks">Frocks</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/lehenga">Lehenga</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/western">Western Wear</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/unstitched">Unstitched</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
