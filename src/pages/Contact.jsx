import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Ambulance, Users, Shield, ArrowRight, Star, CheckCircle, Globe, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>ML Support | 24×7 Ambulance & Healthcare Contact Helpline</title>
        <meta 
          name="description" 
          content="Contact ML Support for emergency response, ambulance help, or healthcare advice. Our support team is available 24×7 across India."
        />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 rounded-full px-6 py-3 text-sm font-semibold mb-8 shadow-md mt-8">
            <Phone className="w-5 h-5" />
            24×7 Emergency Helpline: <span className="font-bold mx-1">+91-626-266-6631</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to Help You
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get in touch with our healthcare experts for emergency response, ambulance services, or any medical assistance
          </p>
        </div>
      </section>

      {/* Enhanced Contact Form & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-100 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  <Mail className="w-4 h-4" />
                  SEND US A MESSAGE
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and our team will respond within 2 hours.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                 
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service Needed</label>
                  <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white">
                    <option>Select a service</option>
                    <option>Emergency Ambulance</option>
                    <option>Healthcare Membership</option>
                    <option>Medical Credit</option>
                    <option>Home Diagnostics</option>
                    <option>Medicine Delivery</option>
                    <option>Other</option>
                  </select>
                </div> */}

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you today?"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg py-4 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  We respect your privacy and never share your information
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Ambulance className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24×7 Emergency Helpline</h3>
                    <p className="text-gray-600 mb-3">Immediate ambulance and medical emergency support</p>
                    <a href="tel:+916262666631" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-3">
                      <Phone className="w-6 h-6" />
                      +91-626-266-6631
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kolkata Headquarters</h3>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      ML Support Private Limited<br />
                      Technopolis Building, 4th Floor<br />
                      Plot No. X-1/1, Block-EP, Sector-V<br />
                      Salt Lake, Kolkata, West Bengal 700091
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <strong className="text-gray-800">24×7 Operations:</strong> Always Open
                      </p>
                      <p><strong className="text-gray-800">Emergency Support:</strong> 24×7 Available</p>
                      <p><strong className="text-gray-800">Office Visits:</strong> Anytime by Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                  <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <a href="mailto:info@mlsupport.org" className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                    info@mlsupport.org
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                  <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Website</h4>
                  <a href="https://mlsupport.org" className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                    mlsupport.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Located in the heart of Salt Lake's tech hub</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <a
              href="https://maps.app.goo.gl/9ApqEtkRrsSk5Fh66"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group cursor-pointer"
            >
              <iframe
                title="ML Support Office - Technopolis Building, Salt Lake, Kolkata"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.969428919373!2d88.48469761537482!3d22.576129985178863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d5e793b5a9%3A0x7e477e7f9e9b6c8f!2sTechnopolis%20Building!5e0!3m2!1sen!2sin!4v1737300000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300 group-hover:brightness-95"
              ></iframe>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-gray-900 font-bold px-6 py-3 rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold">64.6K+</p>
              <p className="mt-2 text-lg">Families Trust Us</p>
            </div>
            <div>
              <Ambulance className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold">24×7</p>
              <p className="mt-2 text-lg">Emergency Ready</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold">300+</p>
              <p className="mt-2 text-lg">Partner Hospitals</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold">5 min</p>
              <p className="mt-2 text-lg">Avg Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for Complete Healthcare Protection?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of families who never worry about medical emergencies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Shield className="w-5 h-5" />
                View Membership Plans
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+916262666631"
                className="border-2 border-emerald-600 text-emerald-600 font-bold text-lg py-4 px-8 rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {[
                "No Hidden Charges",
                "Free Ambulance Service", 
                "300+ Hospital Network",
                "24×7 Instant Support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;