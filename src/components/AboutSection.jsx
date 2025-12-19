import { useEffect, useState } from "react";
import ZoomImage3D from "./ZoomImage3D";

const AboutSection = () => {
  const text = "Welcome To";
  const [typed, setTyped] = useState("");

  /* ===== Type EFfect ===== */
  useEffect(() => {
    let i = 0;
    let string = '';
    const timer = setInterval(() => {
      if (i < text.length) {
        string += text[i];
        setTyped(string);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1152px]
          min-h-[466px]
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8 lg:gap-[20px]
          items-center
          px-4 lg:px-0
        "
      >
        {/* ================= IMAGE ================= */}
        <div className="flex justify-center">
          <div
            className="
              w-[260px] h-[260px]
              sm:w-[340px] sm:h-[340px]
              lg:w-[466px] lg:h-[466px]
            "
          >
            <ZoomImage3D />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            flex flex-col
            text-center lg:text-left
            lg:-ml-[24px]
            lg:-mt-[26px]
            mt-[-30px]
          "
        >
          {/* ===== Welcome To ===== */}
          <h4
            className="
              mx-auto lg:mx-0
              w-[135px]
              h-[32px]
              mt-4 lg:mt-5
              font-title
              font-semibold
              text-[18px] lg:text-[20px]
              leading-[32px]
              text-[#404040]
              
            "
          >
            {typed}
            <span className="ml-1 animate-pulse">|</span>
          </h4>

          {/* ===== Title ===== */}
          <h2
            className="
              mt-2
              font-heading
              font-semibold
              text-[28px] sm:text-[32px] lg:text-[40px]
              leading-tight lg:leading-[56px]
              text-[#C81318]
            "
          >
            Diesel World
          </h2>

          {/* Divider */}
          <div className="w-[56px] h-[4px] bg-[#C81318] my-4 rounded mx-auto lg:mx-0"></div>

          {/* ===== Description ===== */}
          <p
            className="
              max-w-full lg:max-w-[622px]
              font-body
              font-normal
              text-[15px] sm:text-[16px] lg:text-[18px]
              leading-[24px] sm:leading-[26px] lg:leading-[25px]
              text-[#404040]
              text-start
            "
          >
            <span className="text-[#262626]">
              Diesel World Pvt. Ltd.
            </span>{" "}
            is a globally trusted name in diesel engine spare parts and repair
            solutions. Backed by over{" "}
            <span className="text-[#C81318] font-semibold">
              35 years of industry expertise,
            </span>{" "}
            we specialize in delivering genuine aftermarket parts, advanced diagnostics, and precision repair services for all types of diesel systems. Our experienced technicians, equipped with state-of-the-art tools and facilities, deliver expert repairs, ensuring your diesel engines operate at peak performance. Whether you're in need of component testing, pump reconditioning, or comprehensive repair solutions, Diesel World is committed to providing reliable, cost-effective services that keep you moving forward.
          </p>

          {/* ===== Button ===== */}
          <button
            className="
              mt-6
              mx-auto lg:mx-0
              w-[121px]
              h-[28px]
              inline-flex
              items-center
              gap-2
              font-body
              font-semibold
              text-[16px] lg:text-[18px]
              leading-[28px]
              text-[#A90B10]
            "
          >
            Read More
            <span className="text-[18px] lg:text-[20px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
