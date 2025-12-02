import { FaUserPlus, FaHeadset, FaStethoscope, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const colors = {
  primary: "#00A651",
  lightGreen: "#E8F5E9",
  darkGreen: "#006400",
  white: "#FFFFFF",
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up in Minutes",
      desc: "Instant enrollment via app or a quick call to our 24×7 Kolkata helpline.",
      icon: FaUserPlus,
    },
    {
      title: "One Tap for Help",
      desc: "Emergency ambulance, doctor on call, or any support — instantly via app or phone.",
      icon: FaHeadset,
    },
    {
      title: "End-to-End Care Coordination",
      desc: "We manage ambulance, consultations, diagnostics, hospital admission & follow-ups.",
      icon: FaStethoscope,
    },
    {
      title: "You Heal, We Handle",
      desc: "Zero stress. We take care of bills, updates, medicines, and recovery support.",
      icon: FaHandHoldingHeart,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 lg:py-22 overflow-hidden"
    // style={{
    //   background: `linear-gradient(to bottom, ${colors.white}, ${colors.lightGreen}, ${colors.white})`,
    // }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="heading-primary font-extrabold tracking-tight"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.darkGreen})`,
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            How It Works
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A seamless, transparent journey from enrollment to lifetime healthcare coverage
          </p>
        </div>


        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative"
        >

          {/* Connecting Line */}
          <svg
            className="hidden lg:block absolute top-24 left-0 w-full h-32 pointer-events-none"
            viewBox="0 0 1200 120"
            fill="none"
          >
            <path
              d="M150 60 Q450 20, 750 60 T1150 60"
              stroke="url(#gradientPath)"
              strokeWidth="2"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={colors.primary} />
                <stop offset="50%" stopColor={colors.darkGreen} />
                <stop offset="100%" stopColor={colors.primary} />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div
                className="relative rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border h-full flex flex-col justify-between backdrop-blur-sm"
                style={{
                  background: colors.white,
                  borderColor: colors.lightGreen,
                }}
              >

                {/* Step Number */}
                <div
                  className="absolute -top-6 left-8 w-14 h-14 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-xl ring-8 ring-white z-10"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.darkGreen})`,
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-8 mt-6">
                  <div
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      background: colors.lightGreen,
                    }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: colors.primary }} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{step.desc}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaArrowRight className="text-3xl" style={{ color: colors.primary }} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* CTA */}
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
