import { FaAmbulance, FaStethoscope, FaCreditCard, FaHeadset, FaHospital, FaStar, FaCrown, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';

const MembershipFullSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center py-8" id="membershipBenefits">
      <div className="max-w-6xl mx-auto px-6 space-y-8 w-full">

        {/* ===================== HEADER SECTION ===================== */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            With ML Support, you're not just a patient
          </h1>
          <p className="text-2xl text-green-700 font-semibold">
            You're a member of India's most dependable health family
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Members unlock advantages designed for your complete healthcare journey
          </p>
        </div>

        {/* ===================== MAIN BENEFITS GRID ===================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Ambulance Benefit */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="text-green-600 text-4xl mb-4">
              <FaAmbulance className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Unlimited Free Ambulance</h3>
            <p className="text-gray-600 flex-grow">
              Emergency ambulance transfers across India within 180 km radius
            </p>
            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold flex items-center">
                <FaCheck className="mr-2" /> Completely Free
              </p>
              <p className="text-xs text-green-600 ml-5">No hidden charges, no limits</p>
            </div>
          </div>

          {/* Health Checkups */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="text-green-600 text-4xl mb-4">
              <FaStethoscope className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Weekly Health Checkups</h3>
            <p className="text-gray-600 flex-grow">Regular diabetic and comprehensive full-body health screening packages</p>
            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Available all over India
              </p>
              <p className="text-xs text-green-600 ml-5">
                Weekly monitoring for better health
              </p>
            </div>

          </div>

          {/* Online Doctor & Medicine Delivery */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="text-green-600 text-4xl mb-4">
              <FaStethoscope className="inline" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Free Online Doctor Consultation
            </h3>

            <p className="text-gray-600 flex-grow">
              Connect with certified doctors anytime for free and get expert medical guidance.
            </p>

            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold flex items-center">
                <FaCheck className="mr-2" /> Medicine Home Delivery
              </p>
              <p className="text-xs text-green-600 ml-5">
                Fast, reliable medicine delivery to your door.
              </p>
            </div>
          </div>


          {/* Hospital Network */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="text-green-600 text-4xl mb-4">
              <FaHospital className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">300+ Partner Hospitals</h3>
            <p className="text-gray-600 flex-grow">Access to extensive network of trusted healthcare providers across India</p>
            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold flex items-center">
                <FaCheck className="mr-2" /> Pan-India Coverage
              </p>
              <p className="text-xs text-green-600 ml-5">Quality care wherever you are</p>
            </div>
          </div>

          {/* Priority Support */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="text-green-600 text-4xl mb-4">
              <FaStar className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Priority Support</h3>
            <p className="text-gray-600 flex-grow">Dedicated assistance with complete transparency and clear pricing</p>
            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold flex items-center">
                <FaCheck className="mr-2" /> Always Available
              </p>
              <p className="text-xs text-green-600 ml-5">Your health is our priority</p>
            </div>
          </div>

          {/* Membership Value */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-lg p-6 text-white h-full flex flex-col">
            <div className="text-4xl mb-4">
              <FaCrown className="inline" />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Membership</h3>
            <p className="mb-6 flex-grow">Join India's most trusted healthcare family </p>
            <div className="space-y-3">
              <p className="flex items-center text-sm">
                <FaCheck className="text-2xl mr-3" /> All benefits included
              </p>
              <p className="flex items-center text-sm">
                <FaCheck className="text-2xl mr-3" /> No renewal fees
              </p>
            </div>
          </div>
        </div>

        {/* ===================== CTA SECTION ===================== */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-5 max-w-3xl mx-auto">
            Join thousands of families who never worry about medical emergencies again
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => window.open("https://mlsupport.org/ML_support/Customer/login.php", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              Activate  Membership
            </button>
            <button
              onClick={() => window.location.href = "/contact"}
              className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-12 py-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-3">
              <FaHeadset className="text-xl" />
              Connect With Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MembershipFullSection;