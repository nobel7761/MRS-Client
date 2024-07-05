import Link from "next/link";
import MainNavbar from "./MainNavbar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { space_grotest } from "@/fonts";

const Navbar = () => {
  return (
    <div className="mt-8 z-10">
      <div
        className="w-[65%] mx-auto  py-2 pl-10 rounded-tl-full rounded-tr-full overflow-hidden"
        style={{
          background: "linear-gradient( 90deg, #2663EB 0%, #ff50b8 100%)",
        }}
      >
        <div className="text-white text-sm font-bold flex justify-between items-center">
          <div className="w-1/2 flex items-center gap-x-2">
            <FaPhoneAlt />
            <div className=" flex gap-x-2 items-center">
              <p className={`${space_grotest.className}`}>Call Now</p>
              <p>01701228430</p>
            </div>
          </div>

          <div className="w-1/5 flex gap-x-10 items-center">
            <Link
              href="https://wa.me/+8801701228430"
              target="_blank"
              className="w-fit"
            >
              <IoLogoWhatsapp className="hover:text-whatsapp text-lg" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100078968657675"
              target="_blank"
              className="w-fit"
            >
              <BsFacebook className="hover:text-facebook text-lg" />
            </Link>
            <Link
              href="mailto:manpowersync@gmail.com"
              target="_blank"
              className="w-fit"
            >
              <MdEmail className="hover:text-black text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <MainNavbar />
    </div>
  );
};

export default Navbar;
