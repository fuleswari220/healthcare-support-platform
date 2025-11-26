import React from "react";

const InfiniteHospitalSlider = ({ images = [] }) => {
  // Duplicate images to create the seamless loop effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-6 md:py-8 lg:py-12 bg-white">
      <div
        className="flex w-max"
        style={{
          animation: `slide ${images.length * 4}s linear infinite`,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 md:px-6 lg:px-8 flex items-center justify-center"
            style={{
              // Responsive width and height
              width: "clamp(140px, 20vw, 280px)",
              height: "clamp(110px, 15vw, 220px)",
            }}
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              // Responsive image sizing
              className="w-auto object-contain"
              style={{
                height: "clamp(60px, 8vw, 96px)",
                maxWidth: "90%",
              }}
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
            transform: translateX(-50%);
          }
        }

        /* Mobile-first responsive adjustments */
        @media (max-width: 640px) {
          .flex.w-max {
            animation-duration: ${images.length * 3}s !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .flex.w-max {
            animation-duration: ${images.length * 3.5}s !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .flex.w-max {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteHospitalSlider;