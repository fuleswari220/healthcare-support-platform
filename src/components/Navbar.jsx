import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO1.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Hospitals", path: "/hospital" },
    { name: "Membership", path: "/membership" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
      {/* Centered Navbar Container */}
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between px-4 sm:px-6 py-3">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 sm:h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-white font-medium text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative pb-1 transition-all duration-300 hover:text-green-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Login Button */}
          <a
            href="https://mlsupport.org/ML_support/Customer/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#22c55e] text-black font-bold px-6 py-2.5 rounded-xl hover:bg-[#16a34a] transition transform hover:scale-105 shadow-lg"
          >
            Login
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl z-50 relative"
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Login Button (shown below hamburger on small screens) */}
          <a
            href="https://mlsupport.org/ML_support/Customer/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 bg-[#22c55e] text-black font-bold px-4 py-2 text-sm rounded-xl hover:bg-[#16a34a] transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] mt-3">
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
              <ul className="py-4">
                {menuItems.map((item, index) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-3 text-white font-medium text-lg hover:bg-white/10 transition"
                    >
                      {item.name}
                    </Link>
                    {index < menuItems.length - 1 && (
                      <hr className="border-white/10 mx-6" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;