const Footer = () => {
  return (
    <footer className="bg-[#262626]">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 py-6 text-white">

        <div className="grid grid-cols-1 gap-y-6 lg:block">

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between">

            <div className="flex justify-center lg:justify-start">
              <img
                src="/src/assets/images/logo.png"
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

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-100px] lg:mr-[-80px]">
              <h4 className="font-semibold mb-1">Social</h4>
              <ul className="space-y-[8px] text-[13px] text-gray-300">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Twitter</li>
              </ul>
            </div>

            <div className="bg-[#FFF7F7] text-black px-5 py-3 w-full max-w-[250px] mx-auto lg:mx-0">
              <h4 className="text-[15px] font-bold text-[#C81318] mb-1">
                Our Location
              </h4>
              <p className="text-[12px] leading-[18px] mb-[2px]">
                Head Office: [Address, City, State, ZIP]
              </p>
              <p className="text-[12px] leading-[18px] mb-[2px]">
                Service Workshop: [Address, City, State, ZIP]
              </p>
              <p className="text-[12px] leading-[18px]">
                Contact: [Phone]
              </p>
            </div>

          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-gray-400 text-center">
            © 2025 Diesel World Pvt. Ltd. All rights reserved.
          </p>
          <img
            src="/src/assets/images/payment.png"
            alt="Payments"
            className="h-[19px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;