import React from "react";

import avatar1 from "../assets/Testimonial/person1.webp";
import avatar2 from "../assets/Testimonial/person2.webp";
import avatar3 from "../assets/Testimonial/person3.webp";
import avatar4 from "../assets/Testimonial/person4.webp";
import avatar5 from "../assets/Testimonial/person5.webp";
import avatar6 from "../assets/Testimonial/person6.webp";
import avatar7 from "../assets/Testimonial/person7.webp";
import avatar8 from "../assets/Testimonial/person8.webp";
import avatar10 from "../assets/Testimonial/person10.webp";

const testimonials = [
  {
    text: "Ambulance reached my home in Kolkata within 12 minutes at 3 AM – completely free!",
    imageSrc: avatar1,
    name: "Ananya Roy",
    city: "Kolkata",
  },
  {
    text: "Daily health call for my mother in Kanpur gives me peace while I work in Delhi.",
    imageSrc: avatar2,
    name: "Ritwik Sinha",
    city: "Kanpur",
  },
  {
    text: "0% interest loan made father’s surgery in Guwahati tension-free.",
    imageSrc: avatar3,
    name: "Rahul Das",
    city: "Guwahati",
  },
  {
    text: "Caught my rising BP early in Ranchi – doctor personally called and guided.",
    imageSrc: avatar5,
    name: "Ayan Ghosh",
    city: "Ranchi",
  },
  {
    text: "Video doctor at midnight saved my child in Bhubaneswar – medicine delivered in 20 mins.",
    imageSrc: avatar4,
    name: "Megha Dey",
    city: "Bhubaneswar",
  },
  {
    text: "One plan covers parents in Lucknow & us in Delhi – savings took us to Shimla!",
    imageSrc: avatar7,
    name: "Arpan Mukherjee",
    city: "Lucknow",
  },
  {
    text: "Home nurse after surgery in Kolkata was like family – mother recovered in 35 days.",
    imageSrc: avatar6,
    name: "Ipsita Banerjee",
    city: "Kolkata",
  },
  {
    text: "Medical alert saved my father during fall in Kanpur – team reached instantly.",
    imageSrc: avatar10,
    name: "Neel Dutta",
    city: "Kanpur",
  },
  {
    text: "Lost 19 kg with their diet plan – diabetes under control in Ranchi now.",
    imageSrc: avatar8,
    name: "Shristi Paul",
    city: "Ranchi",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ testimonial, classname = "", duration = 10 }) => {
  const animationName = `scroll-${Math.random().toString(36).substr(2, 9)}`;

  // Create unique keyframes for this column
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
            @keyframes ${animationName} {
                0% { transform: translateY(0); }
                100% { transform: translateY(calc(-100% / 3)); }
            }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [animationName]);

  // Create enough duplicates for seamless scrolling
  const duplicatedTestimonials = [];
  for (let i = 0; i < 3; i++) {
    testimonial.forEach((item, index) => {
      duplicatedTestimonials.push({
        ...item,
        key: `${i}-${index}`,
      });
    });
  }

  return (
    <div className={`${classname} overflow-hidden`}>
      <div
        className="flex flex-col gap-6"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {duplicatedTestimonials.map(
          ({ text, imageSrc, name, city, key }) => (
            <div
              className="p-10 border border-solid border-gray-200 rounded-3xl shadow-lg w-full max-w-sm bg-white flex-shrink-0"
              key={key}
            >
              <div className="text-gray-800 mb-5">{text}</div>
              <div className="flex items-center gap-3">
                <img
                  src={imageSrc}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 text-gray-900">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight text-gray-600">
                    {city}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="md:py-10 mt-0">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">
            Real Families, Real Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Loved in Every City We Serve
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Kolkata • Ranchi • Lucknow • Kanpur • Guwahati • Bhubaneswar
          </p>
        </div>

        <div className="flex justify-center gap-6 h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn
            testimonial={firstColumn}
            duration={10}
          />
          <TestimonialsColumn
            testimonial={secondColumn}
            classname="hidden md:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonial={thirdColumn}
            classname="hidden lg:block"
            duration={15}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;