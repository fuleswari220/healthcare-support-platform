import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO1.webp";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaAmbulance,
  FaStethoscope,
  FaTruck,
  FaHospital,
  FaShieldAlt
} from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

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
      location: "West Bengal - PS Abacus Building, NH12, Action Area IIE, New Town",
      details: "Kolkata, 700157"
    },
    {
      location: "West Bengal – Techno Polis, Salt Lake",
      details: "BP Block, Sector V, Kolkata, 700091"
    },
    {
      location: "Uttar Pradesh – Chandak Imperial Square",
      details: "16, 105, Mall Rd, near RBI, Kanpur, 208001"
    }
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
          content="Free ambulance up to 180 km, diabetic tests, online doctor consultation, medicine delivery, and 300+ hospital network. Trusted by 65,000+ families across India."
        />
      </Helmet>

      <footer className="bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="ML Support - Complete Healthcare Solutions"
                  className="h-18 w-auto object-contain"
                />
              </Link>

              <p className="text-green-100 text-sm leading-relaxed">
                India's trusted healthcare partner providing free ambulance services, medical coordination,
                and complete healthcare solutions to 65,000+ families across the nation.
              </p>

              {/* Trust Badge */}
              <div className="bg-green-700/50 rounded-lg p-4 border border-green-600">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-green-50 text-sm font-semibold">24×7 Active Support</p>
                </div>
                <p className="text-green-200 text-xs">Serving Kolkata & Pan-India</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-green-100 hover:text-white text-sm transition-colors duration-200 py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Legal Links */}
              <div className="pt-4 border-t border-green-700">
                <div className="space-y-2">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-green-200 hover:text-white text-xs transition-colors block"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>

              {/* Addresses */}
              <div className="space-y-3">
                {addresses.map((address, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700/50 border border-green-600 flex-shrink-0 mt-0.5">
                      <FaMapMarkerAlt className="text-green-300 text-xs" />
                    </div>
                    <div>
                      <p className="text-green-50 text-sm font-medium">{address.location}</p>
                      <p className="text-green-200 text-xs">{address.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Details */}
              <div className="space-y-2 pt-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={`${contact.type}:${contact.value}`}
                    className="flex items-center gap-3 text-green-100 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-700/50 border border-green-600 group-hover:bg-green-600 transition-colors">
                      <contact.icon className="text-green-300 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-green-300">{contact.label}</p>
                      <p className="text-sm font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-700/50 border border-green-600 text-green-200 hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency Services */}
              <div className="bg-green-700/30 rounded-xl p-4 border border-green-600">
                <h4 className="text-green-50 font-bold text-sm mb-3 flex items-center gap-2">
                  <FaShieldAlt className="text-green-300" />
                  24/7 Emergency Services
                </h4>
                <div className="space-y-2">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <service.icon className="text-green-400 text-xs flex-shrink-0" />
                      <span className="text-green-100 text-xs">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="text-center">
                <p className="text-green-200 text-sm">
                  Available <span className="font-bold text-white">24/7 • 365 Days</span>
                </p>
                <p className="text-green-300 text-xs mt-1">
                  Trusted by 65,000+ families across India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Final Safe Version */}
        <div className="border-t border-green-700">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-center">

              {/* Copyright */}
              <p className="text-green-300 text-sm">
                © {currentYear} ML Support Private Limited. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;