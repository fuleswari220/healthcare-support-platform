import React from "react";
import { 
  Ambulance, 
  Stethoscope, 
  Video, 
  Building, 
  Star, 
  Crown, 
  Check, 
  Users,
  Phone,
  ArrowRight,
  Shield,
  HeadsetIcon
} from 'lucide-react';

const MembershipFullSection = () => {
  const benefits = [
    {
      icon: Ambulance,
      title: "Unlimited Free Ambulance",
      description: "Emergency ambulance transfers across India within 180 km radius",
      features: [
        { text: "Completely Free", subtext: "No hidden charges, no limits" }
      ]
    },
    {
      icon: Stethoscope,
      title: "Weekly Health Checkups",
      description: "Regular diabetic and comprehensive full-body health screening packages at home",
      features: [
        { text: "Available All Over India", subtext: "Weekly monitoring for better health" }
      ]
    },
    {
      icon: Video,
      title: "Free Online Doctor Consultation",
      description: "Connect with certified doctors anytime for free and get expert medical guidance",
      features: [
        { text: "Medicine Home Delivery", subtext: "Fast, reliable medicine delivery to your door" }
      ]
    },
    {
      icon: Building,
      title: "300+ Partner Hospitals",
      description: "Access to extensive network of trusted healthcare providers across India",
      features: [
        { text: "Pan-India Coverage", subtext: "Quality care wherever you are" }
      ]
    },
    {
      icon: Star,
      title: "Priority Support",
      description: "Dedicated assistance with complete transparency and clear pricing",
      features: [
        { text: "Always Available", subtext: "Your health is our priority" }
      ]
    },
    {
      icon: Crown,
      title: "Premium Membership",
      description: "Join India's most trusted healthcare family with complete peace of mind",
      features: [
        { text: "All Benefits Included", subtext: "Complete healthcare coverage" },
        { text: "No Hidden Fees", subtext: "Transparent pricing always" }
      ],
      isPremium: true
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28" id="membershipBenefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Trusted by 65,000+ Families
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            With ML Support, You're Not Just a Patient
          </h1>
          
          <p className="text-2xl md:text-3xl text-green-600 font-semibold mb-4">
            You're a Member of India's Most Dependable Health Family
          </p>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Members unlock comprehensive advantages designed for your complete healthcare journey - 
            from emergency to recovery and everything in between.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border-2 ${
                  benefit.isPremium 
                    ? 'bg-gradient-to-br from-green-600 to-emerald-700 border-green-500 text-white shadow-2xl transform hover:scale-105' 
                    : 'bg-white border-gray-200 hover:border-green-300 hover:scale-105'
                } h-full flex flex-col`}
              >
                
                {/* Premium Badge */}
                {benefit.isPremium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`text-4xl mb-4 ${
                  benefit.isPremium ? 'text-white' : 'text-green-600'
                }`}>
                  <IconComponent className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  benefit.isPremium ? 'text-white' : 'text-gray-900'
                }`}>
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className={`flex-grow mb-4 leading-relaxed ${
                  benefit.isPremium ? 'text-green-100' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={`rounded-lg p-3 ${
                        benefit.isPremium 
                          ? 'bg-green-500/20 border border-green-400/30' 
                          : 'bg-green-50 border border-green-100'
                      }`}
                    >
                      <p className={`font-semibold flex items-center gap-2 text-sm ${
                        benefit.isPremium ? 'text-white' : 'text-green-700'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          benefit.isPremium ? 'text-green-300' : 'text-green-600'
                        }`} />
                        {feature.text}
                      </p>
                      <p className={`text-xs mt-1 ${
                        benefit.isPremium ? 'text-green-200' : 'text-gray-600'
                      } ml-6`}>
                        {feature.subtext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Healthcare Experience?
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of families who never worry about medical emergencies again. 
              Complete healthcare protection is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <button
                onClick={() => window.open("https://mlsupport.org/ML_support/Customer/login.php", "_blank")}
                className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Shield className="w-6 h-6" />
                Activate Membership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-green-700 border-2 border-green-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <HeadsetIcon className="w-6 h-6" />
                Connect With Us
              </a>

              {/* Tertiary CTA */}
              <a
                href="tel:+916262666631"
                className="group inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-lg px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Note */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Instant activation
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                7-day money back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipFullSection;