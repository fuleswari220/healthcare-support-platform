import React from "react";

const InfiniteHospitalSlider = ({ images = [] }) => {
  // Duplicate images to create the seamless loop effect
  const duplicatedImages = [...images, ...images];

  return (
    // Added bg-white to ensure clean background behind logos
    <div className="relative w-full overflow-hidden py-12 mt-10 bg-white">
      <div
        className="flex w-max"
        // Ensure backticks (`) are used here
        style={{
          animation: `slide ${images.length * 4}s linear infinite`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 px-8 flex items-center justify-center"
          >
            {/* Removed hover, grayscale, transition, and opacity classes.
               Logos will now appear in full color normally.
            */}
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Kept at -50% for seamless looping */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteHospitalSlider;