import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1152px] px-4">

        {/* ===== TITLE ===== */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Our <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-gray-700 text-lg mt-3 max-w-4xl">
            Precision-engineered solutions for every critical diesel component.
          </p>
        </div>

        {/* ================= DESKTOP VIEW (NO CHANGE) ================= */}
        <div
          className="
            hidden lg:grid
            grid-cols-[260px_547px_260px]
            gap-y-6 gap-x-3
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

        {/* ================= TABLET VIEW (IMAGE-LIKE TABLE) ================= */}
        <div className="relative hidden sm:block lg:hidden">

          {/* TOP ROW – TURBOCHARGERS */}
          <div className="flex justify-between px-6">
            <CategoryCard
              title="Turbochargers"
              image="/assets/images/turbo.png"
            />
            <CategoryCard
              title="Turbochargers"
              image="/assets/images/turbo.png"
            />
          </div>

          {/* CENTER – BIG TEST EQUIPMENT (BIGGER + OVERLAP) */}
          <div className="relative z-20 flex justify-center -my-28">
            <div className="scale-[1.18] sm:scale-[1.22] drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)]">
              <CategoryCard
                title="Test Equipment"
                image="/assets/images/test-equipment.png"
                large
              />
            </div>
          </div>

          {/* BOTTOM ROW – FUEL INJECTORS */}
          <div className="flex justify-between px-6 mt-[-40px]">
            <CategoryCard
              title="Fuel Injectors"
              image="/assets/images/injector.png"
            />
            <CategoryCard
              title="Fuel Injectors"
              image="/assets/images/injector.png"
            />
          </div>
        </div>

        {/* ================= MOBILE VIEW (STACKED) ================= */}
        <div className="sm:hidden flex flex-col gap-6 items-center">
          <CategoryCard
            title="Turbochargers"
            image="/assets/images/turbo.png"
          />
          <CategoryCard
            title="Turbochargers"
            image="/assets/images/turbo.png"
          />
          <CategoryCard
            title="Test Equipment"
            image="/assets/images/test-equipment.png"
            large
          />
          <CategoryCard
            title="Fuel Injectors"
            image="/assets/images/injector.png"
          />
          <CategoryCard
            title="Fuel Injectors"
            image="/assets/images/injector.png"
          />
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;
