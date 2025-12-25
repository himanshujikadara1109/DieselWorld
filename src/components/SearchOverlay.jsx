import { Search, ChevronDown } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const categories = [
  "All Categories",
  "Test Equipments",
  "Turbochargers",
  "Fuel Injectors",
  "Common Rail Systems",
  "Diesel Pumps",
];

const SearchOverlay = ({ hideOverlay }) => {
  const ref = useRef(null);
  const dropdownRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Categories");

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section ref={ref} className="relative z-20 mb-10 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView && !hideOverlay
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Glass Card */}
          <div className="relative rounded-3xl bg-white/80 shadow-[0_10px_10px_rgba(0,0,0,0.08)]">
            {/* Accent line */}
            

            <form className="flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-center">
              {/* Search Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="flex-1"
              >
                <input
                  type="search"
                  placeholder="Search by part name or number..."
                  className="
                    w-full h-[56px]
                    rounded-full
                    border border-gray-200
                    bg-white
                    px-6
                    text-sm font-medium text-gray-800
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2 focus:ring-red-300
                    transition-all
                  "
                />
              </motion.div>

              {/* Custom Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 }}
                ref={dropdownRef}
                className="relative md:w-[230px]"
              >
                {/* Trigger */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="
                    w-full h-[56px]
                    rounded-full
                    border border-gray-200
                    bg-white
                    px-6 pr-12
                    text-sm font-semibold text-gray-700
                    flex items-center justify-between
                    focus:outline-none
                    focus:border-red-500
                    transition-all
                  "
                >
                  {selected}
                  <ChevronDown
                    size={18}
                    className={`text-red-500 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="
                        absolute left-0 right-0 mt-3
                        rounded-2xl
                        bg-white
                        shadow-xl
                        border
                        p-4
                        space-y-3
                        z-50
                      "
                    >
                      {categories.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSelected(item);
                            setOpen(false);
                          }}
                          className="
                            relative block w-full text-left
                            text-sm font-semibold tracking-wide
                            text-gray-800 hover:text-red-600
                            pb-1 transition-colors duration-300
                            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                            after:bg-red-600 after:transition-all after:duration-300
                            hover:after:w-full
                          "
                        >
                          {item}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Search Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  h-[56px]
                  md:w-[170px]
                  rounded-full
                  flex items-center justify-center gap-2
                  bg-gradient-to-r from-red-600 to-red-700
                  text-sm font-semibold text-white
                  transition-all
                "
              >
                <Search size={18} />
                Search Parts
              </motion.button>
            </form>
            <div className="absolute inset-x-10 -top-[2px] h-[3px] rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SearchOverlay;
