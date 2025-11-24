import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/LOGO1.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const iconBox =
    "w-8 h-8 flex items-center justify-center rounded-full border border-emerald-400 text-white";

  return (
    <>
      <Helmet>
        <title>ML Support | 24×7 Ambulance & Complete Healthcare in Kolkata</title>
        <meta
          name="description"
          content="Free ambulance up to 180 km, diabetic tests, free online doctor consultation, medicine home delivery, and 300+ hospital tie-ups. Trusted by 65,000+ families across India."
        />
      </Helmet>


      <footer className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ML Support Logo" className="w-30 h-30 object-contain" />
            </div>

            <p className="text-emerald-100 mb-4">
              Free ambulance up to 180 km, diabetic tests, free online doctor consultation, medicine home delivery, and 300+ hospital tie-ups.
              Trusted by 65,000+ families across India.
            </p>


            <div className="bg-emerald-800/50 rounded-lg p-4 border border-emerald-600">
              <p className="text-emerald-200 text-sm font-semibold">24×7 Ambulance & Complete Healthcare</p>
              <p className="text-emerald-100 text-xs mt-1">Serving Kolkata & Across India</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/hospitals" className="hover:text-white transition-colors">Hospitals</a></li>
              <li><a href="/membership" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>

            <p className="text-emerald-100 mb-2 font-semibold">Addresses:</p>

            {/* Address 1 */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-emerald-400 bg-transparent mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <p className="text-emerald-100 text-sm">
                West Bengal- Mani Casadona International Financial Hub. West Tower, 3WS5D , Kolkata, 700160              </p>
            </div>

            {/* Address 2 */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-emerald-400 bg-transparent mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <p className="text-emerald-100 text-sm">
                West Bengal – Techno Polis, Salt Lake, BP Block, Sector V, Kolkata, 700091
              </p>
            </div>

            {/* Address 3 */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-emerald-400 bg-transparent mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <p className="text-emerald-100 text-sm">
                Uttar Pradesh – Chandak Imperial Square 16, 105, Mall Rd, near RBI, Kanpur, 208001
              </p>
            </div>

            {/* Toll Free */}
            <div className="flex items-center gap-3 mb-2">
              <div className={iconBox}><FaHeadset /></div>
              <p className="text-emerald-100">
                <strong>Toll-Free:</strong> 1800-8896-525
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-2">
              <div className={iconBox}><FaPhoneAlt /></div>
              <p className="text-emerald-100">
                <strong>Phone:</strong> +91 626-266-6631
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className={iconBox}><FaEnvelope /></div>
              <p className="text-emerald-100">
                <strong>Email:</strong> info@mlsupport.org
              </p>
            </div>
          </div>

          {/* Column 4: Social & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>

            <div className="flex space-x-4 text-emerald-100 text-2xl mb-6">
              <a
                href="https://www.facebook.com/people/ML-Support/61574639172914/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/mlsupport_care/?igsh=OGQxcHNsMTU2bGQy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@mlsupport-s1r"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.linkedin.com/company/ml-support-kolkata/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="bg-emerald-800/50 rounded-lg p-4 border border-emerald-600">
              <p className="text-emerald-200 font-semibold mb-2">24/7 Emergency Services</p>
              <div className="space-y-1 text-sm text-emerald-100">
                <p>• Free Ambulance (180 km)</p>
                <p>• Free Online Doctor Consultation</p>
                <p>• Medicine Home Delivery</p>
                <p>• Home Diagnostics</p>
                <p>• 300+ Hospital Network</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-emerald-200">
              Available <span className="font-semibold text-white">24/7 — 365 days</span>
            </p>
            <p className="mt-2 text-sm text-emerald-100">
              Trusted by 65,000+ families across India for complete healthcare solutions.
            </p>
          </div>
        </div>

        <div className="text-center mt-10 text-emerald-200 text-sm border-t border-emerald-700 pt-6">
          © 2025 ML Support Private Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;