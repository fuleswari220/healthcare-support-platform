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
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-center mt-6">

      {/* NAV BAR WRAPPER */}
      <div
        className="
          relative w-[80%] md:w-[80%]
          bg-black/30 backdrop-blur-xl
          border border-white/10 rounded-2xl shadow-lg
          flex items-center justify-between
          px-4 
        "
      >
        {/* LEFT - LOGO */}
        <img src={logo} alt="Logo" className="w-28 h-16 object-contain" />

        {/* CENTER CONTACT BUTTON (MOBILE) */}
        <Link
          to="/contact"
          className="
            md:hidden bg-[#22c55e] text-black
            font-semibold px-4 py-2 rounded-xl
            text-sm
            hover:bg-[#16a34a] transition
          "
        >
          Contact
        </Link>

        {/* CENTER MENU (DESKTOP ONLY) */}
        <ul className="hidden md:flex items-center gap-10 text-white text-bold text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="transition hover:text-green-400 hover:border-b pb-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT CONTACT BUTTON (DESKTOP) */}
        <a
          href="https://mlsupport.org/ML_support/Customer/login.php"
          target="_blank"
          rel="noopener noreferrer"
          className="
    hidden md:block bg-[#22c55e] text-black
    font-semibold px-6 py-2 rounded-xl
    hover:bg-[#16a34a] transition
  "
        >
          Login
        </a>


        {/* HAMBURGER ICON */}
        <div
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div
          className="
            md:hidden absolute top-20 w-[80%]
            bg-blue-900/30 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            text-white py-6
            flex flex-col items-center
            animate-slideDown
          "
        >
          <ul className="flex flex-col gap-3 w-full px-4">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="
                    block w-full text-center py-2
                    rounded-lg
                    transition
                    hover:bg-blue-900/60
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
