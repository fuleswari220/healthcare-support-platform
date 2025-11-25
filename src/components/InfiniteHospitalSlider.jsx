"use client";

import React from "react";

const InfiniteHospitalSlider = ({ images = [] }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-12 mt-10">
      <div
        className="flex"
        style={{
          animation: `slide ${images.length * 0.5}s linear infinite`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 px-8 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="h-20 md:h-24 w-auto object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Fade edges */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent" /> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent" /> */}

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteHospitalSlider;  