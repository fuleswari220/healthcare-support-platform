// src/App.jsx
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomeSkeleton from "./components/HomeSkeleton";
import QRPopup from "./components/QRPopup"; // popup import
import SeoLandingPage from "./components/SeoLandingPage";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Hospital = lazy(() => import("./pages/Hospital"));
const Membership = lazy(() => import("./pages/Membership"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Every reload → show popup
    setShowPopup(true);
  }, []);

  return (
    <Router>
      {/* {showPopup && <QRPopup onClose={() => setShowPopup(false)} />} */}

      <ScrollToTop />
      <Suspense fallback={<HomeSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ml-healthcare-support" element={<SeoLandingPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
                  <p className="text-xl text-gray-700">Page Not Found</p>
                  <a
                    href="/"
                    className="mt-6 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
