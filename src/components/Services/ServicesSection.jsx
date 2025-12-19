const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#C81318]">
            Our Services
          </h2>
          <p className="mt-3 text-[16px] md:text-[18px] font-semibold text-[#343333] tracking-wide max-w-3xl mx-auto">
            Precision-engineered solutions for every critical diesel component.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= LEFT LARGE CARD ================= */}
          <div className="bg-white border border-[#E6E6E6] rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-[#C81318] font-semibold text-[20px] md:text-[22px] leading-[30px] md:leading-[32px] mb-4">
              Diesel Injection Repair & Reconditioning Services for Engine Performance
            </h3>

            <p className="text-[#343333] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] mb-6">
              We specialize in diagnosing, repairing, and reconditioning diesel fuel
              injection systems, including pumps and injectors. Using advanced
              test benches and manufacturer-approved procedures, our skilled
              technicians ensure optimal performance, efficiency, and long service
              life for every component.
            </p>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/src/assets/images/service-workshop.jpg"
                alt="Diesel Workshop"
                className="
                  w-full
                  max-w-[516px]
                  h-auto
                  lg:w-[516px] lg:h-[320px]
                  object-cover
                  rounded-md
                "
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-8">

            {/* ===== CARD 1 ===== */}
            <div className="bg-white border border-[#E6E6E6] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-[#C81318] font-semibold text-[17px] md:text-[18px] leading-[26px] mb-3">
                  Testing, Diagnostics and Calibration
                </h3>

                <p className="text-[#343333] text-[14px] md:text-[15px] leading-[24px] md:leading-[26px]">
                  Our state-of-the-art diagnostic equipment and test benches allow
                  us to perform accurate testing, calibration, and fault analysis
                  of diesel components. From mechanical systems to modern
                  high-pressure common rail technology, we ensure precise results
                  and reliable solutions.
                </p>
              </div>

              {/* IMAGE */}
              <img
                src="/src/assets/images/testing.jpg"
                alt="Testing"
                className="
                  w-full
                  max-w-[242px]
                  h-auto
                  md:w-[242px] md:h-[242px]
                  object-cover
                  rounded-md
                  mx-auto
                "
              />
            </div>

            {/* ===== CARD 2 ===== */}
            <div className="bg-white border border-[#E6E6E6] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-[#C81318] font-semibold text-[17px] md:text-[18px] leading-[26px] mb-3">
                  Genuine Spare Parts & Technical Support
                </h3>

                <p className="text-[#343333] text-[14px] md:text-[15px] leading-[24px] md:leading-[26px]">
                  As authorized dealers and stockists of leading diesel brands,
                  we supply genuine and high-quality aftermarket spare parts.
                  Along with product supply, we offer expert technical guidance
                  and support to workshops and customers.
                </p>
              </div>

              {/* IMAGE */}
              <img
                src="/src/assets/images/spare-parts.jpg"
                alt="Spare Parts"
                className="
                  w-full
                  max-w-[242px]
                  h-auto
                  md:w-[242px] md:h-[242px]
                  object-cover
                  rounded-md
                  mx-auto
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
