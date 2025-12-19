import { Search } from "lucide-react";

const SearchOverlay = ({ hideOverlay }) => {
  return (
    <section
      className={`relative z-20 transition-all duration-500
        ${
          hideOverlay
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
    >
      <div className="mx-auto w-full max-w-[1152px] px-4 sm:px-6 mt-6 sm:mt-10">
        <div className="bg-[#FDF6F7] border border-red-100 rounded-lg shadow-md">
          <form
            className="
              flex flex-col
              gap-3
              p-4
              sm:p-5
              md:flex-row
              md:items-center
              md:gap-4
            "
          >
            <input
              type="search"
              placeholder="Search products or part number"
              className="
                w-full
                h-[44px]
                bg-white
                border border-gray-200
                px-4
                rounded-md
                text-sm
                focus:outline-none
                focus:ring-2 focus:ring-red-200
              "
            />

            <select
              className="
                w-full
                h-[44px]
                bg-white
                border border-gray-200
                px-4
                rounded-md
                text-sm
                text-gray-600
                focus:outline-none
                focus:ring-2 focus:ring-red-200
                md:w-[180px]
              "
            >
              <option>Select Category</option>
              <option>Turbochargers</option>
              <option>Fuel Injectors</option>
              <option>Common Rail</option>
            </select>

            <button
              className="
                w-full
                h-[44px]
                flex
                items-center
                justify-center
                gap-2
                bg-red-600
                text-white
                text-sm
                font-semibold
                rounded-md
                hover:bg-red-700
                transition
                md:w-[116px]
              "
            >
              <Search size={16} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchOverlay;
