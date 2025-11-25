import React from 'react';
import {
  Check, Shield, Ambulance, PhoneCall, Users, Heart, Star, ArrowRight, Phone, Calendar, TestTube,
  Pill, Activity, Stethoscope, Droplets, Utensils,
  FileText, CreditCard, Clock, Home
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Membership = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-sm mt-4 md:mt-8">
            <Shield className="w-4 h-4 md:w-5 md:h-5" />
            Trusted by <span className="font-bold mx-1">65,000+</span> Families
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            One Membership.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Complete Family Healthcare
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4">
            Unlimited ambulance, massive discounts, 24×7 support — all for less than your daily chai.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <div className="flex items-center gap-2 bg-white px-4 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl shadow-sm">
              <Check className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" />
              <span className="text-sm md:text-base font-medium">No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl shadow-sm">
              <Users className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" />
              <span className="text-sm md:text-base font-medium">Covers Up to 5 Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl shadow-sm">
              <PhoneCall className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" />
              <span className="text-sm md:text-base font-medium">Instant Activation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Responsive */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Choose Your Plan</h2>
            <p className="mt-3 md:mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Gold Membership saves families an average of ₹45,000+ per year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6 md:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Basic Membership</h3>
                  <p className="text-sm md:text-base text-gray-600">Essential Protection • Lifetime Free</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-sm md:text-base text-gray-500">Forever • No renewal needed</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[
                    "Free ambulance up to 180 km",
                    "₹9/km reimbursement if unavailable",
                    "Free doctor visit within 72 hrs post-discharge",
                    "Up to 10% off hospital bills, tests & medicines",
                    "Free medicine delivery",
                    "Weekly diabetic checkup @ ₹100/month",
                    "24×7 helpline + telemedicine support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-200 transform hover:scale-[1.02] text-base md:text-lg">
                  Get Free Membership
                </button>
              </div>
            </div>

            {/* Gold Plan - Featured */}
            <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl border-2 border-green-500 transform hover:scale-[1.01] transition-all duration-300">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-green-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-lg flex items-center gap-1 md:gap-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4" fill="white" />
                  MOST POPULAR
                </div>
              </div>

              <div className="p-6 md:p-8 pt-10 md:pt-12">
                {/* Plan Header */}
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Gold Membership</h3>
                  <p className="text-sm md:text-base text-gray-600">Complete Peace of Mind for Your Entire Family</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-lg md:text-2xl text-gray-500 line-through">₹2,999</span>
                    <span className="text-4xl md:text-5xl font-bold text-green-600">₹599</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 font-semibold">per year only</p>
                  <p className="text-green-600 font-bold mt-1 text-sm md:text-base">
                    Covers up to 5 family members for a full year!
                  </p>
                </div>

                {/* Features with Icons */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[
                    { icon: Ambulance, text: "Free ambulance up to 250 km" },
                    { icon: TestTube, text: "Up to 50% off pathology & diagnostics" },
                    { icon: Activity, text: "20% off MRI, CT, X-ray" },
                    { icon: Pill, text: "20% off medicines + free delivery" },
                    { icon: FileText, text: "10% discount on total hospital bill" },
                    { icon: Users, text: "24×7 at-home nursing support" },
                    { icon: Heart, text: "Free follow-up doctor visits (7 days)" },
                    { icon: Droplets, text: "Diabetic tests 2x/month @ ₹100 only" },
                    { icon: Stethoscope, text: "Free BP & Sugar Monitoring" },
                    { icon: Shield, text: "Full mediclaim & insurance support" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg">
                  Get Gold @ ₹599/year
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Footer Note */}
                <div className="mt-3 md:mt-4 text-center">
                  <p className="text-xs md:text-sm text-gray-500 flex items-center justify-center gap-1 md:gap-2 flex-wrap">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                    <span>300+ Partner Hospitals • 1-Year Validity • Instant Activation</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table - Responsive */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Clear Comparison</h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-3 min-w-[600px] gap-4 md:gap-8 text-center">
              <div className="font-semibold text-gray-700 text-base md:text-lg">Features</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700">Basic</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">Gold Recommended</div>

              <div className="bg-gray-50 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-left pl-4 md:pl-8 text-sm md:text-base">Ambulance Coverage</div>
              <div className="py-3 md:py-4 bg-gray-50 text-sm md:text-base">180 km</div>
              <div className="py-3 md:py-4 text-green-600 font-bold bg-green-50 rounded-lg md:rounded-xl text-sm md:text-base">250 km</div>

              <div className="bg-gray-50 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-left pl-4 md:pl-8 text-sm md:text-base">Pathology Discount</div>
              <div className="py-3 md:py-4 text-sm md:text-base">10%</div>
              <div className="py-3 md:py-4 text-green-600 font-bold bg-green-50 rounded-lg md:rounded-xl text-sm md:text-base">Up to 50%</div>

              <div className="bg-gray-50 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-left pl-4 md:pl-8 text-sm md:text-base">At-Home Nursing</div>
              <div className="py-3 md:py-4 text-gray-400 text-sm md:text-base">Not Included</div>
              <div className="py-3 md:py-4 text-green-600 font-bold bg-green-50 rounded-lg md:rounded-xl text-sm md:text-base">Included 24×7</div>

              <div className="bg-gray-50 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-left pl-4 md:pl-8 text-sm md:text-base">Family Members Covered</div>
              <div className="py-3 md:py-4 text-sm md:text-base">Individual</div>
              <div className="py-3 md:py-4 text-green-600 font-bold bg-green-50 rounded-lg md:rounded-xl text-sm md:text-base">Up to 5</div>

              <div className="bg-gray-50 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-left pl-4 md:pl-8 text-sm md:text-base">Annual Cost</div>
              <div className="py-3 md:py-4 font-bold text-gray-900 text-sm md:text-base">FREE</div>
              <div className="py-3 md:py-4 text-green-600 font-bold bg-green-50 rounded-lg md:rounded-xl text-sm md:text-base">₹599/year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar - Responsive */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            <div>
              <Users className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-90" />
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">65K+</p>
              <p className="mt-1 md:mt-2 text-sm md:text-lg">Happy Families</p>
            </div>
            <div>
              <Ambulance className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-90" />
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">24×7</p>
              <p className="mt-1 md:mt-2 text-sm md:text-lg">Emergency Ready</p>
            </div>
            <div>
              <Heart className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-90" />
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">300+</p>
              <p className="mt-1 md:mt-2 text-sm md:text-lg">Partner Hospitals</p>
            </div>
            <div>
              <Star className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-90" fill="white" />
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">4.4/5</p>
              <p className="mt-1 md:mt-2 text-sm md:text-lg">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Form + Call Button - Responsive */}
      <section id="join" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Join 65,000+ Smart Families Today
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10">
            Our expert will call you in <span className="text-green-600 font-bold">under 30 seconds</span>
          </p>

          <form className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-200 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="px-4 md:px-6 py-3 md:py-4 lg:py-5 rounded-lg md:rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-2 md:focus:ring-4 focus:ring-green-100 transition text-base md:text-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="px-4 md:px-6 py-3 md:py-4 lg:py-5 rounded-lg md:rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-2 md:focus:ring-4 focus:ring-green-100 transition text-base md:text-lg"
              />
            </div>

            {/* <select className="w-full px-4 md:px-6 py-3 md:py-4 lg:py-5 rounded-lg md:rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-2 md:focus:ring-4 focus:ring-green-100 transition text-base md:text-lg mb-6">
              <option>Select Plan</option>
              <option>Basic Membership (FREE)</option>
              <option selected>Gold Membership ₹599/year ← Best Value</option>
            </select> */}

            {/* Join Now Button */}
            <a
              href="https://mlsupport.org/ML_support/Customer/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg md:text-xl lg:text-2xl py-4 md:py-5 lg:py-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 md:gap-4"
            >
              Yes! Join Now
            </a>

            {/* Call Helpline Button */}
            <a
              href="tel:+916262666631"
              className="mt-4 md:mt-6 w-full inline-flex items-center justify-center gap-2 md:gap-3 bg-white border-2 md:border-4 border-green-500 text-green-700 font-bold text-base md:text-xl py-4 md:py-5 lg:py-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              <div className="text-center">
                <div className="text-sm md:text-base lg:text-lg">Call 24×7 Helpline Now</div>
                <div className="text-xs md:text-sm font-normal opacity-80">+91 626-266-6631</div>
              </div>
            </a>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              <Shield className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-600 flex-shrink-0" />
              100% Secure • No Spam • We respect your privacy
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Membership;