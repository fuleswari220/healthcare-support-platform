import React, { useState, useEffect } from "react";
import { Star, MapPin, Quote, Heart, Shield } from "lucide-react";

// Import avatars
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
    rating: 5,
    service: "Emergency Ambulance"
  },
  {
    text: "Daily health call for my mother in Kanpur gives me peace while I work in Delhi.",
    imageSrc: avatar2,
    name: "Ritwik Sinha",
    city: "Kanpur",
    rating: 5,
    service: "Daily Health Monitoring"
  },
  {
    text: "0% interest loan made father's surgery in Guwahati tension-free.",
    imageSrc: avatar3,
    name: "Rahul Das",
    city: "Guwahati",
    rating: 5,
    service: "Medical Credit"
  },
  {
    text: "Caught my rising BP early in Ranchi – doctor personally called and guided.",
    imageSrc: avatar5,
    name: "Ayan Ghosh",
    city: "Ranchi",
    rating: 5,
    service: "Health Monitoring"
  },
  {
    text: "Video doctor at midnight saved my child in Bhubaneswar – medicine delivered in 20 mins.",
    imageSrc: avatar4,
    name: "Megha Dey",
    city: "Bhubaneswar",
    rating: 5,
    service: "Telemedicine"
  },
  {
    text: "One plan covers parents in Lucknow & us in Delhi – savings took us to Shimla!",
    imageSrc: avatar7,
    name: "Arpan Mukherjee",
    city: "Lucknow",
    rating: 5,
    service: "Family Membership"
  },
  {
    text: "Home nurse after surgery in Kolkata was like family – mother recovered in 35 days.",
    imageSrc: avatar6,
    name: "Ipsita Banerjee",
    city: "Kolkata",
    rating: 5,
    service: "Post-Discharge Care"
  },
  {
    text: "Medical alert saved my father during fall in Kanpur – team reached instantly.",
    imageSrc: avatar10,
    name: "Neel Dutta",
    city: "Kanpur",
    rating: 5,
    service: "Emergency Response"
  },
  {
    text: "Lost 19 kg with their diet plan – diabetes under control in Ranchi now.",
    imageSrc: avatar8,
    name: "Shristi Paul",
    city: "Ranchi",
    rating: 5,
    service: "Wellness Program"
  },
];

const TestimonialsColumn = ({ testimonials: columnTestimonials, className = "", speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...columnTestimonials, ...columnTestimonials];

  return (
    <div 
      className={`${className} overflow-hidden space-y-6`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`flex flex-col gap-6 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}
        style={{ 
          animationDuration: `${speed}s`
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, imageSrc, name, city, rating, service }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:border-green-200 hover:scale-[1.02]">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-green-200 transform -scale-x-100" />
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-sm group-hover:text-gray-800 transition-colors">
        "{text}"
      </p>

      {/* Service Badge */}
      {service && (
        <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-green-200">
          <Shield className="w-3 h-3" />
          {service}
        </div>
      )}

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={imageSrc}
            alt={name}
            className="h-12 w-12 rounded-full object-cover border-2 border-green-200 group-hover:border-green-300 transition-colors"
            loading="lazy"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Heart className="w-3 h-3 text-white" fill="white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="flex items-center gap-1 text-gray-600 text-xs">
            <MapPin className="w-3 h-3" />
            {city}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section id="testimonials-section" className="py-16 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" fill="currentColor" />
            Trusted by 65,000+ Families
          </div> */}
          
          <h1 className="heading-primary font-bold text-gray-900 mb-4">
            Real Stories from Our Healthcare Family
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover how ML Support is transforming healthcare experiences across India
          </p>

          {/* Cities Badge */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Kolkata", "Ranchi", "Lucknow", "Kanpur", "Guwahati", "Bhubaneswar"].map((city) => (
              <span key={city} className="px-3 py-1 bg-white border border-green-200 rounded-full text-sm text-gray-700 shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={`relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          
          {/* Desktop Scrolling Columns */}
          <div className="hidden lg:flex justify-center gap-6 h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} speed={25} />
            <TestimonialsColumn testimonials={secondColumn} speed={30} className="mt-12" />
            <TestimonialsColumn testimonials={thirdColumn} speed={35} className="mt-6" />
          </div>

          {/* Mobile & Tablet - Static Grid */}
          <div className="lg:hidden grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% / 2));
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;