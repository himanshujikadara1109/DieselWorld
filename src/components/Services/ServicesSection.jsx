const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ===== TITLE ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="mt-3 text-[16px] md:text-[18px] font-semibold text-[#343333] tracking-wide max-w-3xl mx-auto">
            Precision-engineered solutions for every critical diesel component.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ================= LEFT LARGE CARD ================= */}
          <div
            className="
            bg-white border border-[#E6E6E6]
            rounded-lg shadow-lg
            p-6 md:p-8
            flex flex-col
          "
          >
            <h3 className="text-[#C81318] font-semibold text-[20px] md:text-[22px] mb-4">
              Diesel Injection Repair & Reconditioning Services for Engine
              Performance
            </h3>

            <p className="text-[#343333] text-[15px] md:text-[16px] mb-6">
              We specialize in diagnosing, repairing, and reconditioning diesel
              fuel injection systems, including pumps and injectors. Using
              advanced test benches and manufacturer-approved procedures, our
              skilled technicians ensure optimal performance, efficiency, and
              long service life for every component. benches and
              manufacturer-approved procedures, our skilled technicians ensure
              optimal performance, efficiency, and long service life for every
              component.
            </p>

            <div className="w-full h-[220px] md:h-[280px] rounded-md overflow-hidden">
              <img
                src="/assets/images/service-workshop.jpg"
                alt="Diesel Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-8">
            {/* ===== CARD 1 (TABLET IMAGE RIGHT) ===== */}
            <div
              className="
              bg-white border border-[#E6E6E6]
              rounded-lg shadow-lg
              p-6
              flex flex-col md:flex-row
              gap-6
            "
            >
              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-[#C81318] font-semibold text-[17px] md:text-[18px] mb-3">
                  Testing, Diagnostics and Calibration
                </h3>

                <p className="text-[#343333] text-[14px] md:text-[15px] leading-[26px]">
                  Our state-of-the-art diagnostic equipment and test benches
                  allow us to perform accurate testing, calibration, and fault
                  analysis of diesel components. From mechanical  technology, we ensure precise
                  results and reliable solutions.
                </p>
              </div>

              {/* IMAGE – EXACT TABLET LOOK */}
              <div
                className="
                  w-full
                  md:w-[260px]
                  lg:w-[242px]

                  h-[200px]
                  md:h-[220px]
                  lg:h-[242px]

                  rounded-md
                  overflow-hidden
                  flex-shrink-0
                  mt-4 md:mt-0
                "
              >
                <img
                  src="/assets/images/testing.jpg"
                  alt="Testing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ===== CARD 2 ===== */}
            <div
              className="
              bg-white border border-[#E6E6E6]
              rounded-lg shadow-lg
              p-6
              flex flex-col md:flex-row
              gap-6
            "
            >
              <div className="flex-1">
                <h3 className="text-[#C81318] font-semibold text-[17px] md:text-[18px] mb-3">
                  Genuine Spare Parts & Technical Support
                </h3>

                <p className="text-[#343333] text-[14px] md:text-[15px] leading-[26px]">
                  As authorized dealers and stockists of leading diesel brands,
                  we supply genuine and high-quality aftermarket spare parts.
                  Along with product supply, we offer expert technical guidance
                  and support to workshops and customers, 
                </p>
              </div>

              <div
                className="
                  w-full
                  md:w-[260px]
                  lg:w-[242px]

                  h-[200px]
                  md:h-[220px]
                  lg:h-[242px]

                  rounded-md
                  overflow-hidden
                  flex-shrink-0
                  mt-4 md:mt-0
                "
              >
                <img
                  src="/assets/images/spare-parts.jpg"
                  alt="Spare Parts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
