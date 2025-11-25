import React from "react";
import { Shield, Phone, CheckCircle, ArrowRight, Heart, Ambulance, Users, Star, Zap, Clock } from "lucide-react";

const HealthcarePeaceOfMindSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-white via-emerald-50 to-cyan-50/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Main Card with Enhanced Gradient */}
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl shadow-green-300 border border-green-100 overflow-hidden relative">
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                    
                    <div className="p-8 md:p-12 text-center relative z-10">

                        {/* Enhanced Header */}
                        <div className="mb-12">
                            {/* <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                                <Star className="w-4 h-4 fill-white" />
                                <span>Trusted by 65,000+ Families</span>
                                <Star className="w-4 h-4 fill-white" />
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Experience Complete{" "}
                                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Healthcare Peace of Mind
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                From emergency to recovery, we handle everything so you can focus on what matters most — <span className="font-semibold text-green-600">getting better.</span>
                            </p>
                        </div>

                        {/* Enhanced 3 Steps with Modern Design */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 mb-12 relative">
                            {[
                                {
                                    number: 1,
                                    title: "Sign Up in 2 Minutes",
                                    description: "Quick online registration or instant helpline setup",
                                    icon: null,
                                    delay: "0"
                                },
                                {
                                    number: 2,
                                    title: "Instant Help Any Time",
                                    description: "24×7 access to ambulance, doctors, and medical support",
                                    icon: null,
                                    delay: "500"
                                },
                                {
                                    number: 3,
                                    title: "Complete Care Coordination",
                                    description: "We manage treatment, billing & follow-ups end-to-end",
                                    icon: Shield,
                                    delay: "1000"
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center flex-1 group relative">
                                    {/* Animated Connector for Desktop */}
                                    {index < 2 && (
                                        <div className={`hidden md:block absolute top-12 left-1/2 transform translate-x-12 w-1/4 ${
                                            index === 0 ? 'left-1/3' : 'left-2/3'
                                        }`}>
                                            <div className="h-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full relative overflow-hidden">
                                                <div 
                                                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse-slow"
                                                    style={{ animationDelay: `${step.delay}ms` }}
                                                ></div>
                                                <div 
                                                    className="absolute top-1/2 left-0 w-3 h-3 bg-green-400 rounded-full transform -translate-y-1/2 animate-bounce-slow"
                                                    style={{ animationDelay: `${step.delay}ms` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Step Circle */}
                                    <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70"></div>
                                        <div className={`relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl font-bold border-2 ${
                                            step.icon ? 'border-emerald-500' : 'border-green-400'
                                        } group-hover:shadow-2xl group-hover:border-green-500 transition-all duration-300`}>
                                            {step.icon ? (
                                                <step.icon className="w-8 h-8 text-emerald-600" />
                                            ) : (
                                                <span className="bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                                    {step.number}
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-green-600 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Trust Badges */}
                        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                            {[
                                { icon: Ambulance, text: "Free Ambulance", highlight: "Service", color: "from-red-500 to-orange-500" },
                                { icon: Users, text: "300+ Hospital", highlight: "Network", color: "from-blue-500 to-cyan-500" },
                                { icon: Clock, text: "24×7 Live", highlight: "Support", color: "from-purple-500 to-pink-500" },
                                { icon: Heart, text: "65K+ Families", highlight: "Trust Us", color: "from-green-500 to-emerald-500" }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/60 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-gray-900 text-sm">{item.text}</div>
                                            <div className="text-xs text-gray-600">{item.highlight}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        {/* Enhanced CTA Section */}
                        <div className="bg-gradient-to-br from-white to-emerald-50/80 rounded-2xl p-8 border border-green-200/60 shadow-xl relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500 rounded-full -translate-x-12 translate-y-12"></div>
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Ready to Secure Your Family's Health?
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Join thousands of families who trust us with their healthcare needs. Get instant access to our complete medical support network.
                                </p>
                                
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