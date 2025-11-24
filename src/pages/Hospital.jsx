// pages/hospital-network.jsx
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Search,
  MapPin,
  Hospital,
  Stethoscope,
  Beaker,
  Pill,
  Clock,
  CheckCircle,
  Building2,
  Filter,
  X,
  ChevronDown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  Ambulance,
  Phone
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import healthcarenetwork from "../assets/healthcare-network.webp"

export default function HospitalNetwork() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const allPartners = [
    // ==================== WEST BENGAL HOSPITALS ====================
    { name: "Spandan Hospital", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Manipal Hospital", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "HCG Cancer Centre New Town", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Galaxy Hospital", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Jagannath Gupta Institute of Medical Sciences", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "JIMS Kalyani Expressway", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Viva City", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Panacea Hospital", city: "Kolkata", type: "hospital", updated: "Last updated 3 mins ago" },

    // Barrackpore - North 24 Parganas
    { name: "Galaxy Multispeciality Hospital", city: "Barrackpore", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "ECO Hospital and Diagnostics", city: "Barrackpore", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Jagannath Gupta Institute of Medical Sciences", city: "Barrackpore", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Panacea Nursing Home", city: "Barrackpore", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Vivacity Multi Speciality Hospital", city: "Barrackpore", type: "hospital", updated: "Last updated 5 mins ago" },

    // Asansol-Raniganj - Burdwan
    { name: "Anandalok Hospital", city: "Asansol-Raniganj", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "K M Hospital", city: "Asansol-Raniganj", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "HLG Memorial Hospital", city: "Asansol-Raniganj", type: "hospital", updated: "Last updated 10 mins ago" },

    // Durgapur - Burdwan
    { name: "IQ City Medical College Hospital", city: "Durgapur", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Vivekananda Hospital", city: "Durgapur", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "The Mission Hospital", city: "Durgapur", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Sanaka Hospital", city: "Durgapur", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Gouri Devi Hospital & Research Institute", city: "Durgapur", type: "hospital", updated: "Last updated 5 mins ago" },

    // Bolpur - Birbhum
    { name: "Santiniketan Sebaniketan", city: "Bolpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Ramkrishna Nursing Home", city: "Bolpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Health Point Bolpur", city: "Bolpur", type: "hospital", updated: "Last updated 10 mins ago" },

    // Bardhaman - Purba Bardhaman
    { name: "Bengal FAITH Hospital", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Bardhaman Institute of Medical Sciences", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Teresa Memorial Hospital", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Sharanya Multispeciality Hospital", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "CAMRI Hospital", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "KIMS Hospital", city: "Bardhaman", type: "hospital", updated: "Last updated 5 mins ago" },

    // ==================== JHARKHAND HOSPITALS ====================
    { name: "Synergy Global Hospitals Ranchi", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Alam Hospitals & Research Centre", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Berlin General Hospitals", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Maa Ram Pyari Super Speciality Hospital", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Samford Hospital Ranchi", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "Health Point Hospital Ranchi", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },
    { name: "The Curesta Hospital", city: "Ranchi", type: "hospital", updated: "Last updated 3 mins ago" },

    // Hazaribag
    { name: "Khitiz Hospital", city: "Hazaribag", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Life Care Hospital", city: "Hazaribag", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Ayushman Hospital", city: "Hazaribag", type: "hospital", updated: "Last updated 5 mins ago" },
    { name: "Anand Hospital", city: "Hazaribag", type: "hospital", updated: "Last updated 5 mins ago" },

    // ==================== UTTAR PRADESH - KANPUR ====================
    { name: "PGR Multispecility Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Rajni Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Ramadevi Medical Centre", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Rajrani Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Surya Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Taurus Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Atmaram Child Care & Critical Care Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Maa Gayatri Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Priya Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Vaishnavi Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "The Saraswati Devi Medicare", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Kailash Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "Medihelp Hospital", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },
    { name: "New Krishna Hospital & Trauma Centre", city: "Kanpur", type: "hospital", updated: "Last updated 10 mins ago" },

    // Additional Tie-up Hospitals - Kanpur Region (Recently added)
    { name: "Thangam Hospital (Kalyanpur)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Medihelp Hospital (Sarvodaya Nagar)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "The Dwivedi Hospital (Pandu Nagar)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Priya Hospital (Barra)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Saraswati Devi Medico Hospital (Baradevi)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Kailash Hospital (Shuklaganj)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "New Krishna Hospital (Shuklaganj)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Maa Gayatri Hospital (Awas Vikas-Naubasta)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Rajrani Hospital (Naubasta)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Vaishnavi Hospital (Naubasta)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Tarus Hospital (Ramadevi)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Rajni Hospital (Ramadevi)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "P.G.R. Multi-speciality Hospital (Ramadevi)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Ramadevi Hospital (Ramadevi)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Surya Hospital (Jajmau/New Azad Nagar)", city: "Kanpur", type: "hospital", updated: "Recently added" },
    { name: "Atmaram Hospital (Naubasta)", city: "Kanpur", type: "hospital", updated: "Recently added" },

    // ==================== DIAGNOSTIC CENTRES ====================
    {
      name: "Lupin Diagnostic Centre",
      city: "Kolkata",
      type: "diagnostic",
      locations: ["Park Street", "Salt Lake", "New Town", "Gariahat", "Howrah", "Dum Dum"],
      count: "6 locations",
      updated: "Updated recently"
    },
    {
      name: "Kalyan Diagnostic Centre",
      city: "Kanpur",
      type: "diagnostic",
      locations: ["Swarn Jayanti Vihar", "Yashoda Nagar", "Basant Vihar", "Naubasta", "Avas Vikas", "Mangla Vihar"],
      count: "6 locations",
      updated: "Updated recently"
    },
    {
      name: "AP Diagnostic Centre",
      city: "Kanpur",
      type: "diagnostic",
      locations: ["Kidwai Nagar", "Saket Nagar", "Babu Purwa", "Baradevi", "Govind Nagar"],
      count: "5 locations",
      updated: "Updated recently"
    },
    {
      name: "Apoorva Diagnostic Centre",
      city: "Kanpur",
      type: "diagnostic",
      locations: ["Barra", "Ratanlal Nagar"],
      count: "2 locations",
      updated: "Updated recently"
    },

    // ==================== PATHOLOGY LABS ====================
    { name: "Lupin Pathology Lab", city: "Kolkata", type: "pathology", desc: "Advanced pathology services with state-of-the-art diagnostic equipment and accurate reporting.", updated: "Updated recently" },
    { name: "Metropolis Pathology Lab", city: "Kolkata", type: "pathology", desc: "Leading pathology chain with comprehensive test menu and quality assurance standards.", updated: "Updated recently" },
    { name: "HN-Patho Lab", city: "Kolkata", type: "pathology", desc: "Comprehensive pathology services with accurate and timely diagnostic reports.", updated: "Updated recently" },
    { name: "Dr. Lal Path Lab", city: "Kolkata", type: "pathology", desc: "Nationally recognized pathology laboratory with advanced diagnostic capabilities.", updated: "Updated recently" },
    { name: "Biswayan Diagnostic Centre", city: "Howrah", type: "pathology", desc: "Reliable diagnostic services in Panchanantala, Howrah with comprehensive test facilities.", updated: "Updated recently" },
    { name: "Scanova Diagnostic Centre", city: "Howrah", type: "pathology", desc: "Advanced diagnostic services in Pilkhana, Howrah offering quality pathological testing.", updated: "Updated recently" },

    // ==================== MEDICAL STORE ====================
    { name: "Frank-Ross", city: "Kolkata", type: "medicalstore", desc: "Your trusted partner for pharmaceutical needs with quality medicines and healthcare products.", updated: "Partner since 2022" },
  ];

  const filteredData = useMemo(() => {
    return allPartners.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q)) ||
        (item.locations && item.locations.some(loc => loc.toLowerCase().includes(q)));

      const matchesCity = selectedCity === "all" || item.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesType = selectedType === "all" || item.type === selectedType;

      return matchesSearch && matchesCity && matchesType;
    });
  }, [searchQuery, selectedCity, selectedType]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCity, selectedType]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredData.slice(startIndex, endIndex);

  const cities = [
    "all",
    "Kolkata",
    "Barrackpore",
    "Asansol-Raniganj",
    "Durgapur",
    "Bolpur",
    "Bardhaman",
    "Ranchi",
    "Hazaribag",
    "Kanpur",
    "Howrah"
  ];

  const types = [
    { id: "all", label: "All Partners", icon: Building2, color: "bg-emerald-600" },
    { id: "hospital", label: "Hospitals", icon: Hospital, color: "bg-emerald-600" },
    { id: "diagnostic", label: "Diagnostic Centres", icon: Stethoscope, color: "bg-emerald-600" },
    { id: "pathology", label: "Pathology Labs", icon: Beaker, color: "bg-emerald-600" },
    { id: "medicalstore", label: "Medical Stores", icon: Pill, color: "bg-emerald-600" },
  ];

  const getTypeColor = (type) => {
    const typeObj = types.find(t => t.id === type);
    return typeObj ? typeObj.color : "bg-emerald-600";
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <Helmet>
        <title>ML Support | 300+ Hospitals Network for Hassle-Free Treatment </title>
        <meta
          name="description"
          content="Join ML Support for access to 300+ hospitals offering hassle free treatment, and trusted medical coordination."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 rounded-full px-6 py-3 text-sm font-semibold mb-8 shadow-md mt-8">
              <Shield className="w-5 h-5" />
              Trusted Healthcare Network Across India
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              300+ Hospital Network for <span className="text-emerald-600">Hassle-Free Treatment</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Access our extensive network of hospitals, diagnostic centres, pathology labs, and medical stores across West Bengal, Jharkhand & Uttar Pradesh
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <Hospital className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">300+</p>
                <p className="text-gray-600">Hospitals</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-gray-600">Cities</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">65+K</p>
                <p className="text-gray-600">Families</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <Ambulance className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">24×7</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Healthcare Partners
              </h2>
              <p className="text-lg text-gray-600">
                Search and filter through our network of trusted healthcare providers
              </p>
            </div>

            {/* Search Section */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, area or city (e.g. Lupin, Salt Lake, Naubasta, Ranchi, Durgapur...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-base rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                />
              </div>
            </div>

            {/* Filter Toggle for Mobile */}
            <div className="flex justify-center mb-6 lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium shadow-lg hover:bg-emerald-700 transition-colors"
              >
                <Filter size={18} />
                Filters
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden lg:flex'} flex-col lg:flex-row gap-6 p-6 lg:p-0 bg-gray-50 lg:bg-transparent rounded-2xl border border-gray-200 lg:border-none`}>
              {/* City Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none px-4 pr-10 py-3 rounded-xl bg-white border border-gray-300 font-medium cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full hover:border-emerald-500 transition-colors"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c === "all" ? "All Cities" : c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>

              {/* Type Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Partner Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 border ${selectedType === t.id
                        ? `${t.color} text-white shadow-lg transform scale-105 border-emerald-600`
                        : "bg-white border-gray-300 hover:border-emerald-500 hover:shadow-md hover:scale-105"
                        }`}
                    >
                      <t.icon size={18} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCity !== "all" || selectedType !== "all" || searchQuery) && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    setSelectedCity("all");
                    setSelectedType("all");
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={16} />
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Network Partners
              </h2>
              <p className="text-gray-600 mt-1">
                Showing <span className="font-semibold text-emerald-600">{startIndex + 1}-{Math.min(endIndex, filteredData.length)}</span> of{" "}
                <span className="font-semibold text-emerald-600">{filteredData.length}</span> partner{filteredData.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Results Grid */}
          {filteredData.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSelectedCity("all");
                  setSelectedType("all");
                  setSearchQuery("");
                }}
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentCards.map((partner, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                            {partner.name}
                          </h3>
                          <p className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                            <MapPin size={14} className="text-emerald-600" />
                            {partner.city}
                          </p>
                        </div>
                        {partner.count && (
                          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                            {partner.count}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Locations */}
                      {partner.locations && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Locations
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {partner.locations.slice(0, 3).map((loc, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                                {loc}
                              </span>
                            ))}
                            {partner.locations.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-500 border border-gray-200">
                                +{partner.locations.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      {partner.desc && (
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                          {partner.desc}
                        </p>
                      )}

                      {/* Status & Type */}
                      <div className="flex items-center justify-between pt-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getTypeColor(partner.type)} text-white`}>
                          {partner.type === "hospital" && <Hospital size={12} />}
                          {partner.type === "diagnostic" && <Stethoscope size={12} />}
                          {partner.type === "pathology" && <Beaker size={12} />}
                          {partner.type === "medicalstore" && <Pill size={12} />}
                          {partner.type === "hospital" ? "Hospital" :
                            partner.type === "diagnostic" ? "Diagnostic Centre" :
                              partner.type === "pathology" ? "Pathology Lab" : "Medical Store"}
                        </span>

                        {partner.updated && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <CheckCircle size={12} />
                            {partner.updated}
                          </span>
                        )}
                      </div>

                      {/* Cashless Badge */}
                      <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                        <Shield size={14} />
                        Hassle-Free Treatment Available
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-4 mb-12">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${currentPage === 1
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400"
                      }`}
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>

                  <div className="flex items-center space-x-2">
                    {/* Show first page if not in first 3 */}
                    {currentPage > 3 && (
                      <>
                        <button
                          onClick={() => setCurrentPage(1)}
                          className={`w-10 h-10 rounded-lg border transition-colors ${currentPage === 1
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
                            }`}
                        >
                          1
                        </button>
                        {currentPage > 4 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                      </>
                    )}

                    {/* Show current page and adjacent pages */}
                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                      let page;
                      if (currentPage <= 2) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 1) {
                        page = totalPages - 2 + i;
                      } else {
                        page = currentPage - 1 + i;
                      }

                      if (page < 1 || page > totalPages) return null;

                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg border transition-colors ${currentPage === page
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
                            }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    {/* Show last page if not in last 3 */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          className={`w-10 h-10 rounded-lg border transition-colors ${currentPage === totalPages
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
                            }`}
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${currentPage === totalPages
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400"
                      }`}
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-2xl text-center mb-12">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Access Our Hospital Network?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of families who enjoy hassle-free treatment at 300+ hospitals
              </p>

              {/* Updated Buttons with Call Button */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                {/* Become a Member */}
                <a
                  href="/membership"
                  className="bg-white text-emerald-600 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Become a Member
                </a>

                {/* Contact Us */}
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Contact Us
                </a>

                {/* Call 24×7 Helpline - এখন পুরোপুরি ম্যাচিং */}
                <a
                  href="tel:+916262666631"
                  className="inline-flex items-center gap-3 bg-white text-emerald-600 font-bold text-lg py-4 px-10 rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call 24×7 Helpline</span>
                </a>
              </div>
            </div>
          </section>

        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}