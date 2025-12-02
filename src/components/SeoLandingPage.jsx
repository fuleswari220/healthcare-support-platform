import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your interest! Our team will contact you soon.");
  };

  const handleButtonClick = (action) => {
    // Button click handlers would go here
    alert(`You clicked on ${action}. This is a demo page.`);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* MOBILE CONTACT FORM FIRST */}
      <section className="lg:hidden py-8 px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Started Today</h3>
            <p className="text-gray-600 mb-6 text-sm">Fill the form and our team will contact you within 15 minutes</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  required
                  placeholder="Kolkata"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interested In *</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select service</option>
                  <option value="membership">Healthcare Membership</option>
                  <option value="ambulance">Ambulance Service</option>
                  <option value="diagnostics">Home Diagnostics</option>
                  <option value="credit">Medical Credit</option>
                  <option value="all">All Services</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                GET COMPLETE DETAILS
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="pt-6 lg:pt-12 pb-20 px-6 bg-gradient-to-br from-white to-emerald-50 lg:bg-gradient-to-br from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Complete Healthcare <span className="text-emerald-700">Support for Your Family</span>
              </h1>
              
              <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
                From emergency ambulance services to preventive health checks and financial support - 
                we provide comprehensive healthcare solutions designed for modern families.
              </p>
              
              <div className="mt-10 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Emergency ambulance service (up to 180 km)</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Weekly health screenings at home</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Interest-free medical credit options</span>
                </div>
              </div>
            </div>
            
            {/* CONTACT FORM - Desktop */}
            <div className="hidden lg:block bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600 mb-6">Our team will contact you within 15 minutes</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option value="">Select service interest</option>
                    <option value="membership">Healthcare Membership</option>
                    <option value="ambulance">Ambulance Service</option>
                    <option value="diagnostics">Home Diagnostics</option>
                    <option value="credit">Medical Credit</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Get Complete Details
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end healthcare support designed to meet the diverse needs of modern families
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 ambulance service with trained medical staff for emergencies</p>
            </div>
            
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Monitoring</h3>
              <p className="text-gray-600 text-sm">Regular health screenings and diagnostic tests at your convenience</p>
            </div>
            
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Support</h3>
              <p className="text-gray-600 text-sm">Zero-interest medical credit and insurance coordination services</p>
            </div>
            
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Access</h3>
              <p className="text-gray-600 text-sm">300+ partner hospitals across India for comprehensive care</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-16 px-6 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Professional healthcare services designed to provide support at every stage of your health journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Process, Comprehensive Care
            </h2>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto relative z-10">
                    {step.number}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from families who have experienced our healthcare support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BENEFITS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our healthcare family and access exclusive benefits designed for your peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Core Benefits</h3>
              <div className="space-y-4">
                {coreBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Support</h3>
              <div className="space-y-4">
                {additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Family's Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who trust us for comprehensive healthcare support
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-emerald-500/30 px-4 py-2 rounded-lg">
              <span className="text-sm">Free Ambulance Service</span>
            </div>
            <div className="bg-emerald-500/30 px-4 py-2 rounded-lg">
              <span className="text-sm">Health Screenings</span>
            </div>
            <div className="bg-emerald-500/30 px-4 py-2 rounded-lg">
              <span className="text-sm">Medical Credit Support</span>
            </div>
            <div className="bg-emerald-500/30 px-4 py-2 rounded-lg">
              <span className="text-sm">300+ Hospital Network</span>
            </div>
          </div>
          
          <button 
            onClick={() => handleButtonClick("Get Started")}
            className="px-10 py-4 bg-white text-emerald-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition duration-200 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

// Service data
const services = [
  {
    title: "Emergency Ambulance",
    description: "24/7 emergency ambulance service with trained medical staff for critical situations",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  },
  {
    title: "Home Diagnostics",
    description: "Comprehensive health tests and screenings conducted in the comfort of your home",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  },
  {
    title: "Post-Hospital Care",
    description: "Personalized recovery support and follow-up care after hospital discharge",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    title: "Medicine Delivery",
    description: "Reliable and timely delivery of prescribed medications to your doorstep",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  },
  {
    title: "Financial Coordination",
    description: "Insurance processing and financial support services for medical treatments",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  },
  {
    title: "Treatment Coordination",
    description: "End-to-end support for specialized treatments across our hospital network",
    icon: <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  }
];

// Steps data
const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Simple registration process with our team"
  },
  {
    number: "2",
    title: "Consultation",
    description: "Personalized healthcare needs assessment"
  },
  {
    number: "3",
    title: "Service Activation",
    description: "Immediate access to all healthcare services"
  },
  {
    number: "4",
    title: "Ongoing Support",
    description: "24/7 assistance and regular health monitoring"
  }
];

// Testimonials data
const testimonials = [
  {
    initials: "AS",
    name: "Arun Sharma",
    location: "Kolkata",
    content: "During my father's emergency, ML Support's ambulance service was incredibly prompt and professional. The entire process was seamless."
  },
  {
    initials: "PD",
    name: "Priya Das",
    location: "Howrah",
    content: "The weekly health screenings helped us catch potential issues early. The convenience of home testing is invaluable for our family."
  },
  {
    initials: "RB",
    name: "Rajesh Banerjee",
    location: "Salt Lake",
    content: "The financial support and insurance coordination made my mother's treatment stress-free. Truly comprehensive healthcare support."
  }
];

// Benefits data
const coreBenefits = [
  "Unlimited emergency ambulance services within 180 km",
  "Weekly comprehensive health screenings",
  "Zero-interest medical credit facility",
  "Access to 300+ partner hospitals nationwide",
  "24/7 medical assistance helpline"
];

const additionalBenefits = [
  "Personal health coordinator assigned to your family",
  "Regular health progress tracking and reports",
  "Priority appointment scheduling with specialists",
  "Medicine delivery and inventory management",
  "Post-treatment follow-up and recovery monitoring"
];

export default HomePage;