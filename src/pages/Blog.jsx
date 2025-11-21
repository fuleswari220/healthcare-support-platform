// src/pages/Blog.jsx
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Blog() {
  const allBlogs = [
    {
      id: 1,
      title: "Why Every Kolkata Family Needs 24×7 Free Ambulance Service in 2025",
      excerpt: "Rising emergencies, endless traffic, delayed ambulances — unlimited free ambulance up to 180 km is no longer a luxury. It's a necessity.",
      date: "November 18, 2025",
      readTime: "5 min",
      category: "Emergency Care",
      slug: "/blog/free-ambulance-kolkata-2025",
      author: "Dr. Priya Sharma",
      image: "https://images.unsplash.com/photo-1638202993928-726ca4509f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 2,
      title: "Weekly Diabetic Check-ups at Home Saved My Father's Life",
      excerpt: "A true story of how ML Support's free weekly sugar testing caught a silent complication early — and prevented a major hospital stay.",
      date: "November 10, 2025",
      readTime: "4 min",
      category: "Patient Story",
      slug: "/blog/diabetic-checkup-saved-life",
      author: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 3,
      title: "0% Interest Medical Credit: How We Treated My Mother Without Selling Gold",
      excerpt: "When hospital bills crossed ₹4.2 lakh, ML Support gave instant 0% interest credit. Here's exactly how it worked.",
      date: "November 5, 2025",
      readTime: "6 min",
      category: "Financial Help",
      slug: "/blog/zero-interest-medical-credit",
      author: "Anita Patel",
      image: "https://images.unsplash.com/photo-1554224266-6b49e47a1c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 4,
      title: "From ICU to Home: Our Post-Discharge Care Journey with ML Support",
      excerpt: "After heart surgery, we didn't know how to manage at home. ML Support sent nurses, physio & medicines daily — all coordinated.",
      date: "October 28, 2025",
      readTime: "5 min",
      category: "Recovery",
      slug: "/blog/post-discharge-care-journey",
      author: "Suresh Menon",
      image: "https://images.unsplash.com/photo-1586776476338-5e68a519c6f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 5,
      title: "How We Arranged Oxygen Cylinder in 30 Minutes During Crisis",
      excerpt: "When my mother needed oxygen urgently at 2 AM, ML Support delivered it in just 28 minutes — completely free of cost.",
      date: "October 20, 2025",
      readTime: "4 min",
      category: "Emergency Care",
      slug: "/blog/oxygen-in-30-minutes",
      author: "Neha Singh",
      image: "https://images.unsplash.com/photo-1612277795538-92515be8b3bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 6,
      title: "Free Medicine Delivery Saved Us ₹18,000 Every Month",
      excerpt: "After my father's kidney treatment started, ML Support began delivering all medicines free every week.",
      date: "October 15, 2025",
      readTime: "5 min",
      category: "Patient Story",
      slug: "/blog/free-medicine-delivery",
      author: "Vikram Rao",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 7,
      title: "How ML Support Helped Us During Dengue Outbreak in Kolkata",
      excerpt: "When 3 family members got dengue simultaneously, ML Support arranged tests, medicines & nursing — all free.",
      date: "October 8, 2025",
      readTime: "6 min",
      category: "Emergency Care",
      slug: "/blog/dengue-outbreak-help",
      author: "Dr. Arjun Das",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 8,
      title: "Cancer Treatment Without Any Financial Stress: Our Story",
      excerpt: "₹12 lakh chemo treatment became possible only because of ML Support's 0% interest medical credit facility.",
      date: "September 28, 2025",
      readTime: "7 min",
      category: "Financial Help",
      slug: "/blog/cancer-treatment-story",
      author: "Meera Joshi",
      image: "https://images.unsplash.com/photo-1541781774459-083a9939be60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 9,
      title: "5 Daily Habits That Reduced My Blood Pressure Naturally",
      excerpt: "ML Support nurse taught us simple breathing exercises & diet changes that brought my BP down from 160/100 to 120/80.",
      date: "September 20, 2025",
      readTime: "4 min",
      category: "Health Tips",
      slug: "/blog/blood-pressure-tips",
      author: "Rina Mukherjee",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 10,
      title: "Stroke Recovery at Home: 3 Months with ML Support Nurses",
      excerpt: "After my husband's stroke, ML Support physiotherapists visited daily. He can now walk independently.",
      date: "September 12, 2025",
      readTime: "6 min",
      category: "Recovery",
      slug: "/blog/stroke-recovery-journey",
      author: "Lata Devi",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const blogGridRef = useRef(null);

  const totalPages = Math.ceil(allBlogs.length / postsPerPage);
  const currentPosts = allBlogs.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    if (blogGridRef.current) {
      const yOffset = -100;
      const y = blogGridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      setTimeout(() => {
        if (blogGridRef.current) {
          blogGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - ML Support | Healthcare Tips & Patient Stories</title>
        <meta name="description" content="Real patient stories, health tips and updates from ML Support – trusted by over 64,600 families." />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ML Support <span className="text-emerald-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real stories, practical health tips & updates from India's trusted medical support network
          </p>
          <p className="text-sm text-emerald-600 mt-2 font-medium">10+ Articles • Updated Daily</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={blogGridRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((blog) => (
              <article
                key={blog.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {blog.category}
                  </span>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight hover:text-emerald-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      to={blog.slug}
                      className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-sm text-gray-500">by {blog.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-5 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-emerald-500/25"
                }`}
              >
                <ChevronLeft className="w-5 h-5" /> Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`w-12 h-12 rounded-lg font-bold transition-all duration-200 ${
                    currentPage === i + 1
                      ? "bg-emerald-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:shadow-md"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-5 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-emerald-500/25"
                }`}
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="text-center mt-8 text-gray-600 font-medium">
            Page {currentPage} of {totalPages} • Showing {currentPosts.length} of {allBlogs.length} articles
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}