const Footer = () => {
  return (
    <footer className="bg-[#262626]">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 py-6 text-white">
        {/* === MOBILE + TABLET VIEW === */}
        <div className="lg:hidden flex flex-col items-center py-8">

          {/* logo */}
          <img
            src="/assets/images/logo.png"
            alt="Diesel World"
            className="w-[170px] mb-8"
          />


          <div
            className="
              w-full
              max-w-[760px]
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-x-6
              gap-y-8
              text-[13px]
              text-gray-300
              justify-items-center
            "
          >
            {/* Product */}
            <div className="ml-[10px] text-center">
              <h4 className="font-semibold text-white mb-2">Product</h4>
              <ul className="space-y-1.5">
                <li>Turbochargers</li>
                <li>Fuel Injectors</li>
                <li>Urea Dosers</li>
                <li>ECU</li>
                <li>Test Equipment</li>
              </ul>
            </div>

            {/* Company */}
            <div className="ml-[10px] text-center">
              <h4 className="font-semibold text-white mb-2">Company</h4>
              <ul className="space-y-1.5">
                <li>About Us</li>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Our Brands</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="ml-[10px] text-center">
              <h4 className="font-semibold text-white mb-2">Resources</h4>
              <ul className="space-y-1.5">
                <li>Blog / Articles</li>
                <li>Technical Guides</li>
                <li>FAQs</li>
                <li>Case Studies</li>
                <li>Workshop Support</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="ml-[10px] text-center">
              <h4 className="font-semibold text-white mb-2">Legal</h4>
              <ul className="space-y-1.5">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Warranty Info</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="mt-10 text-center">
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex justify-center gap-5">
              <div className="flex gap-4 items-center">
                <img
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  className="w-6 h-6"
                  alt="Facebook"
                />

                <img
                  src="https://img.icons8.com/color/48/instagram-new.png"
                  className="w-6 h-6"
                  alt="Instagram"
                />

                <img
                  src="https://img.icons8.com/color/48/linkedin.png"
                  className="w-6 h-6"
                  alt="LinkedIn"
                />

                <img
                  src="https://img.icons8.com/color/48/youtube-play.png"
                  className="w-6 h-6"
                  alt="YouTube"
                />

                <img
                  src="https://img.icons8.com/color/48/twitter--v1.png"
                  className="w-6 h-6"
                  alt="Twitter"
                />
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="bg-[#FFF7F7] text-black px-5 py-4 w-full max-w-[320px] mt-10 text-center">
            <h4 className="text-[#C81318] font-bold text-[15px] mb-2">
              Our Location
            </h4>
            <p className="text-[12px] leading-[18px]">
              Head Office: Diesel World Pvt. Ltd.
            </p>
            <p className="text-[12px] leading-[18px]">
              Service Workshop: Plot No. 8
            </p>
            <p className="text-[12px] leading-[18px]">
              Contact: +91 81458 88817
            </p>
          </div>

          {/* PAYMENT */}
          <img
            src="/assets/images/payment.png"
            alt="Payments"
            className="h-[22px] mt-8"
          />

          {/* COPYRIGHT */}
          <p className="text-[11px] text-gray-400 mt-4 text-center">
            © 2025 Diesel World Pvt. Ltd. All rights reserved.
          </p>
        </div>

        {/* ================= DESKTOP VIEW (EXACT SAME AS BEFORE) ================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 gap-y-6 lg:block">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/assets/images/logo.png"
                  alt="Diesel World"
                  className="w-[190px] lg:w-[220px] object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-100px]">
                <h4 className="font-semibold mb-1">Product</h4>
                <ul className="space-y-[8px] text-[13px] text-gray-300">
                  <li>Turbochargers</li>
                  <li>Fuel Injectors</li>
                  <li>Urea Dosers</li>
                  <li>ECU</li>
                  <li>Test Equipment</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-100px]">
                <h4 className="font-semibold mb-1">Company</h4>
                <ul className="space-y-[8px] text-[13px] text-gray-300">
                  <li>About Us</li>
                  <li>Our Story</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                  <li>Our Brands</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-100px]">
                <h4 className="font-semibold mb-1">Resources</h4>
                <ul className="space-y-[8px] text-[13px] text-gray-300">
                  <li>Blog / Articles</li>
                  <li>Technical Guides</li>
                  <li>FAQs</li>
                  <li>Case Studies</li>
                  <li>Workshop Support</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-100px]">
                <h4 className="font-semibold mb-1">Legal</h4>
                <ul className="space-y-[8px] text-[13px] text-gray-300">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Warranty Info</li>
                  <li>Return Policy</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center mr-[-100px] lg:items-start lg:text-left lg:ml-[-100px]">
                <h4 className="font-semibold mb-1">Social</h4>
                <ul className="space-y-[8px] text-[13px] text-gray-300">
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                  <li>Twitter</li>
                </ul>
              </div>

              <div className="bg-[#FFF7F7] text-black px-5 py-3 w-full max-w-[250px]">
                <h4 className="text-[15px] font-bold text-[#C81318] mb-1">
                  Our Location
                </h4>
                <p className="text-[12px] leading-[18px]">
                  Head Office: Diesel World Pvt. Ltd.
                </p>
                <p className="text-[12px] leading-[18px]">
                  Service Workshop: Plot No. 8
                </p>
                <p className="text-[12px] leading-[18px]">
                  Contact: +91 81458 88817
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-[12px] text-gray-400">
              © 2025 Diesel World Pvt. Ltd. All rights reserved.
            </p>
            <img
              src="/assets/images/payment.png"
              alt="Payments"
              className="h-[21.5px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
