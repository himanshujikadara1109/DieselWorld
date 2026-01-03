import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ showSearchInNavbar = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    "Turbochargers",
    "Fuel Injectors",
    "Common Rail",
    "Test Benches",
    "Exhaust Systems",
    "Performance Kits",
  ];

  return (
    <>
      {/* Main Fixed Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Diesel World"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <a
                href="#"
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 pb-1
                  ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-400"}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                Home
              </a>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors duration-300 pb-1
                    ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-400"}`}
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Product Categories
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {productCategories.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#"
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 pb-1
                  ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-400"}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                Test Equipments
              </a>
              <a
                href="#"
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 pb-1
                  ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-400"}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                About Us
              </a>
              <a
                href="#"
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 pb-1
                  ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-400"}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                Contact Us
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="p-3 rounded-full hover:bg-gray-100/70 transition">
                <Search size={20} className={isScrolled ? "text-gray-800" : "text-white"} />
              </button>
              <button className="p-3 rounded-full hover:bg-gray-100/70 transition">
                <Heart size={20} className={isScrolled ? "text-gray-800" : "text-white"} />
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${isScrolled
                    ? "border border-gray-300 text-gray-800 hover:border-red-600 hover:text-red-600"
                    : "border border-white/30 text-white hover:bg-white/20"}`}
              >
                <User size={18} />
                Login
              </button>
              <button className="relative flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition">
                <ShoppingCart size={18} />
                Cart
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-xl hover:bg-white/20 transition"
            >
              <Menu size={28} className={isScrolled ? "text-gray-800" : "text-white"} />
            </button>
          </div>
        </div>

        {/* Optional Search Bar */}
        <AnimatePresence>
          {showSearchInNavbar && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="max-w-[1440px] mx-auto px-6 pb-6">
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-xl p-3 border">
                  <Search size={20} className="text-gray-500 ml-2" />
                  <input
                    type="text"
                    placeholder="Search turbochargers, injectors..."
                    className="flex-1 py-3 px-4 text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-700 transition">
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu - Updated with Logo + Colored Text Header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-b-3xl overflow-y-auto lg:hidden"
              style={{ maxHeight: "85vh" }}
            >
              <div className="px-6 pt-8 pb-10">
                {/* Header with Logo + Colored DIESEL WORLD Text and Close Button */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    {/* Logo (same as main navbar) */}
                    <img
                      src="/assets/images/logo.png"
                      alt="Diesel World"
                      className="h-12 w-auto object-contain"
                    />
                    {/* Colored Text: DIESEL (blue) WORLD (red) */}
                    {/* <h1 className="text-3xl font-black tracking-wide">
                      <span className="text-blue-600">DIESEL</span>{" "}
                      <span className="text-red-600">WORLD</span>
                    </h1> */}
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-full hover:bg-gray-100 transition"
                  >
                    <X size={28} className="text-gray-800" />
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="space-y-6">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-semibold text-gray-800 hover:text-red-600 transition"
                  >
                    Home
                  </a>
                  <div>
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="w-full flex justify-between items-center text-xl font-semibold text-gray-800 hover:text-red-600 transition"
                    >
                      Products
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="pl-6 space-y-3 border-l-2 border-gray-200 ml-2">
                            {productCategories.map((item) => (
                              <a
                                key={item}
                                href="#"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-base text-gray-600 hover:text-red-600 transition py-2"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-semibold text-gray-800 hover:text-red-600 transition"
                  >
                    Test Equipments
                  </a>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-semibold text-gray-800 hover:text-red-600 transition"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-semibold text-gray-800 hover:text-red-600 transition"
                  >
                    Contact Us
                  </a>
                </nav>

                {/* Action Buttons */}
                <div className="mt-12 space-y-4">
                  <button className="w-full py-4 border-2 border-red-600 text-red-600 rounded-2xl font-semibold hover:bg-red-600 hover:text-white transition duration-300">
                    Login
                  </button>
                  <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-semibold hover:bg-red-700 transition duration-300">
                    View Cart (2)
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;