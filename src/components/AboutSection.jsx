import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ZoomImage from "../components/ZoomImage3D";

/* ===== ANIMATION VARIANTS ===== */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const text = "Welcome to";
  const [typed, setTyped] = useState("");

  /* Typewriter effect */
  useEffect(() => {
    let i = 0;
    let str = "";
    const timer = setInterval(() => {
      if (i < text.length) {
        str += text[i];
        setTyped(str);
        i++;
      } else clearInterval(timer);
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pt-24 pb-16 lg:pt-28 lg:pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          max-w-[1152px]
          mx-auto
          px-4 lg:px-0
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* ===== MOBILE / TABLET HEADER ===== */}
        <motion.div variants={fadeUp} className="block lg:hidden text-center mb-6">
          <h4 className="font-heading text-[18px] font-medium text-gray-700">
            {typed}
          </h4>

          <h2 className="font-heading text-[30px] sm:text-[32px] font-extrabold tracking-[-0.02em] text-red-600 mt-1">
            Diesel World
          </h2>
        </motion.div>

        {/* ===== IMAGE ===== */}
        <motion.div
          variants={zoomIn}
          className="flex justify-center lg:order-1 order-2"
        >
          <ZoomImage />
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div
          variants={container}
          className="lg:order-2 order-3 text-left p-3"
        >
          {/* Desktop header */}
          <motion.div variants={fadeUp} className="hidden lg:block mb-4">
            <h4 className="font-heading text-[20px] font-medium text-gray-700">
              {typed}
            </h4>

            <h2 className="font-heading text-[36px] xl:text-[40px] font-extrabold tracking-[-0.02em] text-red-600 mt-1">
              Diesel World
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              font-body
              text-[14px]
              sm:text-[15px]
              lg:text-[16px]
              leading-[24px]
              sm:leading-[26px]
              text-gray-700
            "
          >
            <span className="font-semibold text-gray-900">
              Diesel World Pvt. Ltd.
            </span>{" "}
            is a globally trusted name in diesel engine spare parts and repair
            solutions. Backed by over{" "}
            <span className="text-red-600 font-semibold">
              35 years of industry expertise,
            </span>{" "}
            we specialize in delivering genuine aftermarket parts, advanced
            diagnostics, and precision repair services for all types of diesel
            systems. Our experienced technicians, equipped with state-of-the-art
            tools and facilities, deliver expert repairs, ensuring your diesel
            engines operate at peak performance. Whether you're in need of
            component testing, pump reconditioning, or comprehensive repair
            solutions, Diesel World is committed to providing reliable,
            cost-effective services that keep you moving forward.
          </motion.p>

          {/* Button */}
          <motion.button
            variants={fadeUp}
            whileHover={{ x: 6 }}
            className="
              mt-6
              font-heading
              font-semibold
              text-red-600
              flex items-center gap-2
              transition-all
            "
          >
            Read More <span>→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
