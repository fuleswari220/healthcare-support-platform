// PrivacyPolicy.jsx - Ultra Professional Healthcare Edition (Green & White Only)
import React from 'react';
import Navbar from '../components/Navbar';
import {
  Shield, FileText, Search, Zap, Phone, Mail, MapPin, Clock,
  CheckCircle, Lock, Users, Heart, Stethoscope, FileCheck,
  AlertCircle, UserCheck, Globe, Cookie, ChevronRight, Building2
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/LOGO1.webp"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Page Title */}
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Last updated: March 2025
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Sticky Sidebar - Clean & Elegant */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-600" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {[
                  { id: 'introduction', title: 'Introduction' },
                  { id: 'collect', title: 'Information We Collect' },
                  { id: 'use', title: 'How We Use Information' },
                  { id: 'sharing', title: 'Information Sharing' },
                  { id: 'security', title: 'Data Security & Retention' },
                  { id: 'rights', title: 'Your Legal Rights' },
                  { id: 'cookies', title: 'Cookies & Tracking' },
                  { id: 'changes', title: 'Policy Updates' },
                  { id: 'contact', title: 'Contact Us' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
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

            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Introduction</h2>
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ML Support ("we," "our," or "us") is deeply committed to protecting your privacy and safeguarding your health information. This Privacy Policy explains how we collect, use, disclose, and protect your data when you use our <strong className="text-emerald-700">healthcare platform</strong>, website, and mobile applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you acknowledge and agree to the practices described in this policy.
                </p>
                <div className="mt-10 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
                  <p className="text-emerald-800 font-semibold text-lg">
                    This policy applies to all patients, healthcare providers, caregivers, and visitors.
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="collect">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Information We Collect</h2>

              {/* Personal Information */}
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <Users className="w-9 h-9 text-emerald-600" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Full name, contact details, and demographic information",
                    "Date of birth, gender, and government-issued ID",
                    "Emergency contacts and family information",
                    "Health insurance details and coverage",
                    "Payment methods and billing preferences"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <CheckCircle className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protected Health Information (PHI) - Premium Highlight */}
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 rounded-3xl p-12 mb-10 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <Heart className="w-10 h-10 text-emerald-700" />
                  Protected Health Information (PHI)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Medical history and current conditions",
                    "Medications, allergies, and immunizations",
                    "Treatment plans and physician notes",
                    "Lab results, imaging, and diagnostics",
                    "Insurance claims and treatment authorizations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <Stethoscope className="w-7 h-7 text-emerald-700 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Data */}
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <Globe className="w-9 h-9 text-emerald-600" />
                  Technical & Usage Information
                </h3>
                <div className="space-y-5">
                  {[
                    "IP address, device type, and browser information",
                    "Operating system and network details",
                    "Session duration and navigation patterns",
                    "Cookies and analytics identifiers"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How We Use */}
            <section id="use">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="text-left px-12 py-8 font-bold text-emerald-900 text-lg">Purpose</th>
                      <th className="text-left px-12 py-8 font-bold text-emerald-900 text-lg">How We Use It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Deliver Healthcare Services", "Provide consultations, records access, and telehealth"],
                      ["Coordinate Care", "Share with your doctors, labs, and specialists"],
                      ["Manage Appointments", "Schedule, remind, and reschedule visits"],
                      ["Process Payments", "Handle billing and insurance claims securely"],
                      ["Communicate", "Send updates, results, and support messages"],
                      ["Improve Services", "Analyze trends to enhance patient experience"],
                      ["Comply with Laws", "Meet HIPAA, GDPR, and local health regulations"]
                    ].map(([purpose, desc], i) => (
                      <tr key={i}>
                        <td className="px-12 py-8 font-semibold text-gray-900">{purpose}</td>
                        <td className="px-12 py-8 text-gray-700">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sharing */}
            <section id="sharing">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Information Sharing</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Your Care Team", desc: "Only with authorized doctors, nurses, and labs involved in your treatment" },
                  { title: "Legal Obligations", desc: "When required by law, court order, or public health authorities" },
                  { title: "Trusted Partners", desc: "HIPAA-compliant vendors who help us deliver services" },
                  { title: "Life-Threatening Emergencies", desc: "To protect your health or others in critical situations" }
                ].map((item, i) => (
                  <div key={i} className="bg-emerald-50 rounded-3xl p-10 border-2 border-emerald-200">
                    <h4 className="font-bold text-xl text-emerald-900 mb-4">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-16 text-white text-center shadow-2xl">
                <Lock className="w-20 h-20 mx-auto mb-6 opacity-90" />
                <p className="text-3xl font-bold">We Never Sell Your Data</p>
                <p className="text-xl mt-4 text-emerald-100">Your privacy is sacred. Not now. Not ever.</p>
              </div>
            </section>

            {/* Security & Rights */}
            <section id="security">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Data Security & Your Rights</h2>
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Enterprise-Grade Security</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      "End-to-end encryption (in transit & at rest)",
                      "Regular penetration testing & audits",
                      "Role-based access controls",
                      "Secure cloud infrastructure (HIPAA-compliant)",
                      "Mandatory staff privacy training"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-5">
                        <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-emerald-300 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <UserCheck className="w-10 h-10 text-emerald-700 flex-shrink-0" />
                    <div>
                      <p className="text-xl font-bold text-emerald-900 mb-3">You Have Full Control</p>
                      <p className="text-gray-700">Access, correct, download, or delete your data anytime. Just email our Data Protection Officer at <a href="mailto:dpo@mlsupport.org" className="font-bold text-emerald-700 underline">dpo@mlsupport.org</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies & Contact */}
            <section id="cookies" className="pb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Cookies & Tracking</h2>
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
                <div className="grid md:grid-cols-2 gap-10">
                  {[
                    { type: "Essential", desc: "Required for login, security, and core functions" },
                    { type: "Functional", desc: "Remember your preferences and settings" },
                    { type: "Analytics", desc: "Help us improve performance anonymously" },
                    { type: "Marketing", desc: "Only used with your explicit consent" }
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-8 h-8 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{c.type} Cookies</h4>
                        <p className="text-gray-600 mt-2">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>
              <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-800 rounded-3xl p-16 text-white shadow-2xl">
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <Mail className="w-10 h-10" />
                    </div>
                    <p className="text-2xl font-bold mb-3">Email Us</p>
                    <a href="mailto:info@mlsupport.org" className="text-xl block hover:text-emerald-200 transition">info@mlsupport.org</a>
                    <p className="mt-6 text-emerald-100">
                      DPO: <a href="mailto:dpo@mlsupport.org" className="underline font-bold">dpo@mlsupport.org</a>
                    </p>
                  </div>

                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <Phone className="w-10 h-10" />
                    </div>
                    <p className="text-2xl font-bold mb-3">Call Us</p>
                    <p className="text-3xl font-bold">1800-889-6525</p>
                    <p className="text-emerald-100 mt-3">Toll-free • 24×7 Support</p>
                  </div>

                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <Building2 className="w-10 h-10" />
                    </div>
                    <p className="text-2xl font-bold mb-3">Visit Us</p>
                    <p className="leading-relaxed">
                      16, 105, Mall Rd, Civil Lines<br />
                      Near Reserve Bank of India<br />
                      Kanpur, Uttar Pradesh 208001<br />
                      <span className="text-sm block mt-4 text-emerald-200">Mon–Fri: 9am–6pm | Sat: 10am–2pm</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#06182E] text-white py-5 mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left Side: Logo + Copyright */}
            <div className="flex items-center gap-5">
              <a href="/">
                <img
                  src={logo}
                  alt="ML Support"
                  className="h-14 object-contain"
                />
              </a>
              <span className="text-gray-400 text-xs md:text-sm font-medium hidden sm:block">
                © 2025 ML Support. All rights reserved.
              </span>
            </div>

            {/* Right Side: Terms + Social Icons */}
            <div className="flex items-center gap-8 text-sm">
              <a
                href="/terms-and-conditions"
                className="text-gray-300 hover:text-white transition duration-200 font-medium"
              >
                Terms & Conditions
              </a>

              <div className="flex gap-5 text-xl">
                <a href="https://www.facebook.com/people/ML-Support/61574639172914/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/mlsupport_care/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@mlsupport-s1r" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  <FaYoutube />
                </a>
                <a href="https://www.linkedin.com/company/ml-support-kolkata/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Copyright */}
          <div className="text-center text-gray-400 text-xs mt-4 sm:hidden">
            © 2025 ML Support. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}