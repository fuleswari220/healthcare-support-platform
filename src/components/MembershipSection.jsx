import React from "react";
import { Check } from "lucide-react";

const MembershipSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4" id="membership">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">
            Trusted by <span className="text-green-600 font-bold">65,000+</span>{" "}
            Families in Kolkata & Across India
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            One Membership. Complete Family Healthcare.
          </h2>
          <p className="text-gray-600 mt-3">
            Unlimited ambulance, massive discounts, 24×7 support — all for less
            than your daily chai.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Basic Membership */}
          <div className="border border-green-300 bg-[#EAFBF2] rounded-3xl p-8 shadow-sm">
            <p className="text-green-600 font-semibold mb-2">Basic Membership</p>
            <h3 className="text-2xl font-bold mb-2">Essential Protection</h3>
            <p className="text-gray-700 mb-4">Lifetime Free</p>

            <p className="text-3xl font-bold">FREE</p>
            <p className="text-gray-500 -mt-1 mb-6">Forever • No renewal needed</p>

            <ul className="space-y-2 text-gray-700">
              {[
                "Free ambulance up to 180 km",
                "₹9/km reimbursement if unavailable",
                "Free doctor visit within 72 hrs post-discharge",
                "Up to 10% off hospital bills, tests & medicines",
                "Free medicine delivery",
                "Weekly diabetic checkup @ ₹100/month",
                "24×7 helpline + telemedicine support",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <Check className="text-green-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition">
              Get Free Membership
            </button>
          </div>

          {/* Gold Membership */}
          <div className="border-2 border-green-500 bg-white rounded-3xl p-8 shadow-lg relative">
            <span className="absolute top-4 right-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </span>

            <p className="text-green-600 font-semibold mb-2">Gold Membership</p>
            <h3 className="text-2xl font-bold mb-2">
              Complete Peace of Mind for Your Entire Family
            </h3>

            <p className="text-3xl font-bold">₹599</p>
            <p className="text-gray-500 -mt-1 mb-6">per year only (₹2,999 → ₹599)</p>

            <p className="text-gray-700 font-semibold mb-4">
              Covers up to 5 family members for a full year!
            </p>

            <ul className="space-y-2 text-gray-700">
              {[
                "Free ambulance up to 250 km",
                "Up to 50% off pathology & diagnostics",
                "20% off MRI, CT, X-ray",
                "20% off medicines + free delivery",
                "10% discount on total hospital bill",
                "24×7 at-home nursing support",
                "Free follow-up doctor visits (7 days)",
                "Diabetic tests 2×/month @ ₹100 only",
                "Free personalized diet charts",
                "Full mediclaim & insurance support",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <Check className="text-green-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition">
              Get Gold @ ₹599/year
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              300+ Partner Hospitals • 1-Year Validity • Instant Activation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
