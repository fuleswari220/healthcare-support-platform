import React from "react";
import { 
  Check, 
  Star, 
  Users, 
  Ambulance, 
  Shield, 
  Building, 
  Heart,
  Clock,
  Truck,
  Stethoscope,
  Phone,
  BadgeCheck
} from "lucide-react";

const MembershipSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4" id="membership">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Enhanced */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Trusted by <span className="font-bold">65,000+</span> Families Across India
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            One Membership. Complete Family Healthcare.
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlimited ambulance, massive discounts, 24×7 support — all for less than your daily chai.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Basic Membership - Enhanced */}
          <div className="border-2 border-green-200 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-green-600" />
              <p className="text-green-600 font-semibold">Basic Membership</p>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential Protection</h3>
            <p className="text-gray-700 mb-4">Lifetime Free Access</p>

            {/* Price Highlight */}
            <div className="bg-green-50 rounded-2xl p-4 mb-6">
              <p className="text-4xl font-bold text-green-600">FREE</p>
              <p className="text-green-700 font-medium">Forever • No renewal needed</p>
            </div>

            <ul className="space-y-3 text-gray-700 flex-grow">
              {[
                { text: "Free ambulance up to 180 km", icon: Ambulance },
                { text: "₹9/km reimbursement if unavailable", icon: Truck },
                { text: "Free doctor visit within 72 hrs post-discharge", icon: Stethoscope },
                { text: "Up to 10% off hospital bills, tests & medicines", icon: BadgeCheck },
                { text: "Free medicine delivery", icon: Truck },
                { text: "Weekly diabetic checkup @ ₹100/month", icon: Heart },
                { text: "24×7 helpline + telemedicine support", icon: Phone },
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-green-600 text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Get Free Membership
            </button>
          </div>

          {/* Gold Membership - Enhanced */}
          <div className="border-2 border-green-500 bg-white rounded-3xl p-8 shadow-2xl relative hover:shadow-3xl transition-all duration-300 h-full flex flex-col">
            {/* Popular Badge - Improved */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
              <Star className="w-4 h-4 fill-white" />
              MOST POPULAR
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
              <p className="text-green-600 font-semibold">Gold Membership</p>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Complete Peace of Mind for Your Entire Family
            </h3>

            {/* Price Highlight with Discount */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6 border border-green-200">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-bold text-green-600">₹599</span>
                <span className="text-gray-500 line-through text-lg">₹2,999</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-bold">
                  80% OFF
                </span>
              </div>
              <p className="text-green-700 font-medium">per year • Covers 5 family members</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold text-center bg-amber-50 py-2 rounded-lg border border-amber-200 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                Premium benefits for complete healthcare coverage
              </p>
            </div>

            <ul className="space-y-3 text-gray-700 flex-grow">
              {[
                { text: "Free ambulance up to 250 km", icon: Ambulance },
                { text: "Up to 50% off pathology & diagnostics", icon: BadgeCheck },
                { text: "20% off MRI, CT, X-ray", icon: BadgeCheck },
                { text: "20% off medicines + free delivery", icon: Truck },
                { text: "10% discount on total hospital bill", icon: BadgeCheck },
                { text: "24×7 at-home nursing support", icon: Clock },
                { text: "Free follow-up doctor visits (7 days)", icon: Stethoscope },
                { text: "Diabetic tests 2×/month @ ₹100 only", icon: Heart },
                { text: "Free personalized diet charts", icon: Heart },
                { text: "Full mediclaim & insurance support", icon: Shield },
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Get Gold @ ₹599/year
            </button>

            {/* Trust Badges */}
            <div className="text-center mt-4">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4 text-green-600" />
                  300+ Partner Hospitals
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-600" />
                  1-Year Validity
                </div>
                <div className="flex items-center gap-1">
                  <Ambulance className="w-4 h-4 text-green-600" />
                  Instant Activation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;