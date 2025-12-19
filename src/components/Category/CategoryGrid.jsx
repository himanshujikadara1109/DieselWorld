import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1152px] px-4">
        {/* ===== TITLE ===== */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#C81318] font-heading font-bold text-[28px] lg:text-[42px]">
            Our Categories
          </h2>

          <p className="mt-3 text-[16px] md:text-[18px] font-semibold text-[#343333] tracking-wide max-w-4xl mx-auto">
            Precision-engineered solutions for every critical diesel component.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            lg:grid-cols-[260px_547px_260px]
            gap-y-6
            gap-x-3
            justify-items-center
          "
        >
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <CategoryCard
              title="Turbochargers"
              image="/assets/images/turbo.png"
            />
            <CategoryCard
              title="Fuel Injectors"
              image="/assets/images/injector.png"
            />
          </div>

          {/* CENTER */}
          <CategoryCard
            title="Test Equipment"
            image="/assets/images/test-equipment.png"
            large
          />

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <CategoryCard
              title="Turbochargers"
              image="/assets/images/turbo.png"
            />
            <CategoryCard
              title="Fuel Injectors"
              image="/assets/images/injector.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
