import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

/*  Animated underline link  */
const linkClass = (isScrolled) =>
  `relative font-medium transition-colors duration-300
  ${
    isScrolled
      ? "text-gray-700 hover:text-red-600"
      : "text-white hover:text-red-400"
  }
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-600
  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`;

const Navbar = ({ showSearchInNavbar }) => {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*  SCROLL  */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent"}`}
    >
      {/* ============== NAVBAR  ========= */}
      <div className="mx-auto max-w-[1440px] h-[80px] px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/logo.png"
            alt="Diesel World"
            className="
    /*  Mobile */
    w-[72px]
    h-[42px]
    mt-[6px]
    ml-[16px]

    /*  Tablet */
    sm:w-[86px]
    sm:h-[50px]
    sm:mt-[8px]
    sm:ml-[40px]

    /*  Desktop  */
    lg:w-[101px]
    lg:h-[60px]
    lg:mt-[10px]
    lg:ml-[144px]

    object-contain
  "
          />

          {/* width: 101;
height: 60;
top: 10px;
left: 144px;
angle: 0 deg;
opacity: 1; */}

          {/* <span
            className={`font-bold text-lg transition-colors
            ${isScrolled ? "text-blue-900" : "text-white"}`}
          >
            Diesel World
          </span> */}
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className={linkClass(isScrolled)}>Home</a>

          {/* PRODUCTS */}
          <div
            className="relative"
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            <button
              className={`${linkClass(isScrolled)} flex items-center gap-1`}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  openProducts ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-0  w-56 bg-white rounded-xl shadow-xl
              transition-all duration-300
              ${
                openProducts
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              {[
                "Turbochargers",
                "Fuel Injectors",
                "Common Rail",
                "Test Benches",
              ].map((item) => (
                <a
                  key={item}
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a className={linkClass(isScrolled)}>Test Equipments</a>
          <a className={linkClass(isScrolled)}>About Us</a>
          <a className={linkClass(isScrolled)}>Contact Us</a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Search
              size={18}
              className={`${
                isScrolled ? "text-gray-700" : "text-white"
              } cursor-pointer hover:text-red-600`}
            />
            <Heart
              size={18}
              className={`${
                isScrolled ? "text-gray-700" : "text-white"
              } cursor-pointer hover:text-red-600`}
            />

            <button className="flex items-center gap-1 text-sm text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg">
              <User size={16} />
              Login
            </button>

            <button className="relative flex items-center gap-1 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700">
              <ShoppingCart size={16} />
              Cart
              <span className="absolute -top-2 -right-2 bg-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg
            ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ===== SEARCH BAR  ===== */}
      <div
        className={`transition-all duration-500 overflow-hidden
        ${showSearchInNavbar ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 mt-2">
          <div className="bg-white p-3 rounded-xl flex gap-3 shadow">
            <input
              placeholder="Search your product"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100"
            />
            <button className="bg-red-600 text-white px-6 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ==============MOBILE MENU ======= */}
      <div
        className={`md:hidden transition-all duration-500
        ${
          mobileMenu
            ? "max-h-[700px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-4 mx-4 mt-3 space-y-3">
          <a className="block py-2 font-medium">Home</a>

          <button
            onClick={() => setMobileProducts(!mobileProducts)}
            className="w-full flex justify-between items-center py-2 font-medium"
          >
            Products
            <ChevronDown
              size={18}
              className={`transition-transform ${
                mobileProducts ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileProducts && (
            <div className="pl-4 space-y-1">
              {["Turbochargers", "Fuel Injectors", "Common Rail"].map(
                (item) => (
                  <a key={item} className="block text-sm text-gray-600">
                    {item}
                  </a>
                )
              )}
            </div>
          )}

          <a className="block py-2 font-medium">About Us</a>
          <a className="block py-2 font-medium">Contact Us</a>

          <div className="pt-3 space-y-3">
            <button className="w-full border border-red-600 text-red-600 py-2 rounded-xl">
              Login
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
