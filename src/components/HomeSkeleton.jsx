import React from "react";

export default function HomeSkeleton() {
  return (
    <div className="animate-pulse w-full min-h-screen relative">

      {/* Navbar Skeleton */}
      <nav className="w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gray-300/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between px-4 sm:px-6 py-3">

            {/* Logo */}
            <div className="h-12 w-32 bg-gray-300 rounded"></div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
            </ul>

            {/* Login Button */}
            <div className="hidden lg:block h-10 w-28 bg-gray-300 rounded-xl"></div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden h-8 w-8 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </nav>

      {/* Hero Background Placeholder */}
      <div className="absolute inset-0 bg-gray-200"></div>

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content Skeleton */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:max-w-7xl mx-auto pt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT SIDE TEXT */}
          <div className="w-full lg:w-1/2 text-white space-y-6">

            {/* Large Heading */}
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-10 w-2/3 bg-gray-300 rounded"></div>

            {/* Paragraph */}
            <div className="space-y-3 mt-4">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <div className="h-12 w-40 bg-gray-300 rounded-full"></div>
              <div className="h-12 w-56 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT SIDE EMPTY SPACE */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="h-80 w-full bg-gray-300/20 rounded-xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
