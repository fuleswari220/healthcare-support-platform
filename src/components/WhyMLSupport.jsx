import { FaPhoneAlt, FaAmbulance, FaFlask } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import appointment from "../assets/doctorappointment.webp";

// Add your hospital logo imports here
import h1 from "../assets/Partners/AnandalokHospitalLogo.webp";
import h2 from "../assets/Partners/BardhamanInstituteofMedicalSciencesLogo.webp";
import h3 from "../assets/Partners/BengalFAITHHospitalLogo.webp";
import h4 from "../assets/Partners/ApoorvaDiagnosticCentreLogo.webp";
import h5 from "../assets/Partners/CAMRIHospitalLogo.webp";
import h6 from "../assets/Partners/Dr.LalPathLabLogo.webp";
import h7 from "../assets/Partners/ECOHospitalandDiagnosticsLogo.webp";
import h8 from "../assets/Partners/GalaxyHospitalLogo.webp";
import h9 from "../assets/Partners/GalaxyMultispecialityHospitalLogo.webp";
import h10 from "../assets/Partners/GouriDevilogo.webp";
import h11 from "../assets/Partners/HCGCancerCentreNewTownLogo.webp";
import h12 from "../assets/Partners/HealthPointBolpurLogo.webp";
import h13 from "../assets/Partners/RajniHospitalLogo.png";
import h14 from "../assets/Partners/IQCityMedicalCollegeHospitalLogo.webp";
import h15 from "../assets/Partners/JagannathGuptaInstituteofMedicalSciencesLogo.webp";
import h16 from "../assets/Partners/PGRMultispecilityHospitalLogo.webp";
import h17 from "../assets/Partners/KIMSHospitalLogo.webp";
import h18 from "../assets/Partners/ManipalHospitalLOGO.webp";
import h19 from "../assets/Partners/RamadeviMedicalCentreLogo.png";
import h20 from "../assets/Partners/RamkrishnaNursingHomeLogo.png";
import h21 from "../assets/Partners/SanakaHospitalLogo.png";
import h22 from "../assets/Partners/SantiniketanSebaniketanLogo.png";
import h23 from "../assets/Partners/SharanyaMultispecialityHospitalLogo.png";
import h24 from "../assets/Partners/SpandanHospitalLOGO.png";
import h25 from "../assets/Partners/TeresaMemorialHospitalLogo.png";
import h26 from "../assets/Partners/TheMissionHospitalLogo.png";
import h27 from "../assets/Partners/VivacityLogo.png";
import h28 from "../assets/Partners/VivekanandaHospitalLogo.png";
import h29 from "../assets/Partners/RajraniHospitalLogo.png";

import InfiniteHospitalSlider from "./InfiniteHospitalSlider";

const WhyMLSupport = () => {
  const premiumLogos = [h7, h3, h12, h18, h17, h11, h6, h13, h21, h5, h14, h8, h19, h24, h29];
  const regularLogos = [h1, h2, h4, h15, h9, h10, h26, h16, h20, h22, h23, h25, h27, h28];
  const combinedLogos = [];
  const maxLength = Math.max(premiumLogos.length, regularLogos.length);

  for (let i = 0; i < maxLength; i++) {
    if (premiumLogos[i]) combinedLogos.push({ src: premiumLogos[i], size: "big" });
    if (regularLogos[i]) combinedLogos.push({ src: regularLogos[i], size: "small" });
  }

  const duplicatedLogos = [...combinedLogos, ...combinedLogos];

  const benefits = [
    {
      title: "Free Ambulance Service",
      desc: "Our 24×7 fully equipped team ensures safe, reliable ambulance support for any routine or emergency need.",
      icon: <FaAmbulance className="text-[#00bf63] text-2xl" />
    },
    {
      title: "Weekly Diabetic & Health Tests at Home",
      desc: "Convenient, accurate, and reliable weekly health tests at your home.",
      icon: <FaFlask className="text-[#00bf63] text-2xl" />
    },
    {
      title: "Free Online Doctor Consultation & Medicine Delivery",
      desc: "Consult doctors online anytime and get medicines delivered to your home.",
      icon: <MdCreditCard className="text-[#00bf63] text-2xl" />
    },
    {
      title: "24/7 Medical Partner Assistance Helpline",
      desc: "Quick help when you need it most—our experts handle emergencies, guide paperwork, and ensure you're never alone.",
      icon: <FaPhoneAlt className="text-[#00bf63] text-2xl" />
    },
  ];


  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center">
          <h1 className="heading-primary font-bold text-gray-800 leading-tight">
            Healthcare Without Limits - For Every Home
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-700 font-semibold max-w-4xl mx-auto">
            ML Support makes healthcare easy, affordable, and always available—bringing full medical assistance to your home without extra costs or delays.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

          {/* LEFT: Image (Desktop) */}
          <div className="hidden lg:flex justify-center">
            <img
              src={appointment}
              alt="Medical Support"
              className="w-full max-w-md object-cover scale-100 hover:scale-100 transform-none"
            />

          </div>

          {/* RIGHT: Benefits + Decorative SVG */}
          <div className="relative">

            {/* Mobile Image */}
            <div className="lg:hidden mb-8 -mx-6">
              <img
                src={appointment}
                alt="Medical Support"
                className="w-full object-cover scale-100 hover:scale-100 transform-none"
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
        <div className="text-center mt-20">
          <h1 className="heading-primary font-extrabold text-gray-900 tracking-tight">
            Trusted by Leading <span className="text-green-600">Healthcare</span> Partners
          </h1>

          <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            We collaborate with the most reputed hospitals to provide complete and reliable medical care for every family.
          </p>

          <div className="mt-2 mx-auto w-24 h-1 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="relative mt-12">
          <InfiniteHospitalSlider logos={duplicatedLogos} />
        </div>
      </div>
    </section>
  );
};

export default WhyMLSupport;