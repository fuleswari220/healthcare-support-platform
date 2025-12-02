import React from "react";

const InfiniteHospitalSlider = ({ logos = [] }) => {
  if (!logos || logos.length === 0) return null;

  const duplicatedLogos = [...logos, ...logos];

  const animationDuration = `${logos.length * 3.8}s`;

  return (
    <div className="relative w-full overflow-hidden py-8 bg-white">
      <div
        className="flex w-max"
        style={{
          animation: `slide ${animationDuration} linear infinite`,
        }}
      >
        {duplicatedLogos.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-5 md:px-8"
            style={{
              minWidth: "200px",
            }}
          >
            <img
              src={item.src}
              alt={`Hospital partner ${index + 1}`}
              className="w-auto object-contain transition-transform duration-300"
              style={{
                height:
                  item.size === "big"
                    ? "clamp(100px, 13vw, 150px)"
                    : "clamp(65px, 8vw, 95px)",
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.08))",
              }}
            />

          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        img:hover {
          transform: scale(1.15);
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          div[style*="animation"] {
            animation-duration: ${logos.length * 3}s !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteHospitalSlider;