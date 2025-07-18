import Link from "next/link";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

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
            <p className="text-white text-[14px] font-pop">© 2025 Arqai. All rights reserved.</p>
            <Link href="/privacy-policy">
              <p className="text-white text-[14px] font-pop cursor-pointer hover:text-[#95774B] transition">Privacy & Cookies</p>
            </Link>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-5 text-white text-xl">
            <a href="https://www.instagram.com/arqai_studio/" target="blank" aria-label="Instagram">
              <FaInstagram className="hover:text-[#95774B] transition" />
            </a>
            <a href="https://www.pinterest.com/arqaistudio/?invite_code=b448627788c0463980775009f0612167&sender=1152077285835464346" target="blank" aria-label="Pinterest">
              <FaPinterest className="hover:text-[#95774B] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
