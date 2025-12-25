import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import storyVideo from "../assets/videos/story.mp4";

/* ===== ANIMATION VARIANTS ===== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
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

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurStoriesSection = () => {
  /* ===== TYPEWRITER LOGIC ===== */
  const fullText = "Our Stories";
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });

  /* Typing effect */
  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, [isInView]);

  /* Cursor blink */
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="
              order-2 lg:order-1
              flex flex-col
              items-start
              text-left
              p-5
            "
            variants={container}
          >

            {/* ===== TITLE (H2 + TYPEWRITER) ===== */}
            <motion.h2
              ref={titleRef}
              variants={fadeUp}
              className="font-heading font-extrabold text-4xl sm:text-5xl pb-2"
            >
              <span className="text-black">
                {typedText.split(" ")[0]}
              </span>{" "}
              <span className="text-red-600">
                {typedText.split(" ").slice(1).join(" ")}
              </span>
              <span className="ml-1 text-black">
                {showCursor && "."}
              </span>
            </motion.h2>

            {/* SUB TITLE */}
            <motion.h3
              variants={fadeUp}
              className="mt-3 font-title font-semibold text-[18px] text-[#2B2B2B] max-w-[420px]"
            >
              Driven by Passion. Built on Expertise. Trusted Worldwide.
            </motion.h3>

            {/* ===== MOBILE VIDEO ===== */}
            <motion.div
              variants={fadeZoom}
              className="mt-8 lg:hidden -mx-4 sm:-mx-6"
            >
              <div className="w-full h-[480px] rounded-lg overflow-hidden shadow-lg">
                <video
                  src={storyVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              className="mt-8 space-y-5 text-[#4A4A4A] text-[15px] leading-[28px] max-w-xl"
              variants={container}
            >
              <motion.p variants={fadeUp}>
                What began in 2012 as a focused vision has grown into a global
                journey in diesel technology. Backed by more than{" "}
                <span className="font-semibold text-[#2B2B2B]">
                  35 years of hands-on industry experience
                </span>
                , Diesel World Pvt. Ltd. was founded on the belief that diesel
                systems deserve expert care and uncompromising quality.
              </motion.p>

              <motion.p variants={fadeUp}>
                Our story is about people, not just machines. Skilled
                technicians, trusted partners, and loyal customers have built
                Diesel World’s reputation for reliability and excellence. Every
                injector tested reflects our commitment to performance,
                transparency, and long-term value.
              </motion.p>
            </motion.div>

            {/* ===== CTA BUTTON (ANIMATED) ===== */}
            <motion.div variants={fadeUp} className="mt-8">
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 text-[#C81318] font-semibold text-[16px]"
              >
                {/* TEXT */}
                <motion.span
                  variants={{ hover: { y: -2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  Read More
                </motion.span>

                {/* ARROW */}
                <motion.span
                  variants={{ hover: { x: 6 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT VIDEO (DESKTOP) ================= */}
          <motion.div
            variants={fadeZoom}
            className="order-1 lg:order-2 hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-[560px] h-[480px] rounded-lg overflow-hidden shadow-lg">
              <video
                src={storyVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurStoriesSection;
