import storyImg from "../assets/images/story.png";

const OurStoriesSection = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <h4 className="w-[220px] h-[48px] font-heading font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[48px] tracking-[0.5px] text-[#C81318]">
              Our Stories
            </h4>

            <h2 className="w-full max-w-[402px] font-title font-semibold text-[19px] text-[#2B2B2B]">
              Driven by Passion. Built on Expertise. Trusted Worldwide.
            </h2>

            <div className="mt-6 space-y-5 text-[#4A4A4A] text-[15px] sm:text-[16px] leading-[28px] max-w-xl">
              <p>
                What began in 2012 as a focused vision has grown into a global
                journey in diesel technology. Backed by more than{" "}
                <span className="font-semibold text-[#2B2B2B]">
                  35 years of hands-on industry experience
                </span>
                , Diesel World Pvt. Ltd. was founded on the belief that diesel
                systems deserve expert care and uncompromising quality.
              </p>

              <p>
                Our story is about people, not just machines. Skilled
                technicians, trusted partners, and loyal customers have built
                Diesel World’s reputation for reliability and excellence. Every
                injector tested reflects our commitment to performance,
                transparency, and long-term value.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 ml-100">
              <button className="inline-flex items-center gap-2 text-[#C81318] font-semibold text-[16px]">
                Read More
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-[20px] sm:mt-[20px] lg:mt-0">
            <div className="relative w-full max-w-[520px]">
              <img
                src={storyImg}
                alt="Diesel World Story"
                className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStoriesSection;
