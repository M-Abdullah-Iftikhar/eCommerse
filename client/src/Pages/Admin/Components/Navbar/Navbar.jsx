
import logoChar from "../../assets/mtChars.png";
import logoLady from "../../assets/mtLady.png";
import { Link } from "react-router-dom";


const Navbar = () => {
 


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
          
        </div>
      </section>

      
    </>
  );
};

export default Navbar;
