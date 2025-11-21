import { FaUserPlus, FaHeadset, FaStethoscope, FaHandHoldingHeart, FaCheck, FaClock } from 'react-icons/fa';

const HowItWorks = () => {
const steps = [
  {
    title: "Sign Up Easily",
    desc: "Join within minutes through our online portal or call our 24×7 healthcare helpline in Kolkata for quick setup.",
    icon: FaUserPlus,
  },
  {
    title: "Request Help Anytime",
    desc: "In an emergency, dial our number for ambulance service in Kolkata or request any medical support instantly via our member app.",
    icon: FaHeadset,
  },
  {
    title: "Complete Health Coordination",
    desc: "From ambulance to online free doctor consultation in Kolkata, diagnostics, treatment planning, and post-care — we coordinate everything for you.",
    icon: FaStethoscope,
  },
  {
    title: "You Rest, We Handle the Rest",
    desc: "Enjoy stress-free healthcare as we manage medical assistance services, billing, follow-ups, and every step of your care journey.",
    icon: FaHandHoldingHeart,
  },
];


  return (
    <section className="py-28 bg-gray-50 " >
      <div className="max-w-7xl mx-auto px-6 bg-[#f3fcf7]">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-6 text-l md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A seamless, transparent journey from enrollment to lifetime healthcare coverage
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

          {/* Elegant Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-20 right-20 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-10 text-center transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-green-600 group h-full flex flex-col">

                {/* Step Number - Premium Style */}
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl ring-4 ring-white">
                  0{index + 1}
                </div>

                {/* Icon with Subtle Ring */}
                <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-7 text-white shadow-xl ring-8 ring-green-100 group-hover:ring-green-200 transition-all">
                  <step.icon className="w-full h-full" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-base">
                  {step.desc}
                </p>

                {/* Minimal Badge */}
                <div className="mt-8 inline-flex items-center gap-2 text-green-700 font-medium">
                  <FaCheck className="text-lg" />
                  <span className="text-sm uppercase tracking-wider">Step {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button
            onClick={() => {
              document
                .getElementById("membershipBenefits")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 text-green-700 font-medium border-b-2 border-green-700 hover:border-green-900 transition-all"
          >
            See Membership Benefits →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;