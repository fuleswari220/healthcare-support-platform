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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 rounded-full px-6 py-3 text-sm font-semibold mb-8 shadow-md">
            <Shield className="w-5 h-5" />
            Trusted by <span className="font-bold mx-1">18,600+</span> Families in Kolkata & Across India
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            One Membership.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Complete Family Healthcare
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Unlimited ambulance, massive discounts, 24×7 support — all for less than your daily chai.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm">
              <Check className="w-6 h-6 text-emerald-600 mr-2" />
              <span className="font-medium">No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm">
              <Users className="w-6 h-6 text-emerald-600 mr-2" />
              <span className="font-medium">Covers Up to 5 Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm">
              <PhoneCall className="w-6 h-6 text-emerald-600 mr-2" />
              <span className="font-medium">Instant Activation Call</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Fixed Basic Plan */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Choose Your Plan</h2>
            <p className="mt-4 text-xl text-gray-600">Gold Membership saves families an average of ₹45,000+ per year</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Basic Plan - FIXED: Added feature list */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Membership</h3>
                  <p className="text-gray-600">Essential Protection • Lifetime Free</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-gray-500">Forever • No renewal needed</p>
                </div>

                {/* Features List - ADDED BACK */}
                <ul className="space-y-4 mb-8">
                  {[
                    "Free ambulance up to 180 km",
                    "$9/km reimbursement if unavailable",
                    "Free doctor visit within 72 hrs post-discharge",
                    "Up to 10% off hospital bills, tests & medicines",
                    "Free medicine delivery",
                    "Weekly diabetic checkup @ $100/month",
                    "24×7 helpline + telemedicine support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]">
                  Get Free Membership
                </button>
              </div>
            </div>

            {/* Gold Plan - Featured */}
            <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-green-500 transform hover:scale-[1.01] transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4" fill="white" />
                  MOST POPULAR
                </div>
              </div>

              <div className="p-8 pt-12">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold Membership</h3>
                  <p className="text-gray-600">Complete Peace of Mind for Your Entire Family</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-2xl text-gray-500 line-through">₹2,999</span>
                    <span className="text-5xl font-bold text-green-600">₹599</span>
                  </div>
                  <p className="text-gray-600 font-semibold">per year only</p>
                  <p className="text-green-600 font-bold mt-1">
                    Covers up to 5 family members for a full year!
                  </p>
                </div>

                {/* Features with Icons */}
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: Ambulance, text: "Free ambulance up to 250 km" },
                    { icon: TestTube, text: "Up to 50% off pathology & diagnostics" },
                    { icon: Activity, text: "20% off MRI, CT, X-ray" },
                    { icon: Pill, text: "20% off medicines + free delivery" },
                    { icon: FileText, text: "10% discount on total hospital bill" },
                    { icon: Users, text: "24×7 at-home nursing support" },
                    { icon: Heart, text: "Free follow-up doctor visits (7 days)" },
                    { icon: Droplets, text: "Diabetic tests 2x/month @ $100 only" },
                    { icon: Utensils, text: "Free personalized diet charts" },
                    { icon: Shield, text: "Full mediclaim & insurance support" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3">
                  Get Gold @ ₹599/year
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Footer Note */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    300+ Partner Hospitals • 1-Year Validity • Instant Activation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Clear Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="font-semibold text-gray-700 text-lg">Features</div>
            <div className="text-2xl font-bold text-gray-700">Basic</div>
            <div className="text-2xl font-bold text-green-600">Gold Recommended</div>

            <div className="bg-gray-50 py-4 rounded-xl font-medium text-left pl-8">Ambulance Coverage</div>
            <div className="py-4 bg-gray-50">180 km</div>
            <div className="py-4 text-green-600 font-bold bg-green-50 rounded-xl">250 km</div>

            <div className="bg-gray-50 py-4 rounded-xl font-medium text-left pl-8">Pathology Discount</div>
            <div className="py-4">10%</div>
            <div className="py-4 text-green-600 font-bold bg-green-50 rounded-xl">Up to 50%</div>

            <div className="bg-gray-50 py-4 rounded-xl font-medium text-left pl-8">At-Home Nursing</div>
            <div className="py-4 text-gray-400">Not Included</div>
            <div className="py-4 text-green-600 font-bold bg-green-50 rounded-xl">Included 24×7</div>

            <div className="bg-gray-50 py-4 rounded-xl font-medium text-left pl-8">Family Members Covered</div>
            <div className="py-4">Individual</div>
            <div className="py-4 text-green-600 font-bold bg-green-50 rounded-xl">Up to 5</div>

            <div className="bg-gray-50 py-4 rounded-xl font-medium text-left pl-8">Annual Cost</div>
            <div className="py-4 font-bold text-gray-900">FREE</div>
            <div className="py-4 text-green-600 font-bold bg-green-50 rounded-xl">₹599/year</div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-extrabold">64.6K+</p>
              <p className="mt-2 text-lg">Happy Families</p>
            </div>
            <div>
              <Ambulance className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-extrabold">24×7</p>
              <p className="mt-2 text-lg">Emergency Ready</p>
            </div>
            <div>
              <Heart className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-extrabold">300+</p>
              <p className="mt-2 text-lg">Partner Hospitals</p>
            </div>
            <div>
              <Star className="w-16 h-16 mx-auto mb-4 opacity-90" fill="white" />
              <p className="text-5xl font-extrabold">4.4/5</p>
              <p className="mt-2 text-lg">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Form */}
      <section id="join" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Join 64,600++ Smart Families Today
          </h2>
          <p className="text-2xl text-gray-700 mb-10">
            Our expert will call you in <span className="text-green-600 font-bold">under 5 minutes</span>
          </p>

          <form className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition text-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition text-lg"
              />
            </div>

            <select className="w-full px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition text-lg mb-6">
              <option>Select Plan</option>
              <option>Basic Membership (FREE)</option>
              <option selected>Gold Membership $599/year ← Best Value</option>
            </select>

            <a
              href="https://mlsupport.org/ML_support/Customer/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-2xl py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-4"
            >
              Yes! Join Now
            </a>


            <p className="mt-6 text-gray-600 flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
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