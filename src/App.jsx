// import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchOverlay from "./components/SearchOverlay";
import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/Category/CategoryGrid";
import ServicesSection from "./components/Services/ServicesSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import OurStoriesSection from "./components/OurStoriesSection";

const App = () => {
  // const [searchInNavbar, setSearchInNavbar] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSearchInNavbar(window.scrollY > 550);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Navbar */}
      {/* <Navbar showSearchInNavbar={searchInNavbar} /> */}
      <Navbar  />

      {/* Hero */}
      <Hero />

      {/* Search Overlay */}
      {/* <SearchOverlay hideOverlay={searchInNavbar} /> */}
      <SearchOverlay  />

      {/* Content Sections */}
      <main className="flex flex-col gap-0">
        {/* <AboutSection /> */}
        <AboutSection />
        <div className="hr"></div>
        <CategoryGrid />
        <div className="hr"></div>
        <ServicesSection />
        <div className="hr"></div>
        <PartnersSection />
        <div className="hr"></div>
        <OurStoriesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
