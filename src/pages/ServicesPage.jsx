import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Ambulance, Home, TestTube, Pill, Plane, FileCheck, Phone, Shield, Users, Clock, Heart, Check, Star, Play, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import background images 
import HeroBg from '../assets/Services.webp';
import CTABg from '../assets/Services.webp';

const ServicesPage = () => {
    const scrollToNext = () => {
        document.getElementById('services-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    const services = [
        {
            icon: <Ambulance className="w-12 h-12" />,
            title: "Emergency Ambulance Service",
            description: "Rapid response within minutes with skilled paramedics and transfers up to 180 km at no extra cost.",
            features: ["24×7 Availability", "100% Free Service", "180 km Coverage", "Advanced Life Support"],
            highlight: true
        },
        {
            icon: <Home className="w-10 h-10" />,
            title: "After-Discharge Support",
            description: "We bring care home. Post-discharge monitoring, nursing, and recovery support at your doorstep.",
            features: ["Home Nursing", "Regular Follow-ups", "Medical Guidance", "Recovery Tracking"],
        },
        {
            icon: <TestTube className="w-12 h-12" />,
            title: "Diagnostics & Pathology at Home",
            description: "Accurate lab tests with home sample collection from NABL-certified labs.",
            features: ["Home Sample Pickup", "Fast Reports", "100+ Tests", "Health Packages"],
        },
        {
            icon: <Pill className="w-12 h-12" />,
            title: "Medicines & Home Delivery",
            description: "Authentic medicines delivered fast with prescription verification and discounts.",
            features: ["Genuine Medicines", "Same-Day Delivery", "Expert Verification", "Up to 20% Off"],
        },
        {
            icon: <Plane className="w-12 h-12" />,
            title: "Out-of-State Treatment Coordination",
            description: "Seamless support for treatment in top hospitals across India.",
            features: ["Travel & Stay Help", "Hospital Tie-ups", "Cost Guidance", "Full Coordination"],
        },
        {
            icon: <FileCheck className="w-12 h-12" />,
            title: "TPA & Insurance Support",
            description: "Hassle-free treatment and claim settlement with all major insurers.",
            features: ["Cashless Everywhere", "Claim Assistance", "Pre-Approval Help", "300+ Hospitals"],
        },
        {
            icon: <Phone className="w-12 h-12" />,
            title: "Telemedicine & Doctor Consult",
            description: "Instant video/phone consultation with qualified doctors — anytime, anywhere.",
            features: ["Video & Chat", "Specialist Access", "E-Prescriptions", "Follow-up Care"],
        },
    ];

    const stats = [
        { icon: <Clock className="w-7 h-7" />, value: "24×7", label: "Always Available" },
        { icon: <Users className="w-7 h-7" />, value: "65,000+", label: "Families Trust Us" },
        { icon: <Shield className="w-7 h-7" />, value: "300+", label: "Hospital Network" },
        { icon: <Heart className="w-7 h-7" />, value: "100%", label: "Care Guaranteed" },
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            location: "Kolkata",
            text: "The ambulance service saved my father's life. They reached in 8 minutes flat!",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            location: "Howrah",
            text: "Medicine delivery and doctor consultation at home made recovery so much easier.",
            rating: 5
        },
        {
            name: "Anita Patel",
            location: "Salt Lake",
            text: "Best healthcare decision we ever made. Truly peace of mind for the entire family.",
            rating: 5
        }
    ];

    return (
        <>
            <Helmet>
                <title>ML Support | 24×7 Ambulance, Home Diagnostics & Credit Care</title>
                <meta
                    name="description"
                    content="Enjoy 24×7 ambulance, lab tests, medicine delivery, and zero-interest medical credit - trusted care, anytime, anywhere"
                />
            </Helmet>

            <Navbar />

            {/* Floating Navigation Dots - Desktop Only */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
                {[
                    { id: 'services-section', label: 'Services', icon: <Ambulance size={12} /> },
                    { id: 'testimonials-section', label: 'Reviews', icon: <Star size={12} /> },
                    { id: 'cta-section', label: 'Get Started', icon: <Shield size={12} /> }
                ].map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-3 transition-all duration-300"
                    >
                        <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 bg-black/30 backdrop-blur-lg px-3 py-1 rounded-full">
                            {section.label}
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 group-hover:border-green-300 group-hover:bg-green-300 transition-all duration-300">
                            {section.icon}
                        </div>
                    </button>
                ))}
            </div>

            {/* Hero Section with Background Image */}
            <section
                className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(6, 95, 70, 0.9)), url(${HeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Animated Background E   lements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-6 h-6 bg-green-200 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-20 right-32 w-5 h-5 bg-green-300 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    {/* Trust Badge */}
                    <div className="mt-8 inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-semibold border border-white/30">
                        <Shield className="w-5 h-5" />
                        Trusted by 65,000+ Families in Kolkata
                    </div>


                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Healthcare That<br />
                        <span className="text-green-300 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                            Never Sleeps
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                        One affordable plan. Zero worries. Scroll to discover our complete healthcare services.
                    </p>

                    {/* Stats with Enhanced Design */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-green-300 mb-3 flex justify-center">{stat.icon}</div>
                                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-green-200 text-sm font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={scrollToNext}
                        className="group flex flex-col items-center text-white hover:text-green-300 transition-all duration-300"
                    >
                        <span className="text-sm mb-3 opacity-90 font-medium tracking-wide animate-pulse">
                            Discover All Services
                        </span>
                        <div className="relative">
                            <div className="w-10 h-16 border-2 border-white/60 rounded-full flex justify-center group-hover:border-green-300 transition-colors">
                                <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce group-hover:bg-green-300"></div>
                            </div>
                            <ChevronDown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-70 group-hover:text-green-300" />
                        </div>
                        <span className="text-xs mt-2 opacity-70 group-hover:opacity-100">Scroll to explore</span>
                    </button>
                </div>
            </section>

            {/* Services Grid with Pattern Background */}
            <section
                className="relative py-24 bg-gray-50 overflow-hidden"
                id="services-section"
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-white/95"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-green-600 bg-green-100 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                            <Star className="w-4 h-4" />
                            COMPREHENSIVE CARE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Everything Your Family Needs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            7 powerful services under one membership — designed for complete peace of mind.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden ${service.highlight ? 'ring-2 ring-green-500 ring-offset-4' : ''
                                    } hover:transform hover:-translate-y-2`}
                            >
                                {service.highlight && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="p-8 lg:p-10">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:from-green-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                                                    <Check className="w-3 h-3 text-green-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <a
                                            href="https://mlsupport.org/ML_support/Customer/login.php"
                                            className="text-green-600 font-bold hover:text-green-700 flex items-center gap-2 group/link"
                                        >
                                            Get This Service
                                            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Section Indicator */}
                    <div className="text-center mt-16">
                        <button
                            onClick={() => scrollToSection('testimonials-section')}
                            className="group inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                        >
                            <span>Hear from our families</span>
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white" id="testimonials-section">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-green-600 bg-green-100 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                            <Star className="w-4 h-4" />
                            HAPPY FAMILIES
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Families Say</h2>
                        <p className="text-xl text-gray-600">Real stories from our ML Support family</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-green-600 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Section Indicator */}
                    <div className="text-center mt-16">
                        <button
                            onClick={() => scrollToSection('cta-section')}
                            className="group inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                        >
                            <span>Ready to get started?</span>
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA with Background Image */}
            <section
                className="relative py-24 text-white overflow-hidden"
                id="cta-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.9), rgba(6, 95, 70, 0.95)), url(${CTABg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Floating Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-float delay-1000"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-green-500 rounded-full opacity-25 animate-float delay-500"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-semibold mb-6 border border-white/30">
                        <Shield className="w-4 h-4" />
                        START YOUR JOURNEY
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        One Membership.<br />
                        <span className="text-green-300">Lifetime Peace of Mind.</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
                        Join 65,000+ families in Kolkata who never worry about medical emergencies again.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                        {["Free Ambulance", "Home Diagnostics", "Medicine Delivery", "24×7 Doctor Access"].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                    {i === 0 && <Ambulance className="w-8 h-8" />}
                                    {i === 1 && <TestTube className="w-8 h-8" />}
                                    {i === 2 && <Pill className="w-8 h-8" />}
                                    {i === 3 && <Phone className="w-8 h-8" />}
                                </div>
                                <p className="font-semibold text-lg group-hover:text-green-300 transition-colors">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA Button */}

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
                        <a
                            href="/become-member"
                            className="group inline-flex items-center gap-4 bg-green-400 text-green-900 font-bold text-xl px-14 py-6 rounded-full hover:bg-green-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                        >
                            <Shield className="w-7 h-7" />
                            Start Protecting Your Family Today
                            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                        </a>

                        <a
                            href="tel:+916262666631"
                            className="group inline-flex items-center gap-3 bg-white text-green-800 font-bold text-lg px-10 py-6 rounded-full border-4 border-green-400 hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
                        >
                            <Phone className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                            <span>Call 24×7 Helpline</span>
                            <span className="text-sm font-normal opacity-90 block sm:inline">+91 626-266-6631</span>
                        </a>
                    </div>

                    {/* Trust Note */}
                    <p className="mt-8 text-green-200 text-sm">
                        No hidden charges • 24×7 support • 300+ hospital network
                    </p>

                    {/* Trust Note */}
                    <p className="mt-8 text-green-200 text-sm">
                        ✅ No hidden charges • ✅ 24×7 support • ✅ 300+ hospital network
                    </p>

                    {/* Back to Top */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group inline-flex items-center gap-2 text-green-200 hover:text-green-300 transition-colors"
                        >
                            <ChevronDown className="w-5 h-5 rotate-180 group-hover:-translate-y-1 transition-transform" />
                            <span>Back to top</span>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ServicesPage;