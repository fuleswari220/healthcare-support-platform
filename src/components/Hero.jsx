import React from "react";
import bgImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImg})` }}
      id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-7xl mx-auto
  pt-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your 24×7 <span className="text-green-500">Healthcare</span> Partner
              <br /> 
              <span className="block sm:inline"> - Wherever Life Takes You</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Free ambulance service up to 180 km, weekly diabetic screenings, Free online doctor consultation, Medicine home delivery — all built into one trusted healthcare membership.
            </p>


            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document.getElementById("membershipBenefits")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Become a Member
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://mlsupport.org/ML_support/Customer/login.php",
                    "_blank"
                  )
                }
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Login to Request a Call-Back
              </button>
            </div>
          </div>

          {/* EMPTY RIGHT SIDE */}
          <div className="w-full lg:w-1/2 hidden lg:block"></div>
        </div>
      </div>
    </section>

  );
};

export default Hero;