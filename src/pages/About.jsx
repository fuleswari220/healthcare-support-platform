import React from "react";
import { Helmet } from "react-helmet-async";
import {
    Heart,
    ShieldCheck,
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
    TrendingUp,
    Rocket,
    Zap,
    Target,
    Trophy,
    Map,
    Shield,
    Building
} from "lucide-react";
import {
    Flag,
    Expand,
    Lightbulb,
    LineChart,
    Handshake,
    Globe2
} from "lucide-react";

import AboutBg from '../assets/About.webp';
import aboutpage from "../assets/aboutpage.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Reusable Stat Card Component
const StatCard = ({ icon, value, label, className = "" }) => (
    <div className={`bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 ${className}`}>
        {icon}
        <p className="text-2xl md:text-3xl font-bold">{value}</p>
        <p className="text-sm opacity-90">{label}</p>
    </div>
);

// Reusable Circular Stat Component
const CircularStat = ({ icon, value, label }) => (
    <div className="flex flex-col items-center text-center">
        <div className="relative w-48 h-48 rounded-full bg-green-50 border-4 border-green-100 shadow-lg flex flex-col items-center justify-center mb-4 ring-2 ring-green-200 ring-offset-2">
            {icon}
            <p className="text-xl font-bold text-green-700">{value}</p>
        </div>
        <p className="text-gray-600 font-medium">{label}</p>
    </div>
);

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
    </div>
);

// Reusable Value Item Component
const ValueItem = ({ icon, title, text }) => (
    <div className="flex flex-col items-center text-center">
        <div className="relative w-56 h-56 rounded-full flex flex-col items-center justify-center px-4">
            <div className="absolute inset-0 rounded-full border-[3px] border-emerald-200"></div>
            <div className="absolute inset-2 rounded-full border-[4px] border-emerald-400"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-t-[6px] border-emerald-500 rounded-full"></div>
            <div className="w-14 h-14 mb-2 rounded-full bg-emerald-100 flex items-center justify-center shadow">
                {icon}
            </div>
            <h3 className="text-[20px] font-semibold text-gray-800 leading-tight">{title}</h3>
            <p className="text-gray-600 text-l mt-1 leading-tight max-w-[150px]">{text}</p>
        </div>
    </div>
);

// Data arrays to reduce repetition
const heroStats = [
    { icon: <Ambulance className="w-8 h-8 mx-auto mb-2" />, value: "Free", label: "Ambulance" },
    { icon: <Stethoscope className="w-8 h-8 mx-auto mb-2" />, value: "Free", label: "Online Doctor Consultation" },
    { icon: <Clock className="w-8 h-8 mx-auto mb-2" />, value: "24/7", label: "Support" },
    { icon: <Users className="w-8 h-8 mx-auto mb-2" />, value: "300+", label: "Hospital Partners" },
];

const achievements = [
    { icon: <Users className="w-8 h-8 text-green-600 mb-2" />, value: "65,000+", label: "Families Trust Us" },
    { icon: <Star className="w-8 h-8 text-green-600 mb-2" />, value: "300+", label: "Hospital Partners" },
    { icon: <Ambulance className="w-8 h-8 text-green-600 mb-2" />, value: "Thousands", label: "Free Ambulance" },
    { icon: <Clock className="w-8 h-8 text-green-600 mb-2" />, value: "24×7", label: "Support Network" },
];

const values = [
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

const impactPoints = [
    "65,000+ families trust us as their healthcare partner",
    "Partnered with 300+ hospitals across India",
    "Delivered thousands of free ambulance transfers",
    "Timely checkups and home-delivered medicines",
    "24×7 support network with trained professionals",
    "Tech-enabled coordination for better service",
];

export default function About() {
    const scrollToNext = () => {
        document.getElementById('mission-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

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
                {/* Hero Section - Simplified */}
                <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
                    style={{ backgroundImage: `linear-gradient(rgba(16, 85, 70, 0.85), rgba(16, 85, 70, 0.9)), url(${AboutBg})` }}>

                    <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
                            {/* Text Content */}
                            <div className="text-center lg:text-left lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                    <span className="text-sm font-medium">Since 2020</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    Our Mission – To Make <span className="text-green-300">Healthcare</span> Truly Accessible
                                </h1>
                                <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 opacity-95 font-light mb-8">
                                    India's first all-in-one healthcare membership with free ambulance services, diagnostics, online doctor consultation, and medicine delivery.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
                                <div className="grid grid-cols-2 gap-4">
                                    {heroStats.map((stat, index) => (
                                        <StatCard key={index} {...stat} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 inset-x-0 z-20">
                        <div className="flex justify-center">
                            <button
                                onClick={scrollToNext}
                                className="flex flex-col items-center text-white hover:text-green-300 transition-colors"
                            >
                                <span className="text-sm mb-2 opacity-80">Discover More</span>
                                <ChevronDown className="w-6 h-6 animate-bounce" />
                            </button>
                        </div>
                    </div>

                    {/* Gradient Fade Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </section>

                {/* Mission Section */}
                <section id="mission-section" className="py-20 scroll-mt-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <SectionHeader
                            title="Making Healthcare a Guarantee, Not a Gamble"
                            subtitle="Since 2020, ML Support has stood for one promise — making quality healthcare a guarantee for every family."
                        />

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Since 2020, ML Support Private Limited has stood for one promise — making quality healthcare a guarantee, not a gamble. As India's first all-in-one healthcare membership, we provide free ambulance services, diagnostics, free online doctor consultation, and medicine home delivery, ensuring care is always within reach.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    India - the land of the Charaka, Sushruta, and Ayurveda with Sanjivani potential, has shown the world the efficiency of Medical Science and has been propagating the same even today. But with the progress of time, changes have occurred in the lifestyles of the people, and so have increased the liabilities to health.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Being a regulated Medical care provider, we provide the best possible health care solutions to individuals and possess the best crew working around the clock to support you.
                                </p>
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-8 h-8 text-green-600" />
                                        <div>
                                            <p className="text-2xl font-bold text-green-700">65,000+</p>
                                            <p className="text-sm text-green-600">Families Trust Us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <img
                                    src={aboutpage}
                                    alt="Medical Team"
                                    className="rounded-2xl shadow-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section - Combined with Core Principles */}
                <section className="py-20 bg-[#e8f6ec]">
                    <div className="max-w-7xl mx-auto px-6">
                        <SectionHeader
                            title="Our Core Values & Impact"
                            subtitle="The principles that guide every decision we make and every family we serve."
                        />

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {values.map((value, index) => (
                                <ValueItem key={index} {...value} />
                            ))}
                        </div>

                        {/* Impact Metrics */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Our Impact Journey</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {impactPoints.map((point, index) => (
                                    <div key={index} className="flex items-center space-x-4 p-3 hover:bg-green-50 rounded-lg transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center ring-2 ring-green-200">
                                            <span className="text-green-600 font-bold text-sm">✓</span>
                                        </div>
                                        <p className="text-gray-700">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Started & Achievements Combined - Improved Desktop Design */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <SectionHeader
                            title="Our Journey: Purpose & Progress"
                            subtitle="From identifying healthcare gaps to building India's most trusted healthcare support network"
                        />

                        <div className="mt-12">
                            {/* Desktop-optimized layout - Fixed gap issue */}
                            <div className="hidden lg:block">
                                <div className="flex gap-8">

                                    {/* Left Column - Why We Started - Made more compact */}
                                    <div className="w-2/3">
                                        <div className="flex gap-8">
                                            {/* Vertical accent line */}
                                            <div className="relative">
                                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>

                                                {/* Numbered heading */}
                                                <div className="relative z-10 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-8">
                                                    <span className="text-green-600 font-bold text-lg">01</span>
                                                </div>
                                            </div>

                                            {/* Content area - Reduced padding and margins */}
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                    The Challenge We Faced
                                                </h3>

                                                <div className="mb-8">
                                                    <p className="text-gray-700 leading-relaxed mb-8">
                                                        We witnessed families across India grappling with healthcare accessibility issues:
                                                        delayed ambulances, expensive diagnostics, and fragmented medical support.
                                                        This inspired us to create a unified healthcare solution.
                                                    </p>

                                                    {/* Compact grid layout */}
                                                    <div className="grid grid-cols-1 gap-6">
                                                        {[
                                                            {
                                                                icon: <Ambulance className="w-6 h-6" />,
                                                                title: "Emergency Delays",
                                                                text: "Critical time lost waiting for ambulances",
                                                                stat: "30-45 min avg delay"
                                                            },
                                                            {
                                                                icon: <Clock className="w-6 h-6" />,
                                                                title: "Diagnostic Delays",
                                                                text: "Reports taking days, delaying treatment",
                                                                stat: "48+ hour wait"
                                                            },
                                                            {
                                                                icon: <CreditCard className="w-6 h-6" />,
                                                                title: "Financial Strain",
                                                                text: "High out-of-pocket medical expenses",
                                                                stat: "₹15-20K avg cost"
                                                            },
                                                        ].map((item, index) => (
                                                            <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                                                                <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                                                                    {item.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex justify-between items-start mb-1">
                                                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                                        <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                                                                            {item.stat}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-gray-600 text-sm">{item.text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Achievements - Made more compact */}
                                    <div className="w-1/3">
                                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white shadow-lg h-full">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-lg">02</span>
                                                </div>
                                                <h3 className="text-xl font-bold">Our Impact Today</h3>
                                            </div>

                                            {/* Compact achievements grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {achievements.map((achievement, index) => (
                                                    <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                                                        <div className="mb-2">
                                                            {React.cloneElement(achievement.icon, { className: "w-5 h-5 mx-auto text-white" })}
                                                        </div>
                                                        <p className="text-2xl font-bold">{achievement.value}</p>
                                                        <p className="text-green-100 text-xs mt-1">{achievement.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Compact milestones */}
                                            <div className="pt-6 border-t border-white/20">
                                                <h4 className="font-semibold mb-3">Growth Milestones</h4>
                                                <div className="space-y-2">
                                                    {[
                                                        "2020: Launched with 100 families",
                                                        "2021: Reached 10,000+ families",
                                                        "2022: Expanded to 50,000+ families",
                                                        "2023: Serving 65,000+ families",
                                                        "2024: Trusted by 1,20,000+ families",
                                                        "2025: Scaling nationwide with digital healthcare expansion",
                                                    ].map((milestone, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                                                            <span className="text-white/90 text-sm">{milestone}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile View (unchanged) */}
                            <div className="lg:hidden">
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Started</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                            We saw families struggle with late ambulance arrivals, delayed diagnostics,
                                            and unaffordable treatment costs.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { icon: <Ambulance className="w-8 h-8" />, title: "Emergency Response", text: "No waiting during emergencies" },
                                                { icon: <Clock className="w-8 h-8" />, title: "Quick Diagnostics", text: "Immediate tests and results" },
                                                { icon: <CreditCard className="w-8 h-8" />, title: "Affordable Care", text: "Free consultation & delivery" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                                                    <div className="p-2 bg-green-100 rounded-lg">{item.icon}</div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                                        <p className="text-gray-600">{item.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {achievements.map((achievement, index) => (
                                                <div key={index} className="bg-green-50 rounded-xl p-4 text-center">
                                                    {achievement.icon}
                                                    <p className="text-2xl font-bold text-green-700 mt-2">{achievement.value}</p>
                                                    <p className="text-gray-600 text-sm">{achievement.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                                                    <TrendingUp className="w-4 h-4 text-green-600" aria-hidden="true" />
                                                </div>
                                                <span className="font-medium">Growth Timeline</span>
                                            </div>
                                        </h4>

                                        <div className="space-y-4">
                                            {[
                                                { year: "2020", milestone: "ML Support founded with a mission to make healthcare accessible" },
                                                { year: "2021", milestone: "Grew to 3,000+ families with essential medical support" },
                                                { year: "2022", milestone: "Expanded diagnostics & ambulance network, serving 8,000+ families" },
                                                { year: "2023", milestone: "Crossed 12,000+ families with 24×7 medical assistance" },
                                                { year: "2024", milestone: "Trusted by 18,600+ families and partnered with 300+ hospitals across India" },
                                                { year: "2025", milestone: "Scaling pan-India with upgraded digital health and membership services" },
                                            ].map((item, index, array) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="flex flex-col items-center flex-shrink-0">
                                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                            <span className="font-bold text-green-700">{item.year}</span>
                                                        </div>
                                                        {index < array.length - 1 && (
                                                            <div className="w-0.5 h-8 bg-green-200 mt-1"></div>
                                                        )}
                                                    </div>
                                                    <div className="pt-1">
                                                        <p className="text-gray-800 font-medium">{item.milestone}</p>
                                                        <p className="text-gray-500 text-sm mt-1">Milestone achieved</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redesigned Compact Timeline for Desktop with Lucide Icons */}
                        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
                            {/* Header Section */}
                            <div className="text-center mb-16 px-4">
                                <div className="max-w-3xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        Our Journey of Impact
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                                        From humble beginnings to nationwide reach, we've been committed to empowering
                                        families with quality healthcare every step of the way.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-sm font-medium text-green-700">
                                            Growing strong since 2020
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Section */}
                            <div className="hidden lg:block">
                                <div className="max-w-7xl mx-auto px-8">
                                    <div className="flex justify-between items-center mb-16">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-3">Our Growth Journey</h3>
                                            <p className="text-gray-600">Tracking our progress year by year</p>
                                        </div>
                                        <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                                                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                                                <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white"></div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-green-700">Steady Growth</div>
                                                <div className="text-sm text-green-600">Since 2020</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        {/* Progress bar */}
                                        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 animate-pulse" style={{ width: '100%' }}></div>
                                        </div>

                                        {/* Timeline cards */}
                                        <div className="relative grid grid-cols-6 gap-6">
                                            {[
                                                {
                                                    year: "2020",
                                                    title: "Foundation",
                                                    highlight: "100 families",
                                                    icon: <Flag className="w-6 h-6" />,
                                                    gradient: "from-green-50 to-emerald-50"
                                                },
                                                {
                                                    year: "2021",
                                                    title: "Expansion",
                                                    highlight: "10K+ families",
                                                    icon: <Expand className="w-6 h-6" />,
                                                    gradient: "from-blue-50 to-cyan-50"
                                                },
                                                {
                                                    year: "2022",
                                                    title: "Innovation",
                                                    highlight: "50K+ families",
                                                    icon: <Lightbulb className="w-6 h-6" />,
                                                    gradient: "from-green-50 to-emerald-50"
                                                },
                                                {
                                                    year: "2023",
                                                    title: "Growth",
                                                    highlight: "65K+ families",
                                                    icon: <LineChart className="w-6 h-6" />,
                                                    gradient: "from-blue-50 to-cyan-50"
                                                },
                                                {
                                                    year: "2024",
                                                    title: "Scale Up",
                                                    highlight: "300+ partners",
                                                    icon: <Handshake className="w-6 h-6" />,
                                                    gradient: "from-green-50 to-emerald-50"
                                                },
                                                {
                                                    year: "2025",
                                                    title: "Nationwide",
                                                    highlight: "120K+ families",
                                                    icon: <Globe2 className="w-6 h-6" />,
                                                    gradient: "from-blue-50 to-cyan-50"
                                                },

                                            ].map((item, index) => (
                                                <div key={index} className="relative group">
                                                    {/* Connector line from card to timeline */}
                                                    <div className="absolute left-1/2 bottom-full h-8 w-0.5 bg-gradient-to-t from-green-300 to-transparent"></div>

                                                    {/* Card */}
                                                    <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105`}>
                                                        <div className="flex items-start justify-between mb-4">
                                                            <div className={`p-3 rounded-xl bg-white shadow-sm ${index === 5 ? 'animate-pulse' : ''}`}>
                                                                <div className="text-green-600">
                                                                    {item.icon}
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                                                                <div className="text-xs text-gray-500">Year</div>
                                                            </div>
                                                        </div>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                                        <div className="text-sm text-gray-600 mb-4">
                                                            {item.highlight}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {index === 0 && "Started our journey"}
                                                            {index === 1 && "Expanded to 3 states"}
                                                            {index === 2 && "Launched telemedicine"}
                                                            {index === 3 && "15+ cities coverage"}
                                                            {index === 4 && "Hospital partnerships"}
                                                            {index === 5 && "Pan-India expansion"}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unified CTA Section */}
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
                                    Experience Healthcare Without Worry
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Join 65,000+ families who trust us for their healthcare needs
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
            </div>
            <Footer />
        </>
    );
}