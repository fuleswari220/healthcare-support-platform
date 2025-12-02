import React, { useEffect, useRef } from "react";
import { FaUserMd, FaAmbulance, FaPills, FaArrowRight } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

import doctorConsultation from "../assets/doctor-consultation.jpg";
import ambulanceService from "../assets/ambulance-service.jpg";
import medicineDelivery from "../assets/medicine-delivery.jpg";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { y: -10, scale: 1.04, transition: { duration: 0.3 } }
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-br from-white to-green-50 pt-16 flex items-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:max-w-7xl mx-auto py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            className="text-center lg:text-left space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Your 24×7 <span className="text-green-600">Healthcare</span> Partner
              <br className="hidden sm:block" /> — Wherever Life Takes You
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Free ambulance service up to 180 km, weekly screenings, doctor consultation & medicine delivery —
              all in one membership.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-green-600 text-white rounded-xl shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-3 hover:bg-green-700 transition-all">
                Explore Membership <FaArrowRight />
              </button>
              <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all">
                Member Login
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE GRID – সমান উচ্চতার গ্যারান্টি */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            className="grid grid-cols-2 gap-4 sm:gap-6 auto-rows-fr" // এটাই ম্যাজিক লাইন
          >
            {/* TALL DOCTOR CARD – row-span-2 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative row-span-2 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={doctorConsultation}
                alt="Doctor Consultation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6">
                <FaUserMd className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Doctor Consultation</h3>
                <p className="text-center text-sm sm:text-base opacity-95">
                  Connect instantly with certified specialists.
                </p>
              </div>
            </motion.div>

            {/* AMBULANCE CARD */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={ambulanceService}
                alt="Ambulance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-5">
                <FaAmbulance className="text-4xl mb-3" />
                <h3 className="text-xl font-bold">Emergency Ambulance</h3>
                <p className="text-center text-sm mt-2">24/7 support up to 180 km</p>
              </div>
            </motion.div>

            {/* MEDICINE DELIVERY CARD */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={medicineDelivery}
                alt="Medicine Delivery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-5">
                <FaPills className="text-4xl mb-3" />
                <h3 className="text-xl font-bold">Medicine Delivery</h3>
                <p className="text-center text-sm mt-2">At your doorstep, hassle-free</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;