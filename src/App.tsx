import { useState } from "react";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$850,000",
      address: "123 Main St, Downtown",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      type: "condo",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$1,250,000",
      address: "456 Oak Avenue, Suburbs",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      type: "house",
      featured: false,
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      price: "$450,000",
      address: "789 Pine St, City Center",
      beds: 1,
      baths: 1,
      sqft: "600",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      type: "apartment",
      featured: false,
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Properties" },
    { value: "house", label: "Houses" },
    { value: "condo", label: "Condos" },
    { value: "apartment", label: "Apartments" },
  ];

  const priceOptions = [
    { value: "all", label: "Any Price" },
    { value: "0-500k", label: "$0 - $500K" },
    { value: "500k-1m", label: "$500K - $1M" },
    { value: "1m+", label: "$1M+" },
  ];

  const filteredProperties = properties.filter((property) => {
    if (selectedFilter === "all") return true;
    return property.type === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary-600">
              PropertyFlow
            </h1>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#properties"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Properties
              </a>
              <a
                href="#agents"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Agents
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                Sign In
              </button>
              <button className="btn-primary">List Property</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                >
                  Home
                </a>
                <a
                  href="#properties"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                >
                  Properties
                </a>
                <a
                  href="#agents"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                >
                  Agents
                </a>
                <a
                  href="#contact"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                >
                  Contact
                </a>
                <button className="btn-primary w-full mt-4">
                  List Property
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover the perfect home with our premium real estate platform
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                />
              </div>

              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
              >
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <button className="btn-primary">
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                1,000+
              </div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`filter-button ${
                  selectedFilter === option.value ? "active" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {property.title}
                    </h3>
                    <span className="text-xl font-bold text-primary-600">
                      {property.price}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 btn-primary text-sm">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mortgage Calculator
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Calculate your monthly mortgage payments and find out what you
                can afford.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Price
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="number"
                        placeholder="850,000"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment
                      </label>
                      <input
                        type="number"
                        placeholder="20%"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate
                      </label>
                      <input
                        type="number"
                        placeholder="6.5%"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Calculate Payment
                  </button>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        $4,200
                      </div>
                      <div className="text-sm text-gray-600">
                        Estimated Monthly Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
                alt="Dream home"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact our expert agents today and let us help you find the
              perfect property.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-400 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-400 mr-3" />
                  <span>info@propertyflow.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-400 mr-3" />
                  <span>123 Real Estate Ave, City, State 12345</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">
                Schedule a Consultation
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <textarea
                  placeholder="What type of property are you looking for?"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
                <button className="w-full btn-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">
                PropertyFlow
              </h3>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect property since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Buy Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sell Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Rent Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Property Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Market Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mortgage Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Buying Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Selling Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">(555) 123-4567</li>
                <li className="text-gray-400">info@propertyflow.com</li>
                <li className="text-gray-400">123 Real Estate Ave</li>
                <li className="text-gray-400">City, State 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PropertyFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
