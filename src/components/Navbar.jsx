import React, { useState } from "react";
import { HiMenuAlt3, HiChevronDown, HiDownload, HiStar } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO1.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Membership", path: "/membership", featured: true },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.ml.supportsystemsoft.mlsoftech";

  const closeMenu = () => setOpen(false);

  return (
    <>
       {/* ===== Ad ===== */}
      {/* <div
        id="seo-top-banner"
        className="fixed top-0 left-0 w-full h-16 md:h-20 lg:h-20 bg-gray-900 text-white text-center flex items-center justify-center z-[60] text-sm md:text-base font-medium shadow-lg"
      >
        <span className="opacity-40 animate-pulse">
          Ad
        </span>
      </div> */}
      
      {/* Main Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-green-50 via-white to-green-50 shadow-lg border-b border-green-100">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-14 sm:h-18 w-auto object-contain" />
            </Link>

            {/* Desktop Menu*/}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                    item.featured
                      ? "bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-2"
                      : "text-gray-800 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {item.featured && <HiStar className="text-yellow-300 animate-pulse" />}
                  {item.name}
                  {item.featured && <HiStar className="text-yellow-300 animate-pulse" />}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://mlsupport.org/ML_support/Customer/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-white text-green-700 font-bold border-2 border-green-300 rounded-xl hover:bg-green-50 hover:border-green-500 transition-all duration-300 shadow-md"
              >
                Login
              </a>
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <HiDownload className="text-xl" />
                Download App
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-700 text-3xl p-2 bg-green-50 rounded-lg border border-green-200"
            >
              {open ? <GiCrossMark /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Click outside to close) */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
        
        <div className="px-6 py-10 space-y-2 overflow-y-auto h-full pb-20">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={`block w-full px-6 py-5 text-lg font-medium rounded-xl transition-all duration-300 ${
                item.featured
                  ? "bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white shadow-xl flex items-center justify-between"
                  : "text-gray-800 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <span>{item.name}</span>
              {item.featured && (
                <div className="flex items-center gap-2">
                  <HiStar className="text-yellow-300 animate-bounce" />
                  <span className="text-xs bg-yellow-300 text-black px-3 py-1 rounded-full font-bold">
                    SPECIAL
                  </span>
                </div>
              )}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-8 space-y-4 border-t-2 border-green-100 mt-6">
            <a
              href="https://mlsupport.org/ML_support/Customer/login.php"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center py-5 bg-green-50 text-green-700 font-bold text-xl rounded-xl border-2 border-green-300 hover:bg-green-100 transition-all"
            >
              Login
            </a>

            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center py-5 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <HiDownload className="text-2xl" />
              Download App
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
