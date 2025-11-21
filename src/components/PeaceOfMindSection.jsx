import React from "react";
import { Shield } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";


const PeaceOfMindSection = () => {
    return (
        <section className="py-6 bg-gradient-to-b from-transparent to-emerald-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl shadow-md overflow-hidden">
                    <div className="p-4 md:p-5 text-center">

                        {/* 3 Steps */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">

                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold text-emerald-600 border-2 border-emerald-600">
                                    1
                                </div>
                                <div className="mt-2 text-center">
                                    <h3 className="font-semibold text-gray-900 text-xs">Sign Up Easily</h3>
                                    <p className="text-[10px] text-gray-600">
                                        Join online or call our 24×7 healthcare helpline.
                                    </p>
                                </div>
                            </div>

                            {/* Dotted Line */}
                            <div className="hidden md:block flex-1 border-t-4 border-dashed border-emerald-400 opacity-50"></div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold text-emerald-600 border-2 border-emerald-600">
                                    2
                                </div>
                                <div className="mt-2 text-center">
                                    <h3 className="font-semibold text-gray-900 text-xs">Request Help Anytime</h3>
                                    <p className="text-[10px] text-gray-600">
                                        Call or use the app for ambulance, doctor, or diagnostics.
                                    </p>
                                </div>
                            </div>

                            {/* Dotted Line */}
                            <div className="hidden md:block flex-1 border-t-2 border-dashed border-emerald-400 opacity-40"></div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center p-1.5">
                                    <Shield className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div className="mt-2 text-center">
                                    <h3 className="font-semibold text-gray-900 text-xs">Complete Care Coordination</h3>
                                    <p className="text-[10px] text-gray-600">
                                        We manage treatment, billing & follow-ups end-to-end.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Heading */}
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                            Ready for Peace of Mind?
                        </h2>

                        {/* Description */}
                        <p className="text-xs text-gray-700 max-w-sm mx-auto mb-4 leading-snug">
                            Whether it’s an emergency or a routine visit, our 24×7 team coordinates ambulance, admission, appointments, and more — so you can focus on getting better.
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => window.open("https://mlsupport.org/ML_support/Customer/login.php", "_blank")}
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow transition hover:scale-105"
                        >
                            <span>Join Now</span>
                            <FiArrowRight className="w-4 h-4" />
                        </button>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeaceOfMindSection;
