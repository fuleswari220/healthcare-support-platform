import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
// import EmergencyBanner from '../components/EmergencyBanner';
import Hero from '../components/Hero';
import WhyMLSupport from '../components/WhyMLSupport';
import ServicesSection from '../components/ServicesSection';
import MembershipBenefits from '../components/MembershipBenefits';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import PeaceOfMindSection from '../components/PeaceOfMindSection';
import AboutSection from '../components/AboutSection';
import MembershipSection from '../components/MembershipSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ML Support | 24×7 Ambulance & Complete Healthcare in Kolkata</title>
        <meta
          name="description"
          content="Free ambulance up to 180 km, diabetic tests, free online doctor consultation, medicine home delivery, and 300+ hospital tie-ups. Trusted by 18,600+ families across India."
        />
      </Helmet>

      {/* <EmergencyBanner /> */}

      <Navbar />
      <Hero />
      <AboutSection />
      <WhyMLSupport />
      <ServicesSection />
      <MembershipSection />
      <MembershipBenefits />
      <HowItWorks />
      <Testimonials />
      <PeaceOfMindSection />
      <Footer />
    </>
  );
};

export default Home;

