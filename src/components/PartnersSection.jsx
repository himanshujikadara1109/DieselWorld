import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "BOSCH", img: "/src/assets/brands/bosch.png", bg: "bg-red-100" },
  { name: "MOTORPAL", img: "/src/assets/brands/motorpal.png", bg: "bg-blue-100" },
  { name: "LUCAS", img: "/src/assets/brands/lucas.png", bg: "bg-green-100" },
  { name: "DISA", img: "/src/assets/brands/disa.png", bg: "bg-gray-200" },
  { name: "DELPHI", img: "/src/assets/brands/delphi.png", bg: "bg-indigo-100" },
];

const PartnersSection = () => {
  const trackRef = useRef(null);
  const [activeBg, setActiveBg] = useState("bg-red-50");

  const speedRef = useRef(0.4);
  const lastScrollY = useRef(0);
  const xRef = useRef(0);

  /*  AUTO  SCROLL BASED MOVEMENT */
  useEffect(() => {
    const track = trackRef.current;

    const animate = () => {
      xRef.current -= speedRef.current;
      track.style.transform = `translateX(${xRef.current}px)`;

      if (Math.abs(xRef.current) >= track.scrollWidth / 2) {
        xRef.current = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY.current;

      // scroll up  reverse, scroll down  forward
      speedRef.current = Math.min(2, Math.max(0.3, delta * 0.05));
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-14 sm:py-16 bg-white overflow-hidden">
      {/* ===== TITLE ===== */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#C81318]">
            Our Partner Brands
          </h2>
          <p className="mt-3 text-[16px] md:text-[18px] font-semibold text-[#343333] tracking-wide max-w-3xl mx-auto">
            Quality, reliability, and performance backed by world-class brand
          </p>
        </div>

      {/* Scrolling */}
      <div
  className={`
    relative
    mt-8 sm:mt-10
    transition-colors duration-500
    ${activeBg}

    /* MOBILE */
    w-full
    h-auto
    py-6 sm:py-8

    /* DESKTOP EXACT SIZE */
    xl:w-[2101px]
    xl:h-[120px]
    mx-auto
    overflow-hidden
  `}
>
  <div
    ref={trackRef}
    className="
      flex items-center
      gap-14 sm:gap-20
      w-max
      h-full
    "
  >
    {[...brands, ...brands].map((brand, i) => (
      <div
        key={i}
        onMouseEnter={() => setActiveBg(brand.bg)}
        onMouseLeave={() => setActiveBg('bg-red-50')}
        className="flex items-center justify-center px-2"
      >
        <img
          src={brand.img}
          alt={brand.name}
          className="
            h-10 sm:h-12 md:h-14 lg:h-16
            transition-all duration-300 ease-out
            grayscale
            hover:grayscale-0
            hover:scale-110
            cursor-pointer
          "
        />
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default PartnersSection;
