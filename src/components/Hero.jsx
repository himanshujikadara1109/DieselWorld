import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://thumbs.dreamstime.com/b/close-up-mechanics-large-diesel-engine-137666914.jpg",
    title: "Powering Diesel Performance",
    highlight: "Diesel",
    subtitle: "Global leaders in diesel engine solutions",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2364/1235/files/shutterstock_1619311975_480x480.jpg?v=1745150489",
    title: "Built For Heavy Duty Engines",
    highlight: "Heavy",
    subtitle: "Engineered to survive extreme workloads",
  },
  {
    image:
      "https://thumbs.dreamstime.com/z/detailed-closeup-powerful-diesel-engine-turbocharger-deep-dive-industrial-machinery-components-captivating-382147690.jpg",
    title: "Turbocharged Diesel Power",
    highlight: "Turbocharged",
    subtitle: "Maximum boost with ultimate efficiency",
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/closeup-diesel-engine-turbocharger-600w-2555955663.jpg",
    title: "Precision Turbo Systems",
    highlight: "Precision",
    subtitle: "Designed for high RPM diesel engines",
  },
{
  image:
    "https://i.pinimg.com/1200x/a6/cc/02/a6cc024c192a8c5dddf629d3033b290a.jpg",
  title: "Advanced Fuel Injection",
  highlight: "Fuel",
  subtitle: "Perfect fuel delivery every cycle",
}
,
 {
  image:
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
  title: "High Performance Diesel Parts",
  highlight: "Performance",
  subtitle: "Long life. High reliability. Zero compromise.",
},

  {
    image:
      "https://cdn11.bigcommerce.com/s-blfvvdhqqt/images/stencil/1920x1280/uploaded_images/blessedperformancellc-306536-budget-diesel-upgrades-image1.jpg",
    title: "Upgrade Your Diesel Engine",
    highlight: "Upgrade",
    subtitle: "Smart upgrades for serious performance",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/close-up-high-pressure-fuel-injector-nozzle-spraying-engine-assembly-sparks-vapor-create-effect-precision-tech-417082109.jpg",
    title: "Fuel Injector Technology",
    highlight: "Injector",
    subtitle: "Accuracy, power and clean combustion",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showSub, setShowSub] = useState(false);

  /* 🔤 Typewriter */
  useEffect(() => {
    let i = 0;
    let temp = "";
    setTypedText("");
    setShowSub(false);

    const typing = setInterval(() => {
      if (slides[currentSlide].title[i]) {
        temp += slides[currentSlide].title[i];
        setTypedText(temp);
        i++;
      } else {
        clearInterval(typing);
        setShowSub(true);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [currentSlide]);

  /* 🔁 Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[740px] overflow-hidden">
      {/* Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Diesel Slide"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-full flex flex-col items-center justify-center text-center px-5"
      >
        <h1 className="text-white font-black text-[30px] sm:text-[44px] lg:text-[56px] leading-tight">
          {typedText.split(" ").map((word, i) =>
            word === slides[currentSlide].highlight ? (
              <span key={i} className="text-red-600">
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <AnimatePresence>
          {showSub && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-6 text-gray-200 text-[16px] sm:text-[18px] max-w-[700px]"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-red-600 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
