import { FaAmbulance, FaUserNurse } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuTestTube } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsClipboard2Data } from "react-icons/bs";

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#f3fcf7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-8 lg:mb-12">
          We bring complete medical support to your doorstep - fast, affordable, and reliable.
        </p>

        {/* Green Background Box */}
        <div className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative">

          {/* CALL ICON TOP CENTER */}
          <a href="tel:+916262666631">
            <div className="absolute inset-0 flex justify-center top-4 sm:top-6 md:top-10 lg:top-16">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 sm:border-6 md:border-8 border-green-50 bg-green-50 flex items-center justify-center cursor-pointer">
                <BsFillTelephoneFill className="text-green-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
              </div>
            </div>
          </a>


          {/* BORDER AROUND ALL 5 HEXES */}
          <div className="flex flex-col items-center pt-8 sm:pt-10 md:pt-12 lg:pt-16">

            {/* ROW 1 - LEFT 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-20 lg:gap-40 -mb-8 sm:-mb-12 md:-mb-14 lg:-mb-16">
              {[
                {
                  title: (
                    <>
                      Diagnostics & <br /> Medicines
                    </>
                  ),
                  icon: <FaUserNurse className="text-xl sm:text-2xl md:text-3xl" />
                },
                {
                  title: "After-Discharge Home Delivery",
                  icon: <CiDeliveryTruck className="text-xl sm:text-2xl md:text-3xl" />
                },
              ].map((s, i) => (
                <HexCard key={i} icon={s.icon} title={s.title} />
              ))}
            </div>

            {/* CENTER SINGLE */}
            <div className="my-4 sm:my-6 md:my-8">
              <HexCard
                icon={<FaAmbulance className="text-xl sm:text-2xl md:text-3xl" />}
                title="Emergency Ambulance Service"
              />
            </div>

            {/* ROW 3 - RIGHT 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-20 lg:gap-40 -mt-8 sm:-mt-12 md:-mt-14 lg:-mt-16">
              {[
                {
                  title: "Out-of-State Treatment Help",
                  icon: <LuTestTube className="text-xl sm:text-2xl md:text-3xl" />
                },
                {
                  title: "TPA & Billing Support",
                  icon: <BsClipboard2Data className="text-xl sm:text-2xl md:text-3xl" />
                },
              ].map((s, i) => (
                <HexCard key={i} icon={s.icon} title={s.title} />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* HEXAGON CSS */}
      <style>{`
        .clip-hex {
          clip-path: polygon(
            25% 0%, 75% 0%,
            100% 50%,
            75% 100%, 25% 100%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
};

// REUSABLE HEX COMPONENT
const HexCard = ({ icon, title }) => (
  <div className="relative w-40 h-36 sm:w-48 sm:h-44 md:w-56 md:h-52 lg:w-64 lg:h-60 flex items-center justify-center">

    {/* OUTER GREEN HEX BORDER */}
    <div className="absolute inset-0 w-3/4 bg-[#8ed8a9] clip-hex"></div>

    {/* INNER WHITE HEX */}
    <div className="absolute inset-1 sm:inset-[6px] md:inset-[8px] bg-white clip-hex shadow-md
                    flex flex-col items-center justify-center">

      <div className="bg-[#C8F3D8] p-2 sm:p-3 md:p-4 rounded-full mb-2 sm:mb-3 text-green-600">
        {icon}
      </div>

      <p className="text-center font-semibold text-gray-700 px-2 sm:px-3 md:px-4 text-xs sm:text-sm md:text-base lg:text-[17px] leading-tight sm:leading-snug">
        {title}
      </p>
    </div>
  </div>
);

export default ServicesSection;