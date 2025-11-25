import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Heart, 
  Shield, 
  Users, 
  Star, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Phone, 
  Ambulance, 
  Stethoscope, 
  CreditCard, 
  ChevronDown,
  HandHeart,
  Eye,
  BadgeCheck,
  Target,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";
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
            icon: <HandHeart className="w-6 h-6 text-green-600" />,
            title: "Proactive Empathy",
            text: "We anticipate and address your pain early.",
        },
        {
            icon: <Eye className="w-6 h-6 text-green-600" />,
            title: "Transparency",
            text: "We believe in complete trust and clarity.",
        },
        {
            icon: <BadgeCheck className="w-6 h-6 text-green-600" />,
            title: "Service Excellence",
            text: "We deliver the highest level of support.",
        },
        {
            icon: <Users className="w-6 h-6 text-green-600" />,
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
                    content="India's 1st all-in-one healthcare membership since 2020. 65,000+ families trust ML Support for free ambulance, diabetic care & 24×7 help."
                />
            </Helmet>

            <Navbar />
            <div className="font-sans text-gray-800">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `linear-gradient(rgba(16, 85, 70, 0.85), rgba(16, 85, 70, 0.9)), url(${AboutBg})` }}>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-medium">Since 2020</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Our Mission – To Make <span className="text-green-300">Healthcare</span> Truly Accessible
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 font-light mb-8">
                            India's first all-in-one healthcare membership with free ambulance services, diagnostics, online doctor consultation, and medicine delivery.
                        </p>

                    </div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-32 left-0 right-0 z-10 max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <Ambulance className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">Free</p>
                                <p className="text-sm opacity-90">Ambulance</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <Stethoscope className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">Free</p>
                                <p className="text-sm opacity-90">Doctor Consultation</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <Clock className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-bold">24/7</p>
                                <p className="text-sm opacity-90">Support</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
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

                {/* Mission Section */}
                <section id="mission-section" className="py-20 bg-white scroll-mt-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 text-4xl font-semibold mb-2">
                                    <Target className="w-8 h-8" />
                                    Our Mission
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Making Healthcare a Guarantee, Not a Gamble</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Since 2020, ML Support Private Limited has stood for one promise — making quality healthcare
                                    a guarantee, not a gamble. As India's first all-in-one healthcare membership, we provide
                                    free ambulance services, diagnostics, free online doctor consultation, and medicine home delivery,
                                    ensuring care is always within reach.
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
                                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-8 h-8" />
                                        <div>
                                            <p className="text-2xl font-bold">65,000+</p>
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
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                                <Heart className="w-4 h-4" />
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We Started</h2>
                            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-green-100">
                            <div className="max-w-4xl mx-auto text-center">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    We saw families struggle - late ambulance arrivals, delayed diagnostics, and unaffordable
                                    treatment costs. ML Support was founded to change that - so that emergency ambulance rides
                                    aren't a luxury, diagnostics happen on time, and treatment support doesn't drain savings.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                                        <Ambulance className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Timely Ambulance</h3>
                                        <p className="text-gray-600">No more waiting during emergencies</p>
                                    </div>
                                    <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                                        <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Quick Diagnostics</h3>
                                        <p className="text-gray-600">Immediate tests and results</p>
                                    </div>
                                    <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
                                        <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold text-lg mb-2">Affordable Care</h3>
                                        <p className="text-gray-600">Free online doctor consultation & medicine delivery</p>
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
                            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                                <Award className="w-4 h-4" />
                                Our Achievements
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We've Achieved</h2>
                            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                        </div>

                        {/* Modern Stats Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {[
                                { icon: Users, number: "65,000+", label: "Families Trust Us" },
                                { icon: Star, number: "300+", label: "Hospital Partners" },
                                { icon: Ambulance, number: "Thousands", label: "Free Ambulance" },
                                { icon: Clock, number: "24×7", label: "Support Network" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                                        <stat.icon className="w-8 h-8 text-green-600" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</p>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Impact Section */}
                        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-lg">
                            <h3 className="text-xl font-bold text-center mb-8">Our Impact Journey</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    {[
                                        "65,000+ families trust us as their healthcare partner",
                                        "Partnered with 300+ hospitals across India",
                                        "Delivered thousands of free ambulance transfers"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                                            <p className="text-green-100">{item}</p>
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
                                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                                            <p className="text-green-100">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-gradient-to-b from-green-50 to-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                                <Heart className="w-4 h-4" />
                                Our Values
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The principles that guide every decision we make and every family we serve.
                            </p>
                        </div>

                        {/* Modern Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {items.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group hover:transform hover:-translate-y-2">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Learn More?
                            </h2>
                            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                                Explore our services to see how we can support you and your family, or get
                                in touch with our team for immediate assistance.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                                <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                                    <ArrowRight className="w-5 h-5" />
                                    Explore Our Services
                                </button>

                                <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    Contact Us
                                </button>

                                <a
                                    href="tel:+916262666631"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call 24×7 Helpline
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-flex flex-wrap justify-center gap-8">
                                <div className="text-center">
                                    <p className="text-2xl font-bold">Free</p>
                                    <p className="text-green-200 text-sm">Ambulance Service</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold">Free</p>
                                    <p className="text-green-200 text-sm">Doctor Consultation</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold">24×7</p>
                                    <p className="text-green-200 text-sm">Medical Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}