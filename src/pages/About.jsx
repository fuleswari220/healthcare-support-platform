import React from "react";
import { Helmet } from "react-helmet-async";
import { Heart, ShieldCheck, Users, Star, ArrowRight, Calendar, Clock, Phone, Ambulance, Stethoscope, CreditCard, ChevronDown } from "lucide-react";
import { HandHeart, Eye, BadgeCheck } from "lucide-react";
import AboutBg from '../assets/About.webp';
import aboutpage from "../assets/aboutpage.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    const scrollToNext = () => {
        document.getElementById('mission-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    const items = [
        {
            icon: <HandHeart className="w-6 h-6 text-emerald-700" />,
            title: "Proactive Empathy",
            text: "We anticipate and address your pain early.",
        },
        {
            icon: <Eye className="w-6 h-6 text-emerald-700" />,
            title: "Transparency",
            text: "We believe in complete trust and clarity.",
        },
        {
            icon: <BadgeCheck className="w-6 h-6 text-emerald-700" />,
            title: "Service Excellence",
            text: "We deliver the highest level of support.",
        },
        {
            icon: <Users className="w-6 h-6 text-emerald-700" />,
            title: "Family-First",
            text: "We treat every patient like our own family.",
        },
    ];
    
    return (
        <>
            <Helmet>
                <title>About ML Support | India's Trusted 24×7 Healthcare Assistance</title>
                <meta 
                    name="description" 
                    content="India's 1st all-in-one healthcare membership since 2020. 18,600+ families trust ML Support for free ambulance, diabetic care & 24×7 help."
                />
            </Helmet>
            
            <Navbar />
            <div className="font-sans text-gray-800">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `linear-gradient(rgba(16, 85, 70, 0.85), rgba(16, 85, 70, 0.9)), url(${AboutBg})` }}>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <span className="text-sm font-medium">Since 2020</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Our Mission – To Make <span className="text-green-300">Healthcare</span> Truly Accessible
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 font-light mb-8">
                            India's first all-in-one healthcare membership providing free ambulance services, diagnostics, and 0% interest medical credit.
                        </p>

                    </div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-32 left-0 right-0 z-10 max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                                <Ambulance className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">Free</p>
                                <p className="text-sm opacity-90">Ambulance</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                                <Stethoscope className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">0%</p>
                                <p className="text-sm opacity-90">Medical Credit</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                                <Clock className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">24/7</p>
                                <p className="text-sm opacity-90">Support</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                                <Users className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">300+</p>
                                <p className="text-sm opacity-90">Hospital Partners</p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <button
                            onClick={scrollToNext}
                            className="text-white hover:text-green-300 transition-colors flex flex-col items-center"
                        >
                            <span className="text-sm mb-2 opacity-80">Discover More</span>
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Gradient Fade Effect at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </section>

                {/* Mission Section - Added ID for scrolling */}
                <section id="mission-section" className="py-20 bg-white scroll-mt-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Making Healthcare a Guarantee, Not a Gamble</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Since 2020, ML Support Private Limited has stood for one promise - making quality healthcare
                                    a guarantee, not a gamble. As India's first all-in-one healthcare membership, we provide
                                    free ambulance services, diagnostics, and 0% interest medical credit, ensuring care is
                                    always within reach.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    India - the land of the Charaka, Sushruta, and Ayurveda with Sanjivani potential, has shown
                                    the world the efficiency of Medical Science and has been propagating the same even today.
                                    But with the progress of time, changes have occurred in the lifestyles of the people, and
                                    so have increased the liabilities to health.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Being a regulated Medical care provider, we provide the best possible health care solutions
                                    to individuals and possess the best crew working around the clock to support you.
                                </p>
                            </div>

                            <div className="relative">
                                <img
                                    src={aboutpage}
                                    alt="Medical Team"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-2xl shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-8 h-8" />
                                        <div>
                                            <p className="text-2xl font-bold">18,600+</p>
                                            <p className="text-sm">Families Trust Us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Started Section */}
                <section className="py-20 bg-green-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We Started</h2>
                            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                            <div className="max-w-4xl mx-auto text-center">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    We saw families struggle - late ambulance arrivals, delayed diagnostics, and unaffordable
                                    treatment costs. ML Support was founded to change that - so that emergency ambulance rides
                                    aren't a luxury, diagnostics happen on time, and treatment support doesn't drain savings.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center p-4">
                                        <Ambulance className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Timely Ambulance</h3>
                                        <p className="text-gray-600">No more waiting during emergencies</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Quick Diagnostics</h3>
                                        <p className="text-gray-600">Immediate tests and results</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Affordable Care</h3>
                                        <p className="text-gray-600">0% interest medical credit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We've Achieved</h2>
                            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                        </div>

                        {/* Circular Stats Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full bg-green-50 border-4 border-green-100 shadow-lg flex flex-col items-center justify-center mb-4 
                              ring-2 ring-green-200 ring-offset-2">
                                    <Users className="w-8 h-8 text-green-600 mb-2" />
                                    <p className="text-xl font-bold text-green-700">18,600+</p>
                                </div>
                                <p className="text-gray-600 font-medium">Families Trust Us</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full bg-green-50 border-4 border-green-100 shadow-lg flex flex-col items-center justify-center mb-4
                              ring-2 ring-green-200 ring-offset-2">
                                    <Star className="w-8 h-8 text-green-600 mb-2" />
                                    <p className="text-xl font-bold text-green-700">300+</p>
                                </div>
                                <p className="text-gray-600 font-medium">Hospital Partners</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full bg-green-50 border-4 border-green-100 shadow-lg flex flex-col items-center justify-center mb-4
                              ring-2 ring-green-200 ring-offset-2">
                                    <Ambulance className="w-8 h-8 text-green-600 mb-2" />
                                    <p className="text-xl font-bold text-green-700">Thousands</p>
                                </div>
                                <p className="text-gray-600 font-medium">Free Ambulance</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 rounded-full bg-green-50 border-4 border-green-100 shadow-lg flex flex-col items-center justify-center mb-4
                              ring-2 ring-green-200 ring-offset-2">
                                    <Clock className="w-8 h-8 text-green-600 mb-2" />
                                    <p className="text-xl font-bold text-green-700">24×7</p>
                                </div>
                                <p className="text-gray-600 font-medium">Support Network</p>
                            </div>
                        </div>

                        {/* Circular Impact Section */}
                        <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-100 ring-2 ring-green-200 ring-offset-2">
                            <h3 className="text-xl font-bold text-center mb-8 text-gray-900">Our Impact Journey</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    {[
                                        "18,600+ families trust us as their healthcare partner",
                                        "Partnered with 300+ hospitals across India",
                                        "Delivered thousands of free ambulance transfers"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center ring-2 ring-green-200">
                                                <span className="text-green-600 font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Timely checkups and home-delivered medicines",
                                        "24×7 support network with trained professionals",
                                        "Tech-enabled coordination for better service"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center ring-2 ring-green-200">
                                                <span className="text-green-600 font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="relative py-20 bg-[#e8f6ec] overflow-hidden">

                    {/* background faded dots + network lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-30 bg-cover"></div>

                    <div className="relative max-w-7xl mx-auto px-6">

                        <div className="text-center mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                        </div>
                        <p className="text-center text-gray-600 mt-2">
                            The principles that guide every decision we make and every family we serve.
                        </p>

                        {/* VALUES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 gap-10">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center">

                                    {/* MAIN CIRCLE */}
                                    <div className="relative w-56 h-56 rounded-full flex flex-col items-center justify-center px-4">

                                        {/* outer faint ring */}
                                        <div className="absolute inset-0 rounded-full border-[3px] border-emerald-200"></div>

                                        {/* main bold ring */}
                                        <div className="absolute inset-2 rounded-full border-[4px] border-emerald-400"></div>

                                        {/* green arc */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-t-[6px] border-emerald-500 rounded-full"></div>

                                        {/* ICON */}
                                        <div className="w-14 h-14 mb-2 rounded-full bg-emerald-100 flex items-center justify-center shadow">
                                            {item.icon}
                                        </div>

                                        {/* TITLE INSIDE CIRCLE */}
                                        <h3 className="text-[20px] font-semibold text-gray-800 leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* TEXT INSIDE CIRCLE */}
                                        <p className="text-gray-600 text-l mt-1 leading-tight max-w-[150px]">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-10">

                        {/* Green Rounded Box */}
                        <div className="bg-green-600 text-white rounded-2xl py-8 px-10 text-center shadow-lg">

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Ready to Learn More?
                            </h2>

                            {/* Sub text */}
                            <p className="text-white/90 mb-4 max-w-2xl mx-auto">
                                Explore our services to see how we can support you and your family, or get
                                in touch with our team for immediate assistance.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                                <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-50 transition">
                                    Explore Our Services
                                </button>

                                <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition">
                                    Contact Us
                                </button>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-flex flex-wrap justify-center gap-8">
                                <div className="text-center">
                                    <p className="text-2xl font-bold">Free</p>
                                    <p className="text-green-200 text-sm">Ambulance Service</p>
                                </div> <div className="text-center">
                                    <p className="text-2xl font-bold">0% Interest</p>
                                    <p className="text-green-200 text-sm">Medical Credit</p>
                                </div> <div className="text-center">
                                    <p className="text-2xl font-bold">24×7</p>
                                    <p className="text-green-200 text-sm">Medical Support</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section >

            </div >
            <Footer />
        </>
    );
}