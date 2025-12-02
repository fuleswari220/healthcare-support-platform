import React, { useState } from "react";
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
  BadgeCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const MembershipSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardType) => {
    setActiveCard(activeCard === cardType ? null : cardType);
  };

  const basicFeatures = [
    { text: "Free ambulance up to 180 km", icon: Ambulance },
    { text: "₹9/km reimbursement if unavailable", icon: Truck },
    { text: "Free doctor visit within 72 hrs post-discharge", icon: Stethoscope },
    { text: "Up to 10% off hospital bills, tests & medicines", icon: BadgeCheck },
    { text: "Free medicine delivery", icon: Truck },
    { text: "Weekly diabetic checkup @ ₹100/month", icon: Heart },
    { text: "24×7 helpline + telemedicine support", icon: Phone },
  ];

  const goldFeatures = [
    { text: "Free ambulance up to 250 km", icon: Ambulance },
    { text: "Up to 50% off pathology & diagnostics", icon: BadgeCheck },
    { text: "20% off MRI, CT, X-ray", icon: BadgeCheck },
    { text: "20% off medicines + free delivery", icon: Truck },
    { text: "10% discount on total hospital bill", icon: BadgeCheck },
    { text: "24×7 at-home nursing support", icon: Clock },
    { text: "Free follow-up doctor visits (7 days)", icon: Stethoscope },
    { text: "Diabetic tests 2×/month @ ₹100 only", icon: Heart },
    { text: "Free personalized diet charts", icon: Heart },
    { text: "Full Insurance support", icon: Shield },
  ];

  return (
    <section className="w-full py-8 md:py-16 px-4" id="membership">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Fixed for Mobile */}
        <div className="text-center mb-6 md:mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Heart className="w-3 h-3 md:w-4 md:h-4" />
            Protecting <span className="font-bold">1 Lakh+</span> Family Members
          </div> */}
          
          <h1 className="heading-primary font-bold text-gray-900 mb-3 md:mb-4 leading-tight md:leading-normal">
            Your Family's Health,<br className="md:hidden" /> Our Priority
          </h1>
          
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Emergency ambulance, doctor consultations, medicine delivery — complete care for your loved ones.
          </p>
        </div>

        {/* Desktop View - Original Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              {basicFeatures.map((item, index) => (
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
              {goldFeatures.map((item, index) => (
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

        {/* Mobile View - Accordion (Gold First, then Basic) */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {/* Gold Membership Accordion - FIRST */}
          <div className={`border-2 rounded-3xl overflow-hidden transition-all duration-300 relative ${
            activeCard === 'gold' ? 'border-green-500 shadow-2xl' : 'border-green-500 shadow-lg'
          }`}>
            {/* Popular Badge for Mobile */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-10">
              <Star className="w-3 h-3 fill-white" />
              POPULAR
            </div>

            <button
              onClick={() => toggleCard('gold')}
              className="w-full p-5 text-left bg-white flex justify-between items-center relative"
            >
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
                  <p className="text-green-600 font-semibold">Gold Membership</p>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Complete Peace of Mind
                </h3>
                <p className="text-gray-600 text-sm">For Your Entire Family</p>
                
                {/* Price on Mobile Header */}
                <div className="mt-3">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-xl font-bold text-green-600">₹599</span>
                    <span className="text-gray-500 line-through text-sm">₹2,999</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold">
                      80% OFF
                    </span>
                  </div>
                  <p className="text-green-700 text-xs">per year • Covers 5 members</p>
                </div>
              </div>
              
              <div className="ml-2">
                {activeCard === 'gold' ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </div>
            </button>
            
            {/* Collapsible Content */}
            <div className={`bg-white transition-all duration-300 ${
              activeCard === 'gold' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
              <div className="p-5 pt-0 border-t border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 font-semibold text-center bg-amber-50 py-2 rounded-lg border border-amber-200 flex items-center justify-center gap-2 text-xs">
                    <Star className="w-3 h-3 text-amber-500" />
                    Premium healthcare coverage
                  </p>
                </div>

                <ul className="space-y-2 text-gray-700 mb-4">
                  {goldFeatures.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-xs">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 mb-3 text-sm">
                  <Star className="w-4 h-4" />
                  Get Gold @ ₹599/year
                </button>

                {/* Trust Badges for Mobile */}
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Building className="w-3 h-3 text-green-600" />
                      300+ Hospitals
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      1-Year Validity
                    </div>
                    <div className="flex items-center gap-1">
                      <Ambulance className="w-3 h-3 text-green-600" />
                      Instant Activation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Membership Accordion - SECOND */}
          <div className={`border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
            activeCard === 'basic' ? 'border-green-500 shadow-2xl' : 'border-green-200 shadow-lg'
          }`}>
            <button
              onClick={() => toggleCard('basic')}
              className="w-full p-5 text-left bg-white flex justify-between items-center"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <p className="text-green-600 font-semibold">Basic Membership</p>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Essential Protection</h3>
                <p className="text-gray-600 text-sm">Lifetime Free Access</p>
                
                {/* Price on Mobile Header */}
                <div className="mt-3">
                  <p className="text-xl font-bold text-green-600">FREE</p>
                  <p className="text-green-700 text-xs">Forever • No renewal needed</p>
                </div>
              </div>
              
              <div className="ml-2">
                {activeCard === 'basic' ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </div>
            </button>
            
            {/* Collapsible Content */}
            <div className={`bg-white transition-all duration-300 ${
              activeCard === 'basic' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
              <div className="p-5 pt-0 border-t border-gray-100">
                <ul className="space-y-2 text-gray-700 mb-4">
                  {basicFeatures.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-xs">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <Shield className="w-4 h-4" />
                  Get Free Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;