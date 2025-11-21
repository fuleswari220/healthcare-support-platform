// src/pages/FAQ.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ChevronDown, ChevronUp, Phone, Users, Ambulance, Shield } from "lucide-react";
import { Mail, LogIn } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What is ML Support?",
            a: "ML Support is India's first all-in-one healthcare membership founded in 2020. With one affordable membership, you get free ambulance service up to 180 km, weekly diabetic & health check-ups at home, 0% interest medical credit, medicine delivery, cashless treatment at 300+ hospitals, and 24×7 medical coordination across India."
        },
        {
            q: "Is the ambulance really free? Are there any limits?",
            a: "Yes, 100% free and unlimited for active members within a 180 km radius in Kolkata and partner cities — whether it's an emergency or routine hospital transfer. No hidden charges ever."
        },
        {
            q: "What does my membership include?",
            a: "Your ML Support membership gives you: <strong>Unlimited free ambulance transfers (180 km)</strong>, <strong>weekly diabetic screenings at home</strong>, <strong>0% interest medical credit</strong>, <strong>300+ partner hospitals for cashless treatment</strong>, <strong>medicine home delivery</strong>, <strong>post-discharge care</strong>, <strong>TPA billing support</strong>, and <strong>24×7 emergency helpline</strong> — everything in one plan!"
        },
        {
            q: "What health check-ups are included every week?",
            a: "Every member gets free weekly diabetic screening (blood sugar test) at home by certified technicians. Full-body check-ups, CBC, lipid profile, etc., are available at heavily discounted rates or included in premium plans."
        },
        {
            q: "How do I access my plan?",
            a: "Super simple! <strong>1) Call 24×7 helpline (+91-626-266-6631)</strong> for instant ambulance or help. <strong>2) Use member app/login</strong> at ml-support.org to book tests, track services. <strong>3) Show membership card</strong> at partner hospitals for cashless treatment. We're always one call away!"
        },
        {
            q: "How does the 0% interest medical credit work?",
            a: "If hospital bills exceed your insurance or savings, we instantly provide 0% interest credit so you can get treatment without delay. We settle directly with the hospital — you repay comfortably over time with no interest or stress."
        },
        {
            q: "Do you offer cashless treatment?",
            a: "Yes! Members enjoy cashless admission and treatment at our network of 300+ partner hospitals across India. We also coordinate with your insurance for maximum coverage."
        },
        {
            q: "Can I use ML Support outside Kolkata?",
            a: "Absolutely. You get ambulance support, hospital coordination, medicine delivery, out-of-state treatment assistance, and 24×7 helpline access anywhere in India."
        },
        {
            q: "Is there a 24×7 emergency helpline?",
            a: "Yes. One call to our 24×7 medical assistance helpline dispatches an ambulance, guides you, coordinates with hospitals, and handles everything during a crisis — any time, any day."
        },
        {
            q: "Do you provide medicine home delivery?",
            a: "Yes. Genuine medicines from licensed pharmacies are delivered to your doorstep (often same-day) with prescription verification and proper cold-chain storage when needed."
        },
        {
            q: "What happens after hospital discharge?",
            a: "We provide complete post-discharge care — nursing at home, physiotherapy, follow-ups, medicine reminders, and monitoring to ensure smooth recovery and prevent readmission."
        },
        {
            q: "Is ML Support suitable for senior citizens?",
            a: "Yes, it's specially designed for seniors and bedridden patients. All services — tests, consultations, ambulance, nursing — come to your home."
        },
        {
            q: "How do I become a member?",
            a: "It takes just 2 minutes! Join online, call our 24×7 helpline, or request a callback. Membership activates instantly after payment."
        },
        {
            q: "Is there any lock-in period?",
            a: "No lock-in. You can continue or cancel anytime — though most of our 64,600+ families stay with us for years because of the lifelong peace of mind."
        },
        {
            q: "How many families trust ML Support?",
            a: "Over 64,600+ families and 300+ hospitals across India have trusted us since 2020."
        },
        {
            q: "I still have questions — how can I reach you?",
            a: "Call our 24×7 helpline at <strong>+91-626-266-6631</strong>. We're always here to help!"
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQ - ML Support | 24×7 Ambulance, Healthcare Membership & Medical Credit India</title>
                <meta
                    name="description"
                    content="Get answers to all your questions about ML Support membership – free ambulance up to 180 km, weekly diabetic tests, 0% interest medical credit, home diagnostics, and 24×7 support in Kolkata & across India."
                />
            </Helmet>
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 rounded-full px-6 py-3 text-sm font-semibold mb-8 shadow-md">
                        <Shield className="w-5 h-5" />
                        Trusted by 64,600+ Families Across India
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Everything you need to know about India's most trusted all-in-one healthcare membership
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-emerald-50 transition-all duration-200"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-lg font-semibold text-gray-900 text-left pr-4">
                                        {faq.q}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div 
                                        className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-gray-100"
                                        dangerouslySetInnerHTML={{ __html: faq.a }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-emerald-50 rounded-2xl p-6">
                            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-gray-900">64.6K+</p>
                            <p className="text-gray-600 mt-1">Happy Families</p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-6">
                            <Ambulance className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-gray-900">24×7</p>
                            <p className="text-gray-600 mt-1">Emergency Ready</p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-6">
                            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-gray-900">300+</p>
                            <p className="text-gray-600 mt-1">Partner Hospitals</p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-6">
                            <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-gray-900">5 min</p>
                            <p className="text-gray-600 mt-1">Avg Response Time</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-10 shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready for Worry-Free Healthcare?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join 64,600+ families who never have to fear medical emergencies again.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/membership"
                                className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                View Membership Plans
                            </a>
                            <a
                                href="tel:+916262666631"
                                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 text-lg flex items-center gap-3"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now: +91-626-266-6631
                            </a>
                        </div>
                        <p className="mt-6 text-emerald-100 text-sm">
                            24×7 Helpline • Instant Activation • No Hidden Charges
                        </p>
                    </div>

                    {/* Quick Help Section */}
                    <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Need Help?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our support team is available 24×7 to answer your questions
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <a
        href="mailto:support@mlsupport.org"
        className="text-emerald-600 font-semibold hover:text-emerald-700 transition flex items-center gap-2"
    >
        <Mail className="w-4 h-4" />
        info@mlsupport.org
    </a>
    <span className="text-gray-300 hidden sm:block">|</span>
    <a
        href="https://mlsupport.org/ML_support/Customer/login.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 font-semibold hover:text-emerald-700 transition flex items-center gap-2"
    >
        <LogIn className="w-4 h-4" />
        Member Login
    </a>
</div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}