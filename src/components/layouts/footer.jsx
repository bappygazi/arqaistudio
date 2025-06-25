import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-black w-full py-10 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Top border line */}
        <div className="w-full h-px bg-[#95774B] mb-8" />

        {/* Footer content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          {/* Left: Text links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="text-white text-[14px] font-pop">
              © 2025 Arqai. All rights reserved.
            </p>
            <p className="text-white text-[14px] font-pop cursor-pointer hover:text-[#95774B] transition">
              Privacy & Cookies
            </p>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-5 text-white text-xl">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-[#95774B] transition" />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterest className="hover:text-[#95774B] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
