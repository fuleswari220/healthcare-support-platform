import React from "react";
import { Shield, Phone, CheckCircle, ArrowRight, Heart, Ambulance, Users } from "lucide-react";

const PeaceOfMindSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-emerald-50/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg border border-green-200 overflow-hidden">
                    <div className="p-6 md:p-8 text-center">

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex justify-center mb-3">
                                <Heart className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Experience Complete Healthcare Peace of Mind
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                                From emergency to recovery, we handle everything so you can focus on what matters most — getting better.
                            </p>
                        </div>

                        {/* 3 Steps - Improved Design */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mb-8">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold text-green-600 border-2 border-green-500">
                                        1
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">Sign Up in 2 Minutes</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    Quick online registration or instant helpline setup
                                </p>
                            </div>

                            {/* Connector Line */}
                            <div className="hidden md:block flex-1 relative">
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 transform -translate-y-1/2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold text-green-600 border-2 border-green-500">
                                        2
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">Instant Help Any Time</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    24×7 access to ambulance, doctors, and medical support
                                </p>
                            </div>

                            {/* Connector Line */}
                            <div className="hidden md:block flex-1 relative">
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 to-green-400 transform -translate-y-1/2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse delay-1000"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full animate-bounce delay-1000"></div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex items-center justify-center p-3">
                                        <Shield className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">Complete Care Coordination</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    We manage treatment, billing & follow-ups end-to-end
                                </p>
                            </div>
                        </div>

                        {/* Trust Badges with Lucide Icons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {[
                                { icon: Ambulance, text: "Free Ambulance Service" },
                                { icon: Users, text: "300+ Hospital Network" },
                                { icon: Phone, text: "24×7 Live Support" },
                                { icon: Heart, text: "65K+ Families Trust Us" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-full border border-green-200 shadow-sm">
                                    <item.icon className="w-4 h-4 text-green-600" />
                                    <span className="text-green-600 text-xs font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white/80 rounded-xl p-6 border border-green-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Ready to Secure Your Family's Health?
                            </h3>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {/* Join Now Button */}
                                <button
                                    onClick={() => window.open("https://mlsupport.org/ML_support/Customer/login.php", "_blank")}
                                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold text-sm px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <span>Start Your Protection Today</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Call Now Button */}
                                <a
                                    href="tel:+916262666631"
                                    className="group inline-flex items-center gap-3 bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 font-semibold text-sm px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5 text-green-600 group-hover:animate-pulse" />
                                    <div className="text-left">
                                        <div className="font-bold">Call 24×7 Helpline</div>
                                        <div className="text-xs text-gray-600">+91 626-266-6631</div>
                                    </div>
                                </a>
                            </div>

                            {/* Guarantee Note */}
                            <div className="mt-4 flex items-center justify-center gap-2 text-green-600 text-sm">
                                <Shield className="w-4 h-4" />
                                <span>No hidden charges • Instant activation • 300+ hospital access</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeaceOfMindSection;