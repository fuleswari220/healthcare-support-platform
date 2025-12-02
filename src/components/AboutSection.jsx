import React from "react";

const AboutSection = () => {
    return (
        <section className="w-full flex justify-center py-10 px-4">
            <div className="relative w-full max-w-4xl bg-[#EAFBF2] rounded-3xl p-6 md:p-10 shadow-sm border border-[#c4f3d9]">

                {/* Top-left curve line */}
                <span className="absolute -top-4 md:-top-6 left-4 md:left-6 
                    w-28 h-10 md:w-40 md:h-12 
                    border-t-4 border-l-4 border-[#22c55e] rounded-tl-3xl"></span>

                {/* Bottom-right curve line */}
                <span className="absolute -bottom-4 md:-bottom-6 right-4 md:right-6 
                    w-28 h-10 md:w-40 md:h-12 
                    border-b-4 border-r-4 border-[#22c55e] rounded-br-3xl"></span>

                {/* Opening quote icon */}
                <span className="text-[#22c55e] text-6xl md:text-8xl absolute -top-2 md:-top-4 left-6 md:left-10">
                    &ldquo;
                </span>

                <h2 className="text-center text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                    About ML Support
                </h2>

                <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base px-2 md:px-0">
                    Your health shouldn’t depend on luck. Since 2020, ML Support has ensured
                    every family receives timely, reliable care — from free ambulance service
                    to quick diagnostics and 24×7 medical assistance. Because when moments
                    matter, we make sure help is already on the way.
                </p>

                {/* Closing quote icon */}
                <span className="text-[#22c55e] text-6xl md:text-8xl absolute -bottom-6 md:-bottom-8 right-6 md:right-10">
                    &rdquo;
                </span>
            </div>
        </section>
    );
};

export default AboutSection;
