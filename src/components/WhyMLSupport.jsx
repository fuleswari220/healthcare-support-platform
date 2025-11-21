import { FaPhoneAlt, FaAmbulance, FaFlask } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import diabetes from "../assets/diabetes.webp";
import appointment from "../assets/doctorappointment.webp";

const WhyMLSupport = () => {
  const benefits = [
    { title: "Free Ambulance Service in Kolkata", desc: "Our 24×7 fully equipped team ensures safe, reliable ambulance support for any routine or emergency need in Kolkata.", icon: <FaAmbulance className="text-[#00bf63] text-2xl" /> },
    { title: "Weekly Diabetic & Health Tests at Home", desc: "Convenient, accurate, and reliable weekly health tests at your home.", icon: <FaFlask className="text-[#00bf63] text-2xl" /> },
    { title: "0% Interest Medical Credit", desc: "0% interest on medical credit across 300+ partner hospitals.", icon: <MdCreditCard className="text-[#00bf63] text-2xl" /> },
    { title: "24/7 Medical Partner Assistance Helpline", desc: "Quick help when you need it most—our experts handle emergencies, guide paperwork, and ensure you're never alone.", icon: <FaPhoneAlt className="text-[#00bf63] text-2xl" /> },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Healthcare Without Limits - For Every Home in Kolkata
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-700 font-semibold max-w-4xl mx-auto">
            ML Support makes healthcare easy, affordable, and always available—bringing full medical assistance to your Kolkata home without extra costs or delays.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

          {/* LEFT: Image (Desktop) */}
          <div className="hidden lg:flex justify-center">
            <img
              src={appointment}
              alt="Medical Support"
              className="w-full max-w-md object-cover"
            />
          </div>

          {/* RIGHT: Benefits + Decorative SVG */}
          <div className="relative">

            {/* Mobile Image */}
            <div className="lg:hidden mb-8 -mx-6">
              <img
                src={appointment}
                alt="Medical Support"
                className="w-full object-cover"
              />
            </div>

            {/* Benefits Cards */}
            <div className="space-y-8">
              <div className="hidden lg:block absolute top-0 -right-8 w-28 h-full pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 110 600" fill="none">
                  <path
                    d="M55 20 Q100 90 100 170 L100 430 Q100 510 55 580"
                    stroke="#12c16d"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {benefits.map((item, i) => (
                <div key={i} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-5 z-10">
                  <div className="w-14 h-14 rounded-full bg-[#e8fff1] flex-shrink-0 flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <div className="pr-8 lg:pr-0"> 
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {i === benefits.length - 1 && (
                    <div className="hidden lg:block absolute top-full right-12 -translate-x-1/2 -mt-10 pointer-events-none">
                      <svg width="70" height="70" viewBox="0 0 24 24" fill="#12c16d">
                        <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Beyond Treatment – A Relationship at Trust
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            There are several reasons why patients trust our complete medical support.
          </p>
        </div>

        {/* Testimonial Card – Clean & Responsive */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <img
              src={diabetes}
              alt="Patient testimonial"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-2xl flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                “The diabetic setup screening at home ensures secure support and gives you confidence in your care process every day.”
              </p>
              <a
                href="https://mlsupport.org/ML_support/Customer/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block bg-[#00bf63] hover:bg-[#00a156] text-white font-bold px-6 py-3 rounded-full transition transform hover:scale-105 shadow-lg"
              >
                Login Now
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#23e386] flex items-center justify-center text-white text-2xl shadow-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyMLSupport;