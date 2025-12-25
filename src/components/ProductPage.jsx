import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { ArrowRight, Heart, Bookmark, Layers } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const MainProductsShowcase = () => {
  const sectionRef = useRef(null);

  // Section start trigger (instant)
  const isInView = useInView(sectionRef, {
    amount: 0,
    margin: "-1px 0px -99% 0px",
    once: false,
  });

  const categories = [
    "All",
    "Turbochargers",
    "Injectors",
    "Pumps",
    "ECU",
    "Filters",
    "Cooling",
    "Sensors",
  ];

  const products = [
    {
      title: "Turbochargers",
      category: "Turbochargers",
      description: "Extreme performance turbochargers.",
      image:
        "https://png.pngtree.com/png-vector/20230904/ourmid/pngtree-turbocharger-machine-rotor-supercharger-png-image_9951483.png",
    },
    {
      title: "Fuel Injectors",
      category: "Injectors",
      description: "Precision-engineered injectors.",
      image: "/assets/images/products/fuel-injection.png",
    },
    {
      title: "High Pressure Pumps",
      category: "Pumps",
      description: "Reliable diesel pumps.",
      image: "/assets/images/products/pump.png",
    },
    {
      title: "ECU Control Units",
      category: "ECU",
      description: "Smart ECU systems.",
      image: "/assets/images/products/ecu.png",
    },
    {
      title: "Diesel Filters",
      category: "Filters",
      description: "Advanced fuel filtration.",
      image: "/assets/images/products/filter.png",
    },
    {
      title: "Intercoolers",
      category: "Cooling",
      description: "Performance cooling systems.",
      image: "/assets/images/products/intercooler.png",
    },
    {
      title: "Sensors & Valves",
      category: "Sensors",
      description: "Precision control sensors.",
      image: "/assets/images/products/sensor.png",
    },
  ];

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const visibleProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Core <span className="text-red-600">Performance</span> Parts
          </h2>
          <p className="text-gray-700 text-lg mt-3">
            Premium diesel components
          </p>
        </div>

        {/* DESKTOP CATEGORY BAR */}
        <div className="hidden lg:flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPage(1);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white border hover:text-red-600 hover:border-red-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-[32px] bg-white border shadow-xl overflow-hidden"
            >
              <div className="absolute top-5 right-5 z-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                <button className="p-3 rounded-full bg-white shadow-md">
                  <Heart className="text-red-600" size={20} />
                </button>
                <button className="p-3 rounded-full bg-white shadow-md">
                  <Bookmark size={20} />
                </button>
              </div>

              <div className="h-[360px] bg-gradient-to-b from-gray-100 to-white flex items-center justify-center">
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[260px] object-contain drop-shadow-xl"
                  />
                </Tilt>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-5">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-red-600 font-bold">
                  Explore Collection <ArrowRight size={22} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔢 PAGINATION (INSIDE THIS SECTION) */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-11 h-11 rounded-full font-bold transition
                  ${
                    page === i + 1
                      ? "bg-red-600 text-white scale-110"
                      : "bg-white border hover:text-red-600 hover:border-red-600"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 🔥 FLOATING CATEGORY BUTTON (TOP LAYER, SECTION ONLY) */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            drag
            dragConstraints={sectionRef}
            dragMomentum={false}
            dragElastic={0.15}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="lg:hidden fixed right-6 top-1/2 -translate-y-1/2 z-[9999]"
          >
            <div className="relative w-16 h-16">
              <motion.button
                onClick={() => setMenuOpen((p) => !p)}
                animate={{ rotate: menuOpen ? 180 : 0 }}
                className="w-16 h-16 rounded-full bg-red-600 text-white shadow-2xl flex items-center justify-center cursor-grab"
              >
                <Layers size={26} />
              </motion.button>

              <AnimatePresence>
                {menuOpen &&
                  categories.map((cat, i) => {
                    const radius = 120;
                    const angle = (2 * Math.PI * i) / categories.length;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <motion.button
                        key={cat}
                        initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                        animate={{ x, y, scale: 1, opacity: 1 }}
                        exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                        transition={{ delay: i * 0.04 }}
                        style={{
                          "margin-top":"-70px",
                          "margin-left":"-10px"
                        }}
                        onClick={() => {
                          setActiveCategory(cat);
                          setPage(1);
                          setMenuOpen(false);
                        }}
                        className={`absolute w-20 h-20 rounded-full text-[10px] font-bold shadow-xl
                          ${
                            activeCategory === cat
                              ? "bg-red-600 text-white"
                              : "bg-white text-black border border-red-600"
                          }`}
                      >
                        {cat}
                      </motion.button>
                    );
                  })}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MainProductsShowcase;
