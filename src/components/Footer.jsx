import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset,
  FaAmbulance, FaStethoscope, FaTruck, FaHospital, FaShieldAlt,
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import logo from "../assets/LOGO1.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Hospitals", path: "/hospital" },
    { name: "Membership", path: "/membership" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ];

  const emergencyServices = [
    { icon: FaAmbulance, text: "Free Ambulance (180 km)" },
    { icon: FaStethoscope, text: "Online Doctor Consultation" },
    { icon: FaTruck, text: "Medicine Home Delivery" },
    { icon: FaHospital, text: "300+ Hospital Network" },
    { icon: FaShieldAlt, text: "24×7 Emergency Support" },
  ];

  const addresses = [
    {
      location: "West Bengal – Techno Polis, Salt Lake",
      details: "BP Block, Sector V, Kolkata, 700091",
    },
    {
      location: "West Bengal - Mani Casadona",
      details: "Plot No. 11F/04, Action Area II, Rajarhat Main Road, New Town, Kolkata, West Bengal 700135",
    },
    {
      location: "Uttar Pradesh – G3 Plot No. B-794, World Bank Barra",
      details: "Kanpur, U.P. – 208027",
    },

  ];

  const contactInfo = [
    { icon: FaHeadset, label: "Toll-Free", value: "1800-8896-525", type: "tel" },
    { icon: FaPhoneAlt, label: "Phone", value: "+91 626-266-6631", type: "tel" },
    { icon: FaEnvelope, label: "Email", value: "info@mlsupport.org", type: "email" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/people/ML-Support/61574639172914/" },
    { icon: FaInstagram, url: "https://www.instagram.com/mlsupport_care/" },
    { icon: FaYoutube, url: "https://www.youtube.com/@mlsupport-s1r" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/ml-support-kolkata/" },
  ];

  return (
    <>
      <Helmet>
        <title>ML Support | 24×7 Ambulance & Complete Healthcare Services</title>
        <meta
          name="description"
          content="Free ambulance up to 180 km, diabetic tests, doctor consultation, medicine delivery, and 300+ hospital network. Trusted by 65,000+ families across India."
        />
      </Helmet>

      <footer className="bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800 text-white">

        {/* ================= MAIN FOOTER ================= */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {/* ------------------ Company Info ------------------ */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img src={logo} alt="ML Support" className="h-18 w-auto object-contain" />
              </Link>

              <p className="text-green-100 text-sm leading-relaxed">
                India's trusted healthcare partner offering emergency medical support, free ambulance services, and coordinated healthcare solutions across the nation.
              </p>

              {/* TrustPilot Badge */}
              <div className="flex items-center gap-1 mt-4">
                <SiTrustpilot className="text-green-400 text-xl flex-shrink-0" />
                <span className="text-green-100 text-sm font-medium">
                  Rated 4.8/5 on Trustpilot
                </span>
              </div>

            </div>

            {/* ------------------ Quick Links ------------------ */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>

              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-green-100 hover:text-white text-sm transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Legal */}
              <div className="pt-4 border-t border-green-700 space-y-2">
                {legalLinks.map((link) => (
                  <Link key={link.name} to={link.path} className="text-green-200 hover:text-white text-xs block">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ------------------ Contact Info ------------------ */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>

              {/* Addresses */}
              <div className="space-y-3">
                {addresses.map((address, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-300 text-sm flex-shrink-0" />
                    <div>
                      <p className="text-green-50 text-sm font-medium">{address.location}</p>
                      <p className="text-green-200 text-xs">{address.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Details */}
              <div className="space-y-2">
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={`${c.type}:${c.value}`}
                    className="flex items-center gap-2 text-green-100 hover:text-white transition"
                  >
                    <c.icon className="text-green-300 text-lg flex-shrink-0" />
                    <span className="text-sm font-medium">{c.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ------------------ Social & Emergency Services ------------------ */}
            <div className="space-y-6">

              {/* Social */}
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-700/50 border border-green-600 rounded-xl flex items-center justify-center text-green-200 hover:bg-green-600 hover:text-white hover:scale-110 transition"
                    >
                      <s.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency Services */}
              <div className="bg-green-700/30 p-4 rounded-xl border border-green-600">
                <div className="space-y-2">
                  {emergencyServices.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <service.icon className="text-green-400 text-sm flex-shrink-0" />
                      <span className="text-green-100 text-sm">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ------------------ Bottom Copyright ------------------ */}
        <div className="border-t border-green-700">
          <div className="container mx-auto px-6 py-4 text-center">
            <p className="text-green-300 text-sm">
              © {currentYear} ML Support Private Limited. All rights reserved.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
