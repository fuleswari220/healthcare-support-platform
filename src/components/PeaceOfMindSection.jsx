import React from "react";
import { Shield, Phone, CheckCircle, ArrowRight, Heart, Ambulance, Users, Star, Zap, Clock } from "lucide-react";

const HealthcarePeaceOfMindSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-white via-emerald-50 to-cyan-50/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="bg-gradient-to-br from-white to-emerald-50/80 rounded-2xl p-8 border border-green-200/60 shadow-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500 rounded-full -translate-x-12 translate-y-12"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Ready to Secure Your Family's Health?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join thousands of families who trust us with their healthcare needs. Get instant access to our complete medical support network.                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                            {/* Primary CTA */}
                            <button
                                onClick={() => window.open("https://mlsupport.org/ML_support/Customer/login.php", "_blank")}
                                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base px-10 py-5 rounded-2xl shadow-2xl shadow-green-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 min-w-[280px] justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                                <span className="relative">Start Your Protection Today</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Secondary CTA */}
                            <a
                                href="tel:+916262666631"
                                className="group relative inline-flex items-center gap-4 bg-white hover:bg-gradient-to-r hover:from-white hover:to-emerald-50 text-gray-800 border-2 border-emerald-500 font-bold text-base px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[240px] justify-center"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                                        <Phone className="w-5 h-5 text-green-600 relative" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-gray-900">Call 24×7 Helpline</div>
                                        <div className="text-sm text-gray-600 font-semibold">+91 626-266-6631</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Enhanced Guarantee */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-green-700 text-sm font-medium">
                            {[
                                { icon: Shield, text: "No hidden charges" },
                                { icon: Zap, text: "Instant activation" },
                                { icon: Users, text: "300+ hospital access" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                                    <item.icon className="w-4 h-4 text-green-600" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx global>{`
                @keyframes shine {
                    0% {
                        transform: translateX(-100%) skew(-12deg);
                    }
                    100% {
                        transform: translateX(200%) skew(-12deg);
                    }
                }
                .animate-shine {
                    animation: shine 3s infinite;
                }
                
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s infinite;
                }
                
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(-50%) translateX(0);
                    }
                    50% {
                        transform: translateY(-50%) translateX(100%);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite;
                }
            `}</style>
        </section>
    );
};

export default HealthcarePeaceOfMindSection;