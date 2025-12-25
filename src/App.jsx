import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchOverlay from "./components/SearchOverlay";
import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/Category/CategoryGrid";
import ServicesSection from "./components/Services/ServicesSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import OurStoriesSection from "./components/OurStoriesSection";
import MainProductsShowcase from "./components/ProductPage";

// Container variants for staggered children animations
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Navbar - no animation needed on load */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Search Overlay */}
      <SearchOverlay />

      {/* Content Sections */}
      <main className="flex flex-col gap-0">
        {/* About */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.section>

        {/* Main Products Showcase - scroll focus */}
        <motion.section
          id="products" /* optional: for anchor links */
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div variants={childVariants}>
            <MainProductsShowcase />
          </motion.div>
        </motion.section>

        {/* <hr className="hr" /> */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div variants={childVariants}>
            <CategoryGrid />
          </motion.div>
        </motion.section>

        {/* <hr className="hr" /> */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div variants={childVariants}>
            <ServicesSection />
          </motion.div>
        </motion.section>

        {/* <hr className="hr" /> */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div variants={childVariants}>
            <PartnersSection />
          </motion.div>
        </motion.section>

        {/* <hr className="hr" /> */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.div variants={childVariants}>
            <OurStoriesSection />
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;