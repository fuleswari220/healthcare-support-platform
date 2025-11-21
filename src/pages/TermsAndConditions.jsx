// TermsAndConditions.jsx
import React from "react";
import Navbar from "../components/Navbar";
import {
    Shield, FileText, ChevronRight, CheckCircle, Lock, Users, Heart,
    Phone, Mail, Building2, AlertCircle, Ambulance, TestTube, Truck,
    Stethoscope, PhoneCall, MapPinHouse
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/LOGO1.webp";

export default function TermsAndConditions() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { id: "services", title: "Services" },
        { id: "eligibility", title: "Eligibility of Users" },
        { id: "security", title: "Security" },
        { id: "conduct", title: "User Conduct" },
        { id: "payment", title: "Payment Policy" },
        { id: "contact", title: "Contact Information" },
    ];

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Header */}
                <div className="text-left mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Terms & Conditions</h1>
                    <p className="mt-4 text-lg text-gray-600 font-medium">Last updated: March 2025</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-12">

                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-emerald-600" />
                                Contents
                            </h3>
                            <nav className="space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full flex items-center justify-between group py-4 px-5 rounded-2xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 border border-transparent hover:border-emerald-200 text-left"
                                    >
                                        <span className="text-sm font-medium">{item.title}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3 space-y-24">

                        {/* Services Section */}
                        <section id="services">
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Services</h2>
                            <div className="space-y-12">

                                {/* Emergency Ambulance Services */}
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                                    <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-3">
                                        <Ambulance className="w-8 h-8" />
                                        Emergency Ambulance Services
                                    </h3>
                                    <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
                                        <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" /> In case of any emergency our services will be free up to 180 km.</li>
                                        <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" /> If the distance exceeds 180 km the patient party or their family will pay the rest of the distance @ ₹9 per km.</li>
                                        <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" /> In case of emergency like ICU/Ventilation you will get paid ambulance service as per third party condition.</li>
                                    </ul>
                                </div>

                                {/* After Discharge Emergency Support */}
                                <div className="bg-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-6">After Discharge Emergency Support (within 72 hours)</h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start gap-3"><Heart className="w-6 h-6 text-emerald-700 mt-0.5 flex-shrink-0" /> After discharge within 72 hrs if any patient faces any kind of emergency, we will provide doctor, pathology, ambulance services as per patient's condition.</li>
                                        <li className="flex items-start gap-3"><AlertCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" /> If any patient or their family refuses any emergency services, then they will assume full responsibility for the patient's condition. No doctor or medical or company's staff will be held liable.</li>
                                    </ul>
                                </div>

                                {/* TPA and Billing Support */}
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                                    <h3 className="text-2xl font-bold text-emerald-700 mb-6">TPA and Billing Support</h3>
                                    <ul className="space-y-3 text-gray-700 text-base">
                                        <li>• We will provide support on billing up to 10% discount on the cash payment which will be made after the patient party payment.</li>
                                        <li>• Those who have TPA we will help them with all the legal paperwork (so that the patient does not have to go through any hassle).</li>
                                        <li>• In case of OPD billing the patient will pay the entire hospital bill along with OPD charges.</li>
                                        <li>• In OPD billing if any doctor suggests any kind of medicines or pathological tests, we will provide 10% off discount from our end.</li>
                                        <li>• When a patient books ambulance on their own, we pay them ₹9 per km up to 180 km within 15 days after they provide required documents.</li>
                                    </ul>
                                </div>

                                {/* Pathology & Medicine */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border-2 border-emerald-200">
                                        <h4 className="font-bold text-xl text-emerald-800 mb-4 flex items-center gap-3">
                                            <TestTube className="w-7 h-7" />
                                            10% Discount on Pathology & Diagnostic Services
                                        </h4>
                                        <p className="text-gray-700">• We will provide discounts on any pathological tests<br />• There will be no extra charge for home collection<br />• Every test will be done from renowned Center/Lab</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                                        <h4 className="font-bold text-xl text-emerald-800 mb-4 flex items-center gap-3">
                                            <Truck className="w-7 h-7" />
                                            Medicine and Home Delivery Services
                                        </h4>
                                        <p className="text-gray-700">10% discount on the total bill of the medicine and will be delivered to home within a short period of time.</p>
                                    </div>
                                </div>

                                {/* Weekly Diabetic Test */}
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                                    <h3 className="text-2xl font-bold text-emerald-700 mb-6">Weekly Diabetic Test & Primary Routine Test</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We provide this service 4 times a month (once a week).<br />
                                        • For FBS (fasting blood sugar) test we charge ₹100 for the first test and the rest three tests are free.<br />
                                        • For PPBS (postprandial blood sugar) test we charge ₹100 for the first test and the rest three tests are free.<br />
                                        <strong>(If any user wants both services need to pay ₹200)</strong>
                                    </p>
                                </div>

                                {/* Out of State Support */}
                                <div className="bg-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                                        <MapPinHouse className="w-8 h-8" />
                                        Out of State Medical Treatment Support
                                    </h3>
                                    <p className="text-gray-700">We provide doctor's appointment, assured hospitals, transportation, hotels services out of states. Also we pick up and drop the patient at their informed locations. We make sure that the patient does not face any kind of problems.</p>
                                </div>

                                {/* 24x7 & Telemedicine */}
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                                    <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-3">
                                        <PhoneCall className="w-8 h-8" />
                                        24×7 Medical Emergency Support & Telemedicine
                                    </h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li>• Whenever the patient is admitted to our tie-up hospitals our MLS team will go and visit the patient to check whether everything is going well.</li>
                                        <li>• We also ensure that they do not face any kind of problem from any doctor or nurse and getting curable treatment.</li>
                                        <li>• We will provide online doctor consultation if anyone needs OPD support.</li>
                                        <li>• We will keep following up on the patient up to 10-12 days until recovery.</li>
                                        <li>• Doctor appointment facility from renowned doctors in your area (in-person).</li>
                                    </ul>
                                </div>

                            </div>
                        </section>

                        {/* Eligibility of Users */}
                        <section id="eligibility">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10">Eligibility of Users</h2>
                            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl space-y-10">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <Users className="w-8 h-8 text-emerald-600" />
                                        Age Limit
                                    </h3>
                                    <p className="text-gray-700">There is no age limit. Our services are open to all individuals.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Health and Medical Accuracy</h3>
                                    <p className="text-gray-700">Users must provide proper and accurate health-related information while using services such as consultations, prescriptions, etc. Any misinformation may result in rejection of services or termination of the user.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Prohibited Users</h3>
                                    <p className="text-gray-700">Users who have previously been suspended or removed from the company's services are not eligible to use them again without written consent.</p>
                                </div>
                            </div>
                        </section>

                        {/* Security */}
                        <section id="security">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10">Security</h2>
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-16 text-white text-center shadow-2xl">
                                <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
                                <p className="text-2xl font-bold">We Protect Your Privacy</p>
                                <p className="text-xl mt-4 text-emerald-100 leading-relaxed">
                                    All patient records and documents are stored securely using best encryption, firewalls, and access control measures to ensure confidentiality. Information may only be shared with authorized healthcare providers or partners strictly for the purpose of delivering medical services, in accordance with applicable privacy laws.
                                </p>
                            </div>
                        </section>

                        {/* User Conduct */}
                        <section id="conduct">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10">User Conduct and Restrictions</h2>
                            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    By using our services, users agree to conduct themselves in a respectful, lawful, and responsible manner at all times. Patients must provide accurate and truthful personal and medical information and must not use the platform for misleading or harmful purposes. Users are expected to treat our staff and other patients with respect and must not engage in abusive, harassing, or threatening behavior. Violations may lead to termination of access and legal action.
                                </p>
                            </div>
                        </section>

                        {/* Payment Policy */}
                        <section id="payment">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10">Payment & Refund Policy</h2>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="bg-emerald-50 rounded-3xl p-10 border-2 border-emerald-200 text-center">
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-6">Basic Membership</h3>
                                    <p className="text-4xl font-bold text-emerald-700">FREE</p>
                                    <p className="text-gray-700 mt-4">Limited access to services</p>
                                </div>

                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-10 text-white text-center">
                                    <h3 className="text-2xl font-bold mb-6">Gold Membership</h3>
                                    <p className="text-5xl font-bold">₹599</p>
                                    <p className="text-emerald-100 mt-3 text-lg">Valid for 1 year • Full access to all services</p>
                                </div>
                            </div>

                            <div className="mt-10 bg-amber-50 border-2 border-amber-300 rounded-3xl p-8">
                                <h4 className="text-xl font-bold text-amber-900 mb-3">Refund Policy</h4>
                                <p className="text-amber-800">Refund request will be processed within 3–5 days. The amount will be credited to customer's bank account within 5–7 working days after the refund is processed.</p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Us</h2>

                            <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-800 
                    rounded-2xl p-8 md:p-10 text-white shadow-xl">

                                <div className="grid md:grid-cols-3 gap-8">

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <Mail className="w-7 h-7" />
                                        </div>

                                        <div>
                                            <p className="text-xl font-semibold">Email Us</p>

                                            <a
                                                href="mailto:info@mlsupport.org"
                                                className="text-lg hover:text-emerald-200 transition block"
                                            >
                                                info@mlsupport.org
                                            </a>

                                        </div>
                                    </div>

                                    {/* Call */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <Phone className="w-7 h-7" />
                                        </div>

                                        <div>
                                            <p className="text-xl font-semibold">Call Us</p>
                                            <p className="text-2xl font-bold">1800-889-6525</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                    </main>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#06182E] text-white py-2 mt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-5">
                            <a href="/">
                                <img src={logo} alt="ML Support" className="h-16 object-contain" />
                            </a>
                            <span className="text-gray-400 text-sm hidden sm:block">
                                © 2020-2025 ML Support. All rights reserved.
                            </span>
                        </div>

                        <div className="flex items-center gap-8">
                            <a href="/privacy-policy" className="text-gray-300 hover:text-white transition font-medium">
                                Privacy Policy
                            </a>
                            <div className="flex gap-6 text-xl">
                                <a href="https://www.facebook.com/people/ML-Support/61574639172914/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><FaFacebookF /></a>
                                <a href="https://www.instagram.com/mlsupport_care/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><FaInstagram /></a>
                                <a href="https://www.youtube.com/@mlsupport-s1r" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><FaYoutube /></a>
                                <a href="https://www.linkedin.com/company/ml-support-kolkata/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 text-xs mt-6 sm:hidden">
                        © 2020-2025 ML Support. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}